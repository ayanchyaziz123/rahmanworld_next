import { notFound } from 'next/navigation';
import { projects } from '@/data/projects'; // Your data source
import Link from 'next/link';

const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug);

const ProjectPost = ({ params }) => {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound(); // Redirects to a 404 page if the project is not found
  }

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Project Title */}
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-600 text-sm mb-4">{project.date}</p>

      {/* Project Images: Two images in one column and one image in another column */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
  <div className="space-y-4">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-64 object-contain rounded-lg border-2 border-gray-300"
    />
    <img
      src={project.image2}
      alt={project.title}
      className="w-full h-64 object-contain rounded-lg border-2 border-gray-300"
    />
  </div>
  <div>
    <img
      src={project.image3}
      alt={project.title}
      className="w-full h-64 object-contain rounded-lg border-2 border-gray-300"
    />
  </div>
</div>

      {/* Project Content */}
      <div
        className="prose prose-lg max-w-none text-gray-800"
        dangerouslySetInnerHTML={{ __html: project.content }}
      />

      {/* Displaying other projects */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">More Projects</h2>
        <ul>
          {projects
            .filter((p) => p.slug !== project.slug) // Exclude the current project
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
