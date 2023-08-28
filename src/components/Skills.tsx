'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Tooltip as ReactTooltip } from 'react-tooltip'

// import { urlFor, client } from '../../client'
// import './Skills.scss'

const Skills = () => {
  // const [experiences, setExperiences] = useState([])
  // const [skills, setSkills] = useState([])
  const skills = [
    { name: 'dfgdf', bgColor: 'dfgdfg', icon: 'dfgdfg' }, 
    { name: 'dfgdf', bgColor: 'dfgdfg', icon: 'dfgdfg' }, 
    { name: 'dfgdf', bgColor: 'dfgdfg', icon: 'dfgdfg' }, 
    { name: 'dfgdf', bgColor: 'dfgdfg', icon: 'dfgdfg' }, 
    { name: 'dfgdf', bgColor: 'dfgdfg', icon: 'dfgdfg' }, 
    { name: 'dfgdf', bgColor: 'dfgdfg', icon: 'dfgdfg' }, 
    { name: 'dfgdf', bgColor: 'dfgdfg', icon: 'dfgdfg' }, 
    { name: 'dfgdf', bgColor: 'dfgdfg', icon: 'dfgdfg' }, 
    { name: 'dfgdf', bgColor: 'dfgdfg', icon: 'dfgdfg' }, 
    { name: 'dfgdf', bgColor: 'dfgdfg', icon: 'dfgdfg' }, 
    { name: 'dfgdf', bgColor: 'dfgdfg', icon: 'dfgdfg' }, 
    { name: 'dfgdf', bgColor: 'dfgdfg', icon: 'dfgdfg' }, 
  ]
  const experiences = [
    { year: 'dfgdf', works: [{ name: 'dfgdfg', company: 'dfgdfg', desc: 'dfgdfg' }] },
    { year: 'ffdg', works: [{ name: 'dfgdfg', company: 'dfgdfg', desc: 'dfgdfg' }] },
    { year: 'dfg', works: [{ name: 'dfgdfg', company: 'dfgdfg', desc: 'dfgdfg' }] },
    { year: 'dfgf', works: [{ name: 'dfgdfg', company: 'dfgdfg', desc: 'dfgdfg' }] },
  ]

  return (
    <>
      <div className='mt-7 border-2 border-solid border-black' />
      <h2 className='font-extrabold text-center capitalize text-4xl text-black'>
        Skills & Experiences
      </h2>

      <div className='w-[80%] mt-12 flex flex-row md:w-full md:flex-col'>
        <motion.div
          className='flex flex-1 flex-wrap justify-start items-start mr-20 md:mr-0 md:justify-center
        md:items-center'
        >
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='flex justify-center items-center flex-col text-center m-4 transition-all ease-in-out xl:my-4 xl:mx-8'
              key={skill.name}
            >
              <div
                className='flex justify-center items-center w-24 h-24 hover:shadow-xx bg-red-100 rounded-full '
                style={{ backgroundColor: skill.bgColor }}
              >
                <img
                  className='w-6/12 h-[50%]'
                  src={skill.icon}
                  alt={skill.name}
                />
              </div>
              <p className='font-medium mt-2 xl:mt-4 text-xs text-left leading-normal text-gray-600 xl:text-2xl'>
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <div className='flex flex-1 justify-start items-start flex-col md:mt-8'>
          {experiences.map((experience) => (
            <motion.div
              className='w-full flex flex-row justify-start items-start my-4 mx-0 '
              key={experience.year}
            >
              <div className='mr-12 sm:mr-4'>
                <p className='text-cyan-950 text-base font-extrabold text-left xl:text-3xl sm:text-sm'>
                  {experience.year}
                </p>
              </div>
              <motion.div className='flex flex-1'>
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className='flex flex-col justify-start items-start mb-4 cursor-pointer'
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className='font-medium text-base text-left xl:text-3xl sm:text-sm'>
                        {work.name}
                      </h4>
                      <p className='font-normal mt-1 text-cyan-950 p-text'>
                        {work.company}
                      </p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      // effect='solid'
                      arrowColor='#fff'
                      className='rounded p-4 text-center leading-normal opacity-100 text-gray-700 shadow-xx bg-white max-w-[300px] xl:!text-2xl xl:!max-w-[500px] '
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Skills
// AppWrap(
//   MotionWrap(Skills, 'app__skills'),
//   'skills',
//   'app__whitebg'
// )
