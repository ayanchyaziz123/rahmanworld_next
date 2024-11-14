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
    <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
      {/* Blog Post Content */}
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10 mb-6 lg:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4" style={{ color: '#996232' }}>
          {blog.title}
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm mb-4">{blog.date}</p>
        <div
          className="prose prose-sm sm:prose lg:prose-lg max-w-none text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>

      {/* More Blogs Section */}
      <div className="bg-gray-100 rounded-lg shadow p-5 sm:p-6 md:p-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-700">More Blogs</h2>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {blogs
            .filter((b) => b.slug !== blog.slug) // Exclude the current blog
            .map((relatedBlog) => (
              <li
                key={relatedBlog.slug}
                className="hover:bg-white p-4 rounded-lg shadow-sm"
              >
                <Link href={`/blogs/${relatedBlog.slug}`} className="block">
                  <h3 className="text-lg font-bold text-gray-800 hover:text-yellow-600">
                    {relatedBlog.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">{relatedBlog.date}</p>
                  <p className="hidden sm:block mt-2 text-gray-600">{relatedBlog.description}</p>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogPost;
