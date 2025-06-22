import { notFound } from 'next/navigation';
import { getProjectBySlug, getProjectSlugs, compileProjectMDX } from '@/lib/mdx';
import ProjectLayout from '@/components/ProjectLayout';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.frontmatter.title} | Lilian Zhao`,
    description: project.frontmatter.description,
    openGraph: {
      title: project.frontmatter.title,
      description: project.frontmatter.description,
      images: [project.frontmatter.image],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const compiledContent = await compileProjectMDX(project.content);

  return (
    <ProjectLayout frontmatter={project.frontmatter}>
      {compiledContent}
    </ProjectLayout>
  );
} 