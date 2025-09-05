// components/MDXImage.tsx
import Image from "next/image";
import { DeviceMockup } from "./DeviceMockup";

interface MDXImageProps {   
  src: string;
  alt: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
  sizes?: string;
  preset?: "hero" | "header" | "project-documentation" | "thumbnail";
  frame?: "none" | "mockup" | string;
  className?: string;
}


const presets = {
  hero: {
    width: 2560,
    height: 1664,
    sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 90vw, (max-width: 1280px) 90vw, 90vw"
  },
  header: {
    width: 2560,
    height: 1664,
    sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 60vw, (max-width: 1280px) 80vw, 90vw"
  },
  "project-documentation": {
    width: 1200,
    height: 800,
    sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 600px, 600px"
  },
  thumbnail: {
    width: 400,
    height: 300,
    sizes: "(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
  }
};

export function BaseImage({ 
  src, 
  alt, 
  aspectRatio, 
  width, 
  height, 
  sizes, 
  preset,
  className 
}: MDXImageProps) {
  const presetConfig = preset ? presets[preset] : null;
  const finalSizes = sizes ?? presetConfig?.sizes ?? "(max-width: 768px) 100vw, 50vw";

  return (
    width && height ? (
      <div className={`relative w-full overflow-hidden ${className || ""}`} style={{ aspectRatio }}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={finalSizes}
          className="w-full h-full object-cover"
        />
      </div>
    ) : (
      <div
        className={`relative w-full ${className || ""}`}
        style={{ aspectRatio: aspectRatio ?? "3/2" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={finalSizes}
          className="w-full h-full object-cover"
        />
      </div>
    )
  );
}

export function MDXImage({ 
  frame = "none", 
  className,
  baseImageClassName,
  ...props 
}: MDXImageProps & { baseImageClassName?: string }) {
  if (frame === "none") {
    return (
      <div className={`${className || ""}`}>
        <BaseImage {...props} className={baseImageClassName} />
      </div>
    );
  }

  if (frame === "mockup") {
    return (
      <div className="w-full flex justify-center">
        <DeviceMockup className={`${className || ""}`}>
          <BaseImage {...props} className={baseImageClassName} />
        </DeviceMockup>
      </div>
    );
  }

  // If frame is a color string, wrap in a div with padding and background color
  return (
    <div 
      className={`p-12 ${className || ""}`}
      style={{ backgroundColor: frame }}
    >
      <BaseImage {...props} className={baseImageClassName} />
    </div>
  );
};