import Link from 'next/link';
import { getAllProjects } from '@/lib/mdx';

export default async function Work() {
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Work
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Here's a collection of projects I've worked on and my professional experience.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link 
                key={project.slug}
                href={`/work/${project.slug}`}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Project Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-blue-600 font-medium">
                      {project.featured ? 'Featured' : 'Project'}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(project.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3">
                    {project.live && (
                      <span className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        View Live →
                      </span>
                    )}
                    {project.github && (
                      <span className="text-gray-600 hover:text-gray-700 text-sm font-medium">
                        GitHub →
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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