import Link from "next/link";

import { getFeaturedProjects, ProjectFrontmatter } from "@/lib/mdx";
import { NavBar } from "@/components/NavBar";
import { RevealButton, RevealButton2 } from "@/components/Buttons";

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
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-murmure text-3xl md:text-[10rem] font-bold text-cardForeground mb-4">
              LETTUCE lettuce
            </h2>
            <p className="text-xl text-mutedForeground max-w-2xl mx-auto">
              I specialize in building modern web applications and creating engaging digital experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-muted hover:bg-accent transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-cardForeground mb-2">Web Development</h3>
              <p className="text-mutedForeground">
                Building responsive, performant web applications with modern technologies.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-muted hover:bg-accent transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-cardForeground mb-2">UI/UX Design</h3>
              <p className="text-mutedForeground">
                Creating intuitive and beautiful user interfaces that enhance user experience.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-muted hover:bg-accent transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-cardForeground mb-2">Performance</h3>
              <p className="text-mutedForeground">
                Optimizing applications for speed, accessibility, and scalability.
              </p>
            </div>
          </div>
        </div>
      </section>

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
