import Profile from "@/app/components/Profile";
import Experience from "@/app/components/Experience";
import Education from "@/app/components/Education";
import Link from "next/link";
import { ArrowRight, BookOpen, Code2, FlaskConical, Award, ExternalLink } from "lucide-react";

const skillCategories = [
    {
        title: "Languages",
        skills: ["Python", "Java", "JavaScript", "TypeScript", "C", "C++"],
    },
    {
        title: "Web & Frameworks",
        skills: ["React.js", "Next.js", "Django", "Node.js", "Tailwind CSS", "HTML", "CSS"],
    },
    {
        title: "AI & Machine Learning",
        skills: ["OpenAI", "Agentic AI", "scikit-learn", "TensorFlow", "XGBoost", "SHAP", "Word2Vec"],
    },
    {
        title: "Databases",
        skills: ["PostgreSQL", "MySQL", "Firebase Firestore", "NoSQL"],
    },
    {
        title: "Cloud & DevOps",
        skills: ["AWS", "Docker", "CI/CD", "Firebase"],
    },
    {
        title: "Testing & Tools",
        skills: ["PyTest", "Jest", "Selenium", "Appium", "Git", "GitHub", "VS Code", "IntelliJ IDEA"],
    },
];

const certifications = [
    { name: "Problem Solving", issuer: "HackerRank", link: "https://www.hackerrank.com/certificates/iframe/0a7e6d1c0e5a" },
    { name: "Python Basic", issuer: "HackerRank", link: "https://www.hackerrank.com" },
    { name: "Java Basic", issuer: "HackerRank", link: "https://www.hackerrank.com" },
    { name: "React Fundamentals", issuer: "Coursera", link: "https://www.coursera.org" },
];

const researchInterests = [
    {
        icon: <FlaskConical className="w-5 h-5 text-blue-600" />,
        title: "Machine Learning & Ensemble Methods",
        desc: "XGBoost, Random Forest, LightGBM, stacking ensembles applied to real-world tabular datasets.",
    },
    {
        icon: <BookOpen className="w-5 h-5 text-blue-600" />,
        title: "Explainable AI (XAI)",
        desc: "SHAP-based model interpretability for healthcare, finance, and social science applications.",
    },
    {
        icon: <Code2 className="w-5 h-5 text-blue-600" />,
        title: "NLP & Transformer Architectures",
        desc: "BERT, RoBERTa, and transformer models for fraud detection, text classification, and information extraction.",
    },
    {
        icon: <Award className="w-5 h-5 text-blue-600" />,
        title: "Agentic AI & LLM Systems",
        desc: "Building autonomous AI agents using OpenAI APIs, tool use, and multi-step reasoning pipelines.",
    },
];

