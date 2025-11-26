"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState, useEffect, Suspense } from "react";

import { ProjectFrontmatter } from "@/lib/mdx";
import { projectCategories } from "@/lib/data";

import { ProjectCardBasic, ProjectCardLarge, ProjectCardTechMono, ProjectCardTechMono2 } from "@/components/workPage/Cards";
import { WorkPageHeaderMinimal } from "@/components/workPage/Header";
import { ProjectFilter } from "@/components/workPage/ProjectFilter";
import { GridIcon, ListIcon } from "@/components/svg/Icons";
import ProjectList from "@/components/workPage/ProjectList";
import { SideBar3 } from "@/components/NavBar";

function WorkPageContent() {
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
    <div className="w-full flex flex-row">
      <SideBar3 className="min-w-50" />
      <div className="w-full px-4 sm:px-6 lg:px-6 py-0">
        {/* Filtering */}
        <div className="fixed z-60 top-0 left-54 flex items-center gap-2 mt-4">
          <ProjectFilter 
            categories={projectCategories}
            toggleStyle="min-h-4.5 px-1 py-0 font-roboto-mono text-xs lowercase rounded-none tracking-widest transition-colors"
            toggleStyleActive="bg-foreground text-background"
            toggleStyleInactive="border-0 border-border bg-background text-muted-foreground hover:border-foreground hover:text-foreground"
            showIcons={false}
          />
        </div>

        <WorkPageHeaderMinimal 
          headerText={categoryFilters.length > 0 ? categoryFilters.join(", ") : "All"}
          subheaderText={projectCategories.find(cat => cat.name === categoryFilters[0])?.subheaderText 
            || "status: 45% - - - complete rehaul in progress <br/> come forth ↓"}
        />

        <div className="z-30 w-full flex flex-row items-start justify-between gap-2 mb-8">
          {/* Filtering */}
          <div className="hidden">
            <ProjectFilter 
              categories={projectCategories}
              toggleStyle="min-h-4.5 px-1 py-0 font-roboto-mono text-xs lowercase rounded-none tracking-widest transition-colors"
              toggleStyleActive="bg-foreground text-background"
              toggleStyleInactive="border-0 border-border bg-background text-muted-foreground hover:border-foreground hover:text-foreground"
              showIcons={false}
            />
          </div>

          {/* List/Grid Buttons */}
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
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-mutedForeground text-lg">Loading projects...</p>
          </div>
        ) : (
          <div className="w-full flex flex-col z-100 bg-background/80">
            {/* Project Listings */}
            {viewMode === "list" && categoryFilters.includes("art") && (
              <ProjectList projects={filteredProjects} variant="minimal" />
            )}

            {viewMode === "list" && !categoryFilters.includes("art") && (
              <ProjectList projects={filteredProjects} variant="default" />
            )}

            {/* All Grid View */}
            {viewMode === "grid" && categoryFilters.length === 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project: ProjectFrontmatter) => (
                  <ProjectCardTechMono
                    key={project.slug} 
                    project={project} 
                    className="min-h-100" 
                  />
                ))}
              </div>
            )}

            {/* Dev Grid View */}
            {viewMode === "grid" && categoryFilters.includes("dev") && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project: ProjectFrontmatter) => (
                  <ProjectCardTechMono2 
                    key={project.slug} 
                    project={project} 
                    className="min-h-95" 
                  />
                ))}
              </div>
            )}

            {/* Design Grid View */}
            {viewMode === "grid" && categoryFilters.includes("design") && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project: ProjectFrontmatter) => (
                  <ProjectCardBasic 
                    key={project.slug} 
                    project={project} 
                    className="h-90" 
                  />
                ))}
              </div>
            )}

            {/* Art Grid View */}
            {viewMode === "grid" && categoryFilters.includes("art") && (
              <div className="flex flex-col">
                {filteredProjects.slice(0, 7).map((project: ProjectFrontmatter) => (
                  <ProjectCardLarge key={project.slug} project={project} />
                ))}
              </div>
            )}

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

export default function WorkPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WorkPageContent />
    </Suspense>
  );
} 