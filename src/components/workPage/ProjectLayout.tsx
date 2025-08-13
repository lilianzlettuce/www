'use client';

import Link from 'next/link';
import { ArrowLeftIcon, PixelatedArrowIcon } from '@/components/svg/Icons';
import { ProjectFrontmatter } from '@/lib/mdx';
import { TagLabel, TagLabelStroke } from './Labels';
import { BracketButton, IconButton, RevealButton } from '../Buttons';
import Image from 'next/image';
import BoxCorners from '../svg/BoxCorners';

interface ProjectHeaderProps {
  frontmatter: ProjectFrontmatter;
}

interface ProjectLayoutProps {
  frontmatter: ProjectFrontmatter;
  children: React.ReactNode;
}

function ProjectHeaderDefault({ frontmatter }: ProjectHeaderProps) {
  return (
    <header className="mb-12 font-uncut-sans">
      <div className="mb-6">
        {/* Back to Work */}
        <Link
          href="/work"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-2 py-1 "
        >
          <RevealButton text="Back" icon="→" />
        </Link>

        {/* Project Header */}
        <header className="mb-12 font-uncut-sans">
          <div className="mb-6">
            <h1 className="text-4xl md:text-xl font-bold text-foreground mb-4">
              {frontmatter.title}
            </h1>
            <p className="text-base text-mutedForeground mb-6">
              {frontmatter.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {frontmatter.tags.map((tag: string) => (
                <div className="flex flex-row gap-2"
                    key={tag} 
                >
                  <TagLabelStroke tag={tag} className="text-xs font-roboto-mono tracking-widest uppercase" />
                  <span className="hidden text-xs font-roboto-mono tracking-widest uppercase text-muted-foreground">
                    •
                  </span> 
                </div>
              ))}
            </div>
          </div>

          {/* Project Links */}
          <div className="flex flex-wrap gap-4">
            {frontmatter.link && (
              <IconButton className="group text-sm px-1.5 py-0 border-1 border-muted-foreground rounded-full"
                text="View Demo" 
                icon={
                <PixelatedArrowIcon 
                  className="w-4 h-4 group-hover:-rotate-90 transition-transform duration-300" 
                />} 
              />
            )}
          </div>
        </header>
      </div>
    </header>
  );
}

function ProjectHeaderDefault2({ frontmatter }: ProjectHeaderProps) {
  return (
    <header className="my-8 font-uncut-sans">
      <div className="mb-0">

        {/* Project Header */}
        <header className="mb-12 flex flex-row items-start gap-4">
          <div className="sticky top-0 left-0 w-50 h-10 pt-2 flex flex-col gap-1 items-start justify-start">
            <div className="w-full font-ibm-plex-mono text-xs ">
              &#91; 01 / 04 &#93;
            </div>
            <div className="w-full my-4 flex flex-col text-xs">
              <div className="font-bold">
                {frontmatter.title}
              </div>
              <div>
                landing page | 2025
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {frontmatter.link && (
                <Link
                  href={frontmatter.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex justify-center border-1 border-foreground bg-foreground text-background hover:bg-background hover:text-foreground transition-all duration-300"
                >
                  <IconButton className="relative text-sm py-0"
                    text="View Site" 
                    icon={<div className="group-hover:rotate-135 -rotate-45 transition-transform duration-300">◼</div>} 
                  />
                </Link>
              )}
              {frontmatter.link && (
                <Link
                  href={frontmatter.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative border-1 border-border"
                >
                  <BoxCorners
                    icon={<div className="w-full h-full border-t-1 border-l-1 border-foreground"></div>}
                    cornerSize="5px"
                    cornerOffset="-1px"
                    cornerColor="transparent"
                    className="scale-100 group-hover:scale-x-105 group-hover:scale-y-120 transition-all duration-300"
                  />
                  <IconButton className="relative text-sm px-1.5 py-0 rounded-sm"
                    text="View Code" 
                    icon={<div className="group-hover:-rotate-45 rotate-45 transition-transform duration-300">→</div>} 
                  />
                </Link>
              )}
            </div>
          </div>

          {/* Title and description */}
          <div className="w-full mb-6 font-uncut-sans">
            <h1 className="text-4xl md:text-4xl font-bold text-foreground mb-4">
              {frontmatter.title}
            </h1>
            <p className="text-base text-foreground mb-6">
              {frontmatter.description}
            </p>
            <p className="text-xs text-foreground mb-6">
              {frontmatter.award}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {frontmatter.tags.map((tag: string) => (
                <div className="flex flex-row gap-2"
                    key={tag} 
                >
                  <TagLabel tag={tag} className="text-xs font-ibm-plex-mono tracking-wide uppercase" />
                  <span className="text-xs font-roboto-mono tracking-widest uppercase text-muted-foreground">
                    •
                  </span> 
                </div>
              ))}
            </div>
          </div>

          
        </header>
      </div>
    </header>
  );
}

function ProjectHeaderMinimal({ frontmatter }: ProjectHeaderProps) {
  return (
    <header className="mb-12 font-uncut-sans">
      <div className="mb-6">
        <h1 className="text-4xl md:text-xl font-bold text-foreground mb-4">
          {frontmatter.title}
        </h1>
      </div>
    </header>
  );
}

export default function ProjectLayout({ frontmatter, children }: ProjectLayoutProps) {
  return (
    <div className="relative min-h-screen bg-background flex gap-4 justify-between">
      {/* Sticky side info */}
      <div className="hidden sticky top-0 left-0 w-80 h-10 p-8 flex flex-col items-start justify-start">
        <div className="w-full mb-1 font-ibm-plex-mono text-xs ">
          &#91; 01 / 04 &#93;
        </div>
        <div className="w-full my-4">
          <div className="mb-1 flex flex-col text-xs">
            <div className="font-bold">
              {frontmatter.title}
            </div>
            <div>
              audiovisual installation | 2025
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto w-full px-10 py-6">
        

        {/* Project Image */}
        <div className="w-full mb-1">
          <div className="mb-1 flex flex-row justify-between text-xs">
            <div className="font-bold">
              {frontmatter.title}
            </div>
            <div>
              website | 2022
            </div>
          </div>
          {frontmatter.image && (
            <div className="relative w-full h-[70vh]">
              <Image
                src={frontmatter.image}
                alt={frontmatter.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          )}
        </div>

        {/* Project Header */}
        <ProjectHeaderDefault2 frontmatter={frontmatter} />

        {/* Project Content */}
        <article className="mdx-content px-0 max-w-2xl mx-auto">
          {children}
        </article>
      </div>
    </div>
  );
} 