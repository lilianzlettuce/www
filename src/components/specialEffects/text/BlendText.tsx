interface TextLayer {
  className?: string;
  position: { x: number; y: number };
}

interface BlendTextProps {
  children: string | React.ReactNode; // text to display
  mainTextClassName?: string;
  layers?: TextLayer[];
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
      className: "text-red mix-blend-screen",
      position: { x: 8, y: 2 },
    },
    {
      className: "text-blue mix-blend-screen",
      position: { x: 12, y: -2 },
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
          className={`absolute inset-0 pointer-events-none ${layer.className}`}
          style={{
            transform: `translate(${layer.position.x}px, ${layer.position.y}px)`,
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
