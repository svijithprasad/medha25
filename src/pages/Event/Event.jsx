import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Rules } from "./subSection/Rules";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import { eventRules } from "@/data/eventRules";

import { useMediaQuery } from 'react-responsive';

const events = [
  { name: "Astrinix", img: "/events/img2/e1.png" },
  { name: "Tech Blitz", img: "/events/img2/e2.png" },
  { name: "Reel Verse", img: "/events/img2/e4.png" },
  { name: "Galactic Rise", img: "/events/img2/e3.png" },
  { name: "Stellar X", img: "/events/img2/e5.png" },
  { name: "Tech Nova", img: "/events/img2/e6.png" },
  { name: "Chrono Cipher", img: "/events/img2/e7.png" },
  { name: "Time Nova", img: "/events/img2/e8.png" }
]

export const Event = () => {
  const { section } = useParams();
  const navigate = useNavigate();

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    if (!(section >= 0) || !(section <= 7)) {
      navigate("/event/1");
    }
  }, [section, navigate]);

  const currentEvent = eventRules[section];
  const currentEventImage = events[section];

  const backgroundLayers = [
    { src: "/event/bg/bg2.webp", alt: "Dark Cloud", zIndex: 1 },
    { src: "/event/bg/bg3.webp", alt: "White cloud", zIndex: 2 },
    { src: "/event/bg/bg4.webp", alt: "White cloud", zIndex: 3 },
  ];

  const images = [
    { src: "/event/bg/img1.webp", alt: "Top box", zIndex: 10 },
    { src: "/event/bg/img2.webp", alt: "bottom planet", zIndex: 10 },
    { src: "/event/bg/img3.webp", alt: "bottom astronaut", zIndex: 10 },
  ]

  const eventImageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!eventImageRef.current || isMobile || isScrolled) return;

    const { x, y } = mousePosition;
    const { innerWidth, innerHeight } = window;

    const rotateY = ((x / innerWidth) - 0.5) * 20;
    const rotateX = ((y / innerHeight) - 0.5) * -20;

    const moveX = ((x / innerWidth) - 0.5) * 15;
    const moveY = ((y / innerHeight) - 0.5) * 15;

    eventImageRef.current.style.transform = `
      perspective(1000px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg)
      translateX(${moveX}px)
      translateY(${moveY}px)
      scale3d(1.05, 1.05, 1.05)
    `;
  }, [mousePosition, isMobile, isScrolled]);

  const handleMouseMove = (e) => {
    if (!containerRef.current || isScrolled) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  const eventNameRef = useRef(null);
  const astronautRef = useRef(null);
  const bottomPlanetRef = useRef(null);
  const topPlanetRef = useRef(null);
  const eventTypeRef = useRef(null);

  useGSAP(() => {
    const el1 = eventNameRef.current;
    const el2 = eventImageRef.current;
    const container = containerRef.current;

    const scene1 = gsap.to([el1, el2],
      {
        translateY: -500,
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "20%",
          scrub: 1,
          onEnter: () => setIsScrolled(true),
          onLeaveBack: () => setIsScrolled(false),
        }
      });

    const el3 = astronautRef.current;

    const scene2 = gsap.to(el3,
      {
        scale: 0.4,
        translateY: 120,
        rotationZ: 90,
        scrollTrigger: {
          trigger: container,
          start: "1%",
          end: "100%",
          scrub: 1,
        }
      });

    const el4 = bottomPlanetRef.current;

    const scene3 = gsap.to([el4],
      {
        translateY: 100,
        scrollTrigger: {
          trigger: container,
          start: "1%",
          end: "80%",
          scrub: 1,
        }
      });

    const el5 = topPlanetRef.current;

    const scene4 = gsap.to([el5], {
      top: -150,
      scrollTrigger: {
        trigger: container,
        start: "1%",
        end: "80%",
        scrub: 1,
      }
    })

    const el6 = eventTypeRef.current;

    const scene5 = gsap.to([el6], {
      translateY: 0,
      scrollTrigger: {
        trigger: container,
        start: "8%",
        end: "13%",
        scrub: 1,
      }
    })

    return () => {
      scene1.kill();
      scene2.kill();
      scene3.kill();
      scene4.kill();
      scene5.kill();
    }
  });

  const handleRegister = () => {
    alert("Registration opens on November 20!")
  }

  return (
    <section
      ref={containerRef}
      id="event"
      className="relative w-screen h-[250vh] bg-black/90 bg-linear-to-b from-[#162145] via-[#073448] to-[#122D53] overflow-hidden cursor-pointer"
      onMouseMove={handleMouseMove}
    >
      {backgroundLayers.map((layer) => (
        <img
          key={layer.src}
          src={layer.src}
          alt={layer.alt}
          className={`fixed inset-0 w-full h-full object-cover`}
          style={{ zIndex: layer.zIndex }}
        />
      ))}

      <img
        ref={topPlanetRef}
        className="fixed top-0 right-0 md:scale-55 lg:-translate-y-180 md:-translate-y-150 lg:translate-x-100 md:translate-x-80"
        src={images[0].src}
        alt={images[0].alt}
        style={{ zIndex: images[0].zIndex }}
      />

      <div className="absolute z-10 w-full h-full flex justify-center md:translate-y-[28%] translate-y-[25%]">
        <div className="h-12 overflow-hidden">
          <h1 ref={eventTypeRef} className="md:text-4xl text-4xl uppercase text-white translate-y-12">
            {currentEvent?.eventType || "Event Type"}
          </h1>
        </div>
      </div>

      <img
        ref={bottomPlanetRef}
        className="fixed bottom-0 left-0 md:scale-100 md:translate-y-100 lg:translate-y-120 -translate-x-20"
        src={images[1].src}
        alt={images[1].alt}
        style={{ zIndex: images[1].zIndex }}
      />

      <img
        ref={astronautRef}
        className="fixed bottom-0 left-0 md:scale-25 scale-40  md:translate-y-120 lg:translate-y-115 translate-y-30 md:translate-x-78 lg:translate-x-118"
        src={images[2].src}
        alt={images[2].alt}
        style={{ zIndex: images[1].zIndex }}
      />

      <div className="fixed inset-0 z-10 w-full h-full flex items-center justify-center">
        <img
          ref={eventImageRef}
          className="md:h-[45%] h-[40%] opacity-90 md:-translate-y-10 -translate-y-35"
          src={currentEventImage?.img}
          alt={currentEventImage?.name}
          style={{
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            filter: 'brightness(1.1) contrast(1.05)',
            transition: isScrolled ? 'transform 0.3s ease' : 'none'
          }}
        />
      </div>

      <div className="fixed z-10 w-full h-full flex items-center justify-center">
        <h1 ref={eventNameRef} className="md:text-[130px] text-4xl transition [-webkit-text-stroke:2px_black] ease-in-out uppercase text-[#83EFFF]">
        </h1>
      </div>

      {currentEvent && (
        <Rules
          eventName={currentEvent.eventName}
          eventType={currentEvent.eventType}
          rules={currentEvent.rules}
          coordinators={currentEvent.coordinators}
          section={section}
        />
      )}

      <div className="absolute top-[93%] left-1/2 transform -translate-x-1/2 z-50">
        <button
          onClick={handleRegister}
          className="bg-linear-to-r cursor-pointer from-[#83EFFF] to-[#0EA5E9] hover:from-[#67D8FF] hover:to-[#0284C7] text-gray-900/90 font-bold py-3 md:px-8 px-5 rounded-lg md:text-lg uppercase tracking-wider shadow-lg transform hover:scale-105 transition-all duration-300 border-2 border-[#83EFFF]/90 font-mono"
        >
          Register Now
        </button>
      </div>

      <button
        onClick={() => { navigate("/events/") }}
        className="fixed bg-gray-200 px-2 py-1 rounded-xl uppercase cursor-pointer text-xl bottom-3 right-6 z-99 tracking-wider border-2 border-gray-800 text-shadow-gray-600 font-bold hover:scale-110"
      >
        Back
      </button>
    </section>
  );
}