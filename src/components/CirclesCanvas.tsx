"use client";

import { useEffect } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useCanvas } from "@/hooks/useCanvas";
import { useAnimationFrame } from "@/hooks/useAnimationFrame";

function draw(
    ctx: CanvasRenderingContext2D, 
    mousePosition: { x: number, y: number }, 
    width: number, 
    height: number,
    top: number,
    left: number,
    numRows: number,
    numCols: number
) {
    // Calculate relative mouse position
    const relMousePos = {
        x: mousePosition.x - left,
        y: mousePosition.y - top
    }
    //console.log(relMousePos.x, relMousePos.y);

    // Clear and set up canvas
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "black";

    let defaultRadius = 3; // circle radius
    for (let i = 0; i < numRows; i++) {
        let y = i * height / numRows + 10; // circle x pos

        for (let j = 0; j < numCols; j++) {
            let x = j * width / numCols + 10; // circle y pos

            // Calculate distance circle is from mouse
            let dist = Math.sqrt(Math.pow(x - relMousePos.x, 2) + Math.pow(y - relMousePos.y, 2));
            let r = defaultRadius * Math.pow(dist, 1.4) * 0.001;
            //r = defaultRadius * dist * 0.01;
            //r = defaultRadius * Math.pow(500 - dist, 1.4) * 0.001

            // Draw circle
            ctx.beginPath();
            ctx.arc(x, y, r, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath();
        }
    }
}

const CirclesCanvas = ({ numRows = 10, numCols = 20 }: { numRows?: number, numCols?: number }) => {
    // Actual canvas size
    const ogWidth = 800;
    const ogHeight = 400;

    const mousePosition = useMousePosition(); // Get mouse position
    const { canvasRef, ctx, width, height, top, left } = useCanvas({ width: ogWidth, height: ogHeight }); // Create canvas

    /*if (mousePosition && ctx) {
        draw(ctx, mousePosition, width, height, top, left, numRows, numCols);
    }*/

    /*useEffect(() => {
        if (!ctx) return;
        draw(ctx, mousePosition, width, height, top, left, numRows, numCols);
    }, [ctx, mousePosition, width, height, top, left]);*/

    useAnimationFrame((t) => {
        if (!ctx) return;
        draw(ctx, mousePosition, width, height, top, left, numRows, numCols);
    });
      
    
    return (
        <canvas ref={canvasRef} className="w-full h-full" />
    )
}

export default CirclesCanvas;