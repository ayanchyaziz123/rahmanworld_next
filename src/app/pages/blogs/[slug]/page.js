import { notFound } from 'next/navigation';
import { blogs } from '@/data/blogs';
import Link from 'next/link';
import { Calendar, Clock, Tag, ChevronRight, Share2 } from 'lucide-react';

const getBlogBySlug = (slug) => blogs.find((blog) => blog.slug === slug);

const groupBlogsByCategory = (blogs) => {
  return blogs.reduce((acc, blog) => {
    acc[blog.category] = acc[blog.category] || [];
    acc[blog.category].push(blog);
    return acc;
  }, {});
};

const BlogPost = ({ params }) => {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  const categorizedBlogs = groupBlogsByCategory(blogs);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="w-full h-64 bg-gradient-to-r from-amber-700 to-blue-600 relative"
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto h-full flex items-center justify-center relative">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center px-4">
            {blog.title}
          </h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center text-sm text-gray-600">
          <Link href="/" className="hover:text-amber-600">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link href="/blogs" className="hover:text-amber-600">Blogs</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-amber-600">{blog.category}</span>
        </div>
      </div>

      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <article className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              {/* Meta Information */}
              <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{blog.date}</span>
                </div>
                {blog.readTime && (
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{blog.readTime} min read</span>
                  </div>
                )}
                <div className="flex items-center">
                  <Tag className="w-4 h-4 mr-2" />
                  <span>{blog.category}</span>
                </div>
              </div>

              {/* Share Button */}
              <button className="mb-6 flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-amber-600 border rounded-full transition-colors">
                <Share2 className="w-4 h-4" />
                Share this article
              </button>

              {/* Content */}
              <div 
                className="prose prose-lg max-w-none
                  prose-headings:text-gray-900 prose-headings:font-bold
                  prose-p:text-gray-700 prose-p:line-height-relaxed
                  prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-gray-900
                  prose-code:text-amber-600 prose-code:bg-amber-50 prose-code:px-1 prose-code:rounded
                  prose-blockquote:border-l-amber-500 prose-blockquote:bg-gray-50 prose-blockquote:py-1"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b">
                Categories
              </h2>
              {Object.entries(categorizedBlogs).map(([category, categoryBlogs]) => (
                <div key={category} className="mb-6 last:mb-0">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="w-1 h-6 bg-amber-500 rounded mr-3"></span>
                    {category}
                  </h3>
                  <ul className="space-y-3 pl-4">
                    {categoryBlogs.map((catBlog) => (
                      <li key={catBlog.slug}>
                        <Link
                          href={`/blogs/${catBlog.slug}`}
                          className={`block transition-colors ${
                            catBlog.slug === blog.slug
                              ? 'text-amber-600 font-semibold'
                              : 'text-gray-600 hover:text-amber-600'
                          }`}
                        >
                          {catBlog.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Recent Posts Widget */}
            <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b">
                Recent Posts
              </h2>
              <div className="space-y-4">
                {blogs.slice(0, 5).map((recentBlog) => (
                  <Link
                    key={recentBlog.slug}
                    href={`/blogs/${recentBlog.slug}`}
                    className="block group"
                  >
                    <h3 className="text-gray-800 group-hover:text-amber-600 font-medium mb-1 transition-colors">
                      {recentBlog.title}
                    </h3>
                    <p className="text-sm text-gray-500">{recentBlog.date}</p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;