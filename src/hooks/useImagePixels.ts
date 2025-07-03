"use client";

import { useEffect, useState } from "react";
import { Color } from "@/lib/colorProcessing";

interface UseImagePixelsResult {
  pixels: Color[];
  imageWidth: number;
  imageHeight: number;
  isImageLoaded: boolean;
  error: string | null;
}

export function useImagePixels(src: string): UseImagePixelsResult {
    const [pixels, setPixels] = useState<Color[]>([]);
    const [imageWidth, setimageWidth] = useState(0);
    const [imageHeight, setimageHeight] = useState(0);
    const [isImageLoaded, setisImageLoaded] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Load and process image
    useEffect(() => {
        if (!src) return;

        const image = new Image();
        image.crossOrigin = "anonymous";

        image.onload = () => {
            // Draw image to ghost canvas to get the image data (pixels)
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            if (!ctx) {
                setError("Canvas context could not be created.");
                return;
            }

            canvas.width = image.width;
            canvas.height = image.height;
            setimageWidth(image.width);
            setimageHeight(image.height);

            // Get img data array (each element is 1 val)
            ctx.drawImage(image, 0, 0);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            // Convert data array to pixel color array
            const rgbPixels: Color[] = [];
            for (let i = 0; i < data.length; i += 4) {
                rgbPixels.push({
                r: data[i],
                g: data[i + 1],
                b: data[i + 2],
                a: data[i + 3] / 255,
                });
            }

            setPixels(rgbPixels);
            setisImageLoaded(true);
        };

        image.onerror = () => {
            setError(`Failed to load image: ${src}`);
        };

        image.src = src;

        // Cleanup on unmount
        return () => {
            setPixels([]);
            setisImageLoaded(false);
            setError(null);
        };
    }, [src]);

    return { pixels, imageWidth, imageHeight, isImageLoaded, error };
}