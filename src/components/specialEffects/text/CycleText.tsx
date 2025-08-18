"use client";

import { useState, useEffect } from "react";
import ScrambleText from "./ScrambleText";

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
    };
}

export default function CycleText({ 
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
