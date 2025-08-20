import BoxCorners from "../svg/BoxCorners";

interface ProjectInfoProps {
    roles?: string[];
    duration?: string;
    timeline?: string;
    team?: string[];
    type?: string;
}

function InfoItem({ label, values }: { label: string, values: string[] }) {
    return (
        <div>
            <h4 className="text-xs uppercase text-muted-foreground font-bold mb-1.5">{label}</h4>
            <div className="text-base flex flex-col gap-1">
                {values.map((value) => (
                    <span key={value}>{value}</span>
                ))}
            </div>
        </div>
    )
}
  
export default function ProjectInfo({ roles, duration, timeline, team, type }: ProjectInfoProps) {
    return (
        <div className="relative my-8 p-6 bg-background text-foreground border-1 border-muted">
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
            
            <div className="flex flex-row justify-between gap-2">
                {roles && (
                    <InfoItem label="Role" values={roles} />
                )}

                {team && (
                    <InfoItem label="Team" values={team} />
                )}

                {duration && (
                    <InfoItem label="Duration" values={[duration]} />
                )}

                {timeline && (
                    <InfoItem label="Timeline" values={[timeline]} />
                )}

                {type && (      
                    <InfoItem label="Type" values={[type]} />
                )}
            </div>
        </div>
    );
} 