'use client'
import React, { useRef } from 'react'
import Details from './Details'
import { useScroll, motion } from 'framer-motion'
import LayOut from './LayOut'
import AnimatedText from './AnimatedText'
import SectionHeading from './Heading-section'
interface EducationProps {}

const Education = ({}: EducationProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })
  console.log(scrollYProgress)
  return (
    <section className='scroll-mt-28 mb-28'>
      {/* <h2 className='font-bold text-8xl mb-32 w-full text-center'></h2> */}
      <SectionHeading>my Education</SectionHeading>
      <div ref={ref} className='w-full sm:w-[100%] md:w-[80%] lg:w-[70%] xl:w-[60%] xl:w- mx-auto relative mt-24'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className={`absolute left-9 top-0 w-[4px] h-full bg-cyan-400 origin-top`}
        />
        <ul className='w-full flex flex-col items-start justify-between ml-12'>
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
    </section>
  )
}

export default Education
