import React from 'react'
import { MrRobot } from './Icons'
import Link from 'next/link'

const Footer = () => {
  return (
    // <footer className='w-full font-medium text-lg '>
    //   <div className='py-8 flex items-center justify-between container'>
    //     <span>{new Date().getFullYear()}&copy; All Rights Reserved.</span>
    //     <div className='flex items-center'>
    //       Build By Mr Robot
    //       <span>
    //         <MrRobot />
    //       </span>
    //     </div>
    //     <Link className='underline' href='fill it with the website url'>Say hello</Link>
    //   </div>
    // </footer>




    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 Oussama. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  )
}

export default Footer
