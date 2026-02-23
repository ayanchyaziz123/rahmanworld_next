import { notFound } from 'next/navigation';
import { blogs } from '@/data/blogs/index';
import Link from 'next/link';
import { Calendar, Clock, Tag, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';

const CATEGORY_STYLES = {
  'Machine Learning': { bg: 'bg-blue-100',    text: 'text-blue-700',    border: 'border-blue-200',    dot: 'bg-blue-500',    bar: 'bg-blue-500' },
  'Deep Learning':    { bg: 'bg-purple-100',  text: 'text-purple-700',  border: 'border-purple-200',  dot: 'bg-purple-500',  bar: 'bg-purple-500' },
  'Data Structures':  { bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-200', dot: 'bg-emerald-500', bar: 'bg-emerald-500' },
  'Algorithms':       { bg: 'bg-orange-100',  text: 'text-orange-700',  border: 'border-orange-200',  dot: 'bg-orange-500',  bar: 'bg-orange-500' },
  'AI Tools':         { bg: 'bg-rose-100',    text: 'text-rose-700',    border: 'border-rose-200',    dot: 'bg-rose-500',    bar: 'bg-rose-500' },
};
const defaultStyle = { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-200', dot: 'bg-gray-500', bar: 'bg-gray-400' };
const getCategoryStyle = (cat) => CATEGORY_STYLES[cat] || defaultStyle;

const getBlogBySlug   = (slug) => blogs.find((b) => b.slug === slug);
const groupByCategory = (list) => list.reduce((acc, b) => {
  acc[b.category] = acc[b.category] || [];
  acc[b.category].push(b);
  return acc;
}, {});

const BlogPost = async ({ params }) => {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) notFound();

  const categorized = groupByCategory(blogs);
  const catStyle    = getCategoryStyle(blog.category);

  // prev / next for navigation
  const currentIdx = blogs.findIndex((b) => b.slug === slug);
  const prevBlog   = currentIdx > 0 ? blogs[currentIdx - 1] : null;
  const nextBlog   = currentIdx < blogs.length - 1 ? blogs[currentIdx + 1] : null;

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Breadcrumb bar ── */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 flex items-center gap-1.5 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
          <Link href="/pages/blogs" className="hover:text-blue-600 transition-colors">Blog</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
          <span className={`${catStyle.text} font-medium`}>{blog.category}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">

          {/* ── Main content ── */}
          <div className="lg:flex-1 min-w-0">

            {/* Article header card */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-5 shadow-sm">
              <div className={`h-1.5 ${catStyle.bar}`} />
              <div className="p-3 sm:p-7">
                {/* Category badge */}
                <div className="mb-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${catStyle.bg} ${catStyle.text} ${catStyle.border}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${catStyle.dot}`} />
                    {blog.category}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-3">
                  {blog.title}
                </h1>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {blog.description}
                </p>

                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 pt-4 border-t border-gray-100">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {blog.date}
                  </span>
                  {blog.readTime && (
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {blog.readTime} min read
                    </span>
                  )}
                  <span className="flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5" />
                    {blog.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Article body card */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-3 sm:p-7 md:p-10 overflow-hidden">
              <div
                className="prose prose-base sm:prose-lg max-w-none
                  prose-headings:text-gray-900 prose-headings:font-semibold
                  prose-h3:text-xl prose-h4:text-base
                  prose-p:text-gray-700 prose-p:leading-relaxed
                  prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-gray-900
                  prose-code:text-blue-700 prose-code:bg-blue-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
                  prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:overflow-x-auto
                  prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-50/50 prose-blockquote:py-1 prose-blockquote:not-italic
                  prose-table:border-collapse prose-th:border prose-th:border-gray-300 prose-th:bg-gray-50 prose-th:px-4 prose-th:py-2 prose-th:text-left prose-td:border prose-td:border-gray-200 prose-td:px-4 prose-td:py-2
                  prose-li:text-gray-700"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>

            {/* ── Prev / Next navigation ── */}
            {(prevBlog || nextBlog) && (
              <div className="mt-5 grid grid-cols-2 gap-4">
                {prevBlog ? (
                  <Link href={`/pages/blogs/${prevBlog.slug}`} className="group bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1.5">
                      <ArrowLeft className="w-3.5 h-3.5" /> Previous
                    </div>
                    <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                      {prevBlog.title}
                    </p>
                  </Link>
                ) : <div />}

                {nextBlog ? (
                  <Link href={`/pages/blogs/${nextBlog.slug}`} className="group bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-200 hover:shadow-sm transition-all text-right">
                    <div className="flex items-center justify-end gap-1.5 text-xs text-gray-400 mb-1.5">
                      Next <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                      {nextBlog.title}
                    </p>
                  </Link>
                ) : <div />}
              </div>
            )}
          </div>

          {/* ── Sidebar ── */}
          <aside className="lg:w-80 flex-shrink-0 space-y-4">

            {/* Back button */}
            <Link
              href="/pages/blogs"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm hover:border-blue-200"
            >
              <ArrowLeft className="w-4 h-4" />
              All Articles
            </Link>

            {/* Topics */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100">
                <h2 className="text-sm font-semibold text-gray-900">Topics</h2>
              </div>
              <div className="p-4 space-y-4">
                {Object.entries(categorized).map(([category, catBlogs]) => {
                  const s = getCategoryStyle(category);
                  return (
                    <div key={category}>
                      <div className={`flex items-center gap-2 mb-2 text-sm font-semibold uppercase tracking-wide ${s.text}`}>
                        <span className={`w-2 h-2 rounded-full ${s.dot}`} />
                        {category}
                      </div>
                      <ul className="space-y-1.5 pl-4">
                        {catBlogs.map((b) => (
                          <li key={b.slug}>
                            <Link
                              href={`/pages/blogs/${b.slug}`}
                              className={`block text-sm leading-snug py-0.5 transition-colors ${
                                b.slug === slug
                                  ? `${s.text} font-semibold`
                                  : 'text-gray-500 hover:text-gray-900'
                              }`}
                            >
                              {b.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100">
                <h2 className="text-sm font-semibold text-gray-900">Recent Posts</h2>
              </div>
              <div className="p-4 space-y-3">
                {blogs.slice(0, 6).map((b) => {
                  const s = getCategoryStyle(b.category);
                  return (
                    <Link
                      key={b.slug}
                      href={`/pages/blogs/${b.slug}`}
                      className={`block group border-l-2 pl-3 transition-colors ${
                        b.slug === slug ? `${s.bar.replace('bg-', 'border-')}` : 'border-gray-100 hover:border-blue-300'
                      }`}
                    >
                      <p className={`text-sm font-medium leading-snug mb-0.5 transition-colors ${
                        b.slug === slug ? s.text : 'text-gray-700 group-hover:text-blue-600'
                      }`}>
                        {b.title}
                      </p>
                      <p className="text-xs text-gray-400">{b.date}</p>
                    </Link>
                  );
                })}
              </div>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
