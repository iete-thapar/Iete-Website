import React from 'react'
import styles from '../css/landing.module.css'
import { CircleArrowRight } from 'lucide-react'
import Heading from '../components/Heading'
import Marquee from 'react-fast-marquee'

function Landing() {
  return (
    <div className="overflow-hidden flex flex-col">
      <section className="w-screen min-h-screen bg-[url('/assets/landingBG1.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-start items-center text-center px-4">
        <h1 className={styles.he}>IETE</h1>
        <h4 className="text-white text-xl md:text-2xl lg:text-3xl">
          Students' Forum
        </h4>

        <p className="text-white mt-8 md:mt-[50px] text-sm md:text-base lg:text-lg max-w-md md:max-w-xl lg:max-w-2xl">
          For Students, By Students- A Launchpad for the world of electronics
        </p>
        <div className="flex justify-center items-center mt-6 md:mt-10">
          <img
            src="/assets/iete_logo.png"
            alt="IETE Logo"
            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
          />
        </div>
        <button className="bg-white px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 rounded-full font-mono mt-10 md:mt-16 lg:mt-20 flex gap-x-2 group text-sm md:text-base">
          <p>LEARN MORE</p>
          <CircleArrowRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300" />
        </button>

        <div className="flex justify-center items-center relative w-full"></div>
      </section>
      <section
        id="aboutus"
        className="relative flex flex-col items-center w-screen min-h-screen bg-[url('/assets/landingBG2.png')] bg-cover bg-center bg-no-repeat px-4 "
      >
        <Heading text="ABOUT US" />

        <div className="w-full md:w-[80%] lg:w-[60%] xl:w-[40%] min-h-[200px] bg-[rgba(255,255,255,0.03)] rounded-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[11.9px] border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-center mt-9 lg:mt-0 text-white p-4 md:p-6 lg:p-10">
          <div className="text-sm md:text-base lg:text-lg">
            <h2 className="mb-4">About IETE Society</h2>
            <p className="mb-6">
              The Institution of Electronics and Telecommunication Engineers
              (IETE) Society is where curiosity meets creativity, and ideas come
              to life. We're a vibrant community empowering students to explore
              tech and design with confidence through hands-on experiences,
              innovation, and exposure to real-world applications.
            </p>

            <p className="mb-6">
              Each department is guided by dedicated mentors who provide
              training and direction to help members grow and succeed.
            </p>

            <h2 className="mb-4">Year-Round Engagement</h2>
            <p className="mb-6">
              We host a dynamic mix of workshops, bootcamps, hackathons,
              competitions, speaker sessions, and flagship events throughout the
              year — blending learning with excitement to spark innovation and
              teamwork.
            </p>

            <h2 className="mb-4">Our Vision</h2>
            <p className="mb-6">
              IETE Society is a launchpad for innovation, leadership, and
              creativity — a space where every techie, designer, and strategist
              can grow, contribute, and shine.
            </p>

            <p className="font-bold">Explore. Innovate. Inspire. With IETE.</p>
          </div>
        </div>
      </section>
      <Marquee className="text-white bg-purple-500  lg:bottom-8 lg:text-5xl text-3xl overflow-hidden mt-4 lg:mt-24">
        <p>
          Institute &nbsp;&nbsp;&nbsp; of &nbsp;&nbsp;&nbsp; Electronics
          &nbsp;&nbsp;&nbsp; and &nbsp;&nbsp;&nbsp; Telecommunication
          &nbsp;&nbsp;&nbsp; Engineering
        </p>
        &nbsp;&nbsp;
        <p>
          Institute &nbsp;&nbsp;&nbsp; of &nbsp;&nbsp;&nbsp; Electronics
          &nbsp;&nbsp;&nbsp; and &nbsp;&nbsp;&nbsp; Telecommunication
          &nbsp;&nbsp;&nbsp; Engineering
        </p>
        &nbsp;
      </Marquee>
      <section
        id="sponsorship"
        className="flex flex-col items-center relative my-10 px-4 md:px-6 lg:px-8"
      >
        <Heading text="SPONSORSHIPS" />
        <div className="flex justify-center items-center w-full">
          <img
            src="/assets/nsaid.png"
            alt="NSAID Logo"
            className="w-full max-w-[600px] object-contain mt-[50px] lg:mt-25"
          />
        </div>

        <div className="w-full md:w-[85%] lg:w-[70%] h-fit mt-10 md:mt-16 lg:mt-20 flex flex-col-reverse lg:flex-row items-center p-4 md:p-6 lg:p-8 gap-8 lg:gap-x-9 justify-center">
          <img
            src="/assets/nsaidp.png"
            alt="NSAID Logo"
            className="w-full max-w-[500px] object-contain mt-[50px] lg:mt-25"
          />
          <div className="flex flex-col items-center h-auto lg:h-[500px] mt-6 lg:mt-10">
            <h1 className={styles.special}>ABOUT</h1>
            <p className="text-white text-center w-full max-w-[400px] mt-6 lg:mt-10 text-base md:text-lg">
              We're proud to be in association with UnsaidTalks — India's
              leading platform transforming the way engineering students prepare
              for their careers. Through 1000+ real interview experiences,
              expert-led sessions, and cutting-edge AI-based training,
              UnsaidTalks is shaping a generation that's confident, skilled, and
              industry-ready. This collaboration reflects a shared vision — to
              empower students with the right guidance, mentorship, and clarity
              to navigate their professional journeys with purpose and impact.
              Together, we're building more than just events — we're building
              futures.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing
