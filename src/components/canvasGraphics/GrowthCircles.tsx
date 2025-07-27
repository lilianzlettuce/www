"use client";

import { useMousePosition } from "@/hooks/useMousePosition";
import { useCanvas } from "@/hooks/useCanvas";
import { useAnimationFrame } from "@/hooks/useAnimationFrame";
import { useRef, useEffect } from "react";

type RadiusPoint = {
  originalRadius: number;
  radius: number;
  lastRadius: number;
  vr: number; // velocity for radius
  x: number; // fixed position
  y: number; // fixed position
};

interface GrowthCirclesProps {
  gridGap?: number;
  defaultRadius?: number;
  circleColor?: string;
  attractionDistance?: number;
  growthFactor?: number;
  debounceTime?: number;
  autoAnimStep?: number;
  minRadius?: number;
  easeInFactor?: number;
}

const GrowthCircles = ({
  gridGap = 30,
  defaultRadius = 3,
  circleColor = "black",
  attractionDistance = 200,
  growthFactor = 15,
  debounceTime = 5500,
  autoAnimStep = 0.02,
  minRadius = 0.5,
  easeInFactor = 0.85,
}: GrowthCirclesProps) => {
    const mousePosition = useMousePosition();
    const { canvasRef, ctx, width, height } = useCanvas();
    
    // Animation state refs
    const lastMouseMoveTime = useRef(Date.now());
    const mouseActive = useRef(true);
    const autoAnimPhase = useRef(0);
    const animationRadius = useRef(1);
    const isDragging = useRef(false);

    const radiusPoints = useRef<RadiusPoint[]>([]); // store point grid

    // Create grid of points
    useEffect(() => {
        console.log("Generating grid", width, height);
        
        if (width === 0 || height === 0) return;

        // Calculate number of rows and columns
        const numRows = Math.floor(height / gridGap);
        const numCols = Math.floor(width / gridGap);

        // Populate grid
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
        
        radiusPoints.current = points;
    }, [width, height, gridGap, defaultRadius]);

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

                // Calculate force based on distance
                let force = 0;
                if (distance < attractionDistance) {
                    force = (attractionDistance - distance) / attractionDistance;
                    // Apply power curve for more dramatic effect
                    //force = Math.pow(force, 1.4);
                }

                // Calculate target radius based on force
                const targetRadius = defaultRadius * (1 + force * growthFactor); // Scale factor for dramatic effect
                
                // Apply physics to radius with ease-in
                const radiusDiff = targetRadius - point.radius;
                const radiusForce = Math.min(0.1, Math.abs(radiusDiff) / 100);
                
                if (radiusDiff > 0) {
                    point.vr = (point.vr + radiusForce) * 1;// easeInFactor;
                } else {
                    point.vr = (point.vr - radiusForce) * easeInFactor;
                }
                
                // Update radius with velocity
                point.radius += point.vr;
                
                // Clamp radius to bounds
                point.radius = Math.max(minRadius, point.radius);
                
                point.lastRadius = point.radius;
            } else if (width != 0 && height != 0) {
                // Auto-animate radius in a wave pattern
                const waveOffset = Math.sin(autoAnimPhase.current + point.x * 0.01 + point.y * 0.01);
                point.radius = point.lastRadius + waveOffset * animationRadius.current;
                point.radius = Math.max(minRadius, point.radius);
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
    };

    // Draw circles on canvas
    const drawCircles = () => {
        if (!ctx) return;
        
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = circleColor;

        for (const point of radiusPoints.current) {
            ctx.beginPath();
            ctx.arc(point.x, point.y, point.radius, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath();
        }
    };

    // Handle mouse events
    const handleMouseMove = () => {
        if (!canvasRef.current) return;
    
        // Get relative mouse position
        const rect = canvasRef.current.getBoundingClientRect();
        const mouseX = mousePosition.x - rect.left;
        const mouseY = mousePosition.y - rect.top;
    
        console.log(mouseX, mouseY);

        /*const mouseX = mousePosition.x - left;
        const mouseY = mousePosition.y - top + (typeof window !== 'undefined' ? window.scrollY : 0);*/
        
        lastMouseMoveTime.current = Date.now();
        updateRadiusPoints(mouseX, mouseY);
    };

    const handleMouseLeave = () => {
        lastMouseMoveTime.current = Date.now();
        updateRadiusPoints(-100, -100);
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
        
        updateRadiusPoints(touchX, touchY);
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
        
        updateRadiusPoints(touchX, touchY);
    };

    const handleTouchEnd = () => {
        isDragging.current = false;
        lastMouseMoveTime.current = Date.now();
        updateRadiusPoints(-100, -100);
    };

    // Animation frame 
    const animate = () => {
        if (!canvasRef.current) return;
        if (!ctx) return;
        
        // Calculate mouse position relative to canvas on viewport
        const rect = canvasRef.current.getBoundingClientRect();
        const mouseX = mousePosition.x - rect.left;
        const mouseY = mousePosition.y - rect.top;
        
        updateRadiusPoints(mouseX, mouseY);
        drawCircles();
    };

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

export default GrowthCircles;