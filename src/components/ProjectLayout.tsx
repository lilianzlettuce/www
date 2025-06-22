'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon, ExternalLinkIcon, GithubIcon } from '@/components/Icons';

interface ProjectLayoutProps {
  children: React.ReactNode;
  frontmatter: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    github?: string;
    live?: string;
    date: string;
    featured?: boolean;
  };
}

export default function ProjectLayout({ children, frontmatter }: ProjectLayoutProps) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => router.back()}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Back to Work
            </button>
            
            <div className="flex space-x-4">
              {frontmatter.github && (
                <a
                  href={frontmatter.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <GithubIcon className="w-5 h-5 mr-2" />
                  Code
                </a>
              )}
              {frontmatter.live && (
                <a
                  href={frontmatter.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <ExternalLinkIcon className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Project Image */}
            <div className="md:col-span-1">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-500">Project Image</span>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {frontmatter.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {frontmatter.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {frontmatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center text-sm text-gray-500">
                <span>Completed: {new Date(frontmatter.date).toLocaleDateString()}</span>
                {frontmatter.featured && (
                  <span className="ml-4 px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
                    Featured
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="prose prose-gray max-w-none">
              {children}
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">More Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/work/ecommerce-platform"
              className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">E-Commerce Platform</h3>
              <p className="text-gray-600 text-sm">Full-stack e-commerce solution with payment processing</p>
            </Link>
            <Link
              href="/work/task-management-app"
              className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Task Management App</h3>
              <p className="text-gray-600 text-sm">Real-time collaborative task management</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 