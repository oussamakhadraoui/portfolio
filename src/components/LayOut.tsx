import React, { ReactNode } from 'react'

interface LayOutProps {
  className?: string
  children: ReactNode
}

const LayOut = ({ className, children }: LayOutProps) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 p-32 max-xl:p-24 max-lg:p-16 max-md:p-12 max-sm:p-8 ${className}`}
    >
      {children}
    </div>
  )
}

export default LayOut
