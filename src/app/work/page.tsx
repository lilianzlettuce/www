import Link from 'next/link';
import { getAllProjects, ProjectFrontmatter } from '@/lib/mdx';
import { ExternalLinkIcon } from '@/components/Icons';

export default async function WorkPage() {
  const projects = await getAllProjects();

  const experiences = [
    {
      company: "Tech Company",
      position: "Senior Frontend Developer",
      period: "2022 - Present",
      description: "Led development of multiple web applications, mentored junior developers, and implemented best practices for code quality and performance."
    },
    {
      company: "Startup Inc",
      position: "Full Stack Developer",
      period: "2020 - 2022",
      description: "Built and maintained various web applications, worked closely with design team, and contributed to product strategy."
    },
    {
      company: "Digital Agency",
      position: "Frontend Developer",
      period: "2018 - 2020",
      description: "Developed responsive websites and web applications for clients across various industries."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Work
          </h1>
          <p className="text-xl text-mutedForeground max-w-2xl mx-auto">
            A collection of projects I've worked on, from web applications to creative experiments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: ProjectFrontmatter) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video bg-muted flex items-center justify-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-mutedForeground text-4xl font-bold">
                    {project.title.charAt(0)}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-cardForeground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLinkIcon className="w-4 h-4 text-mutedForeground group-hover:text-primary transition-colors" />
                </div>
                
                <p className="text-mutedForeground mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags?.slice(0, 3).map((tag: string) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags && project.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs font-medium bg-muted text-mutedForeground rounded">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-mutedForeground text-lg">
              No projects found. Check back soon for updates!
            </p>
          </div>
        )}
      </div>

      {/* Experience */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Professional Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                  <span className="text-gray-500 text-sm">{exp.period}</span>
                </div>
                <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tools & Design</h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "Docker", "Figma", "Adobe XD", "VS Code", "Postman"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 