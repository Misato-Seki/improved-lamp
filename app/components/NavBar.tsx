'use client'

import BedtimeIcon from '@mui/icons-material/Bedtime'
import LightModeIcon from '@mui/icons-material/LightModeOutlined'
import Navigation from '@/components/Navigation'
import { useState, useEffect } from 'react'
import { useDarkMode } from './DarkModeContext'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const onClose = () => {
    setIsMenuOpen(false)
  }

  // Apply dark mode styling to body
  useEffect(() => {
    const body = document.body
    if (isDarkMode) {
      body.style.setProperty('--background', '#1D1D1D')
      body.style.setProperty('--foreground', '#D3D3D3')
    } else {
      body.style.setProperty('--background', '#ffffff')
      body.style.setProperty('--foreground', '#828A95')
    }
  }, [isDarkMode])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-end items-center gap-4 sm:px-16 px-8 py-9">
        {/* Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className={`flex items-center gap-4 px-2 py-1 rounded-full border transition-colors duration-300 ${
            isDarkMode
              ? 'border-[#D3D3D3] bg-[#1D1D1D]'
              : 'border-[#828A95] bg-white'
          }`}
        >
          <div className="flex items-center gap-4">
            {isDarkMode ? (
              <>
                <div className="w-4 h-4 rounded-full bg-[#D3D3D3] border border-[#D3D3D3]"></div>
                <BedtimeIcon sx={{ color: '#D3D3D3', fontSize: 15 }} />
              </>
            ) : (
              <>
                <LightModeIcon sx={{ color: '#828A95', fontSize: 15 }} />
                <div className="w-4 h-4 rounded-full bg-[#828A95] border border-[#828A95]"></div>
              </>
            )}
          </div>
        </button>

        {/* Menu Button */}
        <button
          className="w-8 h-8 flex items-center justify-center"
          onClick={toggleMenu}
        >
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
            <path
              d="M0 0h20v2H0zM0 6h20v2H0zM0 12h20v2H0z"
              fill={isDarkMode ? '#D3D3D3' : '#828A95'}
            />
          </svg>
        </button>
      </nav>

      {/* Sliding Navigation */}
      <Navigation isOpen={isMenuOpen} onClose={onClose} />
    </>
  )
}
