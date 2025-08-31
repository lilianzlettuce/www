import BoxCorners from "../svg/BoxCorners";

interface ProjectCardProps {
    listIcon?: string | React.ReactNode;
    children: React.ReactNode;
}

export function ProjectListItem({ listIcon = "→", children }: ProjectCardProps) {
    return (
        <div className="mdx-no-margin relative mb-4 py-4 px-6 bg-background text-foreground border-1 border-muted">
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
            
            <div className="text-base flex flex-row items-center gap-6">
                <div className="text-foreground">{listIcon}</div>
                <div className="text-foreground">{children}</div>
            </div>
        </div>
    );
} 