"use client";

import { useMousePosition } from "@/hooks/useMousePosition";
import { useCanvas } from "@/hooks/useCanvas";
import { useAnimationFrame } from "@/hooks/useAnimationFrame";
import { useRef, useEffect } from "react";
import { Color, colorToString, getRandomGlitchColor } from "@/lib/colorProcessing";

type Point = {
  originalX: number;
  originalY: number;
  x: number;
  y: number;
  lastX: number;
  lastY: number;
  vx: number;
  vy: number;
  color: Color;
};

interface GridCanvasProps {
  pointColor?: string;
  pointSize?: number;
  gridSize?: number;
  attractionDistance?: number;
  debounceTime?: number;
  autoAnimStep?: number;
  maxRadius?: number;
}

const GridCanvas = ({
  pointColor = "#000000",
  pointSize = 3,
  gridSize = 5,
  attractionDistance = 200,
  debounceTime = 5500,
  autoAnimStep = 0.02,
  maxRadius = 95,
}: GridCanvasProps) => {
  const mousePosition = useMousePosition();
  const { canvasRef, ctx, width, height } = useCanvas();
  
  // Animation state refs
  const lastMouseMoveTime = useRef(Date.now());
  const mouseActive = useRef(true);
  const autoAnimPhase = useRef(0);
  const radius = useRef(1);
  const isDragging = useRef(false);
  
  // Calculate scale based on screen size
  const breakpointMobile = 640;
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < breakpointMobile : false;
  const scale = isMobile ? 1.5 : 3;
  
  // Scaled values
  const scaledPointSize = pointSize * scale;
  const scaledGridSize = gridSize * scale;
  const scaledMaxRadius = maxRadius * scale;
  const scaledAttractionDistance = attractionDistance * scale;

  const points = useRef<Point[]>([]); // store point grid

  // Create grid of points
  useEffect(() => {
    console.log("Generating grid", width, height);
    
    if (width === 0 || height === 0) return;

    // Clear existing points
    points.current = [];

    // Calculate number of rows and columns
    const numRows = Math.floor(height / gridSize);
    const numCols = Math.floor(width / gridSize);

    // Populate grid
    for (let i = 0; i < numRows; i++) {
      const y = i * gridSize + gridSize / 2;
      
      for (let j = 0; j < numCols; j++) {
        const x = j * gridSize + gridSize / 2;
        
        points.current.push({
          originalX: x,
          originalY: y,
          x: x,
          y: y,
          lastX: x,
          lastY: y,
          vx: 0,
          vy: 0,
          color: getRandomGlitchColor()
        });
      }
    }
    
  }, [width, height, gridSize]);

  // Helper function to snap to grid
  const snapToGrid = (value: number, gridSize: number) => {
    return Math.floor(value / gridSize) * gridSize;
  };

  // Update points based on mouse position and animation state
  const updatePoints = (mouseX: number, mouseY: number) => {
    const now = Date.now();
    mouseActive.current = (now - lastMouseMoveTime.current) < debounceTime;

    for (const point of points.current) {
      if (mouseActive.current) {
        // Adjust movement based on mouse if active
        const dx = point.x - mouseX;
        const dy = point.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Calculate force based on distance
        let force = 0;
        if (distance < scaledAttractionDistance) {
          force = (scaledAttractionDistance - distance) / scaledAttractionDistance;
        }

        const angleToMouse = Math.atan2(dy, dx);
        point.vx = (point.vx + Math.cos(angleToMouse) * force * 2) * 0.9;
        point.vy = (point.vy + Math.sin(angleToMouse) * force * 2) * 0.9;

        // Calculate the return force to the target position
        const x = point.originalX;
        const y = point.originalY;
        const returnDx = x - point.x;
        const returnDy = y - point.y;
        const returnDistance = Math.sqrt(returnDx * returnDx + returnDy * returnDy);
        const returnForce = Math.min(0.1, returnDistance / 100);
        point.x += point.vx + returnDx * returnForce;
        point.y += point.vy + returnDy * returnForce;

        point.lastX = point.x;
        point.lastY = point.y;
      } else {
        // Auto-animate points in a circular pattern
        const index = points.current.indexOf(point);
        point.x = point.lastX + Math.cos(autoAnimPhase.current + index * 0.1) * radius.current;
        point.y = point.lastY + Math.sin(autoAnimPhase.current + index * 0.1) * radius.current;
      }
    }

    // Update auto-anim phase for the next frame
    if (!mouseActive.current && !isDragging.current) {
      autoAnimPhase.current += autoAnimStep;
      radius.current = (radius.current < scaledMaxRadius) ? radius.current * 1.01 : scaledMaxRadius;
    } else {
      // Reset
      autoAnimPhase.current = 0;
      radius.current = scale;
    }
  };

  // Draw points on canvas
  const drawPoints = () => {
    if (!ctx) return;
    
    ctx.clearRect(0, 0, width, height);

    for (const point of points.current) {
      ctx.fillStyle = colorToString(point.color);

      // Snap to grid during drawing
      const snappedX = snapToGrid(point.x, scaledGridSize);
      const snappedY = snapToGrid(point.y, scaledGridSize);
      ctx.fillRect(
        snappedX - scaledPointSize / 2,
        snappedY - scaledPointSize / 2,
        scaledPointSize,
        scaledPointSize
      );
    }
  };

  // Handle mouse events
  const handleMouseMove = () => {
    if (!canvasRef.current) return;

    // Calculate mouse position relative to canvas on viewport
    const rect = canvasRef.current.getBoundingClientRect();
    const mouseX = mousePosition.x - rect.left;
    const mouseY = mousePosition.y - rect.top;
    
    lastMouseMoveTime.current = Date.now();
    updatePoints(mouseX, mouseY);
  };

  const handleMouseLeave = () => {
    lastMouseMoveTime.current = Date.now();
    updatePoints(-100, -100);
  };

  // Handle touch events for mobile
  const handleTouchStart = (event: React.TouchEvent<HTMLCanvasElement>) => {
    lastMouseMoveTime.current = Date.now();
    isDragging.current = true;
    
    const touch = event.touches[0];
    if (!touch || !canvasRef.current) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const touchX = touch.clientX - rect.left;
    const touchY = touch.clientY - rect.top;
    
    updatePoints(touchX, touchY);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDragging.current) return;
    lastMouseMoveTime.current = Date.now();
    
    event.preventDefault();
    const touch = event.touches[0];
    if (!touch || !canvasRef.current) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const touchX = touch.clientX - rect.left;
    const touchY = touch.clientY - rect.top;
    
    updatePoints(touchX, touchY);
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    lastMouseMoveTime.current = Date.now();
    updatePoints(-100, -100);
  };

  // Animation frame callback
  const animate = () => {
    if (!canvasRef.current || !ctx) return;
    
    // Calculate mouse position relative to canvas on viewport
    const rect = canvasRef.current.getBoundingClientRect();
    const mouseX = mousePosition.x - rect.left;
    const mouseY = mousePosition.y - rect.top;
    
    updatePoints(mouseX, mouseY);
    drawPoints();
  };

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

export default GridCanvas; 