"use client";
import React, { useEffect, useRef, useState, ReactNode } from "react";

interface DraggableProps {
  children: ReactNode;
}

const Draggable: React.FC<DraggableProps> = ({ children }) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const handleRef = useRef<HTMLElement | null>(null);
    const offset = useRef({ x: 0, y: 0 });
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);

    useEffect(() => {
        if (!wrapperRef.current) return;

        // Look for a child element with class "handle"
        handleRef.current = wrapperRef.current.querySelector(".handle") as HTMLElement | null;

        if (!handleRef.current) {
            console.warn("No handle found inside <Draggable>. Dragging will be disabled.");
            return;
        }

        const handle = handleRef.current;

        const onMouseDown = (e: MouseEvent) => {
            offset.current = {
                x: e.clientX - position.x,
                y: e.clientY - position.y,
            };
            setDragging(true);
        };

        const onMouseMove = (e: MouseEvent) => {
            if (!dragging) return;
            setPosition({
                x: e.clientX - offset.current.x,
                y: e.clientY - offset.current.y,
            });
        };

        const onMouseUp = () => setDragging(false);

        handle.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);

        return () => {
            handle.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
        };
    }, [dragging]);

    return (
        <div
            ref={wrapperRef}
            className="relative"
            style={{
                left: position.x,
                top: position.y,
                cursor: dragging ? "grabbing" : undefined,
            }}
        >
            {children}
        </div>
    );
};

export default Draggable;
