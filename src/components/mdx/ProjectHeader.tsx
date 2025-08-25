interface ProjectHeaderProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function ProjectHeader({ title, description, children }: ProjectHeaderProps) {
  return (
    <div className="w-full py-16 flex items-start justify-start">
        <div className="w-60 text-sm uppercase">
            Brief
        </div>
        <div className="w-9/12 flex flex-col justify-between">
            <div className="mb-16 max-w-2/3">
              <h1 className="text-4xl font-bold mb-7">{title}</h1>
              <p className="text-xl">{description}</p>
            </div>
            {children}
        </div>
    </div>
  );
}