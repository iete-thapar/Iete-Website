import React, { useEffect, useState } from 'react'
import { Atom } from 'lucide-react'
import styles from '../css/department.module.css'
import Heading from '../components/Heading'
// assets moved to public/assets — reference via public URLs
const e1 = '/assets/e1.jpeg'
const e2 = '/assets/e2.jpeg'
const e3 = '/assets/e3.jpeg'
const e4 = '/assets/e4.jpeg'
const e5 = '/assets/e5.jpeg'
const elementos = '/assets/elementos.png'
const landingBG1 = '/assets/landingBG1.png'

const departments = [
  {
    title: 'ELECTRONICS',
    description:
      'Wiring the future, one circuit at a time. Enter a realm where code meets current, and ideas become intelligent machines.',
    icon: null,
    className: ' opacity-150 bg-[#5b2eb6] rounded-[40px] border border-white',
  },
  {
    title: 'WEB DEVELOPMENT',

    description:
      'An electronics-based society is one where technology profoundly influences daily life, transforming communication, work, and social interactions.',
    icon: <Atom className="w-16 h-16 text-white/70" />,
    className:
      'bg-gradient-to-br from-blue-600 to-blue-900 opacity-150 bg-[#504cff] rounded-[40px] border border-white',
  },
  {
    title: 'DESIGNING',
    description:
      'An electronics-based society is one where technology profoundly influences daily life, transforming communication, work, and social interactions.',
    icon: null,
    className:
      'bg-gradient-to-br from-gray-800 to-gray-900 opacity-150 bg-[#1f1a2a] rounded-[40px] border border-white',
  },
  {
    title: 'MARKETING',
    description:
      'An electronics-based society is one where technology profoundly influences daily life, transforming communication, work, and social interactions.',
    icon: null,
    className: 'bg-gradient-to-br from-purple-700 to-purple-900',
  },
  {
    title: 'AI/ML',
    description:
      'Profoundly influences daily life, transforming communication, work, and social interactions.',
    className: 'bg-gradient-to-br from-gray-800 to-gray-900',
  },
]

const projects = [
  {
    department: 'ELECTRONICS DEPARTMENT',
    title: 'Path Finder Buggy',
    description:
      'From the fast-paced thrill of RoboSoccer to the smart navigation of Pathfinder bots, our projects blend creativity, code, and cutting-edge tech. These aren’t just robots — they’re a glimpse into the future we’re building.',
  },
  {
    department: 'WEB DEVELOPMENT DEPARTMENT',
    title: 'Elementos Website',
    description:
      'Web development is the backbone of the modern internet, enabling the creation of websites and web applications that power everything from social media to online shopping. It involves designing, building, and maintaining digital platforms using technologies like HTML, CSS, JavaScript, and various frameworks. Web development plays a crucial role in how we access information, connect with others, and interact with services in our daily lives.',
    image: '/assets/elementos.jpeg',
  },
]

const DepartmentsSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = [e1, e2, e3, e4, e5]

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    )
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage()
    }, 4500)
    return () => clearInterval(interval)
    // eslint-disable-next-line
  }, [])

  return (
    <div className="w-full min-h-screen bg-black text-white overflow-x-hidden flex flex-col items-center">
      <section
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-start items-center px-2 sm:px-4 relative"
        style={{
          backgroundImage: `url(${landingBG1})`,
        }}
      >
        <div className="relative mb-8 sm:mb-10 flex justify-center items-center w-full">
          <Heading text="DEPARTMENT" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-7xl mb-10 sm:mb-16">
          {departments.map((dept, index) => {
            let gridPosition = ''

            switch (index) {
              case 0:
                gridPosition = 'lg:row-start-1 lg:col-start-1'
                break
              case 1:
                gridPosition =
                  'lg:row-start-1 lg:col-start-2 lg:col-span-2 sm:col-span-2'
                break
              case 2:
                gridPosition = 'lg:row-start-2 lg:col-start-1'
                break
              case 3:
                gridPosition = 'lg:row-start-2 lg:col-start-2'
                break
              case 4:
                gridPosition = 'lg:row-start-2 lg:col-start-3'
                break
              default:
                break
            }

            return (
              <div
                key={dept.title}
                className={`${gridPosition} ${dept.className} p-4 sm:p-6 shadow-lg transform transition-transform hover:scale-105 relative overflow-hidden min-h-[180px] sm:min-h-[200px] flex flex-col justify-between bg-glassyBg rounded-2xl shadow-glassy backdrop-blur-custom border border-glassyBorder`}
              >
                <div className={styles.glassy}>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                    {dept.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80">
                    {dept.description}
                  </p>
                </div>
                {dept.icon && (
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
                    {dept.icon}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      <div className="relative mb-16 sm:mb-24 px-2 sm:px-4 bg-black flex justify-center items-center w-full">
        <Heading text="PROJECTS" />
      </div>

      <div className="space-y-20 sm:space-y-32 text-center px-2 sm:px-4 mb-10 sm:mb-20 bg-black w-full">
        {projects.map((project, index) => (
          <div key={index} className="space-y-6 sm:space-y-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 px-2 sm:px-4 md:pl-14 py-8 sm:py-12">
              {project.department}
            </h3>

            <div
              className={`flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 lg:gap-20 xl:gap-32 px-2 sm:px-4 lg:pl-16 xl:pl-24 ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:w-[500px] lg:h-[400px] aspect-video bg-black flex-shrink-0">
                <img
                  src={index % 2 === 0 ? images[currentImageIndex] : elementos}
                  alt={
                    index % 2 === 0
                      ? `Image ${currentImageIndex + 1}`
                      : 'Elementos'
                  }
                  className="w-full h-full object-cover rounded-xl"
                />
                {index % 2 === 0 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
                      aria-label="Previous Image"
                    >
                      ←
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
                      aria-label="Next Image"
                    >
                      →
                    </button>
                  </>
                )}
              </div>

              <div className="w-full max-w-xl text-left sm:text-justify">
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                  {project.title}
                </h4>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DepartmentsSection
