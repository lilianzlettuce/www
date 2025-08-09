'use client';

import Link from 'next/link';
import { ArrowLeftIcon, ExternalLinkIcon, GithubIcon, PixelatedArrowIcon } from '@/components/svg/Icons';
import { ProjectFrontmatter } from '@/lib/mdx';
import { TagLabel, TagLabelStroke } from './Labels';
import { IconButton, RevealButton } from '../Buttons';
import Image from 'next/image';

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
          className="inline-flex items-center text-mutedForeground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to Work
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
              <Link
                href={frontmatter.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-2 py-1 "
              >
                <RevealButton text="View Demo" />
              </Link>
            )}
          </div>
        </header>

        <div className="w-full mb-1">
          <div className="mb-1 flex flex-row justify-between text-xs">
            <div className="font-bold">
              Becoming
            </div>
            <div>
              audiovisual installation | 2025
            </div>
          </div>
          {/* Project Image */}
          {frontmatter.image && (
            <div className="relative w-full h-[80vh]">
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
      </div>
    </header>
  );
}

function ProjectHeaderDefault2({ frontmatter }: ProjectHeaderProps) {
  return (
    <header className="mb-12 font-uncut-sans">
      <div className="mb-6">
        
        {/* Project Links */}
        <div className="flex justify-between mb-6">
          {/* Back to Work */}
          <Link
            href="/work"
            className=""
          >
            <IconButton text="Back to Work" icon="→" />
          </Link>

          {frontmatter.link && (
            <Link
              href={frontmatter.link}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <IconButton 
                text="View Demo" 
                icon={<PixelatedArrowIcon className="w-4 h-4 -rotate-90" />} 
              />
            </Link>
          )}
        </div>

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
                  <TagLabel tag={tag} className="text-xs font-roboto-mono tracking-widest uppercase" />
                  <span className="text-xs font-roboto-mono tracking-widest uppercase text-muted-foreground">
                    •
                  </span> 
                </div>
              ))}
            </div>
          </div>

          
        </header>

        <div className="w-full mb-1">
          <div className="mb-1 flex flex-row justify-between text-xs">
            <div className="font-bold">
              Becoming
            </div>
            <div>
              audiovisual installation | 2025
            </div>
          </div>
          {/* Project Image */}
          {frontmatter.image && (
            <div className="relative w-full h-[80vh]">
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
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl w-4/5 px-10 py-6">
        <ProjectHeaderDefault2 frontmatter={frontmatter} />

        {/* Project Content */}
        <article className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-code:text-foreground prose-pre:bg-muted prose-pre:border prose-pre:border-border">
          {children}
        </article>
      </div>
    </div>
  );
} 