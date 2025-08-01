"use client";
import React, { useRef, useState, useEffect } from "react";

export function DraggableWindow() {
    const windowRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const offset = useRef({ x: 0, y: 0 });

    useEffect(() => {
        // Set up window level event listeners for dragging
        const handleMouseMove = (e: MouseEvent) => {
            if (!dragging || !windowRef.current) return;

            // Update position based on top left corner of window
            setPosition({
                x: e.clientX - offset.current.x,
                y: e.clientY - offset.current.y,
            });
        };
        const handleMouseUp = () => {
            setDragging(false);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [dragging]);

    // Detect when mouse down over handle
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!windowRef.current) return;
        offset.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        };
        setDragging(true);
    };

    return (
        <div
            ref={windowRef}
            className="relative w-[300px] bg-[#1e1e1e] text-white border border-[#444] rounded-lg shadow-lg z-[1000]"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        >
            <div
                onMouseDown={handleMouseDown}
                className="p-2.5 cursor-grab bg-[#333] border-b border-[#444] rounded-t-lg select-none"
            >
                Drag Handle
            </div>
            <div className="p-5">
                <p>This is a draggable window.</p>
            </div>
        </div>
  );
}
