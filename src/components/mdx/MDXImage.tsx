// components/MDXImage.tsx
import Image from "next/image";

interface MDXImageProps {   
  src: string;
  alt: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
  sizes?: string;
  preset?: "hero" | "project-documentation" | "thumbnail";
}


const presets = {
  hero: {
    width: undefined,
    height: undefined,
    sizes: "100vw"
  },
  "project-documentation": {
    width: 1200,
    height: 800,
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 600px, 600px"
  },
  thumbnail: {
    width: 400,
    height: 300,
    sizes: "(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
  }
};

export function MDXImage({ 
  src, 
  alt, 
  aspectRatio, 
  width, 
  height, 
  sizes, 
  preset 
}: MDXImageProps) {
  const presetConfig = preset ? presets[preset] : null;
  const finalSizes = sizes ?? presetConfig?.sizes ?? "(max-width: 768px) 100vw, 50vw";

  return (
    width && height ? (
      <div className="relative w-full" style={{ aspectRatio }}>
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
        className="relative w-full"
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

export function MDXImageFillAspectRatio({ 
  src, 
  alt, 
  aspectRatio = "3/2", 
  sizes, 
  preset 
}: MDXImageProps) {
  const presetConfig = preset ? presets[preset] : null;
  const finalSizes = sizes ?? presetConfig?.sizes ?? "(max-width: 768px) 100vw, 50vw";

  return (
    <div className="relative w-full"
      style={{
        aspectRatio: aspectRatio,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={finalSizes}
        className="object-cover"
      />
    </div>
  );
}