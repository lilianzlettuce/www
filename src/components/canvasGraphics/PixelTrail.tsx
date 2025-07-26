"use client";

import { useMousePosition } from "@/hooks/useMousePosition";
import { useCanvas } from "@/hooks/useCanvas";
import { useAnimationFrame } from "@/hooks/useAnimationFrame";
import { useRef, useCallback, useEffect } from "react";
import { Color, parseColorString, mapColor, colorToString } from "@/lib/colorProcessing";
import { mapTo } from "@/lib/utils";

type Pixel = {
  originalColor: Color;
  color: Color;
  vc: Color; // velocity in color change
  vr: number; // velocity for radius
  x: number; // fixed position
  y: number; // fixed position
  lastTouched: number;
  drawn: boolean;
};

interface PixelTrailProps {
  pixelSize?: number;
  circleColor?: string;
  circleEndColor?: string;
  blendColors?: boolean;
  attractionDistance?: number;
  shrinkFactor?: number;
  debounceTime?: number;
  autoAnimStep?: number;
  maxRadius?: number;
  minRadius?: number;
  easeInFactor?: number;
  trailDebounceTime?: number;
  drawMode?: boolean;
}

const PixelTrail = ({
    pixelSize = 30,
    circleColor = "rgb(0, 0, 0)",
    circleEndColor = "rgb(255, 255, 255)",
    blendColors = false,
    attractionDistance = 200,
    shrinkFactor = 1,
    debounceTime = 5500,
    autoAnimStep = 0.02,
    maxRadius = 50,
    minRadius = 0.5,
    easeInFactor = 0.85,
    trailDebounceTime = 5000,
    drawMode = false,
}: PixelTrailProps) => {
    const mousePosition = useMousePosition();
    const { canvasRef, ctx, width, height } = useCanvas();
    
    // Animation state refs
    const lastMouseMoveTime = useRef(Date.now());
    const mouseActive = useRef(true);
    const autoAnimPhase = useRef(0);
    const animationRadius = useRef(1);
    const isDragging = useRef(false);
    const isMouseDown = useRef(false);

    const pixels = useRef<Pixel[]>([]); // store pixel grid

    // Convert color string to color object, fallback to black
    const defaultColor = parseColorString(circleColor) || { r: 0, g: 0, b: 0, a: 1};
    const endColor = parseColorString(circleEndColor) || { r: 255, g: 255, b: 255, a: 1};;

    // Create grid of pixels
    useEffect(() => {
        if (width === 0 || height === 0) return;

        // Calculate number of rows and columns
        const numRows = Math.floor(height / pixelSize);
        const numCols = Math.floor(width / pixelSize);

        // Populate grid
        for (let i = 0; i < numRows; i++) {
            const y = i * pixelSize;
            
            for (let j = 0; j < numCols; j++) {
                const x = j * pixelSize;

                pixels.current.push({
                    originalColor: defaultColor,
                    color: defaultColor,
                    vc: { r: 0, g: 0, b: 0, a: 0},
                    vr: 0,
                    x: x,
                    y: y,
                    lastTouched: 0,
                    drawn: false,
                });
            }
        }
    }, [width, height, pixelSize, circleColor, circleEndColor]);

    // Update pixels based on mouse position and animation state
    const updatePixels = useCallback((mouseX: number, mouseY: number) => {
        const now = Date.now();
        mouseActive.current = (now - lastMouseMoveTime.current) < debounceTime;

        for (const pixel of pixels.current) {
            // Check if mouse is within pixel bounds
            const isMouseOnPixel = mouseX >= pixel.x && mouseX < pixel.x + pixelSize && 
                                   mouseY >= pixel.y && mouseY < pixel.y + pixelSize;

            if (mouseActive.current && isMouseOnPixel) {
                // Mouse is on this pixel
                if (drawMode && (isDragging.current || isMouseDown.current)) {
                    // In draw mode and mouse is down - mark as drawn
                    pixel.drawn = true;
                }
                
                if (!blendColors) {
                    // Color all affected pixels to end color
                    pixel.color = endColor;
                } else {
                    // Calculate force based on distance (inverse relationship)
                    let force = 0;
                    // Direct relationship: closer = smaller radius
                    // Value between 0 and 1
                    force = 1; // Full force when mouse is on pixel
                    // Apply power curve for more dramatic effect
                    //force = Math.pow(force, 2);
                    force = 1 - Math.pow(1 - force, 3);
                    //force = force * force * (3 - 2 * force);

                    // Calculate target color (in between start and end colors)

                    const targetColor = mapColor(defaultColor, (defaultVal, channel) =>
                        //mapTo(distance, attractionDistance, 0, defaultVal, endColor[channel])
                        //mapTo(defaultVal * (1 - force * shrinkFactor), 0, defaultVal, defaultVal, endColor[channel])
                        //mapTo(distance, attractionDistance, 0, defaultVal, endColor[channel])
                        mapTo(force, 0, 1, defaultVal, endColor[channel])
                    );
                    const colorDiff = mapColor(targetColor, (targetVal, channel) => 
                        targetVal - pixel.color[channel]
                    );
                    const colorForce = mapColor(colorDiff, (diffVal) => 
                        //Math.min(2, Math.abs(diffVal) / 10)
                        Math.abs(diffVal) / easeInFactor
                    );

                    // Update velocity to tween between colors
                    pixel.vc = mapColor(pixel.vc, (velocity, channel) => {
                        const diff = colorDiff[channel];
                        const force = colorForce[channel];
                        // use just force (not color force for glitch effect)
                        return diff > 0
                        ? (velocity + force) * shrinkFactor
                        : (velocity - force) * shrinkFactor;
                    });

                    pixel.color = mapColor(pixel.color, (colorVal, channel) => {
                        const diff = colorDiff[channel];
                        const force = colorForce[channel];
                        return diff > 0
                        ? colorVal + force * 5
                        : colorVal - force * 5;
                    });
                }
                
                // Clamp color to bounds
                pixel.color = mapColor(pixel.color, (colorVal) => Math.max(0, Math.min(255, colorVal)));
                pixel.lastTouched = now;
            } else {
                // Check if pixel should revert based on trail debounce time
                if (now - pixel.lastTouched > trailDebounceTime) {
                    // Revert to original color only if not in draw mode or not drawn
                    if (!drawMode || !pixel.drawn) {
                        pixel.color = defaultColor;
                    }
                }
            }
        }

        // Update auto-anim phase for the next frame
        if (!mouseActive.current && !isDragging.current && !isMouseDown.current) {
            autoAnimPhase.current += autoAnimStep;
            animationRadius.current = Math.min(animationRadius.current * 1.01, 5);
        } else {
        // Reset
            autoAnimPhase.current = 0;
            animationRadius.current = 1;
        }
    }, [pixels, , circleColor, circleEndColor, debounceTime, attractionDistance, minRadius, maxRadius, autoAnimStep, easeInFactor, trailDebounceTime, drawMode]);

    // Draw circles on canvas
    const drawCircles = useCallback(() => {
        if (!ctx) return;
        
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = circleColor;

        for (const pixel of pixels.current) {
            ctx.fillStyle = colorToString(pixel.color);

            ctx.beginPath();
            //ctx.rect(pixel.x, pixel.y, pixel.radius, pixel.radius);
            ctx.rect(pixel.x, pixel.y, pixelSize, pixelSize);
            ctx.fill();
            ctx.closePath();
        }
    }, [ctx, width, height, circleColor, pixels]);

    // Handle mouse events
    const handleMouseMove = useCallback(() => {
        if (!canvasRef.current) return;

        // Calculate mouse position relative to canvas on viewport
        const rect = canvasRef.current.getBoundingClientRect();
        const mouseX = mousePosition.x - rect.left;
        const mouseY = mousePosition.y - rect.top;

        //console.log(mouseX, mouseY);
        
        lastMouseMoveTime.current = Date.now();
        updatePixels(mouseX, mouseY);
    }, [mousePosition, updatePixels]);

    const handleMouseDown = useCallback(() => {
        isMouseDown.current = true;
    }, []);

    const handleMouseUp = useCallback(() => {
        isMouseDown.current = false;
    }, []);

    const handleMouseLeave = useCallback(() => {
        lastMouseMoveTime.current = Date.now();
        isMouseDown.current = false;
        updatePixels(-100, -100);
    }, [updatePixels]);

    // Handle touch events for mobile
    const handleTouchStart = useCallback((event: React.TouchEvent<HTMLCanvasElement>) => {
        lastMouseMoveTime.current = Date.now();
        isDragging.current = true;
        
        const touch = event.touches[0];
        if (!touch || !canvasRef.current) return;
        
        const rect = canvasRef.current.getBoundingClientRect();
        const touchX = touch.clientX - rect.left;
        const touchY = touch.clientY - rect.top;
        
        updatePixels(touchX, touchY);
    }, [updatePixels]);

    const handleTouchMove = useCallback((event: React.TouchEvent<HTMLCanvasElement>) => {
        if (!isDragging.current) return;
        lastMouseMoveTime.current = Date.now();
        
        event.preventDefault();
        const touch = event.touches[0];
        if (!touch || !canvasRef.current) return;
        
        const rect = canvasRef.current.getBoundingClientRect();
        const touchX = touch.clientX - rect.left;
        const touchY = touch.clientY - rect.top;
        
        updatePixels(touchX, touchY);
    }, [updatePixels]);

    const handleTouchEnd = useCallback(() => {
        isDragging.current = false;
        lastMouseMoveTime.current = Date.now();
        updatePixels(-100, -100);
    }, [updatePixels]);

    // Animation frame callback
    const animate = () => {
        if (!canvasRef.current || !ctx) return;
        
        // Calculate mouse position relative to canvas on viewport
        const rect = canvasRef.current.getBoundingClientRect();
        const mouseX = mousePosition.x - rect.left;
        const mouseY = mousePosition.y - rect.top;
        
        updatePixels(mouseX, mouseY);
        drawCircles();
    };

    useAnimationFrame(animate);

    return (
        <canvas
            ref={canvasRef}
            className="w-screen h-screen"
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        />
    );
};

export default PixelTrail; 