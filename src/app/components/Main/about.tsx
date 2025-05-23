
import React from 'react';
import { skillsData } from '../../data';

const About = () => {
    return (
        <div className="about bg-white text-gray-800 min-h-screen flex flex-col items-center py-6 px-8 rounded-lg">
            <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>

            {/* Introduction */}
            <section className="max-w-3xl w-full text-center mb-12">
                <p className="md:text-lg text-sm">
                    Hello! I&apos;m Hashim, a passionate frontend developer and backend engineer. I specialize in creating intuitive and responsive web applications using modern technologies like React, Python (Flask), and more. I have 2+ years of experience in Web Development, and I am constantly learning new tools to improve my skills and provide high-quality solutions to complex problems.
                </p>
            </section>

            <h1 className="w-full text-xl font-semibold text-center mb-6">What I Offer 
                <span className="text-blue-800 font-kaushan text-2xl">  ?</span>
            </h1>

            {/* Skills Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full cursor-pointer">
                {skillsData.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 rounded-lg p-6 flex flex-col md:flex-row items-center shadow-md hover:shadow-lg transition-shadow"
                    >
                        <div>{skill.icon}</div>
                        <div>
                            <h2 className="text-xl font-bold mb-2">{skill.title}</h2>
                            <p>{skill.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
