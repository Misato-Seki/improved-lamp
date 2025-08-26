'use client'

import { useDarkMode } from './DarkModeContext'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import { useRouter, usePathname } from 'next/navigation'

interface NavigationProps {
  isOpen: boolean
  onClose: () => void
}

export default function Navigation({ isOpen, onClose }: NavigationProps) {
  const { isDarkMode } = useDarkMode()
  const router = useRouter()
  const pathname = usePathname()

  const navigationItems = [
    { id: 'HOME', label: 'HOME', href: '/' },
    { id: 'PROJECTS', label: 'PROJECTS', href: '/projects' },
    { id: 'EXPERIENCE', label: 'EXPERIENCE', href: '/experience' },
  ]

  const socialLinks = [
    {
      id: 'github',
      href: 'https://github.com/Misato-Seki',
      icon: <GitHubIcon sx={{ fontSize: 30 }} />,
    },
    {
      id: 'linkedin',
      href: 'https://www.linkedin.com/in/misato-seki-198a16251/',
      icon: <LinkedInIcon sx={{ fontSize: 30 }} />,
    },
    {
      id: 'email',
      href: 'mailto:misato.seki@centria.fi',
      icon: <EmailIcon sx={{ fontSize: 30 }} />,
    },
  ]

  console.log('Current pathname: ', pathname)

  return (
    <div
      className={`fixed top-[100px] right-0 z-50 h-full w-full transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } ${isDarkMode ? 'bg-[#1D1D1D]' : 'bg-white'}`}
    >
      {/* Main Navigation Frame */}
      <div className="mx-auto mt-20 flex max-w-2xl flex-col gap-8 px-3 md:mt-32">
        {/* Navigation Items */}
        {navigationItems.map((item) => (
          <div
            key={item.id}
            data-testid={item.id}
            className="group flex cursor-pointer items-center overflow-hidden"
            onClick={() => {
              onClose()
              router.push(item.href)
            }}
          >
            <span
              className={`${
                item.href === pathname
                  ? `font-figtree text-5xl leading-[1.2] md:text-7xl ${
                      item.id === 'HOME'
                        ? 'text-[#E2A0A0]'
                        : item.id === 'PROJECTS'
                          ? 'text-[#A0CDE2]'
                          : item.id === 'EXPERIENCE'
                            ? 'text-[#A0A2E2]'
                            : ''
                    }`
                  : `font-figtree translate-x-[-100%] transform text-5xl leading-[1.2] transition-all duration-500 ease-out group-hover:translate-x-0 md:text-7xl ${
                      item.id === 'HOME'
                        ? 'text-[#E2A0A0]'
                        : item.id === 'PROJECTS'
                          ? 'text-[#A0CDE2]'
                          : item.id === 'EXPERIENCE'
                            ? 'text-[#A0A2E2]'
                            : ''
                    }`
              }`}
            >
              →
            </span>
            <span
              className={`${
                item.href === pathname
                  ? 'font-figtree text-5xl leading-[1.2] md:text-7xl'
                  : `font-figtree -translate-x-10 transform text-5xl leading-[1.2] transition-all duration-500 ease-out group-hover:translate-x-4 md:-translate-x-20 md:text-7xl ${
                      isDarkMode ? 'text-[#D3D3D3]' : 'text-[#828A95]'
                    }`
              }`}
            >
              {item.label}
            </span>
          </div>
        ))}

        {/* Social Links */}
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[50px] w-[50px] items-center justify-center transition-colors duration-300 hover:opacity-80"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
