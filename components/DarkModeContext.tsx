"use client"
import { createContext, useContext, useState, ReactNode, useEffect } from "react" 

interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void
}


const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined)

export function DarkModeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // mode OSに合わせる
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => setIsDarkMode(media.matches)

    // initial value
    setIsDarkMode(media.matches)

    // Detect OS mode change
    media.addEventListener('change', handleChange)

    // clean up
    return () => media.removeEventListener('change', handleChange)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <DarkModeContext.Provider value={{isDarkMode, toggleDarkMode}}>
      {children}
    </DarkModeContext.Provider>
  )

}

export function useDarkMode() {
  const context = useContext(DarkModeContext)
  if(context === undefined) {
    throw new Error('useDarkMode must be used within a DarkModeProvider')
  }
  return context
}