import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import TechStack from '@/components/mdx/TechStack';
import ProjectStats from '@/components/mdx/ProjectStats';
import { IconButton } from '@/components/Buttons';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export interface ProjectFrontmatter {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  tags: string[];
  categories: string[];
  link?: string;
  date: string;
  featured?: boolean;
  slug: string;
}

// Custom components that can be used in MDX files
const components = {
  TechStack,
  ProjectStats,
  IconButton,
};

export async function getProjectSlugs(): Promise<string[]> {
  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
}

export async function getProjectBySlug(slug: string) {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const frontmatter: ProjectFrontmatter = {
    ...data,
    slug,
  } as ProjectFrontmatter;

  return {
    frontmatter,
    content,
  };
}

export async function getAllProjects(): Promise<ProjectFrontmatter[]> {
  const slugs = await getProjectSlugs();
  const projects = await Promise.all(
    slugs.map(async (slug) => {
      const project = await getProjectBySlug(slug);
      return project?.frontmatter;
    })
  );

  return projects
    .filter((project): project is ProjectFrontmatter => project !== undefined)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getFeaturedProjects(): Promise<ProjectFrontmatter[]> {
  const allProjects = await getAllProjects();
  return allProjects.filter((project) => project.featured);
}

export async function compileProjectMDX(content: string) {
  const { content: compiledContent } = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: true,
    },
    components,
  });

  return compiledContent;
} 