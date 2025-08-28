import BoxCorners from "../svg/BoxCorners";

interface ProjectInfoItem {
    label: string;
    values: string[];
}

interface ProjectInfoProps {
    items: ProjectInfoItem[];
}

function InfoItem({ label, values }: { label: string, values: string[] }) {
    return (
        <div>
            <h4 className="text-xs uppercase text-muted-foreground font-bold mb-1.5">{label}</h4>
            <div className="text-base flex flex-col gap-0">
                {values.map((value) => (
                    <span key={value}>{value}</span>
                ))}
            </div>
        </div>
    )
}
  
export default function ProjectInfo({ items }: ProjectInfoProps) {
    return (
        <div className="relative my-8 p-0 bg-background text-foreground"> 
            <div className="flex flex-row justify-between gap-2">
                {items?.map(({ label, values }) => (
                    <InfoItem key={label} label={label} values={values} />
                ))}
            </div>
        </div>
    );
} 

export function BorderedProjectInfo({ items }: ProjectInfoProps) {
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
                {items?.map(({ label, values }) => (
                    <InfoItem key={label} label={label} values={values} />
                ))}
            </div>
        </div>
    );
} 