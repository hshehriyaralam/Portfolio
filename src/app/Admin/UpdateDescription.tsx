'use client'
import styles from '../../Styles/styles.module.css'
import { ContextTheme } from '../../Context/ThemeContext'
import { ContextDescription } from '../../Context/DescriptionContext'
import React, { useContext, useEffect, useState } from 'react'
import { Pencil } from 'lucide-react'
import { useRouter } from "next/navigation";


export default function UpdateDescription() {
  const { themeValue } = useContext(ContextTheme)
  const { loading, getDescriptionBySection,updateDescription} = useContext(ContextDescription)
  const [editingSection, setEditingSection] = useState<string | null>(null)
  const [heroValue, setHeroValue] = useState<string>('')
  const [aboutValue, setAboutValue] = useState<string>('')
  const [workShortValue, setWorkShortValue] = useState<string>('')
  const [workLongValue, setWorkLongValue] = useState<string>('')
   const router = useRouter();

  

  const handleUpdate =  async () => {
    try{
    
      const section = String(editingSection)
        let valueToUpdate = "";

    if (section === "hero") {
      valueToUpdate = heroValue;
    } else if (section === "about") {
      valueToUpdate = aboutValue;
    } else if (section === "workShot") {
      valueToUpdate = workShortValue;
    } else if (section === "workLong") {
      valueToUpdate = workLongValue;
    }
      await updateDescription( section,valueToUpdate  )
      router.push('/')
      setEditingSection(null)
      
    }catch(error){
      console.log("Description update failed", error)
    }
  }


  
  // Loading state
  if (loading) {
    return (
      <div
        className={`w-full h-screen flex justify-center items-center text-4xl font-bold ${
          themeValue ? `bg-gray-100` : `${styles.DarkTheme}`
        } ${styles.FontOvo}`}
      >
        Loading...
      </div>
    )
  }



  return (
    <div
      className={`w-full  px-[12%] py-10 ${
        themeValue ? `bg-gray-100` : `${styles.DarkTheme}`
      } ${styles.FontOvo}`}
    >
      <h1
        className={`text-center text-4xl font-bold mb-10 ${
          themeValue ? 'text-gray-800' : 'text-gray-100'
        }`}
      >
        Admin
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Hero Section */}
        <div
          className={`border rounded-xl p-6 shadow-md hover:-translate-y-1 duration-500 ${
            themeValue ? 'border-gray-300 bg-white' : `border-gray-700 ${styles.DarkTheme}`
          }`}
        >
          <div className="flex items-center justify-between">
            <h2
              className={`text-xl font-semibold mb-2 ${
                themeValue ? 'text-gray-700' : 'text-gray-200'
              }`}
            >
              Hero Section Description
            </h2>
            {editingSection !== 'hero' && (
              <Pencil
                onClick={() => {
                  setHeroValue(getDescriptionBySection('hero'))
                  setEditingSection('hero')
                }}
                size={18}
                className={`${
                  themeValue ? 'text-black' : 'text-white'
                } cursor-pointer`}
              />
            )}
          </div>
          {editingSection === 'hero' ? (
            <input
              className={`text-md px-3 py-3 rounded-md border outline-none w-full max-w-md ${
                themeValue
                  ? 'bg-white text-gray-800 border-gray-300'
                  : 'bg-transparent text-gray-200 border-gray-600'
              }`}
              autoFocus
              value={heroValue}
              onChange={(e) => setHeroValue(e.target.value) }
              
            />
          ) : (
            <p
              className={`text-sm ${
                themeValue ? 'text-gray-800' : 'text-gray-300'
              }`}
            >
              {getDescriptionBySection('hero')}
            </p>
          )}
        </div>

        {/* About Section */}
        <div
          className={`border rounded-xl p-6 shadow-md hover:-translate-y-1 duration-500 ${
            themeValue ? 'border-gray-300 bg-white' : `border-gray-700 ${styles.DarkTheme}`
          }`}
        >
          <div className="flex items-center justify-between">
            <h2
              className={`text-xl font-semibold mb-2 ${
                themeValue ? 'text-gray-700' : 'text-gray-200'
              }`}
            >
              About Section Description
            </h2>
            {editingSection !== 'about' && (
              <Pencil
                onClick={() => {
                  setAboutValue(getDescriptionBySection('about'))
                  setEditingSection('about')}}
                size={18}
                className={`${
                  themeValue ? 'text-black' : 'text-white'
                } cursor-pointer`}
              />
            )}
          </div>
          {editingSection === 'about' ? (
            <input
              className={`text-md px-3 py-3 rounded-md border outline-none w-full max-w-md ${
                themeValue
                  ? 'bg-white text-gray-800 border-gray-300'
                  : 'bg-transparent text-gray-200 border-gray-600'
              }`}
              autoFocus
              value={aboutValue}
              onChange={(e) => setAboutValue(e.target.value) }
            />
          ) : (
            <p
              className={`text-sm ${
                themeValue ? 'text-gray-800' : 'text-gray-300'
              }`}
            >
              {getDescriptionBySection('about')}
            </p>
          )}
        </div>

        {/* Work Short Section */}
        <div
          className={`border rounded-xl p-6 shadow-md hover:-translate-y-1 duration-500 ${
            themeValue ? 'border-gray-300 bg-white' : `border-gray-700 ${styles.DarkTheme}`
          }`}
        >
          <div className="flex items-center justify-between">
            <h2
              className={`text-xl font-semibold mb-2 ${
                themeValue ? 'text-gray-700' : 'text-gray-200'
              }`}
            >
              Work Short Section Description
            </h2>
            {editingSection !== 'workShort' && (
              <Pencil
                 onClick={() => {
                  setWorkShortValue(getDescriptionBySection('workShot'))
                  setEditingSection('workShot')
                }}
                
                size={18}
                className={`${
                  themeValue ? 'text-black' : 'text-white'
                } cursor-pointer`}
              />
            )}
          </div>
          {editingSection === 'workShot' ? (
            <input
              className={`text-md px-3 py-3 rounded-md border outline-none w-full max-w-md ${
                themeValue
                  ? 'bg-white text-gray-800 border-gray-300'
                  : 'bg-transparent text-gray-200 border-gray-600'
              }`}
              autoFocus
              value={workShortValue}
              onChange={(e) => setWorkShortValue(e.target.value) }
            />
          ) : (
            <p
              className={`text-sm ${
                themeValue ? 'text-gray-800' : 'text-gray-300'
              }`}
            >
              {getDescriptionBySection('workShot')}
            </p>
          )}
        </div>

        {/* Work Long Section */}
        <div
          className={`border rounded-xl p-6 shadow-md hover:-translate-y-1 duration-500 ${
            themeValue ? 'border-gray-300 bg-white' : `border-gray-700 ${styles.DarkTheme}`
          }`}
        >
          <div className="flex items-center justify-between">
            <h2
              className={`text-xl font-semibold mb-2 ${
                themeValue ? 'text-gray-700' : 'text-gray-200'
              }`}
            >
              Work Long Section Description
            </h2>
            {editingSection !== 'workLong' && (
              <Pencil
                onClick={() => {
                  setWorkLongValue(getDescriptionBySection('workLong'))
                  setEditingSection('workLong')}}
                size={18}
                className={`${
                  themeValue ? 'text-black' : 'text-white'
                } cursor-pointer`}
              />
            )}
          </div>
          {editingSection === 'workLong' ? (
            <input
              className={`text-md px-3 py-3 rounded-md border outline-none w-full max-w-md ${
                themeValue
                  ? 'bg-white text-gray-800 border-gray-300'
                  : 'bg-transparent text-gray-200 border-gray-600'
              }`}
              autoFocus
              value={workLongValue}
              onChange={(e) => setWorkLongValue(e.target.value) }
            />
          ) : (
            <p
              className={`text-sm ${
                themeValue ? 'text-gray-800' : 'text-gray-300'
              }`}
            >
              {getDescriptionBySection('workLong')}
            </p>
          )}
        </div>
      </div>

      {editingSection && (
        <div className="flex items-center gap-x-5 justify-center mt-10">
          <button
            onClick={() => setEditingSection(null)}
            className="p-2nb  py-1.5 px-6 bg-gray-400 rounded-xl text-black font-semibold cursor-pointer"
          >
            Cancel
          </button>
          <button
            className={`p-2 py-1.5 ${themeValue ?  'bg-black/70 ' : 'bg-transparent border border-gray-700'}  px-6  rounded-xl text-white font-semibold cursor-pointer`}
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      )}
    </div>
  )
}
