import React from 'react'

import realchat from '../../public/realchat.png'
import cait from '../../public/cait.png'
import auth5 from '../../public/auth5.png'
import nestjs from '../../public/nestjs.png'
import natours from '../../public/natours.png'

import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
export const projectsData = [
  {
    show: true,
    title: 'Real Time Chat',
    description:
      'I build a super-performant realtime chat app deployed to the web, ready to be used by actual users.',
    tags: ['React', 'Pusher', 'Next.js', 'Tailwind', 'Redis'],
    imageUrl: realchat,
    gitUrl: 'https://github.com/oussamakhadraoui/realtime-chat-app',
    previewUrl: 'https://realtime-chat-app-bay-eta.vercel.app/',
  },
  {
    show: true,
    title: 'Cait',
    description:
      'Cait is an app to make notes and track them using open ai and pinecone.',
    tags: ['React', 'pinecone', 'Next.js', 'Tailwind', 'OpenAi'],
    imageUrl: cait,
    gitUrl: 'https://github.com/oussamakhadraoui/ai-chat',
    previewUrl: 'https://ai-cat-tau.vercel.app/note',
  },
  {
    show: true,
    title: 'Next Auth',
    description:
      'Next auth is a login platform use next auth 5 with two factor authentication.',
    tags: ['nextAuth', 'Prisma', 'Next.js', 'Tailwind', 'Postgres'],
    imageUrl: auth5,
    gitUrl: 'https://github.com/oussamakhadraoui/auth2',
    previewUrl: 'https://nextauthv5-mu.vercel.app/',
  },
  {
    show: false,
    title: 'Nestjs Protected Authentication',
    description:
      'I build a Modern implementation of access token and the Refresh Token, RBAC and protected routes.',
    tags: ['Nest.js', 'JsonWebToken', 'Passport', 'Postgres', 'Prisma'],
    imageUrl: nestjs,
    gitUrl: 'https://github.com/oussamakhadraoui/backend-nestjs',
    previewUrl: 'https://github.com/oussamakhadraoui/backend-nestjs',
  },
  {
    show: false,
    title: 'Natours Project',
    description:
      "I try to do the Jonas's project with the latest version of every package.",
    tags: ['Javascript', 'express.js', 'Node.js', 'Pug', 'MongoDb'],
    imageUrl: natours,
    gitUrl: 'https://github.com/oussamakhadraoui/natours',
    previewUrl: 'https://github.com/oussamakhadraoui/natours',
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
    title: 'Summer Internship',
    location: 'Tunis, TN',
    description:
      'I worked as a summer intern in a remote company for 3 months. I learned a lot about new technology.',
    icon: React.createElement(LuGraduationCap),
    date: '2021 - 2022',
  },
  {
    title: 'Front-End Developer',
    location: 'Tunis, TN',
    description:
      'I worked as a remote front-end developer for 6 months in a startup. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: '2022 - 2023',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Navy, TN',
    description:
      "I'm now a full-stack developer in the tunisian navy. My stack includes React, Nest.js, Next.js, TypeScript, Tailwind, Prisma, MongoDB and Postgresql. I'm open to new opportunities.",
    icon: React.createElement(FaReact),
    date: '2023 - present',
  },
] as const
