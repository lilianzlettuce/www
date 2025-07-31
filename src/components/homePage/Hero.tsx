"use client";

import ShrinkCircles from "@/components/canvasGraphics/ShrinkCircles";
import ImageMask from "@/components/canvasGraphics/ImageMask";
import { useTheme } from "@/contexts/ThemeContext";
import { useState, useEffect } from "react";

export default function Hero() {
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
      <section className="relative h-screen flex items-center justify-start">
      <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
      <div className="absolute left-1/2">
        <div className="relative">
          <ImageMask
            imageSrc="/img/lowRes/brain.png"
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
              attractionDistance={200}
              shrinkFactor={4}
              minRadius={0}
              maxRadius={2}
              delayFactor={0.4}
              delayCap={0.1}
              debounceTime={0}
              autoAnimStep={0.03}
            />
          </div>
        </div>
      </div>
      <div className="relative z-10 text-left max-w-lg px-4 sm:px-6 lg:px-8">
        <h1 className="font-mono text-md md:text-lg font-bold text-foreground mb-6">
          Hello, I&apos;m <span className="text-foreground">a rat in three trenchcoats</span>.
        </h1>
        <p className="font-mono text-md md:text-md text-mutedForeground mb-8 max-w-2xl mx-auto">
          UI Engineer and artist exploring spaces between pixels and atoms.
        </p>
      </div>
    </section>
    );
}