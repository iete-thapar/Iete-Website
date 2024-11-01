import React, { useRef, useEffect, useState } from "react";
import event from "../assets/image.png";
import styles from "../css/event.module.css";

const events = [
  {
    number: "01",
    tagline: "Get Started",
    title: "ELEMENTOS",
    description:
      "An electronics-based society is one where technology profoundly influences daily life, with homes and cities utilizing significant technology roles, streamlining tasks in various sectors from manufacturing to household chores, thus increasing productivity.",
  },
  {
    number: "02",
    tagline: "Hiking Essentials",
    title: "ORIENTATION",
    description:
      "An electronics-based society is one where technology profoundly influences daily life, with homes and cities utilizing significant technology roles, streamlining tasks in various sectors from manufacturing to household chores, thus increasing productivity.",
  },
  {
    number: "03",
    tagline: "Where you go is the key",
    title: "FLAGATHON",
    description:
      "An electronics-based society is one where technology profoundly influences daily life, with homes and cities utilizing significant technology roles, streamlining tasks in various sectors from manufacturing to household chores, thus increasing productivity.",
  },
];

function Event() {
  const headerRef = useRef(null);
  const [headerOpacity, setHeaderOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight;
        const scrollTop = window.scrollY;
        const opacity = Math.max(1 - scrollTop / headerHeight, 0);
        setHeaderOpacity(opacity);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black">
      {/* Header Section  */}
      <section
        ref={headerRef}
        className="lg:h-screen w-full flex justify-center items-center overflow-hidden h-[50vh]"
        style={{ opacity: headerOpacity }}
      >
        <div className="flex flex-col justify-center items-center relative">
          <h1 className={styles.eventTitle}>EVENTS</h1>
          <h3 className={styles.customH3}>EVENTS</h3>
        </div>
        <img
          src={event}
          alt="event"
          className="w-full h-full object-cover absolute"
        />
      </section>

      {/* Events Section */}
      <section
        className="w-full flex flex-col items-center bg-black mt-[150px] lg:gap-y-[250px] pb-[50px]
       gap-y-[100px]"
      >
        {events.map((event, index) => (
          <Elementos
            key={event.number}
            number={event.number}
            tagline={event.tagline}
            title={event.title}
            description={event.description}
          />
        ))}
      </section>
    </div>
  );
}

export default Event;

const NumberedSection = ({ number }) => {
  return (
    <div className="flex absolute max-md:flex-col">
      <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
        <div className="mr-0 leading-none text-white text-[150px] md:text-[240px] opacity-15 absolute top-[-40px]">
          {number}
        </div>
      </div>
    </div>
  );
};

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
      <p className="mt-7 text-[17px] text-white max-w-[100%] md:text-3xl max-md:max-w-full">
        {content}
      </p>
      <button className="mt-7 max-w-full italic w-[127px] max-md:pr-5 text-left">
        read more
      </button>
    </div>
  );
};

const Elementos = ({ number, tagline, title, description }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`w-[80%] lg:w-[60%] max-md:max-w-full transition-opacity duration-700 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      } `}
    >
      <div
        className={`flex gap-2 max-md:flex-col ${
          number % 2 === 0 ? "flex-row-reverse" : ""
        }`}
      >
        <section className="flex flex-col-reverse w-[59%] max-md:ml-0 max-md:w-full">
          <div className="mt-10 max-md:mt-10 max-md:max-w-full ">
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
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/100caee604b14d506ac2b55d245cf7d9550109bfcf02eeca4e3ce207e89308cf?placeholderIfAbsent=true&apiKey=1e94dac72461470eb67aa910a2fb5ecf"
            alt="Elementos visual representation"
            className="object-contain grow w-full aspect-[0.7] max-md:mt-10 max-md:max-w-full"
          />
        </aside>
      </div>
    </article>
  );
};
