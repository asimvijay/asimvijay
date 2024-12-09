import React from 'react';
import { FaLaptopCode, FaDatabase, FaCodeBranch, FaPencilRuler, FaTrophy, FaLightbulb,} from 'react-icons/fa';
import { FaMobileScreen } from 'react-icons/fa6';

const About = () => {
    return (
        <div className="about bg-white text-gray-800 min-h-screen flex flex-col items-center py-6 px-8 rounded-lg">
            <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>

            {/* Introduction */}
            <section className="max-w-3xl w-full text-center mb-12">
                <p className="text-lg">
                    Hello! Im Hashim, a passionate frontend developer and backend engineer. I specialize in creating intuitive and responsive web applications using modern technologies like React, ASP.NET Core, and more. I have 2+ years of experience in Web Development, and I am constantly learning new tools to improve my skills and provide high-quality solutions to complex problems.
                </p>
            </section>

            <h1 className='w-full text-xl font-semibold text-center mb-6'>What I Offer 
                <span className='text-blue-800 font-kaushan text-2xl'>  ?</span></h1>

            {/* Skills Section */}
            <div className="grid grid-cols-1 md:grid-cols-2  gap-8 max-w-6xl w-full">
                {/* Card 1 */}
                <div className="bg-gray-100 rounded-lg p-6 flex items-center shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-green-500 text-4xl mr-4">
                        <FaLaptopCode />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-2">Frontend Development</h2>
                        <p>I can build a beautiful and scalable SPA using HTML, CSS, and React.js / Nextjs.</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-gray-100 rounded-lg p-6 flex items-center shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-blue-500 text-4xl mr-4">
                        <FaDatabase />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-2">Backend Development</h2>
                        <p>Handle databases, servers, and APIs using Nodejs, Python Flask, and Nextjs.</p>
                    </div>
                </div>

                {/* Card 3 */}
                    <div className="bg-gray-100 rounded-lg p-6 flex items-center shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-green-500 text-4xl mr-4">
                        <FaMobileScreen />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-2">App Development</h2>
                        <p>I can build a beautiful App and scalable SPA using Flutter and React Native.</p>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="bg-gray-100 rounded-lg p-6 flex items-center shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-red-500 text-4xl mr-4">
                        <FaCodeBranch />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-2">API Development</h2>
                        <p>Develop robust REST APIs using Django Rest Framework and Node.js.</p>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="bg-gray-100 rounded-lg p-6 flex items-center shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-yellow-500 text-4xl mr-4">
                        <FaPencilRuler />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-2">UI/UX Design</h2>
                        <p>Stunning user interface designs using Figma and Framer.</p>
                    </div>
                </div>

                {/* Card 5 */}
                <div className="bg-gray-100 rounded-lg p-6 flex items-center shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-purple-500 text-4xl mr-4">
                        <FaTrophy />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-2">Competitive Coding</h2>
                        <p>Daily problem solver on HackerRank and LeetCode.</p>
                    </div>
                </div>

                {/* Card 6 */}
                <div className="bg-gray-100 rounded-lg p-6 flex items-center shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-pink-500 text-4xl mr-4">
                        <FaLightbulb />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-2">Other Projects</h2>
                        <p>Always exploring innovative solutions and building tools for efficiency.</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default About;
