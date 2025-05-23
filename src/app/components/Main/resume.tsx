import React from "react";
import data from "../../data";

const Resume = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen py-6 px-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-center">Resume</h1>

      {/* Header Section */}
      <section className="max-w-4xl w-full text-center mb-12">
        <h2 className="text-2xl font-semibold">{data.header.name}</h2>
        <p className="text-lg font-medium text-gray-600">{data.header.title}</p>
        <div className="text-gray-500 mt-2">
          <p>
            Email:{" "}
            <a href={`mailto:${data.header.contact.email}`} className="text-blue-500">
              {data.header.contact.email}
            </a>
          </p>
          <p>Phone: {data.header.contact.phone}</p>
          <p>Location: {data.header.contact.location}</p>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="max-w-4xl w-full mb-12">
        <h3 className="text-2xl font-bold mb-4">Work Experience</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {data.workExperience.map((experience, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-4 shadow-md">
              <h4 className="text-xl font-semibold">{experience.role}</h4>
              <p className="text-gray-600">{experience.company}</p>
              <p className="text-gray-500">{experience.duration}</p>
              <p className="text-gray-500">{experience.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="max-w-4xl w-full mb-12">
        <h3 className="text-2xl font-bold mb-4">Education</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          {data.education.map((edu, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-4 shadow-md">
              <h4 className="text-xl font-semibold">{edu.degree}</h4>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-gray-500">{edu.duration}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl w-full mb-12">
        <h3 className="text-2xl font-bold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill) => (
            <span key={skill} className="bg-green-100 text-green-600 px-3 py-1 rounded-full shadow-md">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Frameworks Section */}
      <section className="max-w-4xl w-full mb-12">
        <h3 className="text-2xl font-bold mb-4">Languages & Frameworks</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          {data.frameworks.map((framework, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <span className="flex items-center text-gray-700 text-sm font-medium">
                  <span className="mr-2">{framework.icon}</span> {framework.name}
                </span>
              </div>
              <div className="w-full h-6 bg-gray-300 rounded-full relative overflow-hidden shadow-inner">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-400 h-full rounded-full shadow-lg flex items-center justify-center transition-all duration-500 ease-in-out"
                  style={{ width: framework.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resume;
