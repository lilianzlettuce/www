"use client";

import ShrinkCircles from "@/components/canvasGraphics/ShrinkCircles";
import { useTheme } from "@/contexts/ThemeContext";
import { useState, useEffect } from "react";

export default function Hero() {
    const { theme } = useTheme();
    const [circleColor, setCircleColor] = useState("black");
    
    useEffect(() => {
        const updateCircleColor = () => {
            const color = getComputedStyle(document.documentElement).getPropertyValue("--foreground");
            setCircleColor(color || "black");
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
        <ShrinkCircles 
          interactive={true}
          transparent={true}
          showStats={false}
          imageSrc="/img/lowRes/brain.png"
          scaleFactor={1}
          gridGap={3}
          circleColor={circleColor}
          attractionDistance={200}
          shrinkFactor={1}
          minRadius={0}
          maxRadius={4}
          delayFactor={0.4}
          delayCap={0.1}
          debounceTime={0}
          autoAnimStep={0.03}
        />
      </div>
      <div className="relative z-10 text-left max-w-lg px-4 sm:px-6 lg:px-8">
        <h1 className="font-mono text-xl md:text-xl font-bold text-foreground mb-6">
          Hello, I&apos;m <span className="text-foreground">a rat in three trenchcoats</span>.
        </h1>
        <p className="font-mono text-xl md:text-lg text-mutedForeground mb-8 max-w-2xl mx-auto">
          UI Engineer and artist exploring spaces between pixels and atoms.
        </p>
      </div>
    </section>
    );
}