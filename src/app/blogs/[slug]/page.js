import { notFound } from 'next/navigation';
import { blogs } from '@/data/blogs';
import Link from 'next/link';

const getBlogBySlug = (slug) => blogs.find((blog) => blog.slug === slug);

const BlogPost = ({ params }) => {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    notFound(); // Redirects to a 404 page if the blog is not found
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4" style={{ color: '#996232' }}>{blog.title}</h1>
      <p className="text-gray-600 text-sm mb-4">{blog.date}</p>
      <div
        className="prose prose-lg max-w-none text-gray-800"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
      
      {/* Displaying other blog posts */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-6 shadow-sm">More Blogs</h2>
        <ul>
          {blogs
            .filter((b) => b.slug !== blog.slug) // Exclude the current blog
            .map((relatedBlog) => (
              <li key={relatedBlog.slug} className="mb-4">
                <Link href={`/blogs/${relatedBlog.slug}`} className="text-blue-500 hover:text-blue-700 underline">
                  {relatedBlog.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogPost;
