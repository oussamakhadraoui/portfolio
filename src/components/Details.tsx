import React, { useRef } from 'react'
import {motion, useScroll} from 'framer-motion'

interface DetailsProps {
  position: string
  company: string
  companyLink: string
  time: string
  address: string
  work: string
}

const Details = ({address,company,companyLink,position,time,work}: DetailsProps) => {
  const ref = useRef<HTMLLIElement>(null)
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['center end', 'center center'],
    })
  return (
    <li
      ref={ref}
      className='w-full my-8 ml-4 first:mt-0 last:mb-0 mx-auto flex flex-col items-start lg:ml-28 justify-center'
    >
      <figure className='absolute left-0 stroke-black/60'>
        <svg
          className='-rotate-90'
          width='75'
          height='75'
          viewBox='0 0 100 100'
        >
          <circle
            cx='75'
            cy='50'
            r='20'
            className='stroke-cyan-600 stroke-1 fill-none'
          />
          <motion.circle
            style={{ pathLength: scrollYProgress }}
            cx='75'
            cy='50'
            r='20'
            className='stroke-[5px] fill-white'
          />
          <circle
            cx='75'
            cy='50'
            r='10'
            className='animate-pulse stroke-1 fill-cyan-400'
          />
        </svg>
      </figure>
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className='capitalize font-bold flex flex-end text-2xl'>
          {position}&nbsp;
        </h3>
        <span className='capitalize font-medium text-black/75'>
          {time} | {address}
        </span>
        <p className='font-medium w-full'>{company}</p>
      </motion.div>
    </li>
  )
}

export default Details
