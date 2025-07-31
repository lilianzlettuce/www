import ImageMask from "@/components/canvasGraphics/ImageMask";
import ShrinkCircles from "@/components/canvasGraphics/ShrinkCircles";
import { useTheme } from "@/contexts/ThemeContext";
import { useState, useEffect } from "react";

export function BrainLight({imageSrc}: {imageSrc: string}) {
    const { theme } = useTheme();
    const [circleColor, setCircleColor] = useState("black");
    const [maskColor, setMaskColor] = useState("white");
    
    useEffect(() => {
        const updateCircleColor = () => {
            const color = getComputedStyle(document.documentElement).getPropertyValue("--foreground");
            setCircleColor(color || "black");
            const maskColor = getComputedStyle(document.documentElement).getPropertyValue("--background");
            setMaskColor(maskColor || "white");
        };
        
        // Initial update
        updateCircleColor();
        
        // Listen for theme changes
        const observer = new MutationObserver(updateCircleColor);
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
                    drawLight={true}
                    growCircles={true}
                    bgColor="none"
                    interactive={true}
                    transparent={false}
                    showStats={false}
                    imageSrc="/img/lowRes/brain.png"
                    scaleFactor={1}
                    gridGap={3}
                    circleColor={circleColor}
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
    const [circleColor, setCircleColor] = useState("black");
    const [maskColor, setMaskColor] = useState("white");
    
    useEffect(() => {
        const updateCircleColor = () => {
            const color = getComputedStyle(document.documentElement).getPropertyValue("--background");
            setCircleColor(color || "black");
            const maskColor = getComputedStyle(document.documentElement).getPropertyValue("--foreground");
            setMaskColor(maskColor || "white");
        };
        
        // Initial update
        updateCircleColor();
        
        // Listen for theme changes
        const observer = new MutationObserver(updateCircleColor);
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
                    drawLight={false}
                    growCircles={false}
                    bgColor="none"
                    interactive={true}
                    transparent={true}
                    showStats={false}
                    imageSrc={imageSrc}
                    scaleFactor={1}
                    gridGap={3}
                    circleColor={circleColor}
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

export function BrainDarkMouseDark({imageSrc}: {imageSrc: string}) {
    const { theme } = useTheme();
    const [circleColor, setCircleColor] = useState("black");
    const [maskColor, setMaskColor] = useState("white");
    
    useEffect(() => {
        const updateCircleColor = () => {
            const color = getComputedStyle(document.documentElement).getPropertyValue("--background");
            setCircleColor(color || "black");
            const maskColor = getComputedStyle(document.documentElement).getPropertyValue("--foreground");
            setMaskColor(maskColor || "white");
        };
        
        // Initial update
        updateCircleColor();
        
        // Listen for theme changes
        const observer = new MutationObserver(updateCircleColor);
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
                    drawLight={false}
                    growCircles={true}
                    bgColor="none"
                    interactive={true}
                    transparent={true}
                    showStats={false}
                    imageSrc={imageSrc}
                    scaleFactor={1}
                    gridGap={3}
                    circleColor={circleColor}
                    attractionDistance={600}
                    shrinkFactor={15}
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