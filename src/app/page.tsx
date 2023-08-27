import type { Metadata } from 'next'
import Image from 'next/image'
import image from '../../public/eliot.jpg'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LinkArrow } from '@/components/Icons'
export const metadata: Metadata = {
  title: 'OK-Portfolio',
  description: 'Glad to show you my work',
}
export default function Home() {
  return (
    <main className='container flex items-center text-dark w-full min-h-screen pt-0'>
      <div className='flex items-center justify-between w-full'>
        <div className='w-1/2'>
          <Image src={image} className='w-full h-auto' alt='oussama' />
        </div>
        <div className='w-1/2 flex flex-col items-center self-center'>
          <AnimatedText
            text='Turning Vision to Reality With Coding'
            className='!text-6xl !text-left'
          />
          <p className='my-4 text-base font-medium'>
            As a skilled full stack developer ,I am dedicated to turn ideas into
            innovative web application. Go check my projects and articles.
          </p>
          <div className='flex items-center self-start mt-2'>
            <Link href={'../../public/CV.pdf'} target='_blank'>
              <Button
                className='bg-black text-white text-xl font-semibold p-2.5 px-8 hover:text-black rounded-xl py-6 '
                variant={'outline'}
              >
                Resume
                <LinkArrow />
              </Button>
            </Link>
            <Link href='mailto::ousamatest@gmail.com'>
              <Button className='text-xl px-10 py-6 rounded-xl' variant={'link'}>
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
