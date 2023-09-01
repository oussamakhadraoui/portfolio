import React from 'react'
import Skills from '../Skills'
import Experience from '../experience'
import AnimatedNum from '../AnimatedNum'
import Image from 'next/image'
import AnimatedText from '../AnimatedText'
import oussama from '../../../public/ok.png'
import LayOut from '../LayOut'


const About = () => {
  return (
    <main className='flex w-full flex-col items-center justify-center'>
      <LayOut>
        <div className='pt-16'>
          <AnimatedText text='Code Is Magic' className='mb-16' />
          <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start '>
              <h2 className='mb-4 text-lg font-bold uppercase text-black/75'>
                Biography
              </h2>
              <p className='font-medium'>
                Hi, I&apos;m A military officer one day he tried to code somehow
                he find himself involved in the programming world
              </p>
              <br />
              <p className='my-4 font-medium'>
                Dedicated Web Developer with 4 years of comprehensive experience
                collaborating with colleagues to achieve sleek and streamlined
                experiences. Expertise in data marketing analysis and revising
                websites to improve function. Successful at managing strong
                teams of developers to maximize profits.
              </p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-black bg-white p-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-cyan-300' />
              <Image
                src={oussama}
                alt='oussama'
                priority
                className='w-full h-auto rounded-2xl bg-black'
              />
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between'>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNum value={7} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-black/75'>
                  Satisfied Clients
                </h2>
              </div>

              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNum value={34} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-black/75'>
                  Projects Completed
                </h2>
              </div>

              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNum value={4} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-black/75'>
                  Years Of Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
        </div>
      </LayOut>
    </main>
  )
}

export default About
