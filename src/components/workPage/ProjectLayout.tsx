'use client';

import Link from 'next/link';
import { ArrowLeftIcon, ExternalLinkIcon, GithubIcon } from '@/components/svg/Icons';
import { ProjectFrontmatter } from '@/lib/mdx';

interface ProjectLayoutProps {
  frontmatter: ProjectFrontmatter;
  children: React.ReactNode;
}

export default function ProjectLayout({ frontmatter, children }: ProjectLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to Work */}
        <Link
          href="/work"
          className="inline-flex items-center text-mutedForeground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to Work
        </Link>

        {/* Project Header */}
        <header className="mb-12">
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {frontmatter.title}
            </h1>
            <p className="text-xl text-mutedForeground mb-6">
              {frontmatter.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Project Links */}
          <div className="flex flex-wrap gap-4">
            {frontmatter.github && (
              <a
                href={frontmatter.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-card border border-border text-cardForeground rounded-lg hover:bg-accent transition-colors"
              >
                <GithubIcon className="w-4 h-4 mr-2" />
                View on GitHub
              </a>
            )}
            {frontmatter.live && (
              <a
                href={frontmatter.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-primary text-primaryForeground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <ExternalLinkIcon className="w-4 h-4 mr-2" />
                View Live
              </a>
            )}
          </div>
        </header>

        {/* Project Image */}
        {frontmatter.image && (
          <div className="mb-12">
            <img
              src={frontmatter.image}
              alt={frontmatter.title}
              className="w-full rounded-lg border border-border"
            />
          </div>
        )}

        {/* Project Content */}
        <article className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-mutedForeground prose-strong:text-foreground prose-a:text-primary prose-code:text-foreground prose-pre:bg-muted prose-pre:border prose-pre:border-border">
          {children}
        </article>
      </div>
    </div>
  );
} 