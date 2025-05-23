// src/app/components/Main/data.jsx

export const projects = [
  { 
    id: 1, 
    name: "Music World", 
    languages: ["JavaScript", "Html"], 
    images: ["/images/Musicworld.png"], 
    videos: ["/videos/Musicworld.mp4"], 
    description: "My Music World is a dynamic and interactive web application that brings the joy of music to users through a feature-rich, JavaScript-powered platform. Designed with creativity and functionality in mind, this website combines stunning visuals with seamless interactivity to deliver a captivating user experience." 
  },
  { 
    id: 2, 
    name: "Smart Crop", 
    languages: ["Python", "React", "Tailwind"], 
    images: ["/images/Cropsmart.png"], 
    videos: ["/videos/Smartcrop.mp4"], 
    description: "Smart farm is an innovative satellite monitoring system designed to empower farmers across the globe by providing detailed information and analytics on crop health, weather patterns, soil conditions, and more. Our goal is to utilize cutting-edge satellite technology and data-driven insights to help farmers make informed decisions that enhance productivity and sustainability." 
  },
  { 
    id: 3, 
    name: "Driverless", 
    languages: ["Nextjs", "Python"], 
    images: ["/images/driverless.png"],
    videos: ["/videos/Driverless.mp4"],  
    description: "The Driverless Car Website is a sophisticated web application built using Next.js, designed to provide an immersive and detailed exploration of autonomous vehicle technologies. This platform combines advanced frontend UI/UX design with complex backend logic to deliver a seamless and feature-rich user experience." 
  },
  { 
    id:4 , 
    name: "Smart Farming", 
    languages: ["Nextjs", "Tailwind"], 
    images: ["/images/Smartfarming.png"], 
    videos: ["/videos/Smartfarming.mp4"], 
    description: "Smart Farming is an innovative web platform designed to revolutionize the way farmers interact with their land, crops, and livestock. Powered by Next.js, the platform integrates cutting-edge technologies such as real-time data analytics, IoT sensors, and machine learning to optimize farming practices, enhance crop yield, and ensure sustainability." 
  },
  { 
    id: 5, 
    name: "Travel World", 
    languages: ["JavaScript", "Tailwind"], 
    images: ["/images/Travelworlds1.png", "/images/Travelworlds2.png", "/images/Travelworlds3.png"], 
    videos: ["/videos/Travelworld.mp4"], 
    description: "Travel World is an interactive and engaging web platform designed to help travelers explore, plan, and book their dream vacations with ease. Built using JavaScript, the website combines intuitive navigation, stunning visuals, and powerful functionality to provide a seamless travel experience." 
  },
  { 
    id: 6, 
    name: "Project 6", 
    languages: ["Python", "Flask"], 
    images: ["/images/Travelworlds1.png"], 
    videos: ["https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"], 
    description: "Project 6 description" 
  },
];
//About me
import { FaMobileScreen } from 'react-icons/fa6';
import { FaLaptopCode, FaDatabase, FaCodeBranch, FaPencilRuler, FaTrophy, FaLightbulb } from 'react-icons/fa';

export const skillsData = [
    {
        icon: <FaLaptopCode className="text-green-500 text-4xl mr-4 mb-4 md:mb-0" />,
        title: "Frontend Development",
        description: "I can build a beautiful and scalable SPA using HTML, CSS, and React.js / Nextjs."
    },
    {
        icon: <FaDatabase className="text-blue-500 text-4xl mr-4 mb-4 md:mb-0" />,
        title: "Backend Development",
        description: "Handle databases, servers, and APIs using Nodejs, Python Flask, and Nextjs."
    },
    {
        icon: <FaMobileScreen className="text-green-500 text-4xl mr-4 mb-4 md:mb-0" />,
        title: "App Development",
        description: "I can build a beautiful App and scalable SPA using Flutter and React Native."
    },
    {
        icon: <FaCodeBranch className="text-red-500 text-4xl mr-4 mb-4 md:mb-0" />,
        title: "API Development",
        description: "Develop robust REST APIs using Django Rest Framework and Node.js."
    },
    {
        icon: <FaPencilRuler className="text-yellow-500 text-4xl mr-4 mb-4 md:mb-0" />,
        title: "UI/UX Design",
        description: "Stunning user interface designs using Figma and Framer."
    },
    {
        icon: <FaTrophy className="text-purple-500 text-4xl mr-4 mb-4 md:mb-0" />,
        title: "Competitive Coding",
        description: "Daily problem solver on HackerRank and LeetCode."
    },
    {
        icon: <FaLightbulb className="text-pink-500 text-4xl mr-4 mb-4 md:mb-0" />,
        title: "Other Projects",
        description: "Always exploring innovative solutions and building tools for efficiency."
    },
];
//Resume
const data = {
  header: {
    name: "Hashim Hasan",
    title: "Web Developer, Python Developer, and MERN-Stack Developer",
    contact: {
      email: "hashimhasan444@gmail.com",
      phone: "03240251086",
      location: "B125, Karachi, Pakistan",
    },
  },
  workExperience: [
    {
      role: "Intern - Frontend Web Designer and Backend Developer",
      company: "NCAI - NEDUET, Smart City Lab",
      duration: "12/2023 - 08/2024",
      description:
        "Completed an 8-month internship focusing on frontend design and backend development, contributing to key projects in the Smart City Lab.",
    },
    {
      role: "Frontend Web Designer and Backend Developer",
      company: "NCAI - NEDUET, Smart City Lab",
      duration: "08/2024 - Present",
      description:
        "Currently working as a frontend web designer and backend developer at the National Center of Artificial Intelligence (NCAI), NED University.",
    },
  ],
  education: [
    {
      degree: "Software Engineering",
      institution: "Aptech Pakistan",
      duration: "08/2023 - Present",
    },
    {
      degree: "BBA",
      institution: "Allama Iqbal Open University (AIOU)",
      duration: "08/2023 - Present",
    },
    {
      degree: "Pre-Engineering",
      institution: "Islamia Science College",
      duration: "08/2020 - 08/2022",
    },
    {
      degree: "Computer Science",
      institution: "White House Grammar School",
      duration: "01/2009 - 07/2019",
    },
  ],
  skills: [
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
  ],
  frameworks: [
    { name: "Python", level: "80%", icon: "🐍" },
    { name: "JavaScript", level: "70%", icon: "✨" },
    { name: "React", level: "65%", icon: "⚛️" },
    { name: "React-Native", level: "60%", icon: "📱" },
    { name: "Flutter", level: "65%", icon: "🦋" },
    { name: "Nextjs", level: "50%", icon: "🌱" },
    { name: "Tailwind", level: "80%", icon: "📦" },
  ],
};

export default data;
