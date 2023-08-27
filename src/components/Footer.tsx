import React from 'react'
import { MrRobot } from './Icons'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-black font-medium text-lg '>
      <div className='py-8 flex items-center justify-between container'>
        <span>{new Date().getFullYear()}&copy; All Rights Reserved.</span>
        <div className='flex items-center'>
          Build By Mr Robot
          <span>
            <MrRobot />
          </span>
        </div>
        <Link className='underline' href='fill it with the website url'>Say hello</Link>
      </div>
    </footer>
  )
}

export default Footer
