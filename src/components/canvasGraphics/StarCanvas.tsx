"use client";

import { useMousePosition } from "@/hooks/useMousePosition";
import { useCanvas } from "@/hooks/useCanvas";
import { useAnimationFrame } from "@/hooks/useAnimationFrame";
import { useRef, useCallback, useMemo } from "react";

type Point = {
  originalX: number;
  originalY: number;
  x: number;
  y: number;
  lastX: number;
  lastY: number;
  vx: number;
  vy: number;
};

interface StarCanvasProps {
  numLines?: number;
  lineLength?: number;
  starColor?: string;
  pointSize?: number;
  gridSize?: number;
  lineThickness?: number;
  debounceTime?: number;
  autoAnimStep?: number;
  maxRadius?: number;
}

const StarCanvas = ({
  numLines = 8,
  lineLength = 100,
  starColor = "#fffceb",
  pointSize = 3,
  gridSize = 5,
  lineThickness = 5.5,
  debounceTime = 5500,
  autoAnimStep = 0.02,
  maxRadius = 95,
}: StarCanvasProps) => {
  const mousePosition = useMousePosition();
  const { canvasRef, ctx, width, height, top, left } = useCanvas();
  
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
  const scaledLineLength = lineLength * scale;
  const scaledPointSize = pointSize * scale;
  const scaledGridSize = gridSize * scale;
  //const scaledRadius = radius.current * scale;
  const scaledMaxRadius = maxRadius * scale;
  
  const centerX = Math.round(width / 2);
  const centerY = Math.round(height / 2);
  const lineWidth = lineThickness / 1.67;
  const initialRotationAngle = Math.PI / 4;
  const attractionDistance = 40 * scale;

  // Create lines data structure
  const lines = useMemo(() => {
    const linesData: Point[][] = [];
    const angleStep = (Math.PI * 2) / numLines;

    for (let i = 0; i < numLines; i++) {
      const angle = i * angleStep + initialRotationAngle;

      for (let offset = -lineWidth / 2; offset <= lineWidth / 2; offset++) {
        const line: Point[] = [];

        for (let j = 0; j < scaledLineLength; j += lineThickness) {
          const x =
            centerX + Math.cos(angle) * j - Math.sin(angle) * offset * scaledGridSize;
          const y =
            centerY + Math.sin(angle) * j + Math.cos(angle) * offset * scaledGridSize;

          line.push({
            originalX: x,
            originalY: y,
            x: x,
            y: y,
            lastX: x,
            lastY: y,
            vx: 0,
            vy: 0,
          });
        }
        linesData.push(line);
      }
    }
    return linesData;
  }, [numLines, scaledLineLength, lineWidth, scaledGridSize, centerX, centerY, initialRotationAngle, lineThickness]);

  // Helper function to snap to grid
  const snapToGrid = useCallback((value: number, gridSize: number) => {
    return Math.floor(value / gridSize) * gridSize;
  }, []);

  // Update points based on mouse position and animation state
  const updatePoints = useCallback((mouseX: number, mouseY: number) => {
    const now = Date.now();
    mouseActive.current = (now - lastMouseMoveTime.current) < debounceTime;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (!line) continue;

      for (let j = 0; j < line.length; j++) {
        const point = line[j];
        if (!point) continue;

        if (mouseActive.current) {
          // Adjust movement based on mouse if active
          const dx = point.x - mouseX;
          const dy = point.y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Calculate force based on distance
          let force = 0;
          if (distance < attractionDistance) {
            force = (attractionDistance - distance) / attractionDistance;
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
          point.x = point.lastX + Math.cos(autoAnimPhase.current + j * 0.5) * radius.current;
          point.y = point.lastY + Math.sin(autoAnimPhase.current + j * 0.5) * radius.current;
        }
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
  }, [lines, debounceTime, attractionDistance, autoAnimStep, scaledMaxRadius, scale]);

  // Draw lines on canvas
  const drawLines = useCallback(() => {
    if (!ctx) return;
    
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = starColor;

    for (const line of lines) {
      for (const point of line) {
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
    }
  }, [ctx, width, height, starColor, lines, snapToGrid, scaledGridSize, scaledPointSize]);

  // Handle mouse events
  const handleMouseMove = useCallback(() => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const mouseX = mousePosition.x - rect.left;
    const mouseY = mousePosition.y - rect.top;
    
    lastMouseMoveTime.current = Date.now();
    updatePoints(mouseX, mouseY);
  }, [updatePoints]);

  const handleMouseLeave = useCallback(() => {
    lastMouseMoveTime.current = Date.now();
    updatePoints(-100, -100);
  }, [updatePoints]);

  // Handle touch events for mobile
  const handleTouchStart = useCallback((event: React.TouchEvent<HTMLCanvasElement>) => {
    lastMouseMoveTime.current = Date.now();
    isDragging.current = true;
    
    const touch = event.touches[0];
    if (!touch || !canvasRef.current) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const touchX = touch.clientX - rect.left;
    const touchY = touch.clientY - rect.top;
    
    updatePoints(touchX, touchY);
  }, [updatePoints]);

  const handleTouchMove = useCallback((event: React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDragging.current) return;
    lastMouseMoveTime.current = Date.now();
    
    event.preventDefault();
    const touch = event.touches[0];
    if (!touch || !canvasRef.current) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const touchX = touch.clientX - rect.left;
    const touchY = touch.clientY - rect.top;
    
    updatePoints(touchX, touchY);
  }, [updatePoints]);

  const handleTouchEnd = useCallback(() => {
    isDragging.current = false;
    lastMouseMoveTime.current = Date.now();
    updatePoints(-100, -100);
  }, [updatePoints]);

  // Animation frame callback
  const animate = useCallback(() => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!ctx || !rect) return;
    
    // Calculate mouse position relative to canvas on viewport
    const mouseX = mousePosition.x - rect.left;
    const mouseY = mousePosition.y - rect.top;
    
    updatePoints(mouseX, mouseY);
    drawLines();
  }, [ctx, mousePosition, left, top, updatePoints, drawLines]);

  useAnimationFrame(animate);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    />
  );
};

export default StarCanvas; 