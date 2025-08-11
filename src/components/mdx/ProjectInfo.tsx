import BoxCorners from "../svg/BoxCorners";

interface ProjectInfoProps {
    roles: string[];
    timeline: string;
    team: string[];
    type: string;
}
  
export default function ProjectInfo({ roles, timeline, team, type }: ProjectInfoProps) {
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
                <div>
                    <h4>Role</h4>
                    <div className="flex flex-col gap-0">
                        {roles.map((role) => (
                            <span
                                key={role}
                                className=""
                            >
                                {role}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <h4>Team</h4>
                    <div>{team.join(", ")}</div>
                </div>

                <div>
                    <h4>Timeline</h4>
                    <div>{timeline}</div>
                </div>

                <div>
                    <h4>Type</h4>
                    <div>{type}</div>
                </div>
            </div>
        </div>
    );
} 