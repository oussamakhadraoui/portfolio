'use client'
import React from 'react'
import { AnimationProps, motion, Variants } from 'framer-motion'
interface AnimatedTextProps {
  text: string
  className: string
}
const AnimateOption_h1: Variants = {
  initial: { opacity: 1 },
  animate: { opacity: 1, transition: { delay: 0.5, staggerChildren: 0.08 } },
}
const AnimateOption_span: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 1 } },

}
const AnimatedText = ({ className, text }: AnimatedTextProps) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className}`}
        variants={AnimateOption_h1}
        initial='initial'
        animate='animate'
        whileInView={{ opacity: [0, 1] }}
      >
        {text.split(' ').map((word, index) => {
          return (
            <motion.span
              className='inline-block'
              key={index + '#' + word}
              variants={AnimateOption_span}
            >
              {word}&nbsp;
            </motion.span>
          )
        })}
      </motion.h1>
    </div>
  )
}

export default AnimatedText
