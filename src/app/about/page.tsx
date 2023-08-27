import Transition from '@/components/Transition'
import React from 'react'
import type { Metadata } from 'next'
import AnimatedText from '@/components/AnimatedText'
interface pageProps {}
export const metadata: Metadata = {
  title: 'OK | About',
  description: 'Glad to show you my work',
}
const page = ({}: pageProps) => {
  return (
    <>
      <Transition />
      <main className='flex w-full flex-col items-center justify-center'>
        <div className='pt-16'>
          <AnimatedText text='Code Is Magic' className='' />
          <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start '>
              <h2 className='mb-4 text-lg font-bold uppercase text-black/75'>
                Biography
              </h2>
              <p className='font-medium'>
                Hi, I&apos;m A military officer one day he tried to code
                somehow he find himself involved in the programming world
              </p>
              <br />
              <p className='font-medium'>
                Dedicated Web Developer with 4 years of comprehensive experience
                collaborating with colleagues to achieve sleek and streamlined
                experiences. Expertise in data marketing analysis and revising
                websites to improve function. Successful at managing strong
                teams of developers to maximize profits.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default page
