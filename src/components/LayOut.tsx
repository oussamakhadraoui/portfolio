import React, { ReactNode } from 'react'

interface LayOutProps {
  className?: string
  children: ReactNode
}

const LayOut = ({ className, children }: LayOutProps) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-white p-32 ${className}`}
    >
      {children}
    </div>
  )
}

export default LayOut
