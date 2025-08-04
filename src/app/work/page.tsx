import { getAllProjects, ProjectFrontmatter } from "@/lib/mdx";
import { ProjectCardDefault, ProjectCardBasic, ProjectListItem, ProjectListItemTechMono, ProjectCardLarge } from "@/components/workPage/Cards";
import { NavBar, SideBar, SideBar2, SideBar3 } from "@/components/NavBar";
import { WorkPageHeader, WorkPageHeader2 } from "@/components/workPage/Header";

export default async function WorkPage() {
  const projects = await getAllProjects();

  return (
    <div className="min-h-screen flex flex-row">
      <SideBar3 className="min-w-60" />
      <div className="w-full px-4 sm:px-6 lg:px-6 py-0">
        <WorkPageHeader2 />

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