"use client";

import { useEffect, useState } from "react";

import { ProjectFrontmatter } from "@/lib/mdx";
import { ProjectCardDefault, ProjectCardBasic, ProjectListItem, ProjectListItemTechMono } from "@/components/workPage/Cards";
import { ProjectFilter } from "@/components/workPage/ProjectFilter";
import { projectCategories } from "@/lib/data";
import { GridIcon, ListIcon } from "@/components/svg/Icons";

export default function WorkPage() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<ProjectFrontmatter[]>([]);
  const [viewMode, setViewMode] = useState<string>("list");

  // Load projects on component mount
  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/projects");
        if (response.ok) {
          const allProjects = await response.json();
          setProjects(allProjects);
        } else {
          console.error("Failed to fetch projects");
        }
      } catch (error) {
        console.error("Error loading projects:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadProjects();
  }, []);

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
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-left mb-16">
          <h1 className="text-4xl md:text-[400px]/[0.8] scale-x-170 translate-x-100 font-murmure font-bold text-foreground lowercase mb-4">
            Work
          </h1>
          <p className="text-xl text-mutedForeground max-w-2xl">
            What are you even searching for?
          </p>
        </div>

        <div className="w-full flex items-center justify-between mb-8">
          {/* Filtering */}
          <div className="flex items-center gap-2">
            <span className="font-satoshi text-xs text-muted-foreground mr-2">
              Filter by
            </span>
            <ProjectFilter categories={projectCategories} />
          </div>

          {/* View Mode Buttons */}
          <div className="flex gap-2">
            <button className={`px-1 py-1 flex items-center gap-1 
                      text-sm transition-colors 
                      ${viewMode === "list" ? "text-foreground font-semibold" 
                        : "text-muted-foreground hover:text-foreground"}`}
              onClick={() => setViewMode("list")}
            >
              
              <ListIcon className="w-4 h-4" strokeWidth={2} /> List
            </button>
            <button className={`px-1 py-1 flex items-center gap-1 
                      text-sm transition-colors 
                      ${viewMode === "grid" ? "text-foreground font-semibold" 
                        : "text-muted-foreground hover:text-foreground"}`}
              onClick={() => setViewMode("grid")}
            >
              <GridIcon className="w-4 h-4" strokeWidth={2} /> Grid
            </button>
          </div>
        </div>

        {/* Project Listings */}  
        {loading && (
          <div className="text-center py-12">
            <p className="text-mutedForeground text-lg">Loading projects...</p>
          </div>
        )}

        {!loading && (
          <div className="w-full flex flex-col">

            {viewMode === "list" && (
              <div className="group/list flex flex-col">
                {projects.slice(0, 7).map((project: ProjectFrontmatter, index: number) => (
                  <ProjectListItemTechMono key={project.slug} project={project} index={index} />
                ))}
              </div>
            )}

            <div className="flex flex-col">
              {projects.slice(0, 7).map((project: ProjectFrontmatter) => (
                <ProjectListItem key={project.slug} project={project} />
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.slice(0, 7).map((project: ProjectFrontmatter) => (
                <ProjectCardBasic key={project.slug} project={project} />
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.slice(0, 7).map((project: ProjectFrontmatter) => (
                <ProjectCardDefault key={project.slug} project={project} />
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