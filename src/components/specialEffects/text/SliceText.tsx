// components/SliceText.tsx
import React from "react";

interface SliceTextProps {
  text: string;
  className?: string;
}

export default function SliceText({ text, className }: SliceTextProps) {
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
