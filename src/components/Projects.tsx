'use client'

import React from 'react'

import { projectsData } from '@/lib/data'

import Project from './Project'
import SectionHeading from './Heading-section'
import { useSectionInView } from '@/hooks/useSectionInView'

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5)

  return (
    <section ref={ref} id='projects' className='scroll-mt-28 mb-28 mt-28'>
      <SectionHeading>My projects</SectionHeading>
      <div className='mt-20'>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
