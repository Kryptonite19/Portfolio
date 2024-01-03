'use client'
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './tabButton'

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className="list-disc pl-2">
        <li>Typescript</li>
        <li>HTML/CSS</li>
        <li>Git</li>
        <li>Vue.js</li>
        <li>Django</li>
        <li>React</li>
        <li>Flutter</li>
        <li>Adobe Photoshop/Premiere</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc pl-2">
        <li>Başkent University Computer Engineering 50% scholarship</li>
      </ul>
    ),
  },
]

const AboutSection = () => {
  const [tab, setTab] = useState('skills')
  const [, startTransition] = useTransition()

  const handleTabChange = (id: React.SetStateAction<string>) => {
    startTransition(() => {
      setTab(id)
    })
  }

  // Use optional chaining to safely access the content property
  const selectedTabContent = TAB_DATA.find((t) => t.id === tab)?.content ?? null

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="hidden md:block"
          alt="PHOTO XD"
          src="/about3.png"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            My interest in design has been a constant companion since my early
            years. Engineering, with its allure, became a path I was eager to
            explore. Childhood hobbies, including ventures into Photoshop,
            heightened my fascination with this field. As I delve into computer
            engineering, my goal is to seamlessly integrate design and
            engineering, aspiring to emerge as a seasoned developer.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => {
                handleTabChange('skills')
              }}
              active={tab === 'skills'}
            >
              {' '}
              Skills{' '}
            </TabButton>
            <TabButton
              selectTab={() => {
                handleTabChange('education')
              }}
              active={tab === 'education'}
            >
              {' '}
              Education{' '}
            </TabButton>
          </div>
          <div className="mt-8">{selectedTabContent}</div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
