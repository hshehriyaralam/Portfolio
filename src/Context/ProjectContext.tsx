'use client'
import React, { createContext, ReactNode, useEffect, useState } from "react"
import {uploadImageToFirebase} from '../app/lib/Firebase/UploadImage'

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
            let imageUrl : string | null = "";
            if (bgImage) {
              imageUrl = await uploadImageToFirebase(bgImage);
            }
         const res = await fetch('/api/Project', {
            method : "POST",
            headers : {
              "Content-Type": "application/json",
            },
            body : JSON.stringify({title,description,githubLink,LiveDemo,readmeLink,bgImage: imageUrl,})
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



  const All = {getProject,loading,project,addProject}


  return <ContextProject.Provider value={All}  >
    {children}
  </ContextProject.Provider>
    
}