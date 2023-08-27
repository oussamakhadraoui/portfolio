'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface NavLinksProps {
  href: string
  className?: string
  title: string
}

const NavLinks = ({ href, className, title }: NavLinksProps) => {
  const pathName = usePathname()
  const width = pathName === href ? 'w-full' : 'w-0'
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${width}`}
      >
        &nbsp;
      </span>
    </Link>
  )
}

export default NavLinks
