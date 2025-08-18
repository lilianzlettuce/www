interface GridContainerProps {
    className?: string;        // Additional styling
    layers?: GridContainerLayer[];  // Multiple layers
    children: React.ReactNode;
    id: string;
}
  
interface GridContainerLayer {
    spacing: number;    // distance between pluses
    strokeWidth: number; // line thickness
    strokeLength: number; // length of plus arms
    color: string; // stroke color
    opacity: number; // overall opacity
    offset?: { x: number; y: number }; // pattern offset
}

// Container with customizable grid pattern.
// Takes in an array of layers and wraps child content
export const GridContainer = ({ 
    className = "",
    layers = [],
    children,
    id
}: GridContainerProps) => {
    const generatePlusPattern = (layer: GridContainerLayer, index: number) => {
        const { spacing, strokeWidth, strokeLength, color, opacity, offset = { x: 0, y: 0 } } = layer;
        
        return (
            <pattern 
                id={`${id}-${index}`} 
                patternUnits="userSpaceOnUse" 
                width={spacing} 
                height={spacing}
                patternTransform={`translate(${offset.x} ${offset.y})`}
            >
                <g stroke={color} strokeWidth={strokeWidth} opacity={opacity}>
                    {/* Horizontal line */}
                    <line 
                        x1={spacing/2 - strokeLength/2} 
                        y1={spacing/2} 
                        x2={spacing/2 + strokeLength/2} 
                        y2={spacing/2} 
                    />
                    {/* Vertical line */}
                    <line 
                        x1={spacing/2} 
                        y1={spacing/2 - strokeLength/2} 
                        x2={spacing/2} 
                        y2={spacing/2 + strokeLength/2} 
                    />
                </g>
            </pattern>
        );
    };

    return (
        <div className={`relative ${className}`}>
            <svg className="absolute inset-0 w-full h-full">
                <defs>
                    {/* Multiple layer patterns */}
                    {layers.map((layer, index) => (
                        <g key={index}>
                            {generatePlusPattern(layer, index)}
                        </g>
                    ))}
                </defs>
                
                {/* Multiple layer rects */}
                {layers.map((_, index) => (
                    <rect 
                        key={index}
                        width="100%" 
                        height="100%" 
                        fill={`url(#${id}-${index})`}
                    />
                ))}
            </svg>

            {children}
        </div>
    );
};

interface BgPatternProps {
    className?: string;
    children?: React.ReactNode; // overlay content
    patternTransform?: string; // transform applied to pattern
    offset?: { x: number; y: number }; // pattern offset
    dimensions?: { width: number; height: number }; // pattern dimensions (controls padding/frequency)
    strokeWidth?: number;
    stroke?: string;
    d?: string;
    fill?: string;
}

// Refactored: SVG pattern as background, overlay content as children
export const BgPattern = ({
    className = "",
    children,
    patternTransform,
    offset,
    dimensions,
    strokeWidth = 2,
    stroke = "currentColor",
    d = "M 20 0 L 0 0 0 20",
    fill = "none"
}: BgPatternProps) => {
    return (
        <div className={`relative ${className}`}>
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                    <pattern id="grid"
                        x={offset?.x ?? 0}
                        y={offset?.y ?? 0}
                        width={dimensions?.width ?? 40}
                        height={dimensions?.height ?? 40}
                        patternTransform={patternTransform ?? "rotate(45) scale(1 1)"}
                        patternUnits="userSpaceOnUse">
                        <path d={d} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
            {children}
        </div>
    );
};