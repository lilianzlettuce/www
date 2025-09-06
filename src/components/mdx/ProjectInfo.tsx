import BoxCorners from "../svg/BoxCorners";

interface ProjectInfoItem {
    label: string;
    values: string[];
}

interface ProjectInfoProps {
    items: ProjectInfoItem[];
    labelClassName?: string;
    valuesClassName?: string;
}

function InfoItem({ 
        label, 
        values, 
        labelClassName = "text-xs uppercase text-muted-foreground font-bold mb-1.5", 
        valuesClassName = "text-base" }
    : { label: string, values: string[], labelClassName?: string, valuesClassName?: string }
) {
    return (
        <div>
            <h4 className={`${labelClassName}`}>{label}</h4>
            <div className="flex flex-col gap-0">
                {values.map((value) => (
                    <span key={value}
                        className={`${valuesClassName}`}
                    >{value}</span>
                ))}
            </div>
        </div>
    )
}
  
export function ProjectInfo({ items, labelClassName, valuesClassName }: ProjectInfoProps) {
    return (
        <div className="relative my-0 p-0 bg-background text-foreground"> 
            <div className="flex flex-row justify-between gap-2">
                {items?.map(({ label, values }) => (
                    <InfoItem 
                        key={label} 
                        label={label} 
                        values={values} 
                        labelClassName={labelClassName}
                        valuesClassName={valuesClassName}
                    />
                ))}
            </div>
        </div>
    );
} 

function InfoItemRow({ 
    label, 
    values, 
    labelClassName = "text-xs uppercase text-muted-foreground font-bold mb-1.5", 
    valuesClassName = "text-base" }
: { label: string, values: string[], labelClassName?: string, valuesClassName?: string }
) {
return (
    <div className="flex items-center gap-4">
        <div className={`${labelClassName} w-30`}>{label}</div>
        <div className="flex items-center gap-1">
            {values.map((value, i) => (
                <span
                    key={value}
                    className={valuesClassName}
                >
                    {value}
                    {i < values.length - 1 && ","}
                </span>
            ))}
        </div>
    </div>
)
}

export function ProjectInfoRow({ items, labelClassName, valuesClassName }: ProjectInfoProps) {
    return (
        <div className="relative my-0 p-0 bg-background text-foreground"> 
            <div className="flex flex-col justify-between gap-2">
                {items?.map(({ label, values }) => (
                    <InfoItemRow
                        key={label} 
                        label={label} 
                        values={values} 
                        labelClassName={labelClassName}
                        valuesClassName={valuesClassName}
                    />
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