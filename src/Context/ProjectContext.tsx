import React, { createContext, ReactNode, useEffect, useState } from "react"


interface Project {
    _id : string,
    createdAt?: string;
    updatedAt?: string;
}

interface ProjectContextType {

}

interface ProjectProviderProps {
  children: ReactNode;
}


export const DescriptionContext = ({children} :ProjectProviderProps ) => {
     const [loading, setLoading] = useState<boolean>(false)
    
}