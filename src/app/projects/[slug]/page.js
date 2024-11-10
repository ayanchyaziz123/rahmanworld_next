'use client';
import { useState } from 'react';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import Link from 'next/link';

const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug);

const ProjectPost = ({ params }) => {
  const project = getProjectBySlug(params.slug);
  const [currentImage, setCurrentImage] = useState(0);

  if (!project) {
    notFound();
  }

  const images = [project.image, project.image2, project.image3];
  
  const handleNext = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const handlePrev = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4" style={{ color: '#996232' }}>{project.title}</h1>
      <p className="text-gray-600 text-sm mb-4">{project.date}</p>

      {/* Custom Carousel */}
      <div className="relative mb-8 w-full h-[36rem]">
        <img
          src={images[currentImage]}
          alt={`${project.title} - Image ${currentImage + 1}`}
          className="object-contain w-full h-[36rem] rounded-lg border-dotted border-2 border-gray-400"
        />
        <button onClick={handlePrev} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 px-3 py-1 rounded-full">Prev</button>
        <button onClick={handleNext} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 px-3 py-1 rounded-full">Next</button>
      </div>

      {/* Project Content with Links */}
      <div className="prose prose-lg max-w-none text-gray-800" dangerouslySetInnerHTML={{ __html: project.content }} />

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">More Projects</h2>
        <ul>
          {projects
            .filter((p) => p.slug !== project.slug)
            .map((relatedProject) => (
              <li key={relatedProject.slug} className="mb-4">
                <Link href={`/projects/${relatedProject.slug}`} className="text-blue-500 hover:text-blue-700 underline">
                  {relatedProject.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectPost;
