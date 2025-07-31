"use client";

import { useCanvas } from "@/hooks/useCanvas";
import { useRef, useEffect } from "react";
import { useImagePixels } from "@/hooks/useImagePixels";

interface ImageMaskProps {
  id?: string;
  imageSrc: string;
  maskColor?: string;
  gridGap?: number;
  pixelSize?: number;
  scaleFactor?: number;
}

const ImageMask = ({
  id,
  imageSrc,
  maskColor = "white",
  gridGap = 3,
  pixelSize = 2,
  scaleFactor = 1.2,
}: ImageMaskProps) => {
  const { pixels, imageWidth, imageHeight, isImageLoaded } = useImagePixels(imageSrc, "");

  // Calculate canvas dimensions (same logic as ShrinkCircles)
  let canvasDimensions;
  let imageDimensions;
  if (!imageSrc || !isImageLoaded || imageWidth === 0 || imageHeight === 0) {
    // Default canvas dimensions when no image is provided
    const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 800;
    const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 600;
    canvasDimensions = { 
      width: viewportWidth, 
      height: viewportHeight,
      imgScale: 1 
    };
    imageDimensions = {
      width: viewportWidth, 
      height: viewportHeight,
      imgScale: 1 
    };
  } else {
    // Calculate canvas dimensions based on image size
    const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 800;
    const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 600;
    
    // Calculate max dimensions that fit in viewport
    const maxWidth = viewportWidth * 0.9;
    const maxHeight = viewportHeight * 0.9;

    // Scale image within viewport
    const scaleX = maxWidth / imageWidth;
    const scaleY = maxHeight / imageHeight;
    const imgScale = Math.min(scaleX, scaleY, 1) * scaleFactor;
    imageDimensions = {
      width: Math.floor(imageWidth * imgScale),
      height: Math.floor(imageHeight * imgScale),
      imgScale,
    };
    canvasDimensions = { 
      width: Math.floor(imageWidth * imgScale),
      height: Math.floor(imageHeight * imgScale),
      imgScale,
    };
  }

  const { canvasRef, ctx, width: canvasWidth, height: canvasHeight } = useCanvas(
    { width: canvasDimensions.width, height: canvasDimensions.height }
  );

  // Draw mask when image loads or canvas dimensions change
  useEffect(() => {
    if (!ctx || canvasWidth === 0 || canvasHeight === 0) return;
    if (!isImageLoaded || pixels.length === 0) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Calculate number of rows and columns based on gridGap
    const numRows = Math.floor(canvasHeight / gridGap);
    const numCols = Math.floor(canvasWidth / gridGap);

    // Calculate corresponding image dimensions
    const numRowsImage = Math.floor(imageDimensions.height / gridGap);
    const numColsImage = Math.floor(imageDimensions.width / gridGap);

    // Draw mask pixels
    ctx.fillStyle = maskColor;
    
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        // Calculate position in canvas
        const x = j * gridGap;
        const y = i * gridGap;

        // Sample corresponding pixel from image
        if (j < numColsImage && i < numRowsImage) {
          const imageX = Math.floor((j / numColsImage) * imageWidth);
          const imageY = Math.floor((i / numRowsImage) * imageHeight);
          const pixelIndex = imageY * imageWidth + imageX;
          const pixel = pixels[pixelIndex];

          // Only draw if pixel has non-zero alpha
          if (pixel && pixel.a > 0.7) {
            ctx.globalAlpha = pixel.a;
            ctx.fillRect(x, y, pixelSize, pixelSize);
          }
        }
      }
    }
  }, [ctx, canvasWidth, canvasHeight, isImageLoaded, pixels, imageWidth, imageHeight, gridGap, pixelSize, maskColor, imageDimensions.imgScale]);

  return (
    <div>
      <canvas
        id={id}
        ref={canvasRef}
        className="w-screen h-screen"
      />
    </div>
  );
};

export default ImageMask; 