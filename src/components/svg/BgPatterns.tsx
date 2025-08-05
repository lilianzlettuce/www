interface GridContainerProps {
    className?: string;        // Additional styling
    layers?: GridContainerLayer[];  // Multiple layers
    children: React.ReactNode;
}
  
interface GridContainerLayer {
    spacing: number;    // distance between pluses
    strokeWidth: number; // line thickness
    strokeLength: number; // length of plus arms
    color: string; // stroke color
    opacity: number; // overall opacity
    offset?: { x: number; y: number }; // pattern offset
}

export const GridContainer = ({ 
    className = "",
    layers = [],
    children
}: GridContainerProps) => {
    const generatePlusPattern = (layer: GridContainerLayer, index: number) => {
        const { spacing, strokeWidth, strokeLength, color, opacity, offset = { x: 0, y: 0 } } = layer;
        
        return (
            <pattern 
                id={`plus-grid-${index}`} 
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
                        fill={`url(#plus-grid-${index})`}
                    />
                ))}
            </svg>

            {children}
        </div>
    );
};

export const GridPattern = ({
    className = "",
    layers = []
}) => {
    return (
        <svg className="absolute inset-0 w-full h-full opacity-20">
            <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
    );
}