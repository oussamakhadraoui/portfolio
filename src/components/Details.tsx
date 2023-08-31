import React from 'react'

interface DetailsProps {
  position: string
  company: string
  companyLink: string
  time: string
  address: string
  work: string
}

const Details = ({address,company,companyLink,position,time,work}: DetailsProps) => {
  return (
    <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
      <div >
        <h3 className='capitalize font-bold text-2xl'>
          {position}&nbsp;<a target='_blank' className='text-primary capitalize' href={companyLink}>@{company}</a>
        </h3>
        <span className='capitalize font-medium text-black/75'>
          {time} | {address}
        </span>
        <p className='font-medium w-full'>{work}</p>
      </div>
    </li>
  )
}

export default Details
