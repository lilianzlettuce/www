"use client";

import React, { useState } from "react";

interface SpriteProps {
  id: string; // unique id 
  spriteSize?: number; // size of each sprite frame in pixels
  backgroundImage: string; // URL of the sprite sheet
  steps?: number; // number of animation frames
  duration?: number; // animation duration in seconds
  fillMode?: "forwards" | "backwards" | "both" | "none"; // CSS animation-fill-mode
  iterationCount?: string; // CSS animation-iteration-count
  className?: string;
  style?: React.CSSProperties;
  onHover?: boolean; // whether to use hover animation
  hoverSteps?: number; 
  hoverDuration?: number;
  hoverBackgroundImage?: string; // different sprite sheet for hover animation
  hoverIterationCount?: string;
}

const Sprite: React.FC<SpriteProps> = ({
  id,
  spriteSize = 32,
  backgroundImage,
  steps = 2,
  duration = 1,
  fillMode = "forwards",
  iterationCount = "infinite",
  className = "",
  style = {},
  onHover = false,
  hoverSteps = 2,
  hoverDuration = 0.2,
  hoverBackgroundImage
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Calculate total width of sprite sheet
  const spriteSheetWidth = spriteSize * steps;
  const hoverSpriteSheetWidth = spriteSize * hoverSteps;
  
  // Set unique animation names to avoid conflicts
  const idleAnimationName = `sprite-idle-${id}`;
  const hoverAnimationName = `sprite-hover-${id}`;

  // Determine which background image and animation to use
  const currentBackgroundImage = isHovered && hoverBackgroundImage 
    ? hoverBackgroundImage 
    : backgroundImage;
  
  const currentSpriteSheetWidth = isHovered && hoverBackgroundImage 
    ? hoverSpriteSheetWidth 
    : spriteSheetWidth;

  const finite = iterationCount !== "infinite";
  const backgroundSize = finite ? `${currentSpriteSheetWidth + spriteSize}px ${spriteSize}px` : `${currentSpriteSheetWidth}px ${spriteSize}px`;

  return (
    <>
      <div
        className={`sprite ${className}`}
        style={{
          width: `${spriteSize}px`,
          height: `${spriteSize}px`,
          backgroundImage: `url(${currentBackgroundImage})`,
          backgroundSize: backgroundSize,
          imageRendering: "pixelated",
          animation: isHovered && onHover
            ? `${hoverAnimationName} ${hoverDuration}s steps(${hoverSteps}) ${iterationCount} ${fillMode}`
            : `${idleAnimationName} ${duration}s steps(${steps}) ${iterationCount} ${fillMode}`,
          ...style
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      
      <style jsx>{`
        @keyframes ${idleAnimationName} {
          from { 
            background-position: 0px 0px; 
          }
          to { 
            background-position: -${spriteSheetWidth}px 0px; 
          }
        }
        
        @keyframes ${hoverAnimationName} {
          from { 
            background-position: 0px 0px; 
          }
          to { 
            background-position: -${hoverSpriteSheetWidth}px 0px; 
          }
        }
      `}</style>
    </>
  );
};

export default Sprite; 