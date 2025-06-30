"use client";

import { useMousePosition } from "@/hooks/useMousePosition";
import { useCanvas } from "@/hooks/useCanvas";

function draw(ctx: CanvasRenderingContext2D, 
    mousePosition: { x: number, y: number }, 
    width: number, 
    height: number,
    numRows: number,
    numCols: number
) {
    // Clear and set up canvas
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "black";

    for (let i = 0; i < numRows; i++) {
        let y = i * height / numRows;
        for (let j = 0; j < numCols; j++) {
            let x = j * width / numCols;

            // Draw circle
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath();
        }
    }

    // Draw a circle
    /*ctx.beginPath();
    ctx.arc(mousePosition.x, mousePosition.y, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();*/
}

const CirclesCanvas = ({ numRows = 10, numCols = 10 }: { numRows?: number, numCols?: number }) => {
    const width = 400;
    const height = 400;

    const mousePosition = useMousePosition(); // Get mouse position
    const { canvasRef, ctx } = useCanvas({ width, height }); // Create canvas

    const circles = Array.from({ length: 100 }, (_, index) => ({
        id: index,
        x: mousePosition.x + Math.random() * 100 - 50,
        y: mousePosition.y + Math.random() * 100 - 50,
    }));

    if (mousePosition && ctx) {
        draw(ctx, mousePosition, width, height, numRows, numCols);
    }
    
    return (
        <canvas ref={canvasRef} className="w-full h-full" />
    )
}

export default CirclesCanvas;