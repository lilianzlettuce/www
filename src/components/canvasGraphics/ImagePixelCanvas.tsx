import { useEffect, useRef, useState } from "react";

type RGBAPixel = {
  r: number;
  g: number;
  b: number;
  a: number;
};

interface ImagePixelCanvasProps {
  src: string;
  onPixelsExtracted?: (pixels: RGBAPixel[], width: number, height: number) => void;
}

const ImagePixelCanvas: React.FC<ImagePixelCanvasProps> = ({ src, onPixelsExtracted }) => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [pixels, setPixels] = useState<RGBAPixel[]>([]);

  useEffect(() => {
    const image = imageRef.current;
    const canvas = canvasRef.current;

    if (!image || !canvas) return;

    image.onload = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = image.width;
      canvas.height = image.height;

      ctx.drawImage(image, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      const rgbPixels: RGBAPixel[] = [];
      for (let i = 0; i < data.length; i += 4) {
        rgbPixels.push({
          r: data[i],
          g: data[i + 1],
          b: data[i + 2],
          a: data[i + 3],
        });
      }

      setPixels(rgbPixels);

      if (onPixelsExtracted) {
        onPixelsExtracted(rgbPixels, canvas.width, canvas.height);
      }
    };

    image.src = src;
  }, [src, onPixelsExtracted]);

  return (
    <>
      <img ref={imageRef} src={src} alt="source" style={{ display: "none" }} crossOrigin="anonymous" />
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </>
  );
};

export default ImagePixelCanvas;
