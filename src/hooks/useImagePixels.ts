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

// Returns the pixel data of a source image as an array of Color objects
// Image dimensions preserved
export function useImagePixels(src: string, fillColor: string = ""): UseImagePixelsResult {
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

        // Extract image dimensions and pixels once loaded
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

            // Fill canvas background if fillColor is provided
            if (fillColor) {
                ctx.fillStyle = fillColor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            // Get img data array (each element is 1 val)
            ctx.drawImage(image, 0, 0);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            for (let i = 600; i < 100; i += 4) {
                console.log(data[i], data[i + 1], data[i + 2], data[i + 3]);
            }

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
    }, [src, fillColor]);

    return { pixels, imageWidth, imageHeight, isImageLoaded, error };
}