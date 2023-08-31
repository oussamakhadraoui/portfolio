'use client'
import { AnimationProps, motion } from 'framer-motion'
const variant: AnimationProps['variants'] = {
  initial: {
    x: '100%',
    width: '100%',
  },
  animate: {
    x: '0%',
    width: '0%',
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  },
}
const Transition = () => {
  return (
    <>
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-cyan-500'
        variants={variant}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
      />

      {/* <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-white'
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        // exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
      />
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-black'
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        // exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
      /> */}
    </>
  )
}

export default Transition
