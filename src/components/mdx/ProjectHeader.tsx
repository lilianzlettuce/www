interface ProjectHeaderProps {
  title: string;
  description: string;
  children: React.ReactNode;
  link?: string;
}

export function ProjectHeader({ title, description, children, link }: ProjectHeaderProps) {
  return (
    <div className="w-full pt-16 flex flex-col lg:flex-row items-start justify-start gap-2">
        <div className="w-30 lg:w-60 text-sm uppercase">
          Brief
        </div>
        <div className="lg:w-7/12 flex flex-col justify-between">
          <div className="mb-16 ">
            <h3>{title}</h3>
            <div className="text-lg">{description}</div>
            {link &&
              <div  className="text-lg">
                <br/>
                View the live site: {' '}
                <a href={link} target="_blank" rel="noopener noreferrer">
                  here!
                </a>
              </div>
            }
          </div>
          {children}
        </div>
    </div>
  );
}