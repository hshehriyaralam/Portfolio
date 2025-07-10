"use client";
import React, { useState, useContext } from "react";
import { ContextTheme } from "@/Context/ThemeContext";
import { Pencil } from "lucide-react";
import Styles from "../../Styles/styles.module.css";

export default function Admin() {
  const { themeValue } = useContext(ContextTheme);

  // Descriptions
  const [descriptions, setDescriptions] = useState({
    hero:
      "I’m a passionate MERN Stack Developer specializing in Frontend Development. Experienced in modern JavaScript frameworks to build responsive and high-performance web applications.",
    about:
      "I’m a passionate MERN and Next.js Developer specializing in Frontend Development. Skilled in modern JavaScript frameworks and UI libraries like Shadcn, Magic UI, ReactBits, and Tailwind CSS to build responsive and high-performance web applications.",
    workShort:
      "Showcasing my best projects built with modern technologies to solve real-world problems effectively.",
    workLong:
      "Explore my projects showcasing skills in Frontend, Backend, and Full Stack Development. Each reflects my focus on building scalable, responsive, and user-friendly applications with modern technologies.",
  });

  // Which section is in edit mode
  const [editingKey, setEditingKey] = useState<keyof typeof descriptions | null>(
    null
  );

  // Temporary edited value
  const [tempValue, setTempValue] = useState("");

  const handleEdit = (key: keyof typeof descriptions) => {
    setEditingKey(key);
    setTempValue(descriptions[key]);
  };

  const handleCancel = () => {
    setEditingKey(null);
    setTempValue("");
  };

  const handleUpdate = () => {
    if (editingKey) {
      setDescriptions((prev) => ({
        ...prev,
        [editingKey]: tempValue,
      }));
      setEditingKey(null);
      setTempValue("");
    }
  };

  const sectionClasses = `border-[0.5px] ${
    themeValue ? "border-gray-400" : "border-gray-700"
  } rounded-xl p-6`;

  const textClasses = `${themeValue ? "text-gray-900" : "text-gray-200"} ${
    Styles.FontOvo
  }`;

  return (
    <div
      className={`w-full min-h-screen px-[12%] py-10 ${
        themeValue ? "" : Styles.DarkTheme
      }`}
    >
      <h1
        className={`text-3xl font-semibold mb-8 text-center ${
          themeValue ? "text-gray-800" : "text-white"
        } ${Styles.FontOvo}`}
      >
        Admin Panel
      </h1>

      {/* Sections */}
      <div className="grid gap-8 mb-4">
        {(
          [
            ["hero", "✨ Hero Section Description"],
            ["about", "💡 About Section Description"],
            ["workShort", "📝 Work Short Description"],
            ["workLong", "📘 Work Long Description"],
          ] as [keyof typeof descriptions, string][]
        ).map(([key, label]) => (
          <section key={key} className={sectionClasses}>
            <div className="flex justify-between items-start">
              <h2
                className={`text-xl mb-2 ${
                  themeValue ? "text-gray-800" : "text-gray-300"
                }`}
              >
                {label}
              </h2>
              {editingKey !== key && (
                <button
                  onClick={() => handleEdit(key)}
                  className="hover:text-purple-500 transition"
                  title="Edit"
                >
                  <Pencil size={20} />
                </button>
              )}
            </div>

            {editingKey === key ? (
              <textarea
                rows={3}
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                className={`w-full p-3 rounded-md border ${
                  themeValue
                    ? "border-gray-300 focus:ring-purple-400"
                    : "border-gray-600 bg-transparent text-white focus:ring-purple-700"
                } focus:outline-none focus:ring-2`}
              />
            ) : (
              <p className={textClasses}>{descriptions[key]}</p>
            )}
          </section>
        ))}
      </div>

      {/* Global Update/Cancel Buttons */}
      {editingKey && (
        <div className="flex gap-x-4 items-center justify-center ">
          <button
            onClick={handleUpdate}
            className="bg-gray-500 text-white p-2  rounded-xl hover:bg-gray-800 transition"
          >
            Update
          </button>
          <button
            onClick={handleCancel}
            className="bg-purple-500 text-white p-2  rounded-xl hover:bg-purple-800 transition"
          >
            Cancel
          </button>
        </div>
      )}

{/* === Add Project Form === */}
      <section
        className={`mt-12 border-[0.5px] ${
          themeValue ? "border-gray-400" : "border-gray-700"
        } rounded-xl p-6 `}
      >
        <h2
          className={`text-xl mb-4 ${
            themeValue ? "text-gray-800" : "text-gray-300"
          }`}
        >
          ➕ Add New Project
        </h2>
        <form
   
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <input
            type="text"
            name="title"
            placeholder="Project Title"
   
            required
            className={`p-3 rounded-md border ${
              themeValue
                ? "border-gray-300"
                : "border-gray-600 bg-transparent text-white"
            }`}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"

            required
            className={`p-3 rounded-md border ${
              themeValue
                ? "border-gray-300"
                : "border-gray-600 bg-transparent text-white"
            }`}
          />
          <input
            type="file"
            name="bgImage"
            placeholder="Background Image URL"
            required
            className={`p-3 rounded-md border ${
              themeValue
                ? "border-gray-300"
                : "border-gray-600 bg-transparent text-white"
            }`}
          />
          <input
            type="url"
            name="githubLink"
            placeholder="GitHub Link"

            required
            className={`p-3 rounded-md border ${
              themeValue
                ? "border-gray-300"
                : "border-gray-600 bg-transparent text-white"
            }`}
          />
          <input
            type="url"
            name="liveDemoLink"
            placeholder="Live Demo Link"

            required
            className={`p-3 rounded-md border ${
              themeValue
                ? "border-gray-300"
                : "border-gray-600 bg-transparent text-white"
            }`}
          />
          <button
            type="submit"
            className="sm:col-span-2 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
          >
            Add Project
          </button>
        </form>
      </section>
      
    </div>
  );
}
