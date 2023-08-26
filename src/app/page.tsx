import type { Metadata } from 'next'
import Image from 'next/image'
import image from'../../public/eliot.jpg'
export const metadata: Metadata = {
  title: 'OK-Portfolio',
  description: 'Glad to show you my work',
}
export default function Home() {
  return (
    <main className='flex items-center text-dark w-full min-h-screen absolute'>
      <div className='flex items-center justify-between w-full'>
        <div>
          <Image src={image} className='w-full h-auto' alt='oussama'/>
        </div>
      </div>
    </main>
  )
}
