import React from "react";


const Resume = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen py-6 px-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-center">Resume</h1>

      {/* Header Section */}
      <section className="max-w-4xl w-full text-center mb-12">
        <h2 className="text-2xl font-semibold">Hashim Hasan</h2>
        <p className="text-lg font-medium text-gray-600">
          Web Developer, Python Developer, and MERN-Stack Developer
        </p>
        <div className="text-gray-500 mt-2">
          <p>
            Email:{" "}
            <a
              href="mailto:hashimhasan444@gmail.com"
              className="text-blue-500"
            >
              hashimhasan444@gmail.com
            </a>
          </p>
          <p>Phone: 03240251086</p>
          <p>Location: B125, Karachi, Pakistan</p>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="max-w-4xl w-full mb-12">
  <h3 className="text-2xl font-bold mb-4">Work Experience</h3>
  <div className="grid gap-4 md:grid-cols-2 ">
    <div className="bg-gray-100 rounded-lg p-4 shadow-md">
      <h4 className="text-xl font-semibold">
        Intern - Frontend Web Designer and Backend Developer
      </h4>
      <p className="text-gray-600">
        NCAI - NEDUET, Smart City Lab (12/2023 - 08/2024)
      </p>
      <p className="text-gray-500">
        Completed an 8-month internship focusing on frontend design and backend
        development, contributing to key projects in the Smart City Lab.
      </p>
    </div>
    <div className="bg-gray-100 rounded-lg p-4 shadow-md">
      <h4 className="text-xl font-semibold">
        Frontend Web Designer and Backend Developer
      </h4>
      <p className="text-gray-600">
        NCAI - NEDUET, Smart City Lab (08/2024 - Present)
      </p>
      <p className="text-gray-500">
        Currently working as a frontend web designer and backend developer at
        the National Center of Artificial Intelligence (NCAI), NED University.
      </p>
    </div>
  </div>
</section>


{/* Education Section */}
<section className="max-w-4xl w-full mb-12">
  <h3 className="text-2xl font-bold mb-4">Education</h3>
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
    <div className="bg-gray-100 rounded-lg p-4 shadow-md">
      <h4 className="text-xl font-semibold">Software Engineering</h4>
      <p className="text-gray-600">Aptech Pakistan (08/2023 - Present)</p>
    </div>
    <div className="bg-gray-100 rounded-lg p-4 shadow-md">
      <h4 className="text-xl font-semibold">BBA</h4>
      <p className="text-gray-600">
        Allama Iqbal Open University (AIOU) (08/2023 - Present)
      </p>
    </div>
    <div className="bg-gray-100 rounded-lg p-4 shadow-md">
      <h4 className="text-xl font-semibold">Pre-Engineering</h4>
      <p className="text-gray-600">
        Islamia Science College (08/2020 - 08/2022)
      </p>
    </div>
    <div className="bg-gray-100 rounded-lg p-4 shadow-md">
      <h4 className="text-xl font-semibold">Computer Science</h4>
      <p className="text-gray-600">
        White House Grammar School (01/2009 - 07/2019)
      </p>
    </div>
  </div>
</section>


      {/* Skills Section */}
      <section className="max-w-4xl w-full mb-12">
        <h3 className="text-2xl font-bold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "WordPress",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "Python",
            "JavaScript",
            "Next.js",
            "React.js",
            "Flutter",
            "Firebase",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-green-100 text-green-600 px-3 py-1 rounded-full shadow-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

    {/* Tools & Frameworks with Progress Bars */}
    <section className="max-w-4xl w-full mb-12">
  <h3 className="text-2xl font-bold mb-4">Languages & Frameworks</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
    {[
      { name: "Python", level: "80%", icon: "🐍" },
      { name: "JavaScript", level: "70%", icon: "✨" },
      { name: "React", level: "65%", icon: "⚛️" },
      { name: "React-Native", level: "60%", icon: "📱" },
      { name: "Flutter", level: "65%", icon: "🦋" },
      { name: "Nextjs", level: "50%", icon: "🌱" },
      { name: "Tailwind", level: "80%", icon: "📦" },
    ].map((skill, index) => (
      <div key={index}>
        <div className="flex items-center justify-between mb-2">
          <span className="flex items-center text-gray-700 text-sm font-medium">
            <span className="mr-2">{skill.icon}</span> {skill.name}
          </span>
          
        </div>
        <div className="w-full h-6 bg-gray-300 rounded-full relative overflow-hidden shadow-inner">
          <div
            className="bg-gradient-to-r from-green-400  to-blue-400 h-full rounded-full shadow-lg flex items-center justify-center transition-all duration-500 ease-in-out"
            style={{ width: skill.level }}
          >
            
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


    </div>
  );
};

export default Resume;
