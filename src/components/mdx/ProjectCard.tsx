import BoxCorners from "../svg/BoxCorners";

interface ProjectCardProps {
    listIcon?: string | React.ReactNode;
    children: React.ReactNode;
}

export function ProjectListItem({ listIcon = "→", children }: ProjectCardProps) {
    return (
        <div className="relative mb-4 p-4 pb-0 bg-background text-foreground border-1 border-muted">
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
            
            <div className="text-base flex flex-row items-start gap-2">
                <div className="text-foreground">{listIcon}</div>
                <div className="text-foreground">{children}</div>
            </div>
        </div>
    );
} 