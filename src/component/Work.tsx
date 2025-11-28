import { assets } from "../assets/assets";
import React, { useContext, useState } from "react";
import Styles from "../Styles/styles.module.css";
import { ContextTheme } from "../Context/ThemeContext";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/Context/project";

export default function Work() {
  console.log("Project Data:", Project);
  const { themeValue } = useContext(ContextTheme);
  const [previewVisible, setPreviewVisible] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[3%] py-8 scroll-mt-20 flex flex-col items-center  justify-center" 
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={`text-center mb-2 text-lg ${Styles.FontOvo}`}
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={`text-center text-4xl ${Styles.FontOvo}`}
      >
        My latest work
      </motion.h2>
      <div
        className={`text-center max-w-3xl mx-auto mt-4 mb-12 ${Styles.FontOvo}`}
      >
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className={`${Styles.FontOvo} text-md ${
            themeValue ? "text-black" : "text-white"
          }`}
        >
          A curated collection of my core projects, highlighting strong frontend
          skills through modern UI experiences and solid full-stack expertise
          with real-time data handling, analytics, and practical problem-solving
          across the MERN ecosystem.
        </motion.p>
      </div>

      {/* Grid Layout for cards - Centered */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center max-w-7xl mx-auto w-full"
      >
        {Project?.slice(0, 3).map((project: any, index: number) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            key={index}
            className={`relative rounded-lg overflow-hidden border ${
              themeValue
                ? "bg-white border-gray-200 shadow-md"
                : `${Styles.DarkTheme} border-gray-600 shadow-lg`
            } flex flex-col w-full max-w-[300px]`}
          >
            {/* Project Image */}
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden h-[200px] md:h-[220px] lg:h-[240px] cursor-pointer">
              <Image
                width={400}
                height={300}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card Content */}
            <div className="p-4 flex flex-col justify-between flex-1">
              {/* Title + Description */}
              <div className="flex-1 flex flex-col">
                <h3
                  className={`text-[16px] font-semibold leading-[22px] mb-1 ${
                    themeValue ? "text-gray-900" : "text-white"
                  }`}
                >
                  {project.title}
                </h3>

                <div
                  className={`h-[60px] overflow-hidden mb-3 ${
                    themeValue ? "text-gray-600" : "text-gray-300"
                  }`}
                >
                  <p className="text-sm leading-relaxed line-clamp-3">
                    {project.description.length > 100
                      ? `${project.description.slice(0, 97)}...`
                      : project.description}
                  </p>
                </div>
              </div>

              {/* Buttons Section */}
              <div className="mt-auto space-y-2">
                {/* Live Demo */}
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2 px-3 rounded-md text-sm font-medium border-2 transition-all duration-300 flex items-center justify-center gap-2 ${
                    themeValue
                      ? "text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
                      : "text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white"
                  }`}
                >
                  Live Demo
                </a>

                {/* Links */}
                <div className="flex gap-2">
                  {/* Repository */}
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 py-2 px-3 rounded-md text-sm font-medium border transition-all duration-300 flex items-center justify-center gap-1 ${
                      themeValue
                        ? "text-gray-700 border-gray-300 hover:bg-gray-100"
                        : "text-gray-300 border-gray-500 hover:bg-gray-700"
                    }`}
                  >
                    <Image
                      src={themeValue ? assets.github_icon : assets.github_icon_white}
                      alt="GitHub"
                      className="w-4"
                    />
                    Repo
                  </a>

                  {/* Details */}
                  <Link
                    href={project.readMoreUrl}
                    target="_blank"
                    className="flex-1"
                  >
                    <button
                      className={`w-full py-2 px-3 rounded-md text-sm font-medium border transition-all duration-300 flex items-center justify-center gap-1 ${
                        themeValue
                          ? "text-gray-700 border-gray-300 hover:bg-gray-100"
                          : "text-gray-300 border-gray-500 hover:bg-gray-700"
                      }`}
                    >
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        href={"./Projects"}
        className={`w-max flex items-center justify-center gap-2  border-[0.7px]  ${
          themeValue
            ? "border-gray-700 text-gray-700 "
            : "border-gray-400 text-gray-400  "
        } rounded-full py-2 px-8 mx-auto  my-14 ${
          Styles.HoverLightHover
        }  duration-500`}
      >
        Show More{" "}
        <Image
          src={themeValue ? assets.right_arrow_bold : assets.right_arrow_white}
          alt="Right Arrow"
          className="w-4"
        />
      </motion.a>
    </motion.div>
  );
}
