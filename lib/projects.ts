import { Project } from './type'
export const ProjectData: Project[] = [
  {
    id: 1,
    title: 'Virtual Farmers Market',
    description:
      'VFM is an online platform where farmers can register their products and consumers can buy them directly. By promoting the consumption of locally produced food within the local community, this project reduces the carbon footprint from transportation and helps achieve a sustainable future.',
    tags: ['React', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com/axdra/VFM',
    demo: 'https://main.d2oybo1hujadwl.amplifyapp.com/',
    image: '/images/VFM.png',
  },
  {
    id: 2,
    title: 'Uniqore',
    description:
      'Uniqore is a centralized digital platform designed to integrate and simplify access to university resources including news, events, articles, and internal announcements. It enhances communication, collaboration, and engagement across students, staff, and faculty in universities.',
    tags: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com/Centria-Hub/centria-hub',
    demo: 'https://hub.solo-web.studio/',
    image: '/images/Uniqore.png',
  },
  {
    id: 3,
    title: 'Selkouutiset-Bot',
    description:
      'This bot system fetches the latest news from Yle Selkouutiset, translates and explains each word in Japanese using OpenAI API.',
    tags: ['Python'],
    github: 'https://github.com/Misato-Seki/selkouutiset-bot',
    demo: '',
    image: '/images/NoImage.png',
  },
  {
    id: 4,
    title: 'Yle News Bot',
    description:
      'This bot system fetches the latest English news articles from YLE and summarizes them using a transformer-based model (BART via Hugging Face Transformers).',
    tags: ['Python'],
    github: 'https://github.com/Misato-Seki/yle-news-bot',
    demo: '',
    image: '/images/NoImage.png',
  },
  {
    id: 5,
    title: 'TaskBot',
    description:
      'The goal of this project is to help users improve their self-management skills using Google Calendar, Discord, and a Web UI. The TaskBot will automatically send bot message to Discord evey morning, including today&apos;s events, habits, and tasks.',
    tags: [
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'Node.js ',
      'Javascript',
      'PostgreSQL',
      'Prisma',
      'Docker',
      'Google Cloud',
    ],
    github: 'https://github.com/Misato-Seki/task-management-bot',
    demo: 'https://taskbot.misatosan.com/',
    image: '/images/TaskBot.png',
  },
  {
    id: 6,
    title: 'Misato Seki',
    description:
      'This is my portfolio website, which showcases my development projects and experience. It highlights the skills I have acquired and the work I am most proud of. Feel free to explore and learn more about what I can offer.',
    tags: [
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'Jest',
      'Cypress',
      'React Testing Library',
    ],
    github: 'https://github.com/Misato-Seki/improved-lamp',
    demo: 'https://portfolio.misatosan.com/',
    image: '/images/MisatoSeki.png',
  },
  {
    id: 7,
    title: 'VocabMaster',
    description:
      'A flashcard app that automatically generates meanings, example sentences, and related images using AI.',
    tags: ['Next.js', 'TypeScript', 'AWS'],
    github: 'https://github.com/Misato-Seki/vocab-master-amplify',
    demo: 'https://main.dksgj6o0bcet9.amplifyapp.com/',
    image: '/images/NoImage.png',
  },
]
