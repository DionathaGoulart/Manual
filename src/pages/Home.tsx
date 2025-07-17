import React from 'react'
import { Test } from '@/sections/Test'

const Home: React.FC = () => {
  const sections = [
    {
      id: 'test',
      content: <Test />
    }
  ]

  return (
    <>
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="px-6 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto w-full">{section.content}</div>
        </section>
      ))}
    </>
  )
}

export default Home
