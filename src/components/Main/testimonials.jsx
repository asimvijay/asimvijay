// components/Testimonials.js
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mohsin Taj",
      role: "Technical Lead at NCAI",
      content: "Hashim delivered an exceptional web application that exceeded our expectations. His attention to detail and problem-solving skills are remarkable.",
      avatar: "/avatar1.jpg"
    },
    {
      name: "Reza Manekia",
      role: "Hardware Engineer at Crop2x",
      content: "Working with Hashim was a great experience. He's professional, reliable, and technically skilled. Our project was completed on time and to a high standard.",
      avatar: "/avatar2.jpg"
    },
    {
      name: "Vijay Rajesh",
      role: "Coworker at NCAI",
      content: "Hashim transformed our vision into a beautiful, functional product. His communication throughout the project was excellent.",
      avatar: "/avatar3.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 dark:text-white"
        >
          Testimonials
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-indigo-500 dark:text-indigo-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-1.003-.21-1.96-.59-2.808A5 5 0 0010 11z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold dark:text-white">{testimonial.name}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}