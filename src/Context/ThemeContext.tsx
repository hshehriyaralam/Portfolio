'use client'
import React, { ReactNode, useState, createContext, useEffect } from "react";
interface ThemeContextType {
  themeValue: boolean;
  changeTheme: () => void;
}

const ContextTheme = createContext<ThemeContextType>({
  themeValue: true,
  changeTheme: () => {},
});


interface ThemeProviderProps {
  children: ReactNode;
}


const ThemeContext = ({ children }: ThemeProviderProps) => {
  const [themeValue, setThemeValue] = useState<boolean>(true)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if(storedTheme !== null){
      setThemeValue(storedTheme === 'true')
    }
    setIsLoaded(true)
  },[])


  const changeTheme = () => {
    setThemeValue((prev )  =>  {
      const newTheme = !prev
      localStorage.setItem('theme', newTheme.toString())
      return newTheme;
    });
  };

  const value = { themeValue, changeTheme };

  if(!isLoaded){
    return null
  }

  return <ContextTheme.Provider value={value}>{children}</ContextTheme.Provider>;
};

export { ContextTheme, ThemeContext };