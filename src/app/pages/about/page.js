import Profile from "@/app/components/Profile";
import Experience from "@/app/components/Experience";
import Education from "@/app/components/Education";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    { name: "Problem Solving", issuer: "HackerRank" },
    { name: "Python Basic", issuer: "HackerRank" },
    { name: "Java Basic", issuer: "HackerRank" },
    { name: "React Fundamentals", issuer: "Coursera" },
];

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">

            {/* ── Hero header ── */}
            <Profile />

            {/* ── Professional Summary ── */}
            <section className="max-w-5xl mx-auto px-6 py-12 border-b border-gray-100">
                <h2 className="text-2xl font-light text-gray-900 border-b border-gray-200 pb-3 mb-6">
                    Professional Summary
                </h2>
                <p className="text-gray-700 leading-relaxed text-base max-w-3xl">
                    Full-Stack Software Engineer with 3+ years of experience building scalable web and
                    AI-powered applications. Skilled in Python, Java, JavaScript, TypeScript, C/C++,
                    Django, Node.js, React.js, Next.js, AWS, SQL/NoSQL, Docker, and CI/CD. Experienced
                    in AI/ML using OpenAI, Agentic AI, scikit-learn, TensorFlow, and XGBoost. Strong
                    foundation in OOP, data structures, and algorithms (1,000+ coding problems solved).
                    Holds an M.Sc. in AI. Author of peer-reviewed{" "}
                    <Link href="/pages/publications" className="text-blue-600 hover:underline font-medium">
                        research publications
                    </Link>{" "}
                    in machine learning and AI, with 50+{" "}
                    <Link href="/pages/artifacts" className="text-blue-600 hover:underline font-medium">
                        projects
                    </Link>{" "}
                    spanning full-stack development, AI systems, and applied research. Open to relocation.
                </p>
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
                        <div
                            key={i}
                            className="border border-gray-200 p-4 hover:border-blue-300 transition-colors duration-200"
                        >
                            <p className="text-sm font-medium text-gray-900 mb-1">{cert.name}</p>
                            <p className="text-xs text-gray-500">{cert.issuer}</p>
                        </div>
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
