"use client";

import { useRef, useEffect, useState } from "react";

interface CanvasOptions {
  width?: number;
  height?: number;
}

export function useCanvas(options: CanvasOptions = {}) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
    const [size, setSize] = useState({ width: options.width || 0, height: options.height || 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext("2d");
        if (!context) return;
        setCtx(context);

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            const width = options.width || canvas.clientWidth;
            const height = options.height || canvas.clientHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            context.setTransform(1, 0, 0, 1, 0, 0); // Reset transform before scaling
            context.scale(dpr, dpr);
            setSize({ width, height });
        };

        resize();
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, [options.width, options.height]);

    return { canvasRef, ctx, ...size };
}