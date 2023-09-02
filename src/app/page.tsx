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
export const metadata: Metadata = {
  title: 'OK | Portfolio',
  description: 'Glad to show you my work',
}
function Home() {
  return (
    <>
      <Galaxy />
      <main className='flex items-center text-black w-full min-h-screen pt-40 max-md:w-full max-md:justify-center max-md:items-center max-md:block'>
        <LayOut className='pt-0'>
          <div className='flex flex-col items-center justify-between w-full md:flex-row'>
            <div className='w-1/2 max-md:w-full'>
              {/* <Image src={oussama} className='w-full h-auto' alt='oussama' /> */}
            </div>
            <div className='w-1/2 flex flex-col items-center self-center max-md:w-full'>
              <AnimatedText
                text='Turning Vision to Reality With Coding'
                className='dark:text-white'
              />
              <p className='my-4 text-base font-medium'>
                As a skilled full stack developer ,I am dedicated to turn ideas
                into innovative web application. Go check my projects and
                articles.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href={'../../public/CV.pdf'} target='_blank'>
                  <Button
                    className='bg-black text-white text-xl font-semibold p-2.5 px-8 hover:text-black rounded-xl py-6 dark:text-black dark:bg-white hover:dark:bg-black hover:dark:text-white '
                    variant={'outline'}
                  >
                    Resume
                    <LinkArrow />
                  </Button>
                </Link>
                <Link href='mailto::ousamatest@gmail.com'>
                  <Button
                    className='text-xl px-10 py-6 rounded-xl dark:text-white'
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
            <Skills/>
            <Projects />
            <Experience />
          <Contact/>
          </div>
        </LayOut>
      </main>
    </>
  )
}
export default Home
