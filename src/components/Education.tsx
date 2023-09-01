'use client'
import React, { useRef } from 'react'
import Details from './Details'
import { useScroll, motion } from 'framer-motion'
import LayOut from './LayOut'
interface EducationProps {}

const Education = ({}: EducationProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })
  return (
    <LayOut>
      <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
          Education
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative'>
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className='absolute left-9 top-0 w-[4px] h-full bg-cyan-400 origin-top'
          />
          <ul className='w-full flex flex-col items-start justify-between ml-4'>
            <Details
              address='militaire'
              company='academy'
              position='web dev'
              companyLink='www.google.com'
              time='2020'
              work='military'
            />
            <Details
              address='militaire'
              company='academy'
              position='web dev'
              companyLink='www.google.com'
              time='2020'
              work='military'
            />
            <Details
              address='militaire'
              company='academy'
              position='web dev'
              companyLink='www.google.com'
              time='2020'
              work='military'
            />
          </ul>
        </div>
      </div>
    </LayOut>
  )
}

export default Education
