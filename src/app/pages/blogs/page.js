'use client';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { Search, Clock, Calendar, BookOpen, ArrowRight } from 'lucide-react';
import { blogs } from '../../../data/blogs/index';

const CATEGORY_STYLES = {
  'Machine Learning': { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200', dot: 'bg-blue-500' },
  'Deep Learning':    { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-200', dot: 'bg-purple-500' },
  'Data Structures':  { bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-200', dot: 'bg-emerald-500' },
  'Algorithms':       { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-200', dot: 'bg-orange-500' },
  'AI Tools':         { bg: 'bg-rose-100', text: 'text-rose-700', border: 'border-rose-200', dot: 'bg-rose-500' },
};

const defaultStyle = { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-200', dot: 'bg-gray-500' };

const getCategoryStyle = (category) => CATEGORY_STYLES[category] || defaultStyle;

const BlogsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() =>
    ['All', ...new Set(blogs.map((b) => b.category))],
    []
  );

  const filteredBlogs = useMemo(() => {
    const byCategory = selectedCategory === 'All'
      ? blogs
      : blogs.filter((b) => b.category === selectedCategory);
    return searchQuery
      ? byCategory.filter((b) =>
          b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          b.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : byCategory;
  }, [selectedCategory, searchQuery]);

  const featuredBlog = filteredBlogs[0];
  const restBlogs = filteredBlogs.slice(1);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 py-5 sm:py-10">
        {/* Page title */}
        <div className="mb-5 sm:mb-8">
          <h1 className="text-3xl font-light text-gray-900">Blog</h1>
          <p className="text-gray-500 text-sm mt-1">Machine learning, algorithms, and AI engineering</p>
        </div>

        {/* ── Search + Category Filters ── */}
        <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-5 mb-5 sm:mb-8 shadow-sm">
          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search articles…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 transition-all"
            />
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              const style = cat === 'All' ? null : getCategoryStyle(cat);
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-150 ${
                    active
                      ? cat === 'All'
                        ? 'bg-gray-900 text-white border-gray-900'
                        : `${style.bg} ${style.text} ${style.border} ring-2 ring-offset-1 ring-current`
                      : cat === 'All'
                        ? 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                        : `bg-white ${style.text} ${style.border} hover:${style.bg}`
                  }`}
                >
                  {cat === 'All' ? `All (${blogs.length})` : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── No results ── */}
        {filteredBlogs.length === 0 && (
          <div className="bg-white border border-gray-200 rounded-xl p-16 text-center">
            <BookOpen className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 font-medium">No articles found.</p>
            <p className="text-gray-400 text-sm mt-1">Try a different search or category.</p>
          </div>
        )}

        {/* ── Featured Card (first result) ── */}
        {featuredBlog && (
          <Link href={`/pages/blogs/${featuredBlog.slug}`} className="block mb-6 group">
            <article className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 hover:border-blue-200">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-1.5" />
              <div className="p-4 sm:p-7">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${getCategoryStyle(featuredBlog.category).bg} ${getCategoryStyle(featuredBlog.category).text} ${getCategoryStyle(featuredBlog.category).border}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${getCategoryStyle(featuredBlog.category).dot}`} />
                    {featuredBlog.category}
                  </span>
                  <span className="text-xs text-gray-400 bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full font-medium border border-blue-100">
                    Latest
                  </span>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                  {featuredBlog.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-2xl">
                  {featuredBlog.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {featuredBlog.date}
                    </span>
                    {featuredBlog.readTime && (
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {featuredBlog.readTime} min read
                      </span>
                    )}
                  </div>
                  <span className="flex items-center gap-1 text-blue-600 text-sm font-medium group-hover:gap-2 transition-all">
                    Read article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </article>
          </Link>
        )}

        {/* ── Results count ── */}
        {filteredBlogs.length > 0 && restBlogs.length > 0 && (
          <p className="text-xs text-gray-400 mb-4 px-1">
            {filteredBlogs.length} article{filteredBlogs.length !== 1 ? 's' : ''} · showing {restBlogs.length} more below
          </p>
        )}

        {/* ── Grid of remaining cards ── */}
        {restBlogs.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
            {restBlogs.map((blog, i) => {
              const style = getCategoryStyle(blog.category);
              return (
                <Link key={i} href={`/pages/blogs/${blog.slug}`} className="group block">
                  <article className="bg-white border border-gray-200 rounded-xl h-full flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 hover:border-blue-200">
                    <div className={`h-1 ${style.dot.replace('bg-', 'bg-')}`} style={{background: 'currentColor'}}>
                      <div className={`h-1 ${style.dot}`} />
                    </div>
                    <div className="p-3 sm:p-5 flex flex-col flex-1">
                      {/* Category badge */}
                      <div className="mb-3">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${style.bg} ${style.text} ${style.border}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                          {blog.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                        {blog.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-4 line-clamp-3">
                        {blog.description}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="flex items-center gap-3 text-xs text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {blog.date}
                          </span>
                          {blog.readTime && (
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {blog.readTime} min
                            </span>
                          )}
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        )}

        {/* ── Footer note ── */}
        {filteredBlogs.length > 0 && (
          <p className="text-center text-xs text-gray-400 mt-12">
            {filteredBlogs.length} article{filteredBlogs.length !== 1 ? 's' : ''} · More posts coming soon
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogsPage;
