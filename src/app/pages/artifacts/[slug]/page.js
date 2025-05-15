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
    <div className="container mx-auto max-w-4xl py-12 px-4">
      {/* Project Header */}
      <div className="mb-8">
        <h1 
          className="text-4xl font-bold mb-2 text-blue-900"
     
        >
          {project.title}
        </h1>
        <div className="flex items-center space-x-4 mb-6">
          <p className="text-gray-600 text-sm">
            {project.date}
          </p>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
            >
              <Github className="mr-2 w-5 h-5" />
              <span className="text-sm font-medium">View on GitHub</span>
            </a>
          )}
        </div>
      </div>

      {/* Image Carousel */}
      <div className="relative mb-12 group">
        <div className="overflow-hidden rounded-xl shadow-lg">
          <img
            src={images[currentImage]}
            alt={`${project.title} - Image ${currentImage + 1}`}
            className="w-full h-[36rem] object-contain bg-gray-100"
          />
        </div>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button 
              onClick={handlePrev} 
              className="absolute left-4 top-1/2 -translate-y-1/2 
                         bg-white/80 hover:bg-white/90 
                         p-2 rounded-full shadow-md 
                         transition-all duration-300 
                         opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button 
              onClick={handleNext} 
              className="absolute right-4 top-1/2 -translate-y-1/2 
                         bg-white/80 hover:bg-white/90 
                         p-2 rounded-full shadow-md 
                         transition-all duration-300 
                         opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 
                          bg-black/50 text-white 
                          px-3 py-1 rounded-full 
                          text-sm">
            {currentImage + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Project Content */}
      <div 
        className="prose prose-lg max-w-none text-gray-800 mb-8"
        dangerouslySetInnerHTML={{ __html: project.content }}
      />

      {/* Related Projects */}
      <div className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          More Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {projects
            .filter((p) => p.slug !== project.slug)
            .slice(0, 4)
            .map((relatedProject) => (
              <Link 
                key={relatedProject.slug} 
                href={`/projects/${relatedProject.slug}`}
                className="block"
              >
                <div className="bg-gray-50 p-4 rounded-lg 
                                hover:bg-gray-100 
                                transition-colors 
                                flex items-center 
                                justify-between">
                  <span className="text-gray-800 font-medium">
                    {relatedProject.title}
                  </span>
                  <ExternalLink className="w-5 h-5 text-gray-500" />
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPost;