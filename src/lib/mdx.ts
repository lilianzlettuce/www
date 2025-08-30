import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import TechStack from "@/components/mdx/TechStack";
import ProjectStats from "@/components/mdx/ProjectStats";
import ProjectInfo from "@/components/mdx/ProjectInfo";
import { SplitSection, SectionColumn } from "@/components/mdx/SplitSection";
import { MiddleSection } from "@/components/mdx/MiddleSection";
import { MDXImage, MDXImageFillAspectRatio } from "@/components/mdx/MDXImage";
import { ProjectHeader } from "@/components/mdx/ProjectHeader";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export interface ProjectFrontmatter {
  title: string;
  subtitle?: string;
  description: string;
  award?: string;
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
  ProjectInfo,
  SplitSection,
  SectionColumn,
  MiddleSection,
  MDXImage,
  MDXImageFillAspectRatio,
  ProjectHeader,
};

export async function getProjectSlugs(): Promise<string[]> {
  // Get and convert all MDX file names to slugs
  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => fileName.replace(/\.mdx$/, ""));
}

export async function getProjectBySlug(slug: string) {
  // Get the full file path to MDX file
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  // Extract frontmatter and content from MDX file
  const fileContents = fs.readFileSync(fullPath, "utf8");
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

// Get an array of all project frontmatter
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

// Compile MDX content to a React component
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