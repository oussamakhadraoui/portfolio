'use client'
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React from 'react'

interface AnimatePresenceProProps {
  children: React.ReactNode
}

const AnimatePresencePro = ({ children }: AnimatePresenceProProps) => {

  return (
    <AnimatePresence >
      {children}
    </AnimatePresence>
  )
}

export default AnimatePresencePro
