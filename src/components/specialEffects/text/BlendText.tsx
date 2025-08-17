interface ChromaticLayer {
  color: string;
  position: { x: number; y: number };
  blendMode?: "screen" | "overlay" | "normal" | "soft-light" | "hard-light" | "color-dodge" | "color-burn" | "difference" | "exclusion" | "hue" | "saturation" | "color" | "luminosity";
  filter?: string;
  animation?: string;
}

interface BlendTextProps {
  children: string; // text to display
  mainTextClassName?: string;
  layers?: ChromaticLayer[];
  className?: string;
  baseColor?: string;
  fontFamily?: string;
  fontSize?: string;
  textTransform?: string;
}

const BlendText = ({
  children,
  mainTextClassName = "",
  layers = [
    {
      color: "red",
      position: { x: 8, y: 2 },
      blendMode: "screen",
      filter: "blur(1px)",
    },
    {
      color: "blue",
      position: { x: 12, y: -2 },
      blendMode: "screen",
      filter: "blur(1px)",
    },
  ],
  className = "",
}: BlendTextProps) => {
  return (
    <div
      className={`relative ${className}`}
    >
      {/* Base text */}
      <span className={`relative ${mainTextClassName}`}>{children}</span>
      
      {/* Chromatic aberration layers */}
      {layers.map((layer, index) => (
        <div
          key={index}
          className="absolute inset-0 pointer-events-none"
          style={{
            color: layer.color,
            transform: `translate(${layer.position.x}px, ${layer.position.y}px)`,
            mixBlendMode: layer.blendMode || "screen",
            filter: layer.filter || "blur(1px)",
            animation: layer.animation || "none",
            zIndex: index + 1,
          }}
        >
          {children}
        </div>
      ))}
    </div>
  );
};

export default BlendText;
