interface TechStackProps {
  technologies: string[];
  title?: string;
}

export default function TechStack({ technologies, title = "Technologies Used" }: TechStackProps) {
  return (
    <div className="my-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
} 