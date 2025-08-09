type TagLabelProps = {
    tag: string;
    className?: string;
}

export function TagLabel({ tag, className }: TagLabelProps) {
    return (
        <span
            className={`${className} h-fit px-1 py-0.4 transition-all duration-300`}
        >
            {tag}
        </span>
    );
}

export function TagLabelStroke({ tag, className }: TagLabelProps) {
    return (
        <span
            className={`${className} h-fit px-1 py-0.4 rounded-xs border-muted-foreground border-1 border-foreground transition-all duration-300`}
        >
            {tag}
        </span>
    );
}

export function TagLabelFill({ tag, className }: TagLabelProps) {
    return (
        <span
            className={`${className} h-fit px-1 py-0.4 rounded-xs bg-foreground text-background transition-all duration-300`}
        >
            {tag}
        </span>
    );
}