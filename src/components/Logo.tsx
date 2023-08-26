"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

interface LogoProps {}

const Logo = ({}: LogoProps) => {
  const MotionLink = motion(Link)
  return (
    <div className='flex items-center justify-center mt-2'>
      <MotionLink
        href=''
        className='w-16 h-16 bg-dark text-tight flex items-center justify-center rounded-full text-2xl font-bold'
        whileHover={{
          backgroundColor: [
            '#fff',
            '#ccf9ff',
            '#7ce8ff',
            '#55d0ff',
            '#00acdf',
            '#0080bf',
            '#00acdf',
            '#55d0ff',
            '#7ce8ff',
            '#fff',
          ],
          transition: { duration: 1.7, repeat: Infinity },
        }}
      >
        OK
      </MotionLink>
    </div>
  )
}

export default Logo
