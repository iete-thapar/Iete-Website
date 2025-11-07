import React, { useRef, useEffect, useState } from 'react'
// assets moved to public/assets — use public URLs instead of importing
const event = '/assets/eventbg.jpg'
const flagthon = '/assets/event/flag.jpg'
const elementos = '/assets/event/elemEvent.png'
const orientation = '/assets/event/orientEvent.jpg'

import styles from '../css/event.module.css'

import Heading from '../components/Header'

const events = [
  {
    number: '01',
    tagline: 'Get Started',
    title: 'ELEMENTOS',
    description:
      'Elementos is the annual technical fest organized by the IETE Students Forum. Designed to inspire innovation and hands-on learning, the event features a unique blend of technical and non-technical activities. Highlights of the recently organized fest included  Dirt Rush, an adrenaline-filled buggy racing competition where participants from diverse fields and renowned institutes came together, and Robothon, which focused on creative ideation, rapid problem-solving and Circuitry, a multi-round robotics challenge where participants first bid for components in an auction round and then used them to build functional robots.Elementos continues to provide an exciting platform for enthusiasts to apply their technical knowledge, think innovatively, and collaborate in a dynamic and competitive environment, with a twist of fun and excitement.',
    image: elementos,
  },
  {
    number: '02',
    tagline: 'Hiking Essentials',
    title: 'ORIENTATION',
    description:
      'Orientation serves as the welcoming gateway for new members into the IETE Students’ Forum, held soon after society fair. It is designed to introduce member to the objectives, opportunities, and activities of the forum, while also fostering a sense of community and belonging.The session provides insights into upcoming events, departments, workshops, and competitions, and highlights how members can get involved, contribute, and grow technically and personally. Through interactive talks, demonstrations, and team-building activities, Orientation sets the tone for a collaborative and enriching journey ahead.',
    image: orientation,
  },
  {
    number: '03',
    tagline: 'Where you go is the key',
    title: 'FLAGATHON',
    description:
      'Flagathon was one of the standout events of the fest, organized under the banner of the IETE Students’ Forum. Designed to test participants’ logical thinking, debugging skills, and attention to detail, this fast-paced competition challenged contestants to identify and fix bugs in given code snippets within a limited time. The event was held among the society members and non-members which reflected the Forum’s aim to cultivate real-world problem-solving skills and encouraged participants to think critically under pressure, making it both intellectually stimulating and technically enriching.',
    image: flagthon,
  },
]

function Event() {
  const headerRef = useRef(null)
  const [headerOpacity, setHeaderOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight
        const scrollTop = window.scrollY
        const opacity = Math.max(1 - scrollTop / headerHeight, 0)
        setHeaderOpacity(opacity)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-black">
      {/* Header Section  */}
      <section
        ref={headerRef}
        className="lg:h-screen w-full flex justify-center items-center overflow-hidden h-[50vh] relative"
        style={{ opacity: headerOpacity }}
      >
        <img
          src={event}
          alt="event"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
        <div className="flex flex-col justify-center items-center absolute inset-0 z-10">
          <Heading text="EVENT" />
        </div>
      </section>

      {/* Events Section */}
      <section className="w-full flex flex-col items-center lg:mt-5 mt-[180px] bg-black mb-8 gap-y-[130px]">
        {events.map((event, index) => (
          <Elementos
            key={event.number}
            number={event.number}
            tagline={event.tagline}
            title={event.title}
            description={event.description}
            imgsrc={event.image}
          />
        ))}
      </section>
    </div>
  )
}

export default Event

const NumberedSection = ({ number }) => {
  return (
    <div className="flex absolute max-md:flex-col">
      <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
        <div className="mr-0 leading-none text-white text-[150px] md:text-[240px] opacity-15 absolute top-[-40px]">
          {number}
        </div>
      </div>
    </div>
  )
}

const ContentSection = ({ tagline, title, content }) => {
  return (
    <div className="flex overflow-hidden flex-col mt-20 w-full text-lg text-amber-200 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-6 max-w-full font-extrabold uppercase tracking-[6px] w-[268px]">
        <div className="flex shrink-0 my-auto h-0.5 bg-amber-200 w-[72px]" />
        <div className="grow shrink w-[158px]">{tagline}</div>
      </div>
      <h2 className="mt-7 text-[36px] text-white lg:text-[80px] md:text-[50px] font-alatsi">
        {title}
      </h2>
      <p className="mt-7 text-[14px] text-white max-w-[100%] md:text-xl max-md:max-w-full">
        {content}
      </p>
    </div>
  )
}

const Elementos = ({ number, tagline, title, description, imgsrc }) => {
  const ref = useRef()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(ref.current)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <article
      ref={ref}
      className={`w-[80%] lg:w-[60%] max-md:max-w-full transition-opacity duration-700 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div
        className={`flex gap-5 max-md:flex-col ${
          number % 2 === 0 ? 'flex-row-reverse' : ''
        }`}
      >
        <section className="flex flex-col-reverse w-[59%] max-md:ml-0 max-md:w-full">
          <div className="mt-10 max-md:mt-10 max-md:max-w-full relative">
            <NumberedSection number={number} />
            <ContentSection
              tagline={tagline}
              title={title}
              content={description}
            />
          </div>
        </section>
        <aside className="flex flex-col ml-5 mr-10 w-[41%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={imgsrc}
            className="object-contain grow w-full aspect-[0.7] max-md:mt-10 max-md:max-w-full"
          />
        </aside>
      </div>
    </article>
  )
}
