import { getAllProjects, ProjectFrontmatter } from "@/lib/mdx";
import { ProjectCardDefault, ProjectCardBasic, ProjectListItem, ProjectCardLarge } from "@/components/workPage/Cards";
import { NavBar, SideBar, SideBar2 } from "@/components/NavBar";

export default async function WorkPage() {
  const projects = await getAllProjects();

  return (
    <div className="min-h-screen flex flex-row">
      <SideBar className="" />
      <div className="max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-left mb-16">
          <h1 className="text-4xl md:text-[400px]/[0.8] scale-x-100 translate-x-0 font-bp-dots-square-bold font-bold text-foreground lowercase mb-4">
            Work
          </h1>
          <p className="text-xl text-mutedForeground max-w-2xl">
            What are you even searching for?
          </p>
        </div>

        <div className="group/list flex flex-col">
          {projects.slice(0, 7).map((project: ProjectFrontmatter, index: number) => (
            <ProjectListItem key={project.slug} project={project} index={index} />
          ))}
        </div>

        <div className="group/list flex flex-col">
          {projects.slice(0, 7).map((project: ProjectFrontmatter, index: number) => (
            <ProjectListItem key={project.slug} project={project} index={index} />
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