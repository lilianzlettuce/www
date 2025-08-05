interface PlusGridProps {
    className?: string;        // Additional styling
    layers?: PlusGridLayer[];  // Multiple layers
}
  
interface PlusGridLayer {
    spacing: number;    // distance between pluses
    strokeWidth: number; // line thickness
    strokeLength: number; // length of plus arms
    color: string; // stroke color
    offset?: { x: number; y: number }; // pattern offset
}

export const PlusGrid = ({ 
    className = "",
    layers = []
}: PlusGridProps) => {
    const generatePlusPattern = (layer: PlusGridLayer, index: number) => {
        const { spacing, strokeWidth, strokeLength, color, offset = { x: 0, y: 0 } } = layer;
        
        return (
            <pattern 
                id={`plus-grid-${index}`} 
                patternUnits="userSpaceOnUse" 
                width={spacing} 
                height={spacing}
                patternTransform={`translate(${offset.x} ${offset.y})`}
            >
                <g stroke={color} strokeWidth={strokeWidth}>
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
        <svg className={`absolute inset-0 w-full h-full ${className}`}>
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
    );
};

export const GridPattern = ({
    spacing = 20,
    strokeWidth = 1,
    strokeLength = 8,
    color = "currentColor",
    opacity = 0.3,
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