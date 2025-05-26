import AboutPageSectionNavbar from "@/app/components/AboutPageSectionNavbar";
import Achievements from "@/app/components/Achievements";
import Biography from "@/app/components/Biography";
import Education from "@/app/components/Education";
import Experience from "@/app/components/Experience";
import Interests from "@/app/components/Interestes";
import Profile from "@/app/components/Profile";
import Project from "@/app/components/Artifact";
import TargetAudience from "@/app/components/TargetAudience";
import ValueProposition from "@/app/components/ValueProposition";
import { projects } from '@/data/projects';

// app/about/page.js
export default function AboutPage() {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: "Python, Java, JavaScript, C++"
        },
        {
            title: "Web Development",
            skills: "HTML, CSS, React, Next.js, Tailwind CSS, Django"
        },
        {
            title: "Databases",
            skills: "MySQL, PostgreSQL, Firebase Firestore"
        },
        {
            title: "Version Control",
            skills: "Git, GitHub"
        },
        {
            title: "Cloud Platforms",
            skills: "AWS, Firebase"
        },
        {
            title: "Data Science & Machine Learning",
            skills: "Pandas, NumPy, scikit-learn, TensorFlow"
        },
        {
            title: "Development Tools",
            skills: "VS Code, IntelliJ IDEA, Docker"
        },
        {
            title: "Testing",
            skills: "Selenium, Jest, PyTest"
        }
    ];

    return (
        <div className="">
            <Profile />
            <ValueProposition/>
            <Experience/>
            <Education/>

            {/* Artifacts Section */}
            <section className="max-w-5xl mx-auto px-6 py-12">
                <div className="bg-white">
                    <header className="mb-6">
                        <h2 className="text-2xl font-light text-gray-900 border-b border-gray-200 pb-3">
                            Artifacts
                        </h2>
                    </header>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <div key={index}>
                                <Project project={project} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="max-w-5xl mx-auto px-6 py-12">
                <div className="bg-white">
                    <header className="mb-6">
                        <h2 className="text-2xl font-light text-gray-900 border-b border-gray-200 pb-3">
                            Technical Skills
                        </h2>
                    </header>

                    <div className="space-y-6">
                        {skillCategories.map((category, index) => (
                            <article key={index} className="bg-white border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                                <h3 className="text-lg font-medium text-gray-900 mb-2">
                                    {category.title}
                                </h3>
                                <div className="prose max-w-none">
                                    <p className="text-gray-700 leading-relaxed">
                                        {category.skills}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}