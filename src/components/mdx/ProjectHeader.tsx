interface ProjectHeaderProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function ProjectHeader({ title, description, children }: ProjectHeaderProps) {
  return (
    <div className="w-full flex items-start justify-start">
        <div className="w-80 text-sm uppercase">
            Brief
        </div>
        <div className="w-2/3">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-lg">{description}</p>
            {children}
        </div>
    </div>
  );
}