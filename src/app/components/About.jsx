
// components/About.js
import { motion } from 'framer-motion';

export default function About() {
  const timeline = [
    {
      year: '2021 - Present',
      title: 'Software Engineer',
      company: 'Crop2x pvt Ltd',
      description: 'Leading full-stack development projects for enterprise clients.',
    },
    {
      year: '2024 - Present',
      title: 'Software Engineer/Research Assistant(RA)',
      company: 'NCAI NEDUET SMART CITY LAB',
      description:
        'Developed software applications using React, React-native, Nextjs, Flutter, Node.js, Python, and cloud technologies.',
    },
    {
      year: '2023 - 2024',
      title: 'Software Paid Intern',
      company: 'NCAI NEDUET SMART CITY LAB',
      description: 'Built responsive websites and e-commerce solutions for various clients.',
    },
    {
      year: '2023 - 2025',
      title: 'Higher Diploma In Software Engineering(HDSE)',
      company: 'Aptech Pakistan',
      description: 'Graduated with honors. Specialized in software engineering and AI.',
    },
    {
      year: '2023 - 2027',
      title: "Bachelor's In Business Administration(BBA)",
      company: 'Aptech Pakistan',
      description: 'Graduated with honors. Specialized in business building strategies, accounting.',
    },
    {
      year: '2025 - 2026',
      title: "Certified Agentic AI Specialist",
      company: 'PIAIC',
      description: 'Graduated with honors. Specialized in software engineering and Agentic AI, Model training, Data scietntist.',
    },
  ];

  const certificates = [
    {
      year: '2025-2026',
      title: 'Agentic AI Certification',
      issuer: 'PIAIC',
      description:
        'Completed 1.5 years of training in Agentic AI with certification from piaic.',
    },
    {
      year: '2024',
      title: 'Internship Completion in Software Engineering',
      issuer: 'RCAI Lab',
      description: 'Successfully completed a professional internship in software engineering.',
    },
    {
      year: '2020',
      title: 'Computer Vision Web Development',
      issuer: 'Independent Project',
      description:
        'Gained hands-on experience in building and deploying computer vision applications for the web.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 dark:text-white"
        >
          About Me
        </motion.h2>

        {/* ✅ Make both sides equal height */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between"
          >
<div>
  <h3 className="text-2xl font-semibold mb-6 dark:text-white">
    Biography
  </h3>
  <p className="text-gray-600 dark:text-gray-300 mb-4">
    I'm a dedicated Software Engineer and Research Assistant with strong expertise in 
    full-stack development, artificial intelligence, and cloud technologies. Over the years, 
    I’ve contributed to impactful projects at <span className="font-semibold">Crop2x Pvt Ltd</span> and 
    <span className="font-semibold"> NCAI NEDUET SMART CITY Lab</span>, where I worked on 
    developing scalable solutions in web, mobile, and AI-powered systems.
  </p>
  <p className="text-gray-600 dark:text-gray-300 mb-4">
    My technical toolkit includes React, Next.js, React Native, Flutter, Node.js, and Python, 
    alongside experience with cloud services and research-driven applications. 
    I thrive in environments that challenge me to solve complex problems while delivering 
    clean, maintainable, and user-focused solutions.
  </p>
  <p className="text-gray-600 dark:text-gray-300">
    Beyond coding, I’m passionate about continuous learning, innovation, and exploring 
    the intersection of AI and real-world applications. I aspire to build technologies that 
    not only solve problems but also create meaningful impact on society.
  </p>
</div>


            {/* Certificates Section */}
            <div>
              <h3 className="text-2xl font-semibold mt-12 mb-6 dark:text-white">
                Certificates
              </h3>
              <div className="space-y-8">
                {certificates.map((cert, index) => (
                  <div
                    key={index}
                    className="relative pl-8 border-l-2 border-indigo-500 dark:border-indigo-400"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-indigo-500 dark:bg-indigo-400 rounded-full"></div>
                    <span className="text-sm text-indigo-600 dark:text-indigo-400">
                      {cert.year}
                    </span>
                    <h4 className="text-lg font-semibold mt-1 dark:text-white">
                      {cert.title}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between"
          >
            <h3 className="text-2xl font-semibold mb-6 dark:text-white">
              Experience & Education
            </h3>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-indigo-500 dark:border-indigo-400"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-indigo-500 dark:bg-indigo-400 rounded-full"></div>
                  <span className="text-sm text-indigo-600 dark:text-indigo-400">
                    {item.year}
                  </span>
                  <h4 className="text-lg font-semibold mt-1 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 font-medium">
                    {item.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}