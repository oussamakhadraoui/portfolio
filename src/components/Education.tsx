'use client'
import React, { useRef } from 'react'
import Details from './Details'
import { useScroll, motion } from 'framer-motion'
import SectionHeading from './Heading-section'
import LayOut from './LayOut'
interface EducationProps {}

const Education = ({}: EducationProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })
  console.log(scrollYProgress)
  return (
    <LayOut>
      <section className='scroll-mt-28 mb-28 w-full flex flex-col justify-center items-center'>
        <SectionHeading>my Education</SectionHeading>
        <div
          ref={ref}
          className='w-full sm:w-[100%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto relative mt-24 right-0'
        >
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className={`absolute left-9 top-0 w-[4px] h-full bg-cyan-400 origin-top`}
          />
          <ul className='w-full flex flex-col justify-between ml-12 items-end'>
            <Details
              address='Menzel Bourguiba'
              company='Mixte'
              position='mathematics bachelor degree'
              companyLink='https://www.facebook.com/LyceeSecondaireMenzelBourguiba'
              time='2015'
              work='Student'
            />
            <Details
              address='Nabel'
              company='Academy'
              position='degree in computer science'
              companyLink='https://www.defense.tn/academie-militaire-2/?lang=fr'
              time='2018'
              work='Student'
            />
            <Details
              address='Tunis'
              company='FST'
              position='Master degree in computer science'
              companyLink='https://fst.rnu.tn/en'
              time='2020'
              work='Student'
            />
          </ul>
        </div>
      </section>
    </LayOut>
  )
}

export default Education
