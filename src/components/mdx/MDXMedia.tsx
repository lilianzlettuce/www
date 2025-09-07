// components/MDXMedia.tsx
import Image from "next/image";
import { DeviceMockup } from "./DeviceMockup";
import BoxCorners from "../svg/BoxCorners";

interface MDXMediaProps {   
  src: string;
  alt: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
  sizes?: string;
  preset?: "hero" | "header" | "project-documentation" | "thumbnail";
  frame?: "none" | "mockup" | string;
  className?: string;
  isVideo?: boolean;
  thumbnail?: string;
  autoPlay?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  loop?: boolean;
  preload?: "none" | "metadata" | "auto";
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
}: MDXMediaProps) {
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
          className="w-full h-full object-cover object-top"
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
          className="w-full h-full object-cover object-top"
        />
      </div>
    )
  );
}

export function BaseVideo({ 
  src, 
  alt, 
  aspectRatio, 
  width, 
  height, 
  thumbnail,
  autoPlay = true,
  muted = true,
  playsInline = true,
  loop = false,
  preload = "metadata",
  className 
}: MDXMediaProps) {
  return (
    width && height ? (
      <div 
        className={`relative w-full overflow-hidden ${className || ""}`} 
        style={{ aspectRatio }}
      >
        <video
          src={src}
          poster={thumbnail}
          autoPlay={autoPlay}
          muted={muted}
          playsInline={playsInline}
          loop={loop}
          preload={preload}
          className="w-full h-full object-cover object-top"
          aria-label={alt}
        />
      </div>
    ) : (
      <div
        className={`relative w-full ${className || ""}`}
        style={{ aspectRatio: aspectRatio ?? "3/2" }}
      >
        <video
          src={src}
          poster={thumbnail}
          autoPlay={autoPlay}
          muted={muted}
          playsInline={playsInline}
          preload={preload}
          className="w-full h-full object-cover object-top"
          aria-label={alt}
        />
      </div>
    )
  );
}

export function MDXMedia({ 
  frame = "none", 
  className,
  baseImageClassName,
  isVideo = false,
  ...props 
}: MDXMediaProps & { baseImageClassName?: string }) {
  const MediaComponent = isVideo ? BaseVideo : BaseImage;

  if (frame === "none") {
    return (
      <div className={`${className || ""}`}>
        <MediaComponent {...props} className={baseImageClassName} />
      </div>
    );
  }

  if (frame === "mockup") {
    return (
      <div className="w-full flex justify-center">
        <DeviceMockup className={`${className || ""}`}>
          <MediaComponent {...props} className={baseImageClassName} />
        </DeviceMockup>
      </div>
    );
  }

  // If frame is a color string, wrap in a div with padding and background color
  return (
    <div 
      className={`${className || "p12"} relative`}
      style={{ backgroundColor: frame }}
    >
      <BoxCorners
        icon={<div className="w-full h-full border-t-1 border-l-1 border-muted-foreground"></div>}
        cornerSize="8px"
        cornerOffset="-1px"
        cornerColor="transparent"
      /> 
      {/*<BoxCorners
          cornerSize="4px"
          cornerOffset="-2px"
          cornerColor="var(--secondaryForeground)"
      />*/}
      <MediaComponent {...props} className={baseImageClassName} />
    </div>
  );
};