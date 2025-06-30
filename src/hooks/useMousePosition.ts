"use client";

import { useEffect, useState } from "react";

// Custom hook to get mouse position
export function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        }

        // Update position on mouse move
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            // Cleanup function, runs on unmount
            window.removeEventListener("mousemove", handleMouseMove);
        }
    }, []);

    return mousePosition;
}