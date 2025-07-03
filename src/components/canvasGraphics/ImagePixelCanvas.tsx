"use client";

import { useMousePosition } from "@/hooks/useMousePosition";
import { useCanvas } from "@/hooks/useCanvas";
import { useAnimationFrame } from "@/hooks/useAnimationFrame";
import { useRef, useCallback, useEffect, useState, useMemo } from "react";
import { Color, colorToString, getBrightness } from "@/lib/utils";
import { useImagePixels } from "@/hooks/useImagePixels";

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

interface ImagePixelCanvasProps {
    src: string;
    scaleFactor?: number;
    pointSize?: number;
    gridSize?: number;
    attractionDistance?: number;
    debounceTime?: number;
    autoAnimStep?: number;
    maxRadius?: number;
    animSpeed?: number;
    onPixelsExtracted?: (pixels: Color[], width: number, height: number) => void;
}

const ImagePixelCanvas: React.FC<ImagePixelCanvasProps> = ({
    src,
    scaleFactor = 1.2,
    pointSize = 3,
    gridSize = 5,
    attractionDistance = 200,
    debounceTime = 5500,
    autoAnimStep = 0.02,
    maxRadius = 95,
    animSpeed = 1.1,
    onPixelsExtracted
}) => {
    const mousePosition = useMousePosition();
    
    // Animation state refs
    const lastMouseMoveTime = useRef(Date.now());
    const mouseActive = useRef(true);
    const autoAnimPhase = useRef(0);
    const radius = useRef(1);
    const isDragging = useRef(false);

    const { pixels, imageWidth, imageHeight, isImageLoaded, error } = useImagePixels(src);
    
    // Calculate scale based on screen size
    const scale = useMemo(() => {
        const breakpointMobile = 640;
        const isMobile = typeof window !== 'undefined' ? window.innerWidth < breakpointMobile : false;
        return isMobile ? 1.5 : 3;
    }, []);

    // Calculate canvas dimensions based on image size
    const canvasDimensions = useMemo(() => {
        if (!isImageLoaded || imageWidth === 0 || imageHeight === 0) {
            return { width: 800, height: 600 }; // Default fallback
        }

        // Get viewport dimensions
        const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 800;
        const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 600;
        
        // Calculate max dimensions that fit in viewport
        const maxWidth = viewportWidth * 0.9; 
        const maxHeight = viewportHeight * 0.9; 
        
        // Calculate scale to fit image within viewport
        const scaleX = maxWidth / imageWidth;
        const scaleY = maxHeight / imageHeight;
        const scale = Math.min(scaleX, scaleY, 1) * scaleFactor; // scale down
        
        return {
            width: Math.floor(imageWidth * scale),
            height: Math.floor(imageHeight * scale)
        };
    }, [isImageLoaded, imageWidth, imageHeight]);

    // Create canvas with calculated dimensions
    const { canvasRef, ctx, width, height } = useCanvas({
        width: canvasDimensions.width,
        height: canvasDimensions.height
    });
    
    // Calculate scaled grid and point values
    const scaledValues = useMemo(() => ({
        pointSize: pointSize * scale,
        gridSize: gridSize * scale,
        maxRadius: maxRadius * scale,
        attractionDistance: attractionDistance * scale
    }), [pointSize, gridSize, maxRadius, attractionDistance, scale]);

    const points = useRef<Point[]>([]); // store point grid

    // Create grid of points based on image
    useEffect(() => {
        if (!isImageLoaded || width === 0 || height === 0 || pixels.length === 0) return;

        console.log("Generating image grid", width, height, imageWidth, imageHeight);
        
        // Clear existing points
        points.current = [];

        // Use the full canvas (sized to img proportions)
        const gridCols = Math.floor(width / gridSize);
        const gridRows = Math.floor(height / gridSize);

        // Populate grid
        for (let i = 0; i < gridRows; i++) {
            const y = i * gridSize + gridSize / 2;
            
            for (let j = 0; j < gridCols; j++) {
                const x = j * gridSize + gridSize / 2;
                
                // Get corresponding pixel from image
                // Map canvas position to image position
                const imageX = Math.floor((j / gridCols) * imageWidth);
                const imageY = Math.floor((i / gridRows) * imageHeight);
                const pixelIndex = imageY * imageWidth + imageX;
                const pixelColor = pixels[pixelIndex] || { r: 0, g: 0, b: 0, a: 1 };
                
                points.current.push({
                    originalX: x,
                    originalY: y,
                    x: x,
                    y: y,
                    lastX: x,
                    lastY: y,
                    vx: 0,
                    vy: 0,
                    color: pixelColor
                });
            }
        }
        
    }, [width, height, gridSize, isImageLoaded, imageWidth, imageHeight]);

    // Helper function to snap to grid
    const snapToGrid = useCallback((value: number, gridSize: number) => {
        return Math.floor(value / gridSize) * gridSize;
    }, []);

    // Update points based on mouse position and animation state
    const updatePoints = useCallback((mouseX: number, mouseY: number) => {
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
                if (distance < scaledValues.attractionDistance) {
                    force = (scaledValues.attractionDistance - distance) / scaledValues.attractionDistance;
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
            radius.current = (radius.current < scaledValues.maxRadius) ? radius.current * animSpeed : scaledValues.maxRadius;
        } else {
            // Reset
            autoAnimPhase.current = 0;
            radius.current = scale;
        }
    }, [debounceTime, scaledValues, autoAnimStep, scale]);

    // Draw points on canvas
    const drawPoints = useCallback(() => {
        if (!ctx) return;
        
        ctx.clearRect(0, 0, width, height);

        for (const point of points.current) {
            ctx.fillStyle = colorToString(point.color);
            //const brightness = getBrightness(point.color);
            //ctx.fillStyle = `rgb(${brightness}, ${brightness}, ${brightness})`;

            // Snap to grid during drawing
            const snappedX = snapToGrid(point.x, scaledValues.gridSize);
            const snappedY = snapToGrid(point.y, scaledValues.gridSize);
            ctx.fillRect(
                snappedX - scaledValues.pointSize / 2,
                snappedY - scaledValues.pointSize / 2,
                scaledValues.pointSize,
                scaledValues.pointSize
            );
        }
    }, [ctx, width, height, snapToGrid, scaledValues]);

    // Handle mouse events
    const handleMouseMove = useCallback(() => {
        if (!canvasRef.current) return;

        // Calculate mouse position relative to canvas on viewport
        const rect = canvasRef.current.getBoundingClientRect();
        const mouseX = mousePosition.x - rect.left;
        const mouseY = mousePosition.y - rect.top;
        
        lastMouseMoveTime.current = Date.now();
        updatePoints(mouseX, mouseY);
    }, [mousePosition, updatePoints]);

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
        if (!canvasRef.current || !ctx) return;
        
        // Calculate mouse position relative to canvas on viewport
        const rect = canvasRef.current.getBoundingClientRect();
        const mouseX = mousePosition.x - rect.left;
        const mouseY = mousePosition.y - rect.top;
        
        updatePoints(mouseX, mouseY);
        drawPoints();
    }, [mousePosition, updatePoints, drawPoints]);

    useAnimationFrame(animate);

    return (
        <div className="w-full h-full flex items-center justify-center">
            <canvas
                ref={canvasRef}
                className="max-w-full max-h-full"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            />
        </div>
    );
};

export default ImagePixelCanvas;
