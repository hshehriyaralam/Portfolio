'use client'
import React, { createContext, ReactNode, useEffect, useState } from "react"
import {toBase64 } from '../utils/file'


interface Project {
    _id : string,
    createdAt?: string;
    updatedAt?: string;
    title : string,
    description : string,
    githubLink : string,
    LiveDemo : string,
    readmeLink : string,
    bgImage: string;
}

interface ProjectContextType {
    project: Project[],
    loading : boolean,
    getProject : () => Promise<void>
    addProject : 
    ( title : string, description : string,githubLink : string,LiveDemo : string,readmeLink : string,bgImage: File | null,  )  => Promise<void>
}


export const  ContextProject = createContext<ProjectContextType>({
    project : [],
    loading : false,
    getProject : async () => {},
    addProject : async ( title : string, description : string,githubLink : string,LiveDemo : string,readmeLink : string, bgImage: File | null, ) => {},
})

interface ProjectProviderProps {
  children: ReactNode;
}


export const ProjectContext = ({children} :ProjectProviderProps ) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [project, setProject] = useState<Project[]>([])


  const getProject = async () => {
    try{
      setLoading(true)
      const res = await fetch('/api/Project')
      const json = await res.json()
      if(json.success){
        setProject(json.data)
      }else{
        console.error("Failed to fetch Projects", json)

      }
    }catch(error){
       console.error("Error fetching Projects", error)
    }finally{
      setLoading(false)
    }
  }

  const addProject = async (
    title : String,
    description: String,
    githubLink : String,
    LiveDemo : String,
    readmeLink : string,
    bgImage: File | null
      ) => {
      try{
        setLoading(true)
        let imageURL = ''
        if(bgImage){
          // convert image format tp API suitable format
          const base64Image = await toBase64(bgImage)

          // POST image in Cloudinary
          const cloudRes = await fetch('/api/upload', {
            method : 'POST',
            headers : {
              'Content-Type': 'application/json',
            },
            body : JSON.stringify({file : base64Image})
          })

          // get image URL from cloudinary
          const cloudData = await cloudRes.json()
          if(!cloudRes.ok){
            const errorText = await cloudRes.text()
             throw new Error(cloudData.error);
          }
          imageURL = cloudData.url

        }


         const res = await fetch('/api/Project', {
            method : "POST",
            headers : {
              "Content-Type": "application/json",
            },
            body : JSON.stringify({title,description,githubLink,LiveDemo,readmeLink,bgImage  : imageURL })
        })
        const json = await res.json()
         if(json.success){
            console.log("Project added successfully", json.data)
            setProject(prev => [...prev, json.data]);
            
        }else{
            console.error("Error adding Project:", json.error);
        } 
      }catch(error){
        console.error("Error in add Projects", error);
      }finally{
        setLoading(false)
      }
  }


  useEffect(() => {
    getProject()
  }, [])



  const All = {getProject,loading,project,addProject,setLoading}


  return <ContextProject.Provider value={All}  >
    {children}
  </ContextProject.Provider>
    
}