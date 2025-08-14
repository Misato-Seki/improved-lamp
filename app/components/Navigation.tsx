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
      className={`fixed top-[100px] right-0 h-full w-full z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } ${isDarkMode ? 'bg-[#1D1D1D]' : 'bg-white'}`}
    >
      {/* Main Navigation Frame */}
      <div className="flex flex-col gap-8 max-w-2xl mx-auto mt-20 md:mt-32 px-3">
        {/* Navigation Items */}
        {navigationItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center cursor-pointer group overflow-hidden"
            onClick={() => {
              onClose()
              router.push(item.href)
            }}
          >
            <span
              className={`${
                item.href === pathname
                  ? `text-5xl md:text-7xl leading-[1.2] font-figtree ${
                      item.id === 'HOME'
                        ? 'text-[#E2A0A0]'
                        : item.id === 'PROJECTS'
                        ? 'text-[#A0CDE2]'
                        : item.id === 'EXPERIENCE'
                        ? 'text-[#A0A2E2]'
                        : ''
                    }`
                  : `text-5xl md:text-7xl leading-[1.2] font-figtree transition-all duration-500 ease-out transform translate-x-[-100%] group-hover:translate-x-0 ${
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
                  ? 'text-5xl md:text-7xl leading-[1.2] font-figtree'
                  : `text-5xl md:text-7xl leading-[1.2] font-figtree transition-all duration-500 ease-out transform -translate-x-10 md:-translate-x-20 group-hover:translate-x-4 ${
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
              className="w-[50px] h-[50px] flex items-center justify-center transition-colors duration-300 hover:opacity-80"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