const highlights = [
    { value: "3+", label: "Years Industry Experience" },
    { value: "4", label: "Research Publications" },
    { value: "50+", label: "Projects Built" },
    { value: "1000+", label: "Coding Problems Solved" },
    { value: "4.0", label: "M.Sc. GPA" },
    { value: "99.44%", label: "Best Model Accuracy" },
];

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">

            {/* ── Hero header ── */}
            <Profile />

            {/* ── Quick Stats ── */}
            <section className="bg-slate-50 border-b border-gray-200">
                <div className="max-w-5xl mx-auto px-6 py-8">
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 text-center">
                        {highlights.map((h, i) => (
                            <div key={i}>
                                <div className="text-2xl font-semibold text-blue-600">{h.value}</div>
                                <div className="text-xs text-gray-500 mt-0.5">{h.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Professional Summary ── */}
            <section className="max-w-5xl mx-auto px-6 py-12 border-b border-gray-100">
                <h2 className="text-2xl font-light text-gray-900 border-b border-gray-200 pb-3 mb-6">
                    Professional Summary
                </h2>
                <div className="max-w-3xl space-y-4 text-gray-700 leading-relaxed text-base">
                    <p>
                        Full-Stack Software Engineer and AI/ML Researcher with 3+ years of experience
                        designing and deploying scalable web applications and production-grade AI systems.
                        Holds an <strong>M.Sc. in Artificial Intelligence (GPA 4.0)</strong> from Indiana Wesleyan University, USA.
                    </p>
                    <p>
                        Author of peer-reviewed{" "}
                        <Link href="/pages/publications" className="text-blue-600 hover:underline font-medium">
                            research publications
                        </Link>{" "}
                        in machine learning, NLP, and applied AI — including work on recruitment fraud detection
                        (XGBoost, 99.44% accuracy), NYC housing affordability forecasting, exoplanet classification,
                        and maternal health risk prediction using ensemble learning and SHAP explainability.
                    </p>
                    <p>
                        Proficient in Python, Java, JavaScript, TypeScript, Django, React.js, Next.js, Node.js,
                        AWS, Docker, PostgreSQL, and CI/CD. Experienced with TensorFlow, scikit-learn, XGBoost,
                        BERT, OpenAI APIs, and Agentic AI systems. Strong foundation in OOP, data structures,
                        and algorithms with 1,000+ coding problems solved. Maintains 50+{" "}
                        <Link href="/pages/artifacts" className="text-blue-600 hover:underline font-medium">
                            open-source projects
                        </Link>. Open to relocation.
                    </p>
                </div>
            </section>

            {/* ── Research Interests ── */}
            <section className="max-w-5xl mx-auto px-6 py-12 border-b border-gray-100">
                <h2 className="text-2xl font-light text-gray-900 border-b border-gray-200 pb-3 mb-8">
                    Research Interests
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {researchInterests.map((r, i) => (
                        <div key={i} className="flex gap-4 p-4 border border-gray-100 hover:border-blue-200 transition-colors duration-200">
                            <div className="p-2 bg-blue-50 rounded h-fit">
                                {r.icon}
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900 mb-1">{r.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{r.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Experience ── */}
            <Experience />

            {/* ── Education ── */}
            <Education />

            {/* ── Technical Skills ── */}
            <section className="max-w-5xl mx-auto px-6 py-12 border-t border-gray-100">
                <h2 className="text-2xl font-light text-gray-900 border-b border-gray-200 pb-3 mb-8">
                    Technical Skills
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((cat, i) => (
                        <div key={i}>
                            <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-3">
                                {cat.title}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill, j) => (
                                    <span
                                        key={j}
                                        className="px-3 py-1 text-sm bg-gray-50 border border-gray-200 text-gray-700 rounded hover:border-blue-300 hover:text-blue-600 transition-colors duration-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Certifications ── */}
            <section className="max-w-5xl mx-auto px-6 py-12 border-t border-gray-100">
                <h2 className="text-2xl font-light text-gray-900 border-b border-gray-200 pb-3 mb-8">
                    Certifications
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {certifications.map((cert, i) => (
                        <a
                            key={i}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group border border-gray-200 p-4 hover:border-blue-300 transition-colors duration-200 block"
                        >
                            <div className="flex items-start justify-between gap-2">
                                <div>
                                    <p className="text-sm font-medium text-gray-900 mb-1">{cert.name}</p>
                                    <p className="text-xs text-gray-500">{cert.issuer}</p>
                                </div>
                                <ExternalLink className="w-3.5 h-3.5 text-gray-300 group-hover:text-blue-400 flex-shrink-0 mt-0.5 transition-colors" />
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="bg-slate-50 border-t border-gray-200">
                <div className="max-w-5xl mx-auto px-6 py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-xl font-light text-gray-900 mb-1">Interested in working together?</h3>
                        <p className="text-sm text-gray-600">Open to full-time roles, freelance projects, and research collaborations.</p>
                    </div>
                    <div className="flex gap-3 shrink-0">
                        <Link
                            href="/pages/contact"
                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                        >
                            Contact Me <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            href="/pages/publications"
                            className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 text-sm font-medium hover:border-blue-600 hover:text-blue-600 transition-colors duration-200"
                        >
                            Publications
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
