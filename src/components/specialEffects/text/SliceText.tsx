"use client";

import { useEffect, useState, useMemo } from "react";

interface SliceTextProps {
  text: string;
  className?: string;
}

export function SliceText({ text, className }: SliceTextProps) {
  return (
    <div className={`relative inline-block font-bold text-4xl ${className}`}>
      {/* Top slice */}
      <span
        className="absolute top-0 left-0 w-full overflow-hidden"
        style={{ clipPath: "inset(0 0 50% 0)" }}
      >
        {text}
      </span>

      {/* Bottom slice, shifted slightly */}
      <span
        className="absolute top-0 left-1 w-full overflow-hidden"
        style={{ clipPath: "inset(50% 0 0 0)" }}
      >
        {text}
      </span>

      {/* Invisible base text (to keep layout size) */}
      <span className="invisible">{text}</span>
    </div>
  );
}

interface MultiSliceTextProps {
  text: string;
  slices?: number; // default: 4
  minOffset?: number; // px
  maxOffset?: number; // px
  className?: string;
  reRenderOnHover?: boolean; // default: false
  randomizeHeights?: boolean; // default: false
}

export function MultiSliceText({
  text,
  slices = 4,
  minOffset = 4,
  maxOffset = 8,
  className,
  reRenderOnHover = false,
  randomizeHeights = false,
}: MultiSliceTextProps) {
  const [offsets, setOffsets] = useState<number[]>([]);
  const [slicePositions, setSlicePositions] = useState<{ top: number; bottom: number }[]>([]);
  const sliceHeight = 100 / slices;

  const generateOffsets = () => {
    const newOffsets = Array.from({ length: slices }).map(() => 
      (Math.random() < 0.5 ? 1 : -1) * (Math.random() * (maxOffset - minOffset) + minOffset)
    );
    setOffsets(newOffsets);
  };

  const generateSlicePositions = () => {
    if (randomizeHeights) {
      const positions: { top: number; bottom: number }[] = [];
      let currentTop = 0;
      
      for (let i = 0; i < slices; i++) {
        if (i === slices - 1) {
          // Last slice takes up all remaining height
          positions.push({ top: currentTop, bottom: 0 });
        } else {
          const minHeight = 10; // minimum 10% height
          const maxHeight = 90; // maximum 30% height
          const height = Math.random() * (maxHeight - minHeight) + minHeight;
          const bottom = Math.min(100, currentTop + height);
          
          positions.push({ top: currentTop, bottom: 100 - bottom });
          currentTop = bottom;
        }
      }
      
      setSlicePositions(positions);
    } else {
      const positions = Array.from({ length: slices }).map((_, i) => ({
        top: i * sliceHeight,
        bottom: 100 - (i + 1) * sliceHeight,
      }));
      setSlicePositions(positions);
    }
  };

  useEffect(() => {
    generateOffsets();
    generateSlicePositions();
  }, [slices, maxOffset, randomizeHeights]);

  const handleMouseEnter = () => {
    if (reRenderOnHover) {
      generateOffsets();
      if (randomizeHeights) {
        generateSlicePositions();
      }
    }
  };

  const handleMouseLeave = () => {
    if (reRenderOnHover) {
      setOffsets(new Array(slices).fill(0));
      if (randomizeHeights) {
        generateSlicePositions(); // regenerate positions to reset to normal
      }
    }
  };

  return (
    <div 
      className={`relative inline-block font-bold text-4xl ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {Array.from({ length: slices }).map((_, i) => {
        const position = slicePositions[i] || { top: i * sliceHeight, bottom: 100 - (i + 1) * sliceHeight };
        const offset = offsets[i] || 0; // fallback to 0 during SSR
        return (
          <span
            key={i}
            className="absolute top-0 left-0 w-full overflow-hidden"
            style={{
              clipPath: `inset(${position.top}% 0 ${position.bottom}% 0)`,
              transform: `translateX(${offset}px)`,
            }}
          >
            {text}
          </span>
        );
      })}

      {/* Invisible base for spacing */}
      <span className="invisible">{text}</span>
    </div>
  );
}


interface OscillatingSliceTextProps {
  text: string;
  slices?: number;
  maxOffset?: number;
  className?: string;
}

export function OscillatingSliceText({
  text,
  slices = 6,
  maxOffset = 10,
  className,
}: OscillatingSliceTextProps) {
  const sliceHeight = 100 / slices;

  return (
    <div className={`relative inline-block font-bold text-4xl ${className}`}>
      {Array.from({ length: slices }).map((_, i) => {
        const top = i * sliceHeight;
        const bottom = 100 - (i + 1) * sliceHeight;
        return (
          <span
            key={i}
            className="absolute top-0 left-0 w-full overflow-hidden animate-[slice-text_2s_infinite]"
            style={{
              clipPath: `inset(${top}% 0 ${bottom}% 0)`,
              animationDelay: `${i * 0.1}s`,
              transform: `translateX(${(i % 2 === 0 ? 1 : -1) * maxOffset}px)`,
            }}
          >
            {text}
          </span>
        );
      })}

      <span className="invisible">{text}</span>
    </div>
  );
}

type Props = {
  text: string;
  slices?: number;       // number of rolling bars
  bandHeightPct?: number; // 4–20 is typical
  maxOffset?: number;   // horizontal displacement range
  durationSec?: number;
  className?: string;     // font size, weight, color, etc.
};

export function RollingSliceText({
  text,
  slices = 3,
  bandHeightPct = 5,
  maxOffset = 2,
  durationSec = 6,
  className,
}: Props) {
  const [bars, setBars] = useState<{ dx: number; delay: number }[]>([]);

  useEffect(() => {
    const newBars = Array.from({ length: slices }).map((_, i) => ({
      dx: (Math.random() * 2 - 1) * maxOffset,
      delay: (i * durationSec) / slices,
    }));
    setBars(newBars);
  }, [slices, maxOffset, durationSec]);

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Base text */}
      <span className="relative z-0">{text}</span>

      {/* Rolling bars */}
      {bars.map(({ dx, delay }, i) => (
        <span
          key={i}
          className="glitch-bar z-10 bg-background"
          style={
            {
              // CSS vars for this bar
              ["--dx" as any]: `${dx}px`,
              ["--dur" as any]: `${durationSec}s`,
              ["--delay" as any]: `${delay}s`,
              ["--h" as any]: `${bandHeightPct}%`,
            }
          }
        >
          {text}
        </span>
      ))}
    </div>
  );
}
