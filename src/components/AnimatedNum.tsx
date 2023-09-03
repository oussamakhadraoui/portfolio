'use client'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import React, { useRef, useEffect } from 'react'

interface AnimatedNumProps {
  value: number
}

const AnimatedNum = ({ value }: AnimatedNumProps) => {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const SpringValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true })
  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, value, isInView])
  useEffect(() => {
    SpringValue.on('change', (latest: number) => {
      if (ref.current && +latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [SpringValue, value])
  return <span ref={ref} className='dark:text-amber-700 text-5xl sm:text-6xl'></span>
}

export default AnimatedNum
