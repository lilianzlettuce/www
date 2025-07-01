"use client";

import { useMousePosition } from "@/hooks/useMousePosition";
import { useCanvas } from "@/hooks/useCanvas";
import { useAnimationFrame } from "@/hooks/useAnimationFrame";
import { useRef, useCallback, useMemo } from "react";

type RadiusPoint = {
  originalRadius: number;
  radius: number;
  lastRadius: number;
  vr: number; // velocity for radius
  x: number; // fixed position
  y: number; // fixed position
};

interface ShrinkCirclesProps {
  numRows?: number;
  numCols?: number;
  defaultRadius?: number;
  circleColor?: string;
  attractionDistance?: number;
  shrinkFactor?: number;
  debounceTime?: number;
  autoAnimStep?: number;
  maxRadius?: number;
  minRadius?: number;
  easeInFactor?: number;
}

const ShrinkCircles = ({
  numRows = 20,
  numCols = 40,
  defaultRadius = 3,
  circleColor = "black",
  attractionDistance = 200,
  shrinkFactor = 1,
  debounceTime = 5500,
  autoAnimStep = 0.02,
  maxRadius = 50,
  minRadius = 0.5,
  easeInFactor = 0.85,
}: ShrinkCirclesProps) => {
  const mousePosition = useMousePosition();
  const { canvasRef, ctx, width, height, top, left } = useCanvas();
  
  // Animation state refs
  const lastMouseMoveTime = useRef(Date.now());
  const mouseActive = useRef(true);
  const autoAnimPhase = useRef(0);
  const animationRadius = useRef(1);
  const isDragging = useRef(false);

  // Create grid of radius points
  const radiusPoints = useMemo(() => {
    const points: RadiusPoint[] = [];
    
    for (let i = 0; i < numRows; i++) {
      const y = i * height / numRows + 10;
      
      for (let j = 0; j < numCols; j++) {
        const x = j * width / numCols + 10;
        
        points.push({
          originalRadius: defaultRadius,
          radius: defaultRadius,
          lastRadius: defaultRadius,
          vr: 0,
          x: x,
          y: y,
        });
      }
    }
    
    return points;
  }, [numRows, numCols, width, height, defaultRadius]);

  // Update radius values based on mouse position and animation state
  const updateRadiusPoints = useCallback((mouseX: number, mouseY: number) => {
    const now = Date.now();
    mouseActive.current = (now - lastMouseMoveTime.current) < debounceTime;

    for (const point of radiusPoints) {
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
        const targetRadius = defaultRadius * (1 - force * shrinkFactor); // Scale factor for shrinking effect
        
        // Apply physics to radius with ease-in
        const radiusDiff = targetRadius - point.radius;
        const radiusForce = Math.min(0.1, Math.abs(radiusDiff) / 100);

        if (radiusDiff > 0) {
          point.vr = (point.vr + radiusForce) * easeInFactor;
        } else {
          point.vr = (point.vr - radiusForce) * easeInFactor;
        }
        
        // Update radius with velocity
        point.radius += point.vr;
        
        // Clamp radius to bounds
        point.radius = Math.max(minRadius, Math.min(maxRadius, point.radius));
        
        point.lastRadius = point.radius;
      } else {
        // Auto-animate radius in a wave pattern
        const waveOffset = Math.sin(autoAnimPhase.current + point.x * 0.01 + point.y * 0.01);
        point.radius = point.lastRadius + waveOffset * animationRadius.current;
        point.radius = Math.max(minRadius, Math.min(maxRadius, point.radius));
      }
    }

    // Update auto-anim phase for the next frame
    if (!mouseActive.current && !isDragging.current) {
      autoAnimPhase.current += autoAnimStep;
      animationRadius.current = Math.min(animationRadius.current * 1.01, 5);
    } else {
      // Reset
      autoAnimPhase.current = 0;
      animationRadius.current = 1;
    }
  }, [radiusPoints, debounceTime, attractionDistance, defaultRadius, minRadius, maxRadius, autoAnimStep, easeInFactor]);

  // Draw circles on canvas
  const drawCircles = useCallback(() => {
    if (!ctx) return;
    
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = circleColor;

    for (const point of radiusPoints) {
      ctx.beginPath();
      ctx.arc(point.x, point.y, point.radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
    }
  }, [ctx, width, height, circleColor, radiusPoints]);

  // Handle mouse events
  const handleMouseMove = useCallback(() => {
    const mouseX = mousePosition.x - left;
    const mouseY = mousePosition.y - top + (typeof window !== 'undefined' ? window.scrollY : 0);
    
    lastMouseMoveTime.current = Date.now();
    updateRadiusPoints(mouseX, mouseY);
  }, [mousePosition, left, top, updateRadiusPoints]);

  const handleMouseLeave = useCallback(() => {
    lastMouseMoveTime.current = Date.now();
    updateRadiusPoints(-100, -100);
  }, [updateRadiusPoints]);

  // Handle touch events for mobile
  const handleTouchStart = useCallback((event: React.TouchEvent<HTMLCanvasElement>) => {
    lastMouseMoveTime.current = Date.now();
    isDragging.current = true;
    
    const touch = event.touches[0];
    if (!touch || !canvasRef.current) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const touchX = touch.clientX - rect.left;
    const touchY = touch.clientY - rect.top;
    
    updateRadiusPoints(touchX, touchY);
  }, [updateRadiusPoints]);

  const handleTouchMove = useCallback((event: React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDragging.current) return;
    lastMouseMoveTime.current = Date.now();
    
    event.preventDefault();
    const touch = event.touches[0];
    if (!touch || !canvasRef.current) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const touchX = touch.clientX - rect.left;
    const touchY = touch.clientY - rect.top;
    
    updateRadiusPoints(touchX, touchY);
  }, [updateRadiusPoints]);

  const handleTouchEnd = useCallback(() => {
    isDragging.current = false;
    lastMouseMoveTime.current = Date.now();
    updateRadiusPoints(-100, -100);
  }, [updateRadiusPoints]);

  // Animation frame callback
  const animate = useCallback(() => {
    if (!ctx) return;
    
    // Calculate relative mouse position
    const relMousePos = {
      x: mousePosition.x - left,
      y: mousePosition.y - top + (typeof window !== 'undefined' ? window.scrollY : 0)
    };
    
    updateRadiusPoints(relMousePos.x, relMousePos.y);
    drawCircles();
  }, [ctx, mousePosition, left, top, updateRadiusPoints, drawCircles]);

  useAnimationFrame(animate);

  return (
    <canvas
      ref={canvasRef}
      className="w-screen h-screen"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    />
  );
};

export default ShrinkCircles; 