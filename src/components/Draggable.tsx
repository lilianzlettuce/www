// Draggable wrapper component (for windows)

"use client";
import React, { useRef, ReactNode, useState } from "react";
import { motion, useDragControls } from "motion/react";

interface DraggableProps {
  children: ReactNode;
  className?: string;
}

export default function Draggable ({ children, className }: DraggableProps) {
    const dragControls = useDragControls();
    const wrapperRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = (e: React.PointerEvent) => {
        // Check if the clicked element or its parent has the "handle" class
        const target = e.target as HTMLElement;
        
        if (target.closest(".handle")) {
            dragControls.start(e);
        }
    };

    return (
        <motion.div
            ref={wrapperRef}
            className={`relative ${className || ""}`}
            drag
            dragControls={dragControls}
            dragListener={false}
            dragElastic={0}
            dragMomentum={false}
            whileDrag={{ scale: 1 }}
            onPointerDown={handleMouseDown}
            style={{ touchAction: "none" }}
        >
            {children}
        </motion.div>
    );
};