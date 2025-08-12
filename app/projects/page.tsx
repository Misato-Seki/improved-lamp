"use client";
import React from 'react'
import { ProjectData } from '@/lib/projects'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { useState } from 'react';
import Image from 'next/image';

export default function Projects() {
  const [ selectedProject, setSelectedProject ] = useState<string | null>("1");
  const handleProjectSelect = (event: React.MouseEvent<HTMLDivElement>) => {
    const tartget = event.currentTarget as HTMLDivElement;
    setSelectedProject(tartget.id);
  }

  console.log("Selected project ID: ", selectedProject)

  return (
    <div className="min-h-screen transition-colors duration-300">
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-8">
        <div className="w-full max-w-6xl">
          

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start"> 
            {/* Left: Textual Content */}
            <section className="flex flex-col">
              {/* Page Title */}
          <h1 className="font-figtree text-[40px] sm:text-[56px] md:text-[64px] leading-[1.2] text-[#A0CDE2] mb-8">
            Projects
          </h1>
          <Accordion
            type="single"
            collapsible
            className='w-full mb-10'>
            {ProjectData.map((data) => (
                <AccordionItem value={data.title} key={data.id}  id={data.id.toString()} onClick={handleProjectSelect}>
                    <AccordionTrigger 
                      className="font-figtree text-3xl md:text-5xl leading-[1.2]" 
                      style={{ color: 'var(--foreground)' }}
                    >
                      {data.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      {/* Description */}
                      <p className="font-abeezee text-md leading-[1.18] tracking-wide max-w-[500px] pb-5" style={{ color: 'var(--foreground)' }}>
                        {data.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap items-center gap-3 mt-1">
                        {data.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-full bg-[#A0CDE2] px-4 py-1.5 text-white font-abeezee text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-3 pt-5">
                        {data.github && (
                          <a
                            href={data.github}
                            target="_blank"
                            rel="noreferrer"
                            className="font-abeezee text-[15px] underline underline-offset-4 hover:opacity-80"
                            style={{ color: 'var(--foreground)' }}
                          >
                            <GitHubIcon sx={{ fontSize: 25 }}/>
                          </a>
                        )}
                        {data.demo && (
                          <a
                            href={data.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="font-abeezee text-[15px] underline underline-offset-4 hover:opacity-80"
                            style={{ color: 'var(--foreground)' }}
                          >
                            <LaunchIcon sx={{ fontSize: 25 }}/>
                          </a>
                        )}
                      </div>
                    </AccordionContent>
                </AccordionItem>




))}
          </Accordion>
</section>
          {/* Right: Image Placeholder (400x400, rounded 30px) */}
              <section className="flex md:justify-center items-center">
                <div className="h-[300px] w-full max-w-[400px] md:h-[400px] md:w-[400px] rounded-[30px] bg-[rgba(130,138,149,0.15)] shadow-[0_10px_100px_10px_rgba(0,0,0,0.25)] cursor-pointer">
                  <a href={selectedProject ? ProjectData.find(project => project.id.toString() === selectedProject)?.demo || '' : ''} target="_blank" rel="noreferrer">
                    <Image
                      src={selectedProject ? ProjectData.find(project => project.id.toString() === selectedProject)?.image || '' : ''}
                      width={1280}
                      height={832}
                      alt="Picture of the project"
                      className='h-full w-full object-cover rounded-[30px] grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300'
                    />
                  </a>                  
                </div>
              </section>

          </div>
        </div>
      </main>
    </div>
  )
}
