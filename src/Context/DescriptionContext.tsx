'use client'

import { strict } from "assert";
import { log } from "console";
import { Section } from "lucide-react";
import React, { createContext, ReactNode, useEffect, useState } from "react"

interface Description {
    _id : string,
    section : string,
    text : string,
    createdAt?: string;
    updatedAt?: string;
}

interface DescriptionContextType {
    descriptions : Description[],
    loading : boolean,
    getDescription : () => Promise<void>
    addDescription: (section: string, text: string) => Promise<void>;
    getDescriptionBySection: (sectionName: string) => string; 
    updateDescription : (section : string, text : string) => Promise <void>
}


    

export const ContextDescription = createContext<DescriptionContextType>({
    descriptions : [],
    loading : false,
    getDescription : async () => {},
    addDescription : async () => {},
    getDescriptionBySection :  (sectionName : string) => '',
    updateDescription : async () => {}
})


interface DescriptionProviderProps {
  children: ReactNode;
}


export const DescriptionContext = ({children} :DescriptionProviderProps ) => {
    const [descriptions, setDescription] = useState<Description[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const getDescription = async () => {
        try{
            setLoading(true)
            const res = await fetch('/api/Description')
            const json = await res.json()

            if(json.success){
                setDescription(json.data)
            }else{
                console.error("Failed to fetch descriptions", json)
            }
        }catch(error){
            console.error("Error fetching descriptions", error)
        }finally{
            setLoading(false)
        }
    }
   

   // addd Description 
   const addDescription =  async (section  :String,text: String) => {
    try{
        setLoading(true)
        const res = await fetch('/api/Description', {
            method : "POST",
            headers : {
                 "Content-Type": "application/json",
            },
            body : JSON.stringify({section, text})
        })
        const json = await res.json() 

        if(json.success){
            console.log("Description added successfully", json.data)
            await getDescription()
        }else{
            console.error("Error adding description:", json.error);
        }

    }catch(error){
        console.error("Error in addDescription:", error);
    }finally{
        setLoading(false)
    }
   }


   // Update Descriptions
   const updateDescription = async (section :string, text : string) => {
    try{
        setLoading(true)
        const res = await fetch('/api/Description', {
            method : "PUT",
            headers : {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ section, text }),
        });
        if(!res.ok){
            throw new Error("Failed to update description");
        }

        // const updated = await res.json()
        setDescription((prev) => 
        prev.map((desc) => 
        desc.section === section ? {...desc, text} : desc
        )
        )
        
    }catch(error){
        console.error("Error updating description:", error);
    }finally{
        setLoading(false)
    }
    
   }


   // Descriptions filterd by sections 
   const getDescriptionBySection = (sectionName: string) =>  {
    const descObj = descriptions.find(
      (item) => item.section.toLowerCase() === sectionName.toLowerCase()
    )
    return descObj ? descObj.text : 'No description found.'
  }

    useEffect(() => {
        getDescription()
    },[])

   const All = {descriptions,loading, getDescription,addDescription,getDescriptionBySection,updateDescription}

    return <ContextDescription.Provider  value={All}  >
        {children}
    </ContextDescription.Provider>
}