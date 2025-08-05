"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState, useEffect } from "react";

import { ProjectFrontmatter } from "@/lib/mdx";
import { projectCategories } from "@/lib/data";

import { ProjectCardDefault, ProjectCardBasic, ProjectListItem, ProjectListItemTechMono, ProjectCardLarge } from "@/components/workPage/Cards";
import { NavBar, SideBar, SideBar2, SideBar3 } from "@/components/NavBar";
import { WorkPageHeader, WorkPageHeader2 } from "@/components/workPage/Header";
import { ProjectFilter, ProjectMultiFilter } from "@/components/workPage/ProjectFilter";
import { GridIcon, ListIcon } from "@/components/Icons";

export default function WorkPage() {
  const searchParams = useSearchParams();
  const categoryFilters = searchParams.getAll("category");
  const [projects, setProjects] = useState<ProjectFrontmatter[]>([]);
  const [loading, setLoading] = useState(true);
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

  // Filter projects based on categories
  const filteredProjects = useMemo(() => {
    if (categoryFilters.length === 0) {
      return projects;
    }
    
    return projects.filter(project => 
      project.categories && categoryFilters.some(filter => 
        project.categories.includes(filter)
      )
    );
  }, [projects, categoryFilters]);

  return (
    <div className="min-h-screen flex flex-row">
      <SideBar3 className="min-w-60" />
      <div className="w-full px-4 sm:px-6 lg:px-6 py-0">
        {/* Filtering */}
        <div className="fixed z-60 top-0 left-64 flex items-center gap-2 mt-4">
          <span className="font-roboto-mono text-[0.6rem] tracking-tighter text-muted-foreground mr-2">
            Filter by
          </span>
          <ProjectFilter 
            categories={projectCategories}
            toggleStyle="px-2 py-0 rounded-xs font-roboto-mono text-xs uppercase tracking-widest transition-colors"
            toggleStyleActive="bg-foreground text-background"
            toggleStyleInactive="border-1 border-border bg-background text-muted-foreground hover:border-foreground hover:text-foreground"
          />
        </div>

        <WorkPageHeader />

        <div className="z-30 w-full flex flex-col items-start justify-between gap-2 mb-8">
          {/* View Mode Buttons */}
          <div className="flex gap-2">
            <button className={`p-1 flex items-center gap-1 
                      font-roboto-mono text-xs lowercase transition-colors 
                      ${viewMode === "list" ? "text-foreground font-semibold" 
                        : "text-muted-foreground hover:text-foreground"}`}
              onClick={() => setViewMode("list")}
            >
              
              <ListIcon className="w-3.5 h-3.5" strokeWidth={2} /> List
            </button>
            <button className={`p-1 flex items-center gap-1 
                      font-roboto-mono text-xs lowercase transition-colors 
                      ${viewMode === "grid" ? "text-foreground font-semibold" 
                        : "text-muted-foreground hover:text-foreground"}`}
              onClick={() => setViewMode("grid")}
            >
              <GridIcon className="w-3.5 h-3.5" strokeWidth={2} /> Grid
            </button>
          </div>

          {/* Filtering */}
          
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-mutedForeground text-lg">Loading projects...</p>
          </div>
        ) : (
          <div className="w-full flex flex-col z-100 bg-background/80">
            {/* Project Listings */}
            {viewMode === "list" && (
              <div className="group/list w-full flex flex-col">
                {filteredProjects.map((project: ProjectFrontmatter, index: number) => (
                  <ProjectListItem key={project.slug} project={project} index={index} />
                ))}
              </div>
            )}

            {viewMode === "grid" && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.slice(0, 7).map((project: ProjectFrontmatter) => (
                  <ProjectCardBasic key={project.slug} project={project} />
                ))}
              </div>
            )}

            <div className="group/list flex flex-col">
              {filteredProjects.slice(0, 7).map((project: ProjectFrontmatter, index: number) => (
                <ProjectListItemTechMono key={project.slug} project={project} index={index} />
              ))}
            </div>

            <div className="flex flex-col">
              {filteredProjects.slice(0, 7).map((project: ProjectFrontmatter) => (
                <ProjectCardLarge key={project.slug} project={project} />
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.slice(0, 7).map((project: ProjectFrontmatter) => (
                <ProjectCardDefault key={project.slug} project={project} />
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="z-10 text-center py-12">
                <p className="text-mutedForeground text-lg">
                  No projects found. They&apos;re probably hiding.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 