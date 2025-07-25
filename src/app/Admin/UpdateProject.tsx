'use client';
import { ContextTheme } from "../../Context/ThemeContext";
import { ContextProject } from "../../Context/ProjectContext"
import { useContext, useState,useRef } from "react";
import styles from '../../Styles/styles.module.css';
import { useRouter } from "next/navigation";


export default function UpdateProject() {
  const { themeValue } = useContext(ContextTheme);
  const {addProject,loading}   = useContext(ContextProject)
  const [tittle, setTittle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [githubLink, setGithubLink] = useState<string>('')
  const [liveDemo, setLiveDemo] = useState<string>('')
  const [readmeLink, setReadmeLink] = useState<string>('')
  const [bgImage, setBgImage]  = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter();
  
  
  
  const AddProject =  async () => {
    try{
      await addProject(tittle,description,githubLink,liveDemo,readmeLink,bgImage)
      setBgImage(null)
      setTittle('')
      setDescription('')
      setGithubLink('')
      setLiveDemo('')
      setReadmeLink('')
      router.push('/#work')
    }catch(error){
      console.log("Error");      
    }
  }

  const inputBase = `border rounded-md py-2 px-3 w-full focus:outline-none transition-colors duration-300`;
  const inputLight = `focus:ring-2 focus:ring-blue-400 bg-white text-gray-800 placeholder-gray-500`;
  const inputDark = `focus:ring-2 focus:ring-blue-600  ${styles.DarkTheme} text-gray-100 placeholder-gray-400 border-gray-700`;

  return (
    <div
      className={`w-full min-h-screen px-4 sm:px-6 md:px-[12%] py-10 ${
        themeValue ? 'bg-gray-100' : `${styles.DarkTheme}`
      } ${styles.FontOvo}`}
    >
      <h1
        className={`text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 ${
          themeValue ? 'text-gray-800' : 'text-gray-100'
        }`}
      >
        Add Project
      </h1>

      <form className="max-w-4xl mx-auto space-y-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Enter Title"
            value={tittle}
            onChange={(e) => setTittle(e.target.value)}
            className={`${inputBase} ${themeValue ? inputLight : inputDark}`}
          />
          <input
            type="text"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={`${inputBase} ${themeValue ? inputLight : inputDark}`}
          />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="GitHub Link"
            value={githubLink}
            onChange={(e) => setGithubLink(e.target.value)}
            className={`${inputBase} ${themeValue ? inputLight : inputDark}`}
          />
          <input
            type="text"
            placeholder="Live URL"
            value={liveDemo}
            onChange={(e) => setLiveDemo(e.target.value)}
            className={`${inputBase} ${themeValue ? inputLight : inputDark}`}
          />
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
             type="file"
              ref={fileInputRef}
             onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setBgImage(file);
              }}}
            className={`border rounded-md py-2 px-3 w-full file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold ${
              themeValue
                ? 'file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100'
                : `file:bg-gray-700 file:text-gray-100 hover:file:${styles.DarkTheme}`
            }`}
          />
          <input
            type="text"
            placeholder="Readme Link"
            value={readmeLink}
            onChange={(e) => setReadmeLink(e.target.value)}
            className={`${inputBase} ${themeValue ? inputLight : inputDark}`}
          />
        </div>

        {/* Button */}
        <div className="flex justify-center pt-4">
          <button
          type="button"
          onClick={AddProject}
            className={`py-2 px-8 sm:px-10 text-sm sm:text-base flex items-center justify-center gap-2 ${
              themeValue
                ? 'bg-black/80'
                : 'bg-transparent border border-gray-700'
            } text-white rounded-full hover:bg-black duration-500`}
          >
            {loading ? 'Loading...' : 'add Project' }
          </button>
        </div>
      </form>
    </div>
  );
}
