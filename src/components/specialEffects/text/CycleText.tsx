"use client";

import { useState, useEffect } from "react";
import ScrambleText from "./ScrambleText";
import BlendText from "./BlendText";
import { MultiSliceText } from "./SliceText";

interface CycleTextProps {
    texts: string[];
    duration?: number; // time (seconds) each text stays on screen
    className?: string;
    scrambleProps?: {
        speed?: number;
        tick?: number;
        step?: number;
        scramble?: number;
        seed?: number;
        range?: [number, number];
        overdrive?: boolean;
        replayOnHover?: boolean;
    };
}

export function CycleText({ 
    texts, 
    duration = 3, 
    className,
    scrambleProps = {}
}: CycleTextProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (texts.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, duration * 1000);

        return () => clearInterval(interval);
    }, [texts.length, duration]);

    if (texts.length === 0) return null;

    return (
        <ScrambleText 
            text={texts[currentIndex]} 
            className={className}
            {...scrambleProps}
        />
    );
}

export function CycleTextBlend({ 
    texts, 
    duration = 3, 
    className,
    scrambleProps = {}
}: CycleTextProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (texts.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, duration * 1000);

        return () => clearInterval(interval);
    }, [texts.length, duration]);

    if (texts.length === 0) return null;

    return (
        <div className={className}
              style={{ "--glitch-offset-y": "3px" } as React.CSSProperties}
            >
              <BlendText 
                className="group cursor-pointer"
                mainTextClassName="relative z-0 text-text-blend-secondary"
                layers={[
                  {
                    className: "text-red mix-blend-screen animate-glitch group-hover:animate-[glitch-erratic_0.3s_both_1]",
                    position: { x: -4, y: 2 },
                  },
                  {
                    className: "text-blue mix-blend-screen animate-glitch-reverse group-hover:animate-[glitch-erratic_0.3s_both_1]",
                    position: { x: 2, y: -3 },
                  },
                ]}
              >
                <MultiSliceText 
                  slices={3}
                  maxOffset={8}
                  className="text-3xl"
                  reRenderOnHover={true}
                >
                    <ScrambleText 
                        text={texts[currentIndex]} 
                        {...scrambleProps}
                    />
                </MultiSliceText>
              </BlendText>
            </div>
    );
}