import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Rules } from "./subSection/Rules";
import { Contact } from "./Contact";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const events = [
  { name: "Astrinix", img: "/events/img/e1.png" },
  { name: "Tech Blitz", img: "/events/img/e2.png" },
  { name: "Reel Verse", img: "/events/img/e4.png" },
  { name: "Galactic Rise", img: "/events/img/e3.png" },
  { name: "Stellar", img: "/events/img/e5.png" },
  { name: "Tech Nova", img: "/events/img/e6.png" },
  { name: "Chrono Cipher", img: "/events/img/e7.png" },
  { name: "Time Nova", img: "/events/img/e8.png" }
]

export const Event = () => {
  const { section } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!(section >= 0) || !(section <= 7)) {
      navigate("/event/1");
    }
  }, []);

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

  // GSAP START
  const containerRef = useRef(null);
  const eventNameRef = useRef(null);
  const eventImageRef = useRef(null);
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
        // ease:"power3.inOut",
        scrollTrigger: {
          trigger: container,
          // markers: true,
          start: "top top",
          end: "20%",
          scrub: 1,
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
          // markers: true,
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
          // markers: true,
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
        // markers: true,
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
        // markers: true,
        start: "8%",
        end: "13%",
        scrub: 1,
      }
    })

    // Cleanup the scroll trigger animation on component unmount
    return () => {
      scene1.kill();
      scene2.kill();
      scene3.kill();
      scene4.kill();
      scene5.kill();
    }
  });
  // GSAP END

  return (
    <section
      ref={containerRef}
      id="event"
      className="relative w-screen h-[500vh] bg-black/90 bg-linear-to-b from-[#162145] via-[#073448] to-[#122D53] overflow-hidden cursor-pointer"
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

      {/* Top Right Image */}
      <img
        ref={topPlanetRef}
        className="fixed top-0 right-0 md:scale-55 md:-translate-y-150 md:translate-x-80"
        src={images[0].src}
        alt={images[0].alt}
        style={{ zIndex: images[0].zIndex }}
      />

      {/* Event type */}
      <div className="absolute z-10 w-full h-full flex justify-center translate-y-[18%]">
        <div className="h-12 overflow-hidden">
          <h1 ref={eventTypeRef} className="md:text-4xl text-4xl uppercase text-white translate-y-12">
            IT Manager
          </h1>
        </div>
      </div>

      {/*Bottom Image */}
      <img
        ref={bottomPlanetRef}
        className="fixed bottom-0 left-0 md:scale-100 md:translate-y-100 -translate-x-20"
        src={images[1].src}
        alt={images[1].alt}
        style={{ zIndex: images[1].zIndex }}
      />

      {/* Floating Astronaut */}
      <img
        ref={astronautRef}
        className="fixed bottom-0 left-0 md:scale-25 scale-40 md:translate-y-120 translate-y-30 md:translate-x-78"
        src={images[2].src}
        alt={images[2].alt}
        style={{ zIndex: images[1].zIndex }}
      />

      {/* Center Floating Image*/}
      <div ref={eventImageRef} className="fixed inset-0 z-20 w-full h-full flex items-center justify-center ">
        <img
          className="animated-event-img transition md:scale-25 scale-35 -rotate-z-8 ease-in-out transform md:-translate-y-10 -translate-y-35"
          src={events[section]?.img}
          alt={events[section]?.name}
        />
      </div>

      {/* Center Event Name */}
      <div className="fixed z-10 w-full h-full flex items-center justify-center">
        <h1 ref={eventNameRef} className="md:text-[130px] text-4xl transition ease-in-out uppercase text-[#83EFFF]">
          {events[section]?.name || ""}
        </h1>
      </div>



      {/* Rules and Coordinators Section */}
      <Rules eventName={events[section]?.name || ""} section={0} />

      <button
        onClick={() => { navigate("/events/") }}
        className="fixed bg-gray-200 px-2 py-1 rounded-xl uppercase cursor-pointer text-xl bottom-3 right-6 z-99 tracking-wider border-2 border-gray-800 text-shadow-gray-600 font-bold hover:scale-110"
      >
        Back
      </button>

      <div>
        <Contact />
      </div>

    </section>
  );
}