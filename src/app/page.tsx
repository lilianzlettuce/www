import Link from "next/link";

import { getFeaturedProjects, ProjectFrontmatter } from "@/lib/mdx";
import { NavBar } from "@/components/NavBar";
import Hero from "@/components/homePage/Hero";
import { ProjectCardLarge } from "@/components/workPage/Cards";
import { PixelatedArrowIcon } from '@/components/svg/Icons';
import { IconButton } from "@/components/Buttons";
import BoxCorners from "@/components/svg/BoxCorners";

export default async function Home() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <div className="sm:min-h-screen">
      <NavBar className="h-6" />  

      <Hero />

      {/* Featured Section */}
      <div className="hidden w-full flex flex-col items-start justify-center">
        <div className="leading-none flex gap-2">
          <h1 className="font-roboto-mono text-base font-semibold">Selected Work {">>"}</h1>
          <Link className="group h-fit text-base font-roboto-mono font-semibold hover:rotate-x-180 hover:uppercase hover:text-foreground"
              href={""}>
            <span className="inline-block group-hover:hidden">{'>>'}&nbsp;</span>
            <span className="hidden group-hover:inline-block">{'<<'}&nbsp;</span>
            see more
          </Link>
          <Link className="group h-fit text-base font-roboto-mono font-semibold hover:rotate-x-180 hover:uppercase hover:text-foreground"
              href={""}>
            <span className="inline-block group-hover:hidden">{'>>'}&nbsp;</span>
            <span className="hidden group-hover:inline-block">{'<<'}&nbsp;</span>
            see less
          </Link>
        </div>
      </div>
      <div className="hidden flex flex-col">
        {featuredProjects.map((project: ProjectFrontmatter) => (
          <ProjectCardLarge key={project.slug} project={project} />
        ))}
      </div>

      {/* CTA Section */}
      <section className="hidden font-mono py-20 bg-background text-foreground">
        <div className="max-w-4xl text-left px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl md:text-4xl font-bold mb-4">
            Want to work together?
          </h2>
          <p className="text-md text-mutedForeground mb-8">
            
          </p>
          <Link
            href={""}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-fit px-2 py-1 relative flex items-center justify-center border-1 border-border"
          >
            <BoxCorners
              icon={<div className="w-full h-full border-t-1 border-l-1 border-foreground"></div>}
              cornerSize="5px"
              cornerOffset="-1px"
              cornerColor="transparent"
              className="scale-100 group-hover:scale-x-105 group-hover:scale-y-120 transition-all duration-300"
            />
            <IconButton className="relative text-sm py-0"
              text="Get in touch" 
              icon={<PixelatedArrowIcon 
                className="w-3 h-3 text-[10px] group-hover:rotate-135 -rotate-45 transition-all duration-300" 
                strokeWidth={0}
              />} 
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
