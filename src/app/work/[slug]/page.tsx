import { notFound } from 'next/navigation';
import { getProjectBySlug, getProjectSlugs, compileProjectMDX } from '@/lib/mdx';
import ProjectLayout from '@/components/workPage/ProjectLayout';
import ProjectLayoutArt from '@/components/workPage/ProjectLayoutArt';

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  
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

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

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