import React from 'react'
import discord from '../../public/discord.png'
import realchat from '../../public/realchat.png'
import wordanalyticsImg from '../../public/wordanalytics.png'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
export const projectsData = [
  {
    title: 'Discord Clone',
    description:
      'I create an end-to-end fullstack and real-time discord clone, all with servers, channels, video calls, audio calls, editing and deleting messages as well as member roles.',
    tags: ['Typescript', 'Next.js', 'Postgres', 'Socket.io', 'React'],
    imageUrl: discord,
    gitUrl: 'https://github.com/oussamakhadraoui/discord-clone',
    previewUrl: 'https://discord-clone-production-b08c.up.railway.app/',
  },

  {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg,
    // gitUrl,
    // previewUrl,
  },
  {
    title: 'Real Time Chat',
    description:
      'I build a super-performant realtime chat app deployed to the web, ready to be used by actual users.',
    tags: ['React', 'Pusher', 'Next.js', 'Tailwind', 'Redis'],
    imageUrl: realchat,
    gitUrl: 'https://github.com/oussamakhadraoui/realtime-chat-app',
    previewUrl: 'https://realtime-chat-app-teal.vercel.app/',
  },
] as const
export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const

export const experiencesData = [
  {
    title: 'Graduated bootcamp',
    location: 'Tunis, TN',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: 'Front-End Developer',
    location: 'Tunis, TN',
    description:
      'I worked as a remote front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: '2019 - 2021',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Ohio, US',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Nest.js, Next.js, TypeScript, Tailwind, Prisma, MongoDB and Postgresql. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2021 - present',
  },
] as const
