import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowRight, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';

const HomePage = () => {
    const skills = [
        "Python", "JavaScript", "React", "Next.js", "Django",
        "TensorFlow", "Machine Learning", "AWS", "Docker",
        "PostgreSQL", "Git", "scikit-learn"
    ];

    const featuredProjects = projects.slice(0, 3);

    return (
        <div className="min-h-screen bg-white">

            {/* ── Hero ── */}
            <section className="max-w-5xl mx-auto px-3 sm:px-6 py-8 lg:py-14">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

                    {/* Left: text */}
                    <div className="flex-1 space-y-4 order-2 lg:order-1 text-center lg:text-left">
                        <div className="space-y-3">
                            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                                <span className="inline-block bg-blue-50 border border-blue-200 text-blue-700 text-xs font-medium px-3 py-1 rounded-full tracking-wide">
                                    AI/ML Researcher
                                </span>
                                <span className="inline-block bg-gray-100 border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1 rounded-full tracking-wide">
                                    Full-Stack Software Engineer
                                </span>
                            </div>
                            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-tight">
                                Azizur{' '}
                                <span className="font-normal">Rahman</span>
                                <span className="text-blue-600">.</span>
                            </h1>
                        </div>

                        <p className="text-gray-600 text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
                            Full-Stack Software Engineer and AI/ML Researcher with 3+ years of experience
                            building scalable web applications and production AI systems. Author of
                            peer-reviewed publications in machine learning and applied AI. Specializes
                            in Python, React, Next.js, Django, TensorFlow, and XGBoost.
                        </p>

                        {/* Education badges */}
                        <div className="flex flex-col gap-1.5 text-sm text-gray-500 max-w-lg mx-auto lg:mx-0">
                            <div className="flex items-center justify-center lg:justify-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                                <span>M.Sc. Artificial Intelligence — Indiana Wesleyan University, USA</span>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></span>
                                <span>B.Sc. Computer Science & Engineering — Metropolitan University, Bangladesh</span>
                            </div>
                        </div>

                        {/* CTA buttons */}
                        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                            <Link
                                href="/pages/about"
                                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                            >
                                View Portfolio
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/pages/contact"
                                className="inline-flex items-center border border-gray-300 text-gray-700 px-6 py-3 text-sm font-medium hover:border-blue-600 hover:text-blue-600 transition-colors duration-200"
                            >
                                Contact Me
                            </Link>
                        </div>

                        {/* Social icons */}
                        <div className="flex items-center gap-5 justify-center lg:justify-start pt-1">
                            <a
                                href="https://www.linkedin.com/in/azizur-rahman-720636165/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-600 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="https://github.com/ayanchyaziz123"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-gray-900 transition-colors"
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:azizurusa22@gmail.com"
                                className="text-gray-400 hover:text-red-500 transition-colors"
                                aria-label="Email"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Right: profile photo */}
                    <div className="relative flex-shrink-0 order-1 lg:order-2">
                        <div className="w-44 h-44 lg:w-60 lg:h-60 relative">
                            <div className="absolute inset-0 bg-blue-100 rounded-full translate-x-3 translate-y-3" />
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                                <img
                                    src="/images/cover6.jpeg"
                                    alt="Rahman Azizur"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Stats ── */}
            <section className="border-t border-b border-gray-100 bg-slate-50">
                <div className="max-w-5xl mx-auto px-3 sm:px-6 py-6 sm:py-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {[
                            { label: 'Projects Completed', value: '50+' },
                            { label: 'LeetCode Problems', value: '500+' },
                            { label: 'Years of Experience', value: '3+' },
                            { label: 'Technologies', value: '15+' },
                        ].map((stat, i) => (
                            <div key={i} className="space-y-1">
                                <div className="text-3xl font-light text-gray-900">{stat.value}</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Skills ── */}
            <section className="border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-3 sm:px-6 py-6 sm:py-10">
                    <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-5">
                        Technologies &amp; Tools    
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill, i) => (
                            <span
                                key={i}
                                className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 text-sm rounded hover:border-blue-300 hover:text-blue-600 transition-colors duration-200"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Featured Projects ── */}
            <section className="border-b border-gray-100 bg-white">
                <div className="max-w-5xl mx-auto px-3 sm:px-6 py-6 sm:py-12">
                    <div className="flex items-center justify-between mb-5">
                        <h2 className="text-2xl font-light text-gray-900">Featured Projects</h2>
                        <Link
                            href="/pages/artifacts"
                            className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
                        >
                            View All <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {featuredProjects.map((project, i) => (
                            <div
                                key={i}
                                className="group border border-gray-200 rounded overflow-hidden hover:border-blue-300 hover:shadow-sm transition-all duration-200"
                            >
                                <div className="aspect-video overflow-hidden bg-gray-100">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-xs text-gray-500 line-clamp-2">
                                        {project.description}
                                    </p>
                                    <Link
                                        href={`/pages/artifacts/${project.slug}`}
                                        className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 mt-3"
                                    >
                                        View Project <ExternalLink className="w-3 h-3" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Research highlight ── */}
            <section className="bg-slate-50 border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-3 sm:px-6 py-6 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                        <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-2">Research</p>
                        <h2 className="text-2xl font-light text-gray-900 mb-1">Publications &amp; Research</h2>
                        <p className="text-gray-600 text-sm max-w-sm">
                            Exploring ML applications in astronomy and applied AI systems.
                        </p>
                    </div>
                    <Link
                        href="/pages/publications"
                        className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-3 text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-200 shrink-0"
                    >
                        View Publications <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="bg-white">
                <div className="max-w-5xl mx-auto px-3 sm:px-6 py-10 sm:py-16 text-center">
                    <h2 className="text-3xl font-light text-gray-900 mb-3">
                        Let&apos;s Work Together
                    </h2>
                    <p className="text-gray-600 mb-5 max-w-md mx-auto">
                        Open to research collaborations, freelance projects, and full-time opportunities.
                    </p>
                    <Link
                        href="/pages/contact"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                    >
                        Get In Touch <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
