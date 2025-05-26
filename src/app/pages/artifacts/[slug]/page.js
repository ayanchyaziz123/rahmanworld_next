'use client';
import { useState } from 'react';
import { notFound } from 'next/navigation';
import { projects } from '../../../../data/projects';
import Link from 'next/link';
import { 
  ChevronLeft, 
  ChevronRight, 
  Github, 
  ExternalLink 
} from 'lucide-react';

const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug);

const ProjectPost = ({ params }) => {
  const project = getProjectBySlug(params.slug);
  const [currentImage, setCurrentImage] = useState(0);

  if (!project) {
    notFound();
  }

  const images = [project.image, project.image2, project.image3].filter(Boolean);

  const handleNext = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const handlePrev = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Project Header */}
      <div className="bg-white mb-8">
        <header className="mb-6">
          <h1 className="text-3xl font-light text-gray-900 mb-3">
            {project.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>{project.date}</span>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            )}
          </div>
        </header>
      </div>

      {/* Image Carousel */}
      <div className="relative mb-8 group bg-white border border-gray-200 rounded overflow-hidden">
        <div className="overflow-hidden">
          <img
            src={images[currentImage]}
            alt={`${project.title} - Image ${currentImage + 1}`}
            className="w-full h-96 object-contain bg-gray-50"
          />
        </div>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button 
              onClick={handlePrev} 
              className="absolute left-3 top-1/2 -translate-y-1/2 
                         bg-white/90 hover:bg-white 
                         p-2 rounded border border-gray-200
                         transition-all duration-200 
                         opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button 
              onClick={handleNext} 
              className="absolute right-3 top-1/2 -translate-y-1/2 
                         bg-white/90 hover:bg-white 
                         p-2 rounded border border-gray-200
                         transition-all duration-200 
                         opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 
                          bg-white/90 text-gray-700 
                          px-2 py-1 rounded border border-gray-200
                          text-xs">
            {currentImage + 1} of {images.length}
          </div>
        )}
      </div>

      {/* Project Content */}
      <article className="bg-white mb-8">
        <div 
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: project.content }}
        />
      </article>

      {/* Related Projects */}
      <div className="bg-white border-t border-gray-200 pt-8">
        <header className="mb-6">
          <h2 className="text-2xl font-light text-gray-900 border-b border-gray-200 pb-3">
            Related Projects
          </h2>
        </header>
        <div className="space-y-3">
          {projects
            .filter((p) => p.slug !== project.slug)
            .slice(0, 4)
            .map((relatedProject) => (
              <Link 
                key={relatedProject.slug} 
                href={`/projects/${relatedProject.slug}`}
                className="block"
              >
                <div className="flex items-center justify-between p-3 
                                hover:bg-gray-50 
                                transition-colors duration-200
                                border-b border-gray-100 last:border-0">
                  <span className="text-gray-700 hover:text-blue-600">
                    {relatedProject.title}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPost;