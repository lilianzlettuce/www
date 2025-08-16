interface ChromaticLayer {
  color: string;
  position: { x: number; y: number };
  blendMode?: "screen" | "difference" | "multiply" | "overlay" | "normal";
  filter?: string;
  animation?: string;
}

interface ChromaticAberrationTextProps {
  children: string;
  layers?: ChromaticLayer[];
  className?: string;
  baseColor?: string;
  fontFamily?: string;
  fontSize?: string;
  textTransform?: string;
}

const ChromaticAberrationText = ({
  children,
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
}: ChromaticAberrationTextProps) => {
  return (
    <div
      className={`relative ${className}`}
    >
      {/* Base text */}
      <span className="relative z-10">{children}</span>
      
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

export default ChromaticAberrationText;
