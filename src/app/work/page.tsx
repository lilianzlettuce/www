import { getAllProjects, ProjectFrontmatter } from "@/lib/mdx";
import { ProjectCardDefault, ProjectCardBasic, ProjectListItem, ProjectListItemTechMono, ProjectCardLarge } from "@/components/workPage/Cards";
import { NavBar, SideBar, SideBar2, SideBar3 } from "@/components/NavBar";
import { WindowTechMono } from "@/components/Windows";
import ZoomableImage from "@/components/ZoomableImage";
import Image from "next/image";

export default async function WorkPage() {
  const projects = await getAllProjects();

  return (
    <div className="min-h-screen flex flex-row">
      <SideBar3 className="min-w-60" />
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-row gap-4">
          <div className="text-left mb-16">
            <h1 className="text-4xl md:text-[200px]/[0.8] scale-x-100 translate-x-0 font-bp-dots-square-bold font-bold text-foreground lowercase mb-4">
              Work
            </h1>
            <p className="text-sm text-mutedForeground max-w-2xl">
              What are you even searching for?
            </p>
          </div>

          <div className="relative w-fit h-fit">
            <div className="absolute -top-60 left-0 w-180 h-150 bg-white">
              <Image src="/img/halftone/brain-bg-black.png" 
                alt="Work" 
                fill={true}
                className="w-full h-full object-cover" />
            </div>
            <WindowTechMono className="w-fit h-fit">
              <div className="w-45 h-50 p-2 border-1 border-foreground font-ibm-plex-mono text-xs">
                <div className="w-full h-full p-2 border-1 border-foreground">
                  <div className="w-full h-full p-2 border-1 border-foreground">
                    <div className="w-full h-full p-2 border-1 border-foreground">
                    
                    </div>
                  </div>
                </div>
              </div>
            </WindowTechMono>
          </div>
        </div>

        <div className="group/list w-full flex flex-col">
          {projects.slice(0, 7).map((project: ProjectFrontmatter, index: number) => (
            <ProjectListItem key={project.slug} project={project} index={index} />
          ))}
        </div>

        <div className="group/list flex flex-col">
          {projects.slice(0, 7).map((project: ProjectFrontmatter, index: number) => (
            <ProjectListItemTechMono key={project.slug} project={project} index={index} />
          ))}
        </div>

        <div className="flex flex-col">
          {projects.slice(0, 7).map((project: ProjectFrontmatter) => (
            <ProjectCardLarge key={project.slug} project={project} />
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
    </div>
  );
} 