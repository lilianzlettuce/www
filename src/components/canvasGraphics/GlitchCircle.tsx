"use client";

import { useMousePosition } from "@/hooks/useMousePosition";
import { useCanvas } from "@/hooks/useCanvas";
import { useAnimationFrame } from "@/hooks/useAnimationFrame";
import { useRef, useEffect } from "react";
import { Color, parseColorString, colorToString, getRandomGlitchColor } from "@/lib/colorProcessing";

type Pixel = {
  originalColor: Color;
  color: Color;
  lastColor: Color | null;
  vc: Color; // velocity in color change
  vr: number; // velocity for radius
  x: number; // fixed position
  y: number; // fixed position
  lastTouched: number;
};

interface GlitchCircleProps {
  pixelSize?: number;
  circleColor?: string;
  circleEndColor?: string;
  attractionDistance?: number;
  glitchDebounceTime?: number;
  debounceTime?: number;
  autoAnimStep?: number;
  fillMode?: boolean;
}

const GlitchCircle = ({
  pixelSize = 30,
  circleColor = "rgb(0, 0, 0)",
  circleEndColor = "rgb(255, 255, 255)",
  attractionDistance = 200,
  glitchDebounceTime = 5000,
  debounceTime = 5500,
  autoAnimStep = 0.02,
  fillMode = false
}: GlitchCircleProps) => {
    const mousePosition = useMousePosition();
    const { canvasRef, ctx, width, height } = useCanvas();
    
    // Animation state refs
    const lastMouseMoveTime = useRef(Date.now());
    const mouseActive = useRef(true);
    const autoAnimPhase = useRef(0);
    const animationRadius = useRef(1);
    const isDragging = useRef(false);

    const pixels = useRef<Pixel[]>([]); // store pixel grid

    // Convert color string to color object, fallback to black
    const defaultColor = parseColorString(circleColor) || { r: 0, g: 0, b: 0, a: 1};

    // Create grid of pixels
    useEffect(() => {
        console.log("Generating grid", width, height);
        
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
                    lastColor: null,
                    vc: { r: 0, g: 0, b: 0, a: 0},
                    vr: 0,
                    x: x,
                    y: y,
                    lastTouched: 0
                });
            }
        }
    }, [width, height, pixelSize, circleColor, circleEndColor]);

    // Update radius values based on mouse position and animation state
    const updatePixels = (mouseX: number, mouseY: number) => {
        const now = Date.now();
        mouseActive.current = (now - lastMouseMoveTime.current) < debounceTime;

        for (const pixel of pixels.current) {
            if (mouseActive.current) {
                // Calculate distance from mouse to circle center
                const dx = pixel.x - mouseX;
                const dy = pixel.y - mouseY;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Glitch pixels near mouse
                if (distance < attractionDistance) {
                    // Chance of glitch change, higher near center
                    const glitchChance = 1 - (distance / attractionDistance); 
                    if (Math.random() < Math.pow(glitchChance, 3.5)) {
                      pixel.color = getRandomGlitchColor();
                    }

                    pixel.lastTouched = now;
                    pixel.lastColor = pixel.color;
                }
                if (fillMode && pixel.lastTouched > 0) {
                    const glitchChance = 0.1;
                    if (Math.random() < glitchChance) {
                        pixel.color = getRandomGlitchColor();
                    }

                    pixel.lastColor = pixel.color;
                }
                
                if (!fillMode) {
                    if (now - pixel.lastTouched < glitchDebounceTime) {
                        // Chance of glitch change, higher near center
                        const glitchChance = 1 - (now - pixel.lastTouched) / glitchDebounceTime;

                        if (Math.random() < Math.pow(glitchChance, 3.5)) {
                        pixel.color = getRandomGlitchColor();
                        }

                        pixel.lastColor = pixel.color;
                    } else {
                        pixel.color = defaultColor;
                    }
                }
            } else {
                const t = performance.now() * 0.002;
                /*const wave = Math.sin((pixel.y) * 0.1 + t * 0.9); // use y or both

                if (wave > 0.95) {
                    pixel.color = getRandomGlitchColor();
                }*/

                const dx = pixel.x - 500;
                const dy = pixel.y - 500;
                const d = Math.sqrt(dx * dx + dy * dy);
                const ripple = Math.sin(d * 0.2 - t * 0.9);

                if (ripple > 0.95) {
                    pixel.color = getRandomGlitchColor();
                }

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

        for (const pixel of pixels.current) {
            ctx.fillStyle = colorToString(pixel.color);

            ctx.beginPath();
            //ctx.rect(pixel.x, pixel.y, pixel.radius, pixel.radius);
            ctx.rect(pixel.x, pixel.y, pixelSize, pixelSize);
            ctx.fill();
            ctx.closePath();
        }
    };

    // Handle mouse events
    const handleMouseMove = () => {
        if (!canvasRef.current) return;

        // Calculate mouse position relative to canvas on viewport
        const rect = canvasRef.current.getBoundingClientRect();
        const mouseX = mousePosition.x - rect.left;
        const mouseY = mousePosition.y - rect.top;

        //console.log(mouseX, mouseY);
        
        lastMouseMoveTime.current = Date.now();
        updatePixels(mouseX, mouseY);
    };

    const handleMouseLeave = () => {
        lastMouseMoveTime.current = Date.now();
        updatePixels(-100, -100);
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
        
        updatePixels(touchX, touchY);
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
        
        updatePixels(touchX, touchY);
    };

    const handleTouchEnd = () => {
        isDragging.current = false;
        lastMouseMoveTime.current = Date.now();
        updatePixels(-100, -100);
    };

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
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        />
    );
};

export default GlitchCircle; 