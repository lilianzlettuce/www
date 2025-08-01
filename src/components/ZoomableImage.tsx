"use client";

import React, { useState, useRef } from "react";

interface ZoomableImageProps {
    src: string;
    alt?: string;
    backgroundSize?: number;
    initialX?: number;
    initialY?: number;
    useNextImage?: boolean;
    className?: string;
    draggable?: boolean;
}

// Component with zoomed-in draggable CSS background
export default function ZoomableImage ({
    src,
    alt = "",
    backgroundSize = 200,
    initialX = 0,
    initialY = 0,
    className = "",
    draggable = false
}: ZoomableImageProps) {
    // Position variables for dragging
    const [position, setPosition] = useState({ x: initialX, y: initialY });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    // Dragging event handlers
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
        });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        
        setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
        });
        //console.log(position); // for easy pos setting
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div
            ref={containerRef}
            className={`overflow-hidden ${className}`}
            style={{
                cursor: draggable ? (isDragging ? "grabbing" : "grab") : "default",
            }}
            onMouseDown={draggable ? handleMouseDown : undefined}
            onMouseMove={draggable ? handleMouseMove : undefined}
            onMouseUp={draggable ? handleMouseUp : undefined}
            onMouseLeave={draggable ? handleMouseUp : undefined}
        >
            {/* Image set through CSS background */}
            <div
                className="w-full h-full"
                role="img"
                aria-label={alt}
                style={{
                    backgroundImage: `url(${src})`,
                    backgroundSize: `${backgroundSize}px`,
                    backgroundPosition: `${position.x}px ${position.y}px`,
                    backgroundRepeat: "no-repeat",
                }}
            />
        </div>
    );
}; 