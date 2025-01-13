"use client";
import Image from "next/image";
import { FC } from "react";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

interface SidebarProps {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

const Sidebar: FC<SidebarProps> = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-gray-200 p-4 md:p-6 lg:p-0 lg:h-full flex flex-col justify-between">
      {/* Top Section */}
      <div className="flex flex-col items-center">
        {/* Avatar */}
        <Image
        src="/images/me.jpg"
        alt="user avatar"
        width={112} // 28 * 4 (height x scale)
        height={112} // 28 * 4 (width x scale)
        className="rounded-full mx-auto border-4 border-blue-400 dark:border-gray-700"
      />


        {/* Name */}
        <h3 className="my-3 text-2xl font-bold text-center tracking-wider text-gray-700 dark:text-gray-200 font-kaushan">
          <span className="text-blue-500 dark:text-blue-300">
            Hashim
          </span> 
          Hasan
        </h3>


        {/* Role */}
        <p className="px-3 py-1 bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-gray-300 font-medium rounded-full text-center text-sm">
          Web Developer
        </p>

        {/* Resume Download */}
        <a
          href=""
          download="resume"
          className="flex items-center justify-center text-sm gap-2 px-4 py-2 bg-gradient-to-r from-blue-400 to-green-400 text-white mt-2 rounded-full"
        >
          <GiTie className="w-5 h-5" />
          Download Resume
        </a>
      </div>

      {/* Middle Section */}
      <div className="lg:my-2 my-4">
        {/* Social Icons */}
        <div className="flex justify-around py-2 text-gray-600 dark:text-gray-400">
          <a href="">
            <AiFillFacebook className="w-6 h-6 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400" />
          </a>
          <a href="">
            <AiFillGithub className="w-6 h-6 cursor-pointer hover:text-gray-800 dark:hover:text-gray-200" />
          </a>
          <a href="">
            <AiFillLinkedin className="w-6 h-6 cursor-pointer hover:text-blue-700 dark:hover:text-blue-400" />
          </a>
        </div>

        {/* Address */}
        <div className="py-3 bg-gray-200 dark:bg-gray-800 rounded-lg text-center mx-[-1rem]">
          <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300">
            <GoLocation className="w-4 h-4" />
            <span>Karachi, Pakistan</span>
          </div>
          <p className="my-2 text-gray-600 dark:text-gray-300 text-sm">
            hashimhasan444@gmail.com
          </p>
          <p className="my-2 text-gray-600 dark:text-gray-300 text-sm">
            0324-0251086
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center gap-3">
        <button
          className="bg-gradient-to-r from-green-400 to-blue-400 w-10/12 rounded-full py-2 text-white hover:shadow-lg transition duration-300"
          onClick={() => window.open("mailto:hashimhasan444@gmail.com")}
        >
          Email me
        </button>
        <button
          className="bg-gradient-to-r from-green-400 to-blue-400 w-10/12 rounded-full py-2 text-white hover:shadow-lg transition duration-300"
          onClick={toggleTheme}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
