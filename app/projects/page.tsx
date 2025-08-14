'use client'
import React from 'react'
import { ProjectData } from '@/lib/projects'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import { useState } from 'react'
import Image from 'next/image'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>('1')
  const handleProjectSelect = (event: React.MouseEvent<HTMLDivElement>) => {
    const tartget = event.currentTarget as HTMLDivElement
    setSelectedProject(tartget.id)
  }

  return (
    <div className="flex flex-row h-[740px] pt-[240px]">
      {/* Project - Left */}
      <div className="flex flex-col w-1/2 h-full justify-start pl-[200px]">
        <h1 className="font-figtree text-3xl sm:text-4xl md:text-6xl leading-[1.2] text-[#A0CDE2] mb-8">
          Projects
        </h1>
        <div className="overflow-y-auto h-full hide-scrollbar">
          <Accordion type="single" collapsible className="w-full mb-10">
            {ProjectData.map((data) => (
              <AccordionItem
                value={data.title}
                key={data.id}
                id={data.id.toString()}
                onMouseOver={handleProjectSelect}
              >
                <AccordionTrigger
                  className="font-figtree text-3xl md:text-5xl leading-[1.2]"
                  style={{ color: 'var(--foreground)' }}
                >
                  {data.title}
                </AccordionTrigger>
                <AccordionContent>
                  {/* Description */}
                  <p
                    className="font-abeezee text-md leading-[1.18] tracking-wide max-w-[500px] pb-5"
                    style={{ color: 'var(--foreground)' }}
                  >
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
                      <a href={data.github} target="_blank" rel="noreferrer">
                        <GitHubIcon sx={{ fontSize: 25 }} />
                      </a>
                    )}
                    {data.demo && (
                      <a href={data.demo} target="_blank" rel="noreferrer">
                        <LaunchIcon sx={{ fontSize: 25 }} />
                      </a>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      {/* Project - Right */}
      <div className="flex justify-end w-1/2 h-full pr-[200px]">
        <div className="h-[300px] w-full max-w-[400px] md:h-[400px] md:w-[400px] rounded-[30px] bg-[rgba(130,138,149,0.15)] shadow-[0_10px_100px_10px_rgba(0,0,0,0.25)] cursor-pointer">
          <a
            href={
              selectedProject
                ? ProjectData.find(
                    (project) => project.id.toString() === selectedProject
                  )?.demo || ''
                : ''
            }
            target="_blank"
            rel="noreferrer"
            className="w-full h-full flex items-center justify-center"
          >
            <Image
              src={
                selectedProject
                  ? ProjectData.find(
                      (project) => project.id.toString() === selectedProject
                    )?.image || ''
                  : ''
              }
              width={1280}
              height={832}
              alt="Picture of the project"
              className="h-full w-full object-cover rounded-[30px] grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
