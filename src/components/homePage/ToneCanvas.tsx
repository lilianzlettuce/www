"use client";

import ImageMask from "@/components/canvasGraphics/ImageMask";
import ShrinkCircles from "@/components/canvasGraphics/ShrinkCircles";
import { useTheme } from "@/contexts/ThemeContext";
import { useState, useEffect } from "react";

export function BrainLight({imageSrc}: {imageSrc: string}) {
    const { theme } = useTheme();
    const [dotColor, setDotColor] = useState("black");
    const [maskColor, setMaskColor] = useState("white");
    
    useEffect(() => {
        const updateDotColor = () => {
            const color = getComputedStyle(document.documentElement).getPropertyValue("--foreground");
            setDotColor(color || "black");
            const maskColor = getComputedStyle(document.documentElement).getPropertyValue("--background");
            setMaskColor(maskColor || "white");
        };
        
        // Initial update
        updateDotColor();
        
        // Listen for theme changes
        const observer = new MutationObserver(updateDotColor);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class', 'style']
        });
        
        return () => observer.disconnect();
    }, [theme]);

    return (
        <div className="relative">
            <ImageMask
                imageSrc={imageSrc}
                maskColor={maskColor}
                gridGap={1}
                pixelSize={1}
                scaleFactor={1}
            />
            <div className="absolute inset-0">
                <ShrinkCircles 
                    interactionMode="grow"
                    bgColor="none"
                    transparent={true}
                    showStats={false}
                    imageSrc="/img/lowRes/brain.png"
                    scaleFactor={1}
                    gridGap={3}
                    dotMapMode="light"
                    dotColor={dotColor}
                    attractionDistance={400}
                    shrinkFactor={20}
                    defaultRadius={1.6}
                    minRadius={0}
                    maxRadius={6}
                    delayFactor={0.4}
                    delayCap={0.1}
                    debounceTime={0}
                    autoAnimStep={0.03}
                />
            </div>
        </div>
    );
}

export function BrainDarkMouseLight({imageSrc}: {imageSrc: string}) {
    const { theme } = useTheme();
    const [dotColor, setDotColor] = useState("black");
    const [maskColor, setMaskColor] = useState("white");
    
    useEffect(() => {
        const updateDotColor = () => {
            const color = getComputedStyle(document.documentElement).getPropertyValue("--background");
            setDotColor(color || "black");
            const maskColor = getComputedStyle(document.documentElement).getPropertyValue("--foreground");
            setMaskColor(maskColor || "white");
        };
        
        // Initial update
        updateDotColor();
        
        // Listen for theme changes
        const observer = new MutationObserver(updateDotColor);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class', 'style']
        });
        
        return () => observer.disconnect();
    }, [theme]);

    return (
        <div className="relative">
            <ImageMask
                imageSrc={imageSrc}
                maskColor={maskColor}
                gridGap={3}
                pixelSize={3}
                scaleFactor={1}
            />
            <div className="absolute inset-0">
                <ShrinkCircles 
                    interactionMode="shrink"
                    transparent={true}
                    showStats={false}
                    imageSrc={imageSrc}
                    scaleFactor={1}
                    gridGap={3}
                    bgColor="none"
                    dotMapMode="shadow"
                    dotColor={dotColor}
                    attractionDistance={200}
                    shrinkFactor={1}
                    minRadius={0}
                    maxRadius={3.8}
                    delayFactor={0.4}
                    delayCap={0.1}
                    debounceTime={0}
                    autoAnimStep={0.03}
                />
            </div>
        </div>
    );
}

export function BrainDarkMouseDark({imageSrc, tooltipText = "POKE"}: {imageSrc: string, tooltipText: string}) {
    const { theme } = useTheme();
    const [isHovering, setIsHovering] = useState(false);
    const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

    const handleHoverChange = (hovering: boolean, x: number, y: number) => {
        setIsHovering(hovering);
        setHoverPosition({ x, y });
    };

    return (
        <div className={`relative ${isHovering ? 'cursor-pointer' : 'cursor-default'}`}>
            <ImageMask
                imageSrc={imageSrc}
                maskColor="white"
                gridGap={1}
                pixelSize={1}
                scaleFactor={1.1}
            />
            <div className="absolute inset-[0px]">
                <ShrinkCircles 
                    bgColor="none"
                    interactionMode={theme === "dark" ? "grow" : "shrink"}
                    transparent={true}
                    showStats={false}
                    imageSrc={imageSrc}
                    scaleFactor={1.1}
                    gridGap={3}
                    dotMapMode="shadow"
                    dotColor="black"
                    attractionDistance={theme === "dark" ? 600 : 200}
                    shrinkFactor={theme === "dark" ? 15 : 1}
                    minRadius={0}
                    maxRadius={3.8}
                    delayFactor={0.4}
                    delayCap={0.1}
                    debounceTime={0}
                    autoAnimStep={0.03}
                    onHoverChange={handleHoverChange}
                />
            </div>
            {/*<div className="absolute inset-0">
                <ImageMask
                    imageSrc={imageSrc}
                    maskColor="rgb(0, 0, 0, 0)"
                    gridGap={1}
                    pixelSize={1}
                    scaleFactor={1}
                    onHoverChange={handleHoverChange}
                />
            </div>*/}
            {/* Tooltip */}
            {isHovering && (
                <div 
                    className="z-50 fixed px-1 py-0 pointer-events-none bg-background text-foreground text-xs font-bold border-1 border-foreground"
                    style={{
                        left: hoverPosition.x + 10,
                        top: hoverPosition.y - 30,
                    }}
                >
                    {tooltipText}
                </div>
            )}
        </div>
    );
}