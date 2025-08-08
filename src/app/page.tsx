import Link from "next/link";

import { getFeaturedProjects, ProjectFrontmatter } from "@/lib/mdx";
import { NavBar } from "@/components/NavBar";
import Hero from "@/components/homePage/Hero";
import { ProjectCardLarge } from "@/components/workPage/Cards";

export default async function Home() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <div className="min-h-screen">
      <NavBar className="h-8" />

      <Hero />

      {/* Featured Section */}
      <div className="w-full flex flex-col items-start justify-center">
        <div className="font-psygen leading-none">
          <h2 className="text-[8rem]">Featured</h2>
          <h1 className="text-[12rem]">Projects</h1>
        </div>
      </div>
      <div className="flex flex-col">
        {featuredProjects.map((project: ProjectFrontmatter) => (
          <ProjectCardLarge key={project.slug} project={project} />
        ))}
      </div>

      {/* CTA Section */}
      <section className="font-mono py-20 bg-background text-foreground">
        <div className="max-w-4xl text-left px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl md:text-4xl font-bold mb-4">
            Ready to work together?
          </h2>
          <p className="text-md text-mutedForeground mb-8">
            Let&apos;s discuss your next project and bring your vision to life.
          </p>
          <Link 
            href="/about" 
            className="bg-primary text-primaryForeground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
