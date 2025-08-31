interface ProjectHeaderProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function ProjectHeader({ title, description, children }: ProjectHeaderProps) {
  return (
    <div className="w-full pt-16 flex items-start justify-start">
        <div className="w-60 text-sm uppercase">
          Brief
        </div>
        <div className="w-7/12 flex flex-col justify-between">
          <div className="mb-16 max-w-125">
            <h3>{title}</h3>
            <div className="text-lg">{description}</div>
          </div>
          {children}
        </div>
    </div>
  );
}