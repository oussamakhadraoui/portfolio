'use client'
import React, { Fragment } from 'react'
import { motion } from 'framer-motion'
import express from '../../public/express.png'
import nest from '../../public/nest.png'
import react from '../../public/react.png'
import next from '../../public/nextjs.png'
import typescript from '../../public/ts.png'
import node from '../../public/nodeJsSmall.png'
import Image from 'next/image'
import SectionHeading from './Heading-section'



const Skills = () => {

  const skills = [
    { name: 'ReactJs', bgColor: 'bg-cyan-50', icon: react },
    { name: 'NextJs', bgColor: 'bg-gray-200', icon: next },
    { name: 'NestJs', bgColor: 'bg-red-50', icon: nest },
    { name: 'NodeJs', bgColor: 'bg-green-50', icon: node },
    { name: 'ExpressJs', bgColor: 'bg-gray-100', icon: express },
    { name: 'Typescript', bgColor: 'bg-cyan-50', icon: typescript },
  ]


  return (
    <main id='skills' className='scroll-mt-28'>
      <SectionHeading>Most used frameworks</SectionHeading>
      <div className='w-full mt-12 flex flex-row md:w-full sm:flex-col'>
        <motion.div
          className='flex flex-wrap justify-center items-center md:justify-center
        md:items-center'
        >
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='flex justify-center items-center flex-col text-center m-4 transition-all ease-in-out xl:my-4 xl:mx-8'
              key={skill.name}
            >
              <motion.div
                className={`flex justify-center items-center w-24 h-24 hover:shadow-xx  rounded-full ${skill.bgColor}`}
              >
                <Image
                  className='w-6/12 h-[50%]'
                  src={skill.icon}
                  alt={skill.name}
                />
              </motion.div>
              <p className='font-medium mt-2 xl:mt-4 text-xs text-left leading-normal text-gray-600 xl:text-2xl dark:text-white'>
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  )
}

export default Skills