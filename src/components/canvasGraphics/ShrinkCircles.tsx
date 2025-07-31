"use client";

import { useMousePosition } from "@/hooks/useMousePosition";
import { useCanvas } from "@/hooks/useCanvas";
import { useAnimationFrame } from "@/hooks/useAnimationFrame";
import { useRef, useEffect } from "react";
import { useImagePixels } from "@/hooks/useImagePixels";
import { getBrightness } from "@/lib/colorProcessing";
import { mapTo } from "@/lib/utils";

type RadiusPoint = {
  originalRadius: number;
  radius: number;
  lastRadius: number;
  vr: number; // velocity for radius
  x: number; // fixed position
  y: number; // fixed position
};

interface ShrinkCirclesProps {
  id?: string;
  interactionMode?: "grow" | "shrink" | "none";
  transparent?: boolean;
  showStats?: boolean;
  imageSrc?: string;
  scaleFactor?: number;
  gridGap?: number;
  defaultRadius?: number;
  dotMapMode?: "light" | "shadow";
  dotColor?: string;
  bgColor?: string;
  attractionDistance?: number;
  shrinkFactor?: number;
  debounceTime?: number;
  autoAnimStep?: number;
  animOffset?: number;
  maxRadius?: number;
  minRadius?: number;
  delayFactor?: number;
  delayCap?: number;
  onHoverChange?: (isHovering: boolean, x: number, y: number) => void;
}

const ShrinkCircles = ({
  id,
  interactionMode = "shrink",
  transparent = false,
  showStats = true,
  imageSrc, 
  scaleFactor = 1.2,
  gridGap = 3,
  defaultRadius = 3,
  dotMapMode = "shadow",
  dotColor = "black",
  bgColor = "white",
  attractionDistance = 200,
  shrinkFactor = 1,
  debounceTime = 5500,
  autoAnimStep = 0.02,
  animOffset = -0.5,
  maxRadius = 50,
  minRadius = 0.5,
  delayFactor = 100,
  delayCap = 0.1,
  onHoverChange,
}: ShrinkCirclesProps) => {
  const mousePosition = useMousePosition();

  // Set fill color based on dotMapMode and transparent prop
  let fillColor;
  if (dotMapMode === "shadow") {
    fillColor = transparent ? "white" : "";
  } else {
    fillColor = transparent ? "" : "white";
  }
  const { pixels, imageWidth, imageHeight, isImageLoaded } = useImagePixels(imageSrc || "", fillColor);

  // Calculate canvas dimensions
  let canvasDimensions;
  let imageDimensions;
  if (!imageSrc || !isImageLoaded || imageWidth === 0 || imageHeight === 0) {
    // Default canvas dimensions when no image is provided
    const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 800;
    const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 600;
    canvasDimensions = { 
      width: viewportWidth, 
      height: viewportHeight,
      imgScale: 1 
    };
    imageDimensions = {
      width: viewportWidth, 
      height: viewportHeight,
      imgScale: 1 
    };
  } else {
    // Calculate canvas dimensions based on image size
    const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 800;
    const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 600;
    
    // Calculate max dimensions that fit in viewport
    const maxWidth = viewportWidth * 0.9;
    const maxHeight = viewportHeight * 0.9;

    // Scale image within viewport
    const scaleX = maxWidth / imageWidth;
    const scaleY = maxHeight / imageHeight;
    const imgScale = Math.min(scaleX, scaleY, 1) * scaleFactor;
    imageDimensions = {
      width: Math.floor(imageWidth * imgScale),
      height: Math.floor(imageHeight * imgScale),
      imgScale,
    };
    canvasDimensions = { 
      width: Math.floor(imageWidth * imgScale),
      height: Math.floor(imageHeight * imgScale),
      imgScale,
    };
  }

  // Create display canvas to draw dots on
  const { canvasRef, ctx, width: canvasWidth, height: canvasHeight } = useCanvas(
    { width: canvasDimensions.width, height: canvasDimensions.height }
  );

  // Calculate number of rows, columns in display canvas and image
  const numRows = Math.floor(canvasHeight / gridGap);
  const numCols = Math.floor(canvasWidth / gridGap);
  const numRowsImage = Math.floor(imageDimensions.height / gridGap);
  const numColsImage = Math.floor(imageDimensions.width / gridGap);
  
  // Animation state refs
  const lastMouseMoveTime = useRef(Date.now());
  const mouseActive = useRef(true);
  const autoAnimPhase = useRef(0);
  const animationRadius = useRef(1);
  const animDirection = useRef(1);
  const isDragging = useRef(false);

  const radiusPoints = useRef<RadiusPoint[]>([]); // store point grid

  // Create grid of points (image or default)
  useEffect(() => {
    if (canvasWidth === 0 || canvasHeight === 0) return;
    if (imageSrc && !isImageLoaded) return;

    // Clear existing points
    radiusPoints.current = [];

    for (let i = 0; i < numRows; i++) {
      const y = i * canvasHeight / numRows; // current row

      for (let j = 0; j < numCols; j++) {
        const x = j * canvasWidth / numCols; // current column

        let initialRadius = defaultRadius;
        if (imageSrc && isImageLoaded && pixels.length > 0 && imageWidth && imageHeight) {
          if (j < numColsImage && i < numRowsImage) {
            // Get corresponding pixel in image
            const imageX = Math.floor((j / numColsImage) * imageWidth);
            const imageY = Math.floor((i / numRowsImage) * imageHeight);
            const pixelIndex = imageY * imageWidth + imageX;
            const pixel = pixels[pixelIndex];
            if (pixel) {
              // Map rgb brightness to point radius (ignore alpha)
              const brightness = getBrightness(pixel);
              if (dotMapMode === "light") {
                // Map larger radius to brighter pixels
                initialRadius = Math.pow(mapTo(brightness, 0, 255, minRadius, defaultRadius), 2.5);
              } else {
                // Map larger radius to darker pixels
                initialRadius = mapTo(brightness, 0, 255, maxRadius, minRadius);
              }
            }
          } else {
            initialRadius = mapTo(0, 0, 255, maxRadius, minRadius);
          }
        }
        radiusPoints.current.push({
          originalRadius: initialRadius,
          radius: initialRadius,
          lastRadius: initialRadius,
          vr: 0,
          x: x,
          y: y,
        });
      }
    }

    // Update canvas
    drawCircles();
  }, [canvasWidth, canvasHeight, gridGap, defaultRadius, imageSrc, isImageLoaded, pixels, imageWidth, imageHeight, minRadius, maxRadius, canvasDimensions.imgScale, transparent, dotColor, ctx]);

  // Update radius values based on mouse position and animation state
  const updateRadiusPoints = (mouseX: number, mouseY: number) => {
    const now = Date.now();
    mouseActive.current = (now - lastMouseMoveTime.current) < debounceTime || debounceTime <= 0;

    for (const point of radiusPoints.current) {
      if (mouseActive.current) {
        // Calculate distance from mouse to circle center
        const dx = point.x - mouseX;
        const dy = point.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Calculate force based on distance (inverse relationship)
        let force = 0;
        if (distance < attractionDistance) {
          // Direct relationship: closer = smaller radius
          force = (attractionDistance - distance) / attractionDistance;
          // Apply power curve for more dramatic effect
          //force = Math.pow(force, 1.4);
        }

        // Calculate target radius based on force, shrinkFactor, and growth boolean
        let targetRadius;
        if (interactionMode === "grow") {
          targetRadius = point.originalRadius * Math.pow(1 + Math.pow(force, 10) * shrinkFactor, 0.5);
        } else {
          targetRadius = point.originalRadius * (1 - force * shrinkFactor);
        }
        
        // Apply physics to radius with ease-in
        const radiusDiff = targetRadius - point.radius;
        const radiusForce = Math.min(delayCap, Math.abs(radiusDiff) / delayFactor);

        if (radiusDiff > 0) {
          point.vr = (point.vr + radiusForce) * 0.85;
        } else {
          point.vr = (point.vr - radiusForce) * 0.85;
        }
        
        // Update radius with velocity
        point.radius += point.vr;
        
        // Clamp radius to bounds
        point.radius = Math.max(minRadius, Math.min(maxRadius, point.radius));
        
        point.lastRadius = point.radius;
      } else if (debounceTime > 0 && (canvasWidth != 0 && canvasHeight != 0)) {
        // Auto-animate radius in a wave pattern
        /*const waveOffset = Math.sin(autoAnimPhase.current + point.x * 0.01 + point.y * 0.01);
        point.radius = point.lastRadius + waveOffset * animationRadius.current;
        point.radius = Math.max(minRadius, Math.min(maxRadius, point.radius));*/
        
        // Auto-animate radius in a pulsating pattern from center
        const centerX = canvasWidth / 2;
        const centerY = canvasHeight / 2;
        
        // Calculate distance from center
        const dx = point.x - centerX;
        const dy = point.y - centerY;
        const distanceFromCenter = Math.sqrt(dx * dx + dy * dy);
        
        // Create a pulsating wave that radiates from center
        // Points closer to center pulsate first
        const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
        const normalizedDistance = distanceFromCenter / maxDistance;
        
        // Create alternating ripple direction based on time
        //const rippleDirection = Math.sin(autoAnimPhase.current * 0.5) > 0 ? 1 : -1;
        const phaseOffset = animOffset + normalizedDistance * Math.PI * 1;
        
        const pulsateOffset = Math.sin(autoAnimPhase.current - phaseOffset) * animationRadius.current;
        
        // Apply pulsating effect to radius
        point.radius = point.originalRadius + pulsateOffset * 0.25;
        point.radius = Math.max(minRadius, Math.min(maxRadius, point.radius));
      }
    }

    // Update auto-anim phase for the next frame
    if (!mouseActive.current && !isDragging.current) {
      if (autoAnimPhase.current > 2 || autoAnimPhase.current < 0) {
        animDirection.current *= -1;
      }
      autoAnimPhase.current += animDirection.current * autoAnimStep;
      animationRadius.current = Math.min(animationRadius.current * 1.01, 5);
    } else {
      // Reset
      autoAnimPhase.current = 0;
      animationRadius.current = 1;
    }
  };

  // Draw circles on canvas
  function drawCircles() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = dotColor;
    
    for (const point of radiusPoints.current) {
      ctx.beginPath();
      ctx.arc(point.x, point.y, point.radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
    }
  }

  // Check if pixel at position has non-transparent data
  const isPixelNonTransparent = (x: number, y: number): boolean => {
    if (!ctx || x < 0 || y < 0 || x >= canvasWidth || y >= canvasHeight) return false;
    
    try {
      // Get corresponding pixel in image
      const imageX = Math.floor((x / canvasWidth) * imageWidth);
      const imageY = Math.floor((y / canvasHeight) * imageHeight);
      const pixelIndex = imageY * imageWidth + imageX;
      const pixel = pixels[pixelIndex];
      return pixel.a > 0;

      /*const imageData = ctx.getImageData(x, y, 1, 1);
      const data = imageData.data;
      return data[3] > 0; // Check alpha channel*/
    } catch (e) {
      return false;
    }
  };

  // Handle mouse events
  function handleMouseMove() {
    if (!canvasRef.current || interactionMode === "none") return;

    // Calculate mouse position relative to canvas on viewport
    const rect = canvasRef.current.getBoundingClientRect();
    const mouseX = mousePosition.x - rect.left;
    const mouseY = mousePosition.y - rect.top;
    
    // Check if mouse is over non-transparent pixel
    const isOverPixel = isPixelNonTransparent(mouseX, mouseY);
    
    // Call hover callback if provided
    if (onHoverChange) {
      onHoverChange(isOverPixel, mousePosition.x, mousePosition.y);
    }
    
    lastMouseMoveTime.current = Date.now();
    updateRadiusPoints(mouseX, mouseY);
  }

  function handleMouseLeave() {
    if (!canvasRef.current || interactionMode === "none") return;

    // Call hover callback to indicate no hover
    if (onHoverChange) {
      onHoverChange(false, -1, -1);
    }

    lastMouseMoveTime.current = Date.now();
    updateRadiusPoints(-100, -100);
  }

  // Handle touch events for mobile
  function handleTouchStart(event: React.TouchEvent<HTMLCanvasElement>) {
    event.preventDefault();
    lastMouseMoveTime.current = Date.now();
    isDragging.current = true;
    
    const touch = event.touches[0];
    if (!touch || !canvasRef.current) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const touchX = touch.clientX - rect.left;
    const touchY = touch.clientY - rect.top;
    
    updateRadiusPoints(touchX, touchY);
  }

  function handleTouchMove(event: React.TouchEvent<HTMLCanvasElement>) {
    event.preventDefault();
    if (!isDragging.current) return;
    lastMouseMoveTime.current = Date.now();
    
    const touch = event.touches[0];
    if (!touch || !canvasRef.current) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const touchX = touch.clientX - rect.left;
    const touchY = touch.clientY - rect.top;
    
    updateRadiusPoints(touchX, touchY);
  }

  function handleTouchEnd() {
    isDragging.current = false;
    lastMouseMoveTime.current = Date.now();
    updateRadiusPoints(-100, -100);
  }

  // Animation frame callback
  const animate = () => {
    if (!canvasRef.current || !ctx || interactionMode === "none") return;
    
    // Calculate mouse position relative to canvas on viewport
    const rect = canvasRef.current.getBoundingClientRect();
    const mouseX = mousePosition.x - rect.left;
    const mouseY = mousePosition.y - rect.top;
    
    updateRadiusPoints(mouseX, mouseY);
    drawCircles();
  };

  useAnimationFrame(animate);

  return (
    <div>
      <div className={`bg-${bgColor}`}>
        <canvas
          id={id}
          ref={canvasRef}
          className="w-screen h-screen"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        />
      </div>
      {showStats && (
        <div className="">
          <p>{imageSrc}</p>
          <p>{imageWidth} x {imageHeight}</p>
          <p>{pixels.length}</p>
        </div>
      )}
    </div>
  );
};

export default ShrinkCircles; 