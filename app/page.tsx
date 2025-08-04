"use client";

import { useState } from "react";
import BedtimeIcon from '@mui/icons-material/Bedtime';
import LightModeIcon from '@mui/icons-material/LightModeOutlined';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-[#1D1D1D] text-[#D3D3D3]' 
        : 'bg-white text-[#828A95]'
    }`}>
      {/* Navigation Bar */}
      <nav className="flex justify-end items-center gap-8 p-12">
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
                <BedtimeIcon sx={{color: "#D3D3D3", fontSize: 15}}/>
              </>
            ) : (
              <>
                <LightModeIcon sx={{color: "#828A95", fontSize: 15}}/>
                <div className="w-4 h-4 rounded-full bg-[#828A95] border border-[#828A95]"></div>
              </>
            )}
          </div>
        </button>

        {/* Menu Button */}
        <button className="w-8 h-8 flex items-center justify-center">
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
            <path d="M0 0h20v2H0zM0 6h20v2H0zM0 12h20v2H0z" fill={isDarkMode ? "#D3D3D3" : "#828A95"}/>
          </svg>
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-8">
        <div className="max-w-2xl mx-auto text-left">
          {/* Hero Text */}
          <div className="mb-8">
            <h1 className={`text-5xl font-normal mb-8 font-figtree ${
              isDarkMode ? 'text-[#E2A0A0]' : 'text-[#E2A0A0]'
            }`}>
              Hello, I&apos;m Misato Seki.
            </h1>
            <p className="text-base leading-relaxed tracking-wide max-w-lg mx-auto font-abeezee">
              Hi, I&apos;m a Japanese Full-Stack Developer based in Finland and 
              passionate about front-end development and currently studying 
              software development. I&apos;m looking for opportunities to grow and 
              contribute in Finland&apos;s tech scene.
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <a
              href="#projects"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity font-abeezee"
            >
              <span>See My Project</span>
              <span>→</span>
            </a>
            <a
              href="#about"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity font-abeezee"
            >
              <span>More About Me</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
