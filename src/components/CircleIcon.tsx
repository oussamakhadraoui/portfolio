import React, { RefObject, useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
interface CircleIconProps {
  reference: RefObject<HTMLLIElement>
}

const CircleIcon = ({ reference }: CircleIconProps) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['center end', 'center center'],
  })
  return (
    <figure className='absolute left-0 stroke-black/60'>
      <svg width='75' height='75' viewBox='0 0 100 100'>
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
        <circle cx='75' cy='50' r='10' className='stroke-cyan-600 stroke-1 fill-cyan-400' />
      </svg>
    </figure>
  )
}

export default CircleIcon
