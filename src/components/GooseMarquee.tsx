"use client";

import React from "react";
import Sprite from "./Sprite";

interface GooseMarqueeProps {
  duration?: number; // pixels per second
  count?: number; // number of goose sprites visible at once
  className?: string;
  scale?: number;
}

const GooseMarquee: React.FC<GooseMarqueeProps> = ({ 
  duration = 50, 
  count = 5, 
  className = "",
  scale = 3
}) => {

  return (
    <div className={`w-fit overflow-hidden ${className}`}
        style={{
          height: `${scale * 32}px`,
        }}
    >
      <div 
        className="w-fit h-full flex whitespace-nowrap relative"
      >
        {/* First set of goose sprites */}
        <div 
          className="w-screen h-full flex flex-row items-center justify-around"
          style={{
            animation: `marquee ${duration}s linear infinite`,
          }}
        >
          {Array.from({ length: count }, (_, index) => (
            <Sprite
              key={`goose-1-${index}`}
              className={`goose-1-${index}`}
              spriteSize={32}
              backgroundImage="/img/sprite/goose-walk2.png"
              steps={4}
              duration={1}
              style={{
                scale: scale,
              }}
            />
          ))}
        </div>
        
        {/* Second set of goose sprites (duplicate for seamless loop) */}
        <div 
          className="w-screen h-full flex flex-row items-center justify-around"
          style={{
            animation: `marquee ${duration}s linear infinite`,
          }}
        >
          {Array.from({ length: count }, (_, index) => (
            <Sprite
              key={`goose-2-${index}`}
              className={`goose-1-${index}`}
              spriteSize={32}
              backgroundImage="/img/sprite/goose-walk2.png"
              steps={4}
              duration={1}
              style={{
                scale: scale,
              }}
            />
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default GooseMarquee; 