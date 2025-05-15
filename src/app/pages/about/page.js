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
    return (
        <div>
        
            <Profile />
            <ValueProposition/>
            <Experience/>
            <Education/>
    

            
                       {/* Header */}
           <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
                        Artifacts
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-yellow-600 mx-auto rounded-full"></div>
                </div>
            

            {/* Project Cards */}
            <div className="container mx-auto mt-5 p-4 sm:p-6 max-w-6xl ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="transform transition-transform hover:scale-105">
                        <Project project={project} />
                    </div>
                ))}
            </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto mt-2 p-4 sm:p-6 max-w-6xl">
                {/* Skills Section */}
                <section id="skills" className="mb-12 fade-in">
                      {/* Header */}
           <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
                        Skill
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-yellow-600 mx-auto rounded-full"></div>
                </div>
                    <div className="flex flex-wrap justify-center items-center space-x-8">

                        {/* Programming Languages */}
                        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">Programming Languages</h3>
                            <p className="text-gray-600">Python, Java, JavaScript, C++</p>
                        </div>

                        {/* Web Development */}
                        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">Web Development</h3>
                            <p className="text-gray-600">HTML, CSS, React, Next.js, Tailwind CSS, Django</p>
                        </div>

                        {/* Database Technologies */}
                        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">Databases</h3>
                            <p className="text-gray-600">MySQL, PostgreSQL, Firebase Firestore</p>
                        </div>

                        {/* Version Control */}
                        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">Version Control</h3>
                            <p className="text-gray-600">Git, GitHub</p>
                        </div>

                        {/* Cloud Platforms */}
                        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">Cloud Platforms</h3>
                            <p className="text-gray-600">AWS, Firebase</p>
                        </div>

                        {/* Data Science & Machine Learning */}
                        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">Data Science & Machine Learning</h3>
                            <p className="text-gray-600">Pandas, NumPy, scikit-learn, TensorFlow</p>
                        </div>

                        {/* Software Development Tools */}
                        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">Development Tools</h3>
                            <p className="text-gray-600">VS Code, IntelliJ IDEA, Docker</p>
                        </div>

                        {/* Testing */}
                        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">Testing</h3>
                            <p className="text-gray-600">Selenium, Jest, PyTest</p>
                        </div>
                    </div>
                </section>

        
     

            </div>
        </div>
    );
}
