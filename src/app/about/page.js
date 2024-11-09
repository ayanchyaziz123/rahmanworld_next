import Biography from "@/components/Biography";
import Profile from "@/components/Profile";

// app/about/page.js
export default function AboutPage() {
    return (
        <div>
            <Profile/>
            <Biography/>

            {/* Main Content */}
            <div className="container mx-auto mt-2 p-4 sm:p-6 max-w-6xl">
               

                {/* Education Section */}
                <section id="education" className="py-12 fade-in">
                    <h2 className="text-3xl font-extrabold mb-6 text-center" style={{ color: '#996232' }}>Education</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Education 1: Master's */}
                        <div className="">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Masterlogo.png" alt="Indiana Wesleyan University" className="w-32 h-20 mb-4 rounded" />
                            <h3 className="text-xl font-bold mb-2" style={{ color: '#996232' }}>Master of Science in Computer Science and Artificial Intelligence</h3>
                            <p className="text-gray-700 mb-2">Indiana Wesleyan University</p>
                            <p className="text-gray-500 mb-4">2024 - Present</p>
                            <p className="text-gray-700">Advanced coursework in software architecture, machine learning, and AI applications...</p>
                        </div>

                        {/* Education 2: Bachelor's */}
                        <div className="">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThojYZr_EOQlsW3U_UlbcConqVxaxyzsTpvw&s" alt="Your University" className="w-32 h-20 mb-4 rounded" />
                            <h3 className="text-xl font-bold mb-2" style={{ color: '#996232' }}>Bachelor of Science in Computer Science and Engineering</h3>
                            <p className="text-gray-700 mb-2">Metropolitan University</p>
                            <p className="text-gray-500 mb-4">2022</p>
                            <p className="text-gray-700">Focused on core computer science principles, software development, and engineering practices...</p>
                        </div>

                    </div>
                </section>

                {/* Experience Section */}
                <section id="experience" className="py-12 fade-in">
                    <h2 className="text-3xl font-extrabold mb-6 text-center" style={{ color: '#996232' }}>Experience</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Experience 3: Coding Mentor */}
                        <div className="">
                            <h3 className="text-xl font-bold mb-2" style={{ color: '#996232' }}>Coding Mentor - CUNY Queens College</h3>
                            <p className="text-gray-700 mb-2">2023 - 2024</p>
                            <p className="text-gray-700 mb-4">Guidance: Supported students and aspiring developers in learning programming languages and concepts.</p>
                            <p className="text-gray-700 mb-4">OOP Principles: Assisted in understanding and applying object-oriented programming principles.</p>
                            <p className="text-gray-700 mb-4">Debugging: Helped with debugging, troubleshooting code, and improving efficiency.</p>
                            <p className="text-gray-700 mb-4">Best Practices: Encouraged clean code, modularization, and proper documentation.</p>
                            <p className="text-gray-700 mb-4">Career Advice: Provided insights into the software development industry and technical interview preparation.</p>
                        </div>

                        {/* Experience 4: Assistant Manager */}
                        <div className="">
                            <h3 className="text-xl font-bold mb-2" style={{ color: '#996232' }}>Assistant Manager - Kennedy Fried Chicken & Pizza</h3>
                            <p className="text-gray-700 mb-2">Jan 2023 - Aug 2023 · Part-time</p>
                            <p className="text-gray-700 mb-4">Managed day-to-day operations, supervised staff, and ensured excellent customer service. Coordinated with team members to optimize workflows and enhance operational efficiency.</p>
                            <ul className="text-gray-700 list-disc ml-6 space-y-2">
                                <li>Oversaw daily operations and staff performance.</li>
                                <li>Handled customer inquiries and resolved issues promptly.</li>
                                <li>Implemented operational improvements to enhance service quality.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                {/* Skills Section */}
                <section id="skills" className="mb-12 fade-in">
                    <h2 className="text-3xl font-extrabold text-center mb-6" style={{ color: '#996232' }}>Skills</h2>
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





               
                


                {/* Achievements Section */}
                <section id="achievements" className="mb-12 fade-in">
                    <h2 className="text-3xl font-extrabold text-center mb-6" style={{ color: '#996232' }}>Achievement</h2>
                    <div className="flex justify-center items-center space-x-6">
                        {/* Achievement Items */}
                    </div>
                </section>
            </div>
        </div>
    );
}
