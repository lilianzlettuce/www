interface BoxCornersProps {
    icon?: React.ReactNode;
    cornerSize?: string;
    cornerOffset?: string;
    cornerColor?: string;
}

export default function BoxCorners({ 
    icon, 
    cornerSize = "4px", 
    cornerOffset = "-2px", 
    cornerColor = "var(--secondaryForeground)" 
}: BoxCornersProps) {
    return (
        <div className="absolute inset-0 pointer-events-none">
            {/* top left */}
            <div className="absolute"
                style={{
                    width: cornerSize,
                    height: cornerSize,
                    top: cornerOffset,
                    left: cornerOffset,
                    backgroundColor: cornerColor
                }}
            >
                {icon}
            </div>
            {/* top right */}
            <div className="absolute rotate-90"
                style={{
                    width: cornerSize,
                    height: cornerSize,
                    top: cornerOffset,
                    right: cornerOffset,
                    backgroundColor: cornerColor
                }}
            >
                {icon}
            </div>
            {/* bottom left */}
            <div className="absolute -rotate-90"
                style={{
                    width: cornerSize,
                    height: cornerSize,
                    bottom: cornerOffset,
                    left: cornerOffset,
                    backgroundColor: cornerColor
                }}
            >
                {icon}
            </div>
            {/* bottom right */}
            <div className="absolute rotate-180"
                style={{
                    width: cornerSize,
                    height: cornerSize,
                    bottom: cornerOffset,
                    right: cornerOffset,
                    backgroundColor: cornerColor
                }}
            >
                {icon}
            </div>
        </div>
    );
}