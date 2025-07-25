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
  interactive?: boolean;
  transparent?: boolean;
  imageSrc?: string;
  scaleFactor?: number;
  gridGap?: number;
  defaultRadius?: number;
  circleColor?: string;
  attractionDistance?: number;
  shrinkFactor?: number;
  debounceTime?: number;
  autoAnimStep?: number;
  animOffset?: number;
  maxRadius?: number;
  minRadius?: number;
  delayFactor?: number;
  delayCap?: number;
}

const ShrinkCircles = ({
  id,
  interactive = true,
  transparent = false,
  imageSrc, 
  scaleFactor = 1.2,
  gridGap = 3,
  defaultRadius = 3,
  circleColor = "black",
  attractionDistance = 200,
  shrinkFactor = 1,
  debounceTime = 5500,
  autoAnimStep = 0.02,
  animOffset = -0.5,
  maxRadius = 50,
  minRadius = 0.5,
  delayFactor = 100,
  delayCap = 0.1,
}: ShrinkCirclesProps) => {
  const mousePosition = useMousePosition();
  const { pixels, imageWidth, imageHeight, isImageLoaded } = useImagePixels(imageSrc || "", transparent ? "white" : "");

  // Calculate canvas dimensions
  let canvasDimensions;
  if (!imageSrc || !isImageLoaded || imageWidth === 0 || imageHeight === 0) {
    // Default canvas dimensions when no image is provided
    const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 800;
    const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 600;
    canvasDimensions = { 
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
    canvasDimensions = {
      width: Math.floor(imageWidth * imgScale),
      height: Math.floor(imageHeight * imgScale),
      imgScale,
    };
  }

  const { canvasRef, ctx, width, height } = useCanvas(
    { width: canvasDimensions.width, height: canvasDimensions.height }
  );
  
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
    if (width === 0 || height === 0) return;
    if (imageSrc && !isImageLoaded) return;

    // Clear existing points
    radiusPoints.current = [];

    // Calculate number of rows, columns
    const numRows = Math.floor(height / gridGap);
    const numCols = Math.floor(width / gridGap);

    for (let i = 0; i < numRows; i++) {
      const y = i * height / numRows; // current row

      for (let j = 0; j < numCols; j++) {
        const x = j * width / numCols; // current column

        let initialRadius = defaultRadius;
        if (imageSrc && isImageLoaded && pixels.length > 0 && imageWidth && imageHeight) {
          // Get corresponding pixel in image
          const imageX = Math.floor((j / numCols) * imageWidth);
          const imageY = Math.floor((i / numRows) * imageHeight);
          const pixelIndex = imageY * imageWidth + imageX;
          const pixel = pixels[pixelIndex];
          if (pixel) {
              // Map rgb brightness to point radius (ignore alpha)
              const brightness = getBrightness(pixel);
              initialRadius = mapTo(brightness, 0, 255, maxRadius, minRadius);
            
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
  }, [width, height, gridGap, defaultRadius, imageSrc, isImageLoaded, pixels, imageWidth, imageHeight, minRadius, maxRadius, canvasDimensions.imgScale, transparent, circleColor, ctx]);

  // Update radius values based on mouse position and animation state
  const updateRadiusPoints = (mouseX: number, mouseY: number) => {
    const now = Date.now();
    mouseActive.current = (now - lastMouseMoveTime.current) < debounceTime;

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

        // Calculate target radius based on force (inverse of GrowthCircles)
        // Closer mouse = smaller radius
        const targetRadius = point.originalRadius * (1 - force * shrinkFactor); // Scale factor for shrinking effect
        
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
      } else if (width != 0 && height != 0) {
        // Auto-animate radius in a wave pattern
        /*const waveOffset = Math.sin(autoAnimPhase.current + point.x * 0.01 + point.y * 0.01);
        point.radius = point.lastRadius + waveOffset * animationRadius.current;
        point.radius = Math.max(minRadius, Math.min(maxRadius, point.radius));*/
        
        // Auto-animate radius in a pulsating pattern from center
        const centerX = width / 2;
        const centerY = height / 2;
        
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
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = circleColor;
    
    for (const point of radiusPoints.current) {
      ctx.beginPath();
      ctx.arc(point.x, point.y, point.radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
    }
  }

  // Handle mouse events
  function handleMouseMove() {
    if (!canvasRef.current || !interactive) return;

    // Calculate mouse position relative to canvas on viewport
    const rect = canvasRef.current.getBoundingClientRect();
    const mouseX = mousePosition.x - rect.left;
    const mouseY = mousePosition.y - rect.top;
    
    lastMouseMoveTime.current = Date.now();
    updateRadiusPoints(mouseX, mouseY);
  }

  function handleMouseLeave() {
    if (!canvasRef.current || !interactive) return;

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
    if (!canvasRef.current || !ctx || !interactive) return;
    
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
      <div className="bg-white">
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
      <p>{imageSrc}</p>
      <p>{imageWidth} x {imageHeight}</p>
      <p>{pixels.length}</p>
    </div>
  );
};

export default ShrinkCircles; 