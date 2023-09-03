import type { Metadata } from 'next'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LinkArrow } from '@/components/Icons'

import About from '@/components/pages/About'
import Galaxy from '@/components/Galaxy'
import Education from '@/components/Education'
import LayOut from '@/components/LayOut'
import Projects from '@/components/Projects'
import Experience from '@/components/experience'
import Contact from '@/components/Contact'
import Skills from '@/components/Skills'
import AnimatedNum from '@/components/AnimatedNum'
export const metadata: Metadata = {
  title: 'OK | Portfolio',
  description: 'Glad to show you my work',
}
function Home() {
  return (
    <>
      <Galaxy />
      <main className='flex items-center text-black w-full min-h-screen pt-10 max-md:w-full max-md:justify-center max-md:items-center max-md:block'>
        <LayOut className='pt-0'>
          <div className='flex flex-col items-center justify-between w-full lg:flex-row'>
            <div className='lg:w-1/2 w-full flex justify-center items-center '>
              <div className='flex items-center w-[70%] justify-between mb-7 flex-col md:flex-row'>
                <div className='flex flex-col items-center justify-center'>
                  <span className='inline-block text-5xl lg:text-6xl text-gray-600 font-bold dark:text-white'>
                    <AnimatedNum value={7} />+
                  </span>
                  <h2 className='text-xl text-center font-medium capitalize text-cyan-800/70 dark:text-white'>
                    Satisfied Clients
                  </h2>
                </div>

                <div className='flex flex-col items-center justify-center'>
                  <span className='inline-block text-5xl lg:text-6xl text-gray-600 font-bold dark:text-white'>
                    <AnimatedNum value={34} />+
                  </span>
                  <h2 className='text-xl text-center font-medium capitalize text-cyan-800/80 dark:text-white'>
                    Projects Completed
                  </h2>
                </div>

                <div className='flex flex-col items-center justify-center '>
                  <span className='inline-block text-5xl 2xl:text-6xl text-gray-600 font-bold dark:text-white'>
                    <AnimatedNum value={4} />+
                  </span>
                  <h2 className='text-xl text-center font-medium capitalize text-cyan-800 dark:text-white'>
                    Years Of Experience
                  </h2>
                </div>
              </div>
            </div>
            <div className='lg:w-1/2 flex flex-col items-center self-center w-full'>
              <AnimatedText
                text='Turning Vision to Reality With Coding'
                className='dark:text-white'
              />
              <p className='my-4 text-base font-medium text-center lg:text-left'>
                As a skilled full stack developer ,I am dedicated to turn ideas
                into innovative web application. Go check my projects and
                articles.
              </p>
              <div className='flex items-center lg:self-start mt-2'>
                <Link href='/CV.pdf' target='_blank' download>
                  <Button
                    className='bg-black text-white text-xl font-semibold lg:p-2.5 lg:px-8 hover:text-black rounded-xl lg:py-6 dark:text-black dark:bg-white hover:dark:bg-black hover:dark:text-white '
                    variant={'outline'}
                  >
                    Resume
                    <LinkArrow />
                  </Button>
                </Link>
                <Link href='mailto::ousamatest@gmail.com'>
                  <Button
                    className='text-xl left-0 px-10 lg:py-6 rounded-xl dark:text-white'
                    variant={'link'}
                  >
                    Contact
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          {/* ///////////////////////////////////// */}
          <About />
          <Education />
          <div className='flex flex-col items-center px-4'>
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </div>
        </LayOut>
      </main>
    </>
  )
}
export default Home
