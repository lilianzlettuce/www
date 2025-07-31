"use client";

import ShrinkCircles from "@/components/canvasGraphics/ShrinkCircles";
import ImageMask from "@/components/canvasGraphics/ImageMask";
import { useTheme } from "@/contexts/ThemeContext";
import { useState, useEffect } from "react";
import { BrainLight, BrainDarkMouseLight, BrainDarkMouseDark } from "./HeroGraphic";

export default function Hero() {
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
      <section className="relative h-screen min-h-screen flex items-center justify-start">
      <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
      <div className="h-fit absolute left-1/2">
        {/*<BrainLight imageSrc="/img/lowRes/brain.png" />
        <BrainDarkMouseLight imageSrc="/img/lowRes/brain.png" />
        <BrainDarkMouseDark imageSrc="/img/lowRes/brain.png" />*/}
        <BrainDarkMouseDark imageSrc="/img/lowRes/brain.png" />
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