'use client'
import styles from '../../Styles/styles.module.css'
import { ContextTheme } from '../../Context/ThemeContext'
import { ContextDescription } from '../../Context/DescriptionContext'
import React, { useContext } from 'react'

export default function Admin() {
  const { themeValue } = useContext(ContextTheme)
  const {  loading, getDescriptionBySection } = useContext(ContextDescription)

  // Loading state
  if (loading) {
    return <div className={` w-full h-screen flex justify-center items-center text-4xl font-bold ${themeValue ? 'bg-gray-100' : 'bg-gray-900  text-white'}  ${styles.FontOvo}   `}>Loading...</div>
  }

  return (
    <div
      className={`w-full min-h-screen px-[12%] py-10 ${themeValue ? 'bg-gray-100' : 'bg-gray-900'} ${styles.FontOvo}`}
    >
      <h1
        className={`text-center text-4xl font-bold mb-10 ${
          themeValue ? 'text-gray-800' : 'text-gray-100'
        }`}
      >
        Admin
      </h1>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8`}
      >
        {/* Hero Section */}
        <div
          className={`border rounded-xl p-6 shadow-md hover:-translate-y-1 duration-500 ${
            themeValue ? 'border-gray-300 bg-white' : 'border-gray-700 bg-gray-800'
          }`}
        >
          <h2
            className={`text-xl font-semibold mb-2 ${
              themeValue ? 'text-gray-700' : 'text-gray-200'
            }`}
          >
            Hero Section Description
          </h2>
          <p
            className={`text-sm ${
              themeValue ? 'text-gray-800' : 'text-gray-300'
            }`}
          >
            {getDescriptionBySection('hero')}
          </p>
        </div>
        {/* About Section */}
        <div
          className={`border rounded-xl p-6 shadow-md hover:-translate-y-1 duration-500 ${
            themeValue ? 'border-gray-300 bg-white' : 'border-gray-700 bg-gray-800'
          }`}
        >
          <h2
            className={`text-xl font-semibold mb-2 ${
              themeValue ? 'text-gray-700' : 'text-gray-200'
            }`}
          >
            About Section Description
          </h2>
          <p
            className={`text-sm ${
              themeValue ? 'text-gray-800' : 'text-gray-300'
            }`}
          >
            {getDescriptionBySection('about')}
          </p>
        </div>

        {/* Work Short Section */}
        <div
          className={`border rounded-xl p-6 shadow-md hover:-translate-y-1 duration-500 ${
            themeValue ? 'border-gray-300 bg-white' : 'border-gray-700 bg-gray-800'
          }`}
        >
          <h2
            className={`text-xl font-semibold mb-2 ${
              themeValue ? 'text-gray-700' : 'text-gray-200'
            }`}
          >
            Work Short Section Description
          </h2>
          <p
            className={`text-sm ${
              themeValue ? 'text-gray-800' : 'text-gray-300'
            }`}
          >
            {getDescriptionBySection('workShort')}
          </p>
        </div>

        {/* Work Long Section */}
        <div
          className={`border rounded-xl p-6 shadow-md hover:-translate-y-1 duration-500 ${
            themeValue ? 'border-gray-300 bg-white' : 'border-gray-700 bg-gray-800'
          }`}
        >
          <h2
            className={`text-xl font-semibold mb-2 ${
              themeValue ? 'text-gray-700' : 'text-gray-200'
            }`}
          >
            Work Long Section Description
          </h2>
          <p
            className={`text-sm ${
              themeValue ? 'text-gray-800' : 'text-gray-300'
            }`}
          >
            {getDescriptionBySection('workLong')}
          </p>
        </div>
      </div>
    </div>
  )
}
