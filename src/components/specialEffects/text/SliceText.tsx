"use client";

import { useEffect, useState } from "react";

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
  maxOffset?: number; // px
  className?: string;
  reRenderOnHover?: boolean; // default: false
}

export function MultiSliceText({
  text,
  slices = 4,
  maxOffset = 8,
  className,
  reRenderOnHover = false,
}: MultiSliceTextProps) {
  const [offsets, setOffsets] = useState<number[]>([]);
  const sliceHeight = 100 / slices;

  const generateOffsets = () => {
    const newOffsets = Array.from({ length: slices }).map(() => 
      (Math.random() - 0.5) * 2 * maxOffset
    );
    setOffsets(newOffsets);
  };

  useEffect(() => {
    generateOffsets();
  }, [slices, maxOffset]);

  const handleMouseEnter = () => {
    if (reRenderOnHover) {
      generateOffsets();
    }
  };

  const handleMouseLeave = () => {
    if (reRenderOnHover) {
      setOffsets(new Array(slices).fill(0));
    }
  };

  return (
    <div 
      className={`relative inline-block font-bold text-4xl ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {Array.from({ length: slices }).map((_, i) => {
        const top = i * sliceHeight;
        const bottom = 100 - (i + 1) * sliceHeight;
        const offset = offsets[i] || 0; // fallback to 0 during SSR
        return (
          <span
            key={i}
            className="absolute top-0 left-0 w-full overflow-hidden"
            style={{
              clipPath: `inset(${top}% 0 ${bottom}% 0)`,
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


interface RollingSliceTextProps {
  text: string;
  slices?: number;
  maxOffset?: number;
  className?: string;
}

export function RollingSliceText({
  text,
  slices = 6,
  maxOffset = 10,
  className,
}: RollingSliceTextProps) {
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
