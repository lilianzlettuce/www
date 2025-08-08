"use client";

import React, { useState } from "react";

interface SpriteProps {
  id: string; // unique id 
  spriteSize?: number; // size of each sprite frame in pixels
  numRows?: number; // number of rows in the sprite sheet
  numCols?: number; // number of columns in the sprite sheet
  backgroundImage: string; // URL of the sprite sheet
  numFrames?: number; // number of animation frames
  duration?: number; // animation duration in seconds
  fillMode?: "forwards" | "backwards" | "both" | "none"; // CSS animation-fill-mode
  iterationCount?: string; // CSS animation-iteration-count
  className?: string;
  style?: React.CSSProperties;
  onHover?: boolean; // whether to use hover animation
  hoverNumFrames?: number; 
  hoverDuration?: number;
  row?: number; // which row the default animation is on (0-indexed)
  hoverRow?: number; // which row the hover animation is on (0-indexed)
  hoverIterationCount?: string;
}

const Sprite = ({
  id,
  spriteSize = 32,
  numRows = 1,
  numCols = 1,
  backgroundImage,
  numFrames = 2,
  duration = 1,
  fillMode = "forwards",
  iterationCount = "infinite",
  className = "",
  style = {},
  onHover = false,
  hoverNumFrames = 2,
  hoverDuration = 0.2,
  row = 0,
  hoverRow = 0
}: SpriteProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Calculate total width and height of sprite sheet
  const spriteSheetWidth = spriteSize * numCols;
  const spriteSheetHeight = spriteSize * numRows;

  // Calculate number of steps for the animation
  const infinite = iterationCount === "infinite";
  const steps = infinite ? numFrames : numFrames - 1;
  const hoverSteps = infinite ? hoverNumFrames : hoverNumFrames - 1;

  // Calculate width and height of the different sprite sheets
  const defaultAnimSheetWidth = spriteSize * steps; 
  const hoverAnimSheetWidth = spriteSize * hoverSteps;
  
  // Set unique animation names to avoid conflicts
  const idleAnimationName = `sprite-idle-${id}`;
  const hoverAnimationName = `sprite-hover-${id}`;

  // Calculate row positions for background-position
  const currentRow = isHovered && onHover ? hoverRow : row;
  const rowPosition = currentRow * spriteSize;

  const backgroundSize = `${spriteSheetWidth}px ${spriteSheetHeight}px`;

  return (
    <>
      <div
        className={`sprite ${className}`}
        style={{
          width: `${spriteSize}px`,
          height: `${spriteSize}px`,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: backgroundSize,
          backgroundPosition: `0px -${rowPosition}px`,
          backgroundRepeat: "no-repeat",
          imageRendering: "pixelated",
          animation: isHovered && onHover
            ? `${hoverAnimationName} ${hoverDuration}s steps(${hoverSteps}) ${iterationCount} ${fillMode}`
            : `${idleAnimationName} ${duration}s steps(${steps}) ${iterationCount} ${fillMode}`,
          ...style
        }}
        onMouseEnter={() => {
          setIsHovered(true);
          console.log("mouse entered");
        }}
        onMouseLeave={() => setIsHovered(false)}
      />
      
      <style jsx>{`
        @keyframes ${idleAnimationName} {
          from { 
            background-position: 0px -${row * spriteSize}px; 
          }
          to { 
            background-position: -${defaultAnimSheetWidth}px -${row * spriteSize}px; 
          }
        }
        
        @keyframes ${hoverAnimationName} {
          from { 
            background-position: 0px -${hoverRow * spriteSize}px; 
          }
          to { 
            background-position: -${hoverAnimSheetWidth}px -${hoverRow * spriteSize}px; 
          }
        }
      `}</style>
    </>
  );
}

export default Sprite; 