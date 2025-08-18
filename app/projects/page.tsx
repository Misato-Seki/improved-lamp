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
import { useDarkMode } from '@/components/DarkModeContext'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>('1')
  const handleProjectSelect = (event: React.MouseEvent<HTMLDivElement>) => {
    const tartget = event.currentTarget as HTMLDivElement
    setSelectedProject(tartget.id)
  }
  const { isDarkMode } = useDarkMode()

  return (
    <>
      {/* Desktop (lg~) */}
      <div
        className="custom-pt-40 lg:px-auto hidden lg:flex lg:flex-row lg:justify-center"
        style={{ height: '100%' }}
      >
        {/* Project - Left */}
        <div className="flex h-full w-[500px] flex-col justify-start">
          <h1 className="font-figtree mb-8 text-6xl leading-[1.2] text-[#A0CDE2]">
            Projects
          </h1>
          <div className="hide-scrollbar h-full overflow-y-auto">
            <Accordion type="single" collapsible className="mb-10 w-full">
              {ProjectData.map((data) => (
                <AccordionItem
                  value={data.title}
                  key={data.id}
                  id={data.id.toString()}
                  onMouseOver={handleProjectSelect}
                >
                  <AccordionTrigger
                    className="font-figtree text-5xl leading-[1.2] font-light"
                    style={{ color: 'var(--foreground)' }}
                  >
                    {data.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    {/* Description */}
                    <p
                      className="font-abeezee max-w-[500px] pb-5 text-base leading-[1.18] tracking-wide"
                      style={{ color: 'var(--foreground)' }}
                    >
                      {data.description}
                    </p>
                    {/* Tags */}
                    <div className="mt-1 flex flex-wrap items-center gap-3">
                      {data.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`font-abeezee inline-flex items-center rounded-full bg-[#A0CDE2] px-4 py-1.5 text-base ${isDarkMode ? 'text-stone-600' : 'text-white'}`}
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
        <div className="custom-items-start flex h-full items-center justify-end pl-10 xl:pl-20">
          <div
            className={`h-[300px] w-full max-w-[400px] cursor-pointer rounded-[30px] md:h-[400px] md:w-[400px] ${isDarkMode ? 'shadow-[0_10px_100px_10px_rgba(255,255,255,0.25)]' : 'shadow-[0_10px_100px_10px_rgba(0,0,0,0.25)]'}`}
          >
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
              className="flex h-full w-full items-center justify-center"
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
                className="h-full w-full rounded-[30px] object-cover grayscale transition-all duration-300 hover:scale-110 hover:grayscale-0"
              />
            </a>
          </div>
        </div>
      </div>
      {/* Mobile (~lg) */}
      <div className="flex flex-col items-center justify-center px-10 sm:px-20 md:px-30 lg:hidden">
        <h1 className="font-figtree mb-8 text-3xl leading-[1.2] text-[#A0CDE2] sm:text-4xl md:text-5xl">
          Projects
        </h1>
        <div className="hide-scrollbar h-full w-full overflow-y-auto">
          <Accordion type="single" collapsible className="mb-10 w-full">
            {ProjectData.map((data) => (
              <AccordionItem
                value={data.title}
                key={data.id}
                id={data.id.toString()}
              >
                <AccordionTrigger
                  className="font-figtree text-2xl leading-[1.2] font-light sm:text-3xl md:text-4xl"
                  style={{ color: 'var(--foreground)' }}
                >
                  {data.title}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col items-center">
                  {/* Image */}
                  <div className="p-5"></div>
                  <div
                    className={`h-[300px] w-full max-w-[300px] cursor-pointer rounded-[30px] ${isDarkMode ? 'shadow-[0_10px_100px_10px_rgba(255,255,255,0.25)]' : 'shadow-[0_10px_100px_10px_rgba(0,0,0,0.25)]'}`}
                  >
                    <a
                      href={
                        selectedProject
                          ? ProjectData.find(
                              (project) =>
                                project.id.toString() === selectedProject
                            )?.demo || ''
                          : ''
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-full w-full items-center justify-center"
                    >
                      <Image
                        src={data.image ? data.image : ''}
                        width={1280}
                        height={832}
                        alt="Picture of the project"
                        className="h-full w-full rounded-[30px] object-cover grayscale transition-all duration-300 hover:scale-110 hover:grayscale-0"
                      />
                    </a>
                  </div>
                  {/* Description */}
                  <p
                    className="font-abeezee text-md py-5 leading-[1.18] tracking-wide"
                    style={{ color: 'var(--foreground)' }}
                  >
                    {data.description}
                  </p>
                  {/* Tags */}
                  <div className="mt-1 flex flex-wrap items-center gap-3">
                    {data.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`font-abeezee inline-flex items-center rounded-full bg-[#A0CDE2] px-4 py-1.5 text-sm ${isDarkMode ? 'text-stone-600' : 'text-white'}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Links */}
                  <div className="flex w-full items-center gap-3 pt-5">
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
    </>
  )
}
