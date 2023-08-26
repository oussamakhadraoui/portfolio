'use client'
import { motion } from 'framer-motion'
import React from 'react'
import Logo from './Logo'
import NavLinks from './NavLinks'
import { GithubIcon, Linkedin } from './Icons'

const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
      <nav>
        <NavLinks href='/' title='Home' className='mr-4' />
        <NavLinks href='/about' title='About' className='mx-4' />
        <NavLinks href='/project' title='Project' className='mx-4' />
        <NavLinks href='/contact' title='Contact' className='ml-4' />
      </nav>

      <nav className='flex items-center justify-center flex-wrap'>
        <motion.a
          target={'_blank'}
          href='https://github.com/oussamakhadraoui'
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon className='w-6 mr-3' />
        </motion.a>
        <motion.a
          target={'_blank'}
          href='https://www.linkedin.com/in/oussama-khadraoui'
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Linkedin className='w-6 ml-3' />
        </motion.a>
      </nav>
      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}

export default NavBar
