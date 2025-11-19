import { useRef, useState, useEffect } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from "react-router-dom";

import { About } from "../about/About";

import desappearance from "../../assets/desappearance.mp3";
import open from "../../assets/open.mp3";

gsap.registerPlugin(useGSAP);

const mainClipPath =
  '[clip-path:polygon(0_30px,20px_0,100%_0,100%_calc(100%-15px),calc(100%-15px)_100%,0_100%)]';

const tabClipPath = '[clip-path:polygon(0_0,calc(100%-15px)_0,100%_100%,0_100%)]';

const borderStyles = 'shadow-[0_0_10px_2px_rgba(23,170,255,0.7),_0_0_1px_1px_rgba(0,100,255,0.8)_inset]';

export const Events = () => {
  const navigate = useNavigate();

  // Use useRef for audio objects to persist across re-renders
  const audioRef = useRef(null);
  const openAudioRef = useRef(null);

  const backgroundLayers = [
    { src: "/2.png.webp", alt: "Stars", zIndex: 1 },
    { src: "/1.png.webp", alt: "Dark Cloud", zIndex: 2 },
    { src: "/0.png.webp", alt: "White cloud", zIndex: 3 },
  ];

  const images = [
    { src: "planet-blue.webp", alt: "Planet Blue", zIndex: 1 },
    { src: "planet-green.webp", alt: "Planet Green", zIndex: 1 },
    { src: "planet-yellow.webp", alt: "Planet Yellow", zIndex: 1 },
    { src: "indica-product.webp", alt: "Event 1", zIndex: 1 },
  ];

  const events = [
    { name: "Astrinix", img: "/events/img2/e1.png" },
    { name: "Tech Blitz", img: "/events/img2/e2.png" },
    { name: "Reel Verse", img: "/events/img2/e4.png" },
    { name: "Galactic Rise", img: "/events/img2/e3.png" },
    { name: "Stellar X", img: "/events/img2/e5.png" },
    { name: "Tech Nova", img: "/events/img2/e6.png" },
    { name: "Chrono Cipher", img: "/events/img2/e7.png" },
    { name: "Time Nova", img: "/events/img2/e8.png" }
  ];

  const eventRef = useRef(null);
  const textRef = useRef(null);
  const sectionRef = useRef(null);
  const imageRef = useRef(null); // New ref for the image

  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [modal, setModal] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  // Initialize audio objects once
  useEffect(() => {
    audioRef.current = new Audio(desappearance);
    openAudioRef.current = new Audio(open);

    // Optional: Preload the audio
    audioRef.current.load();
    openAudioRef.current.load();

    return () => {
      // Cleanup on unmount
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (openAudioRef.current) {
        openAudioRef.current.pause();
        openAudioRef.current = null;
      }
    };
  }, []);

  // 3D effect based on mouse position
  useEffect(() => {
    if (!imageRef.current || isMobile) return;

    const { x, y } = mousePosition;
    const { innerWidth, innerHeight } = window;

    const rotateY = ((x / innerWidth) - 0.5) * 30;
    const rotateX = ((y / innerHeight) - 0.5) * -30;

    const moveX = ((x / innerWidth) - 0.5) * 10;
    const moveY = ((y / innerHeight) - 0.5) * 10;

    // Apply the 3D transformation
    imageRef.current.style.transform = `
      perspective(1000px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg)
      translateX(${moveX}px)
      translateY(${moveY}px)
      scale3d(1.05, 1.05, 1.05)
    `;

    // const shadowX = Math.round(rotateY * 2);
    // const shadowY = Math.round(rotateX * 2);
    // const shadowBlur = 20;
    // const shadowSpread = 2;

    // imageRef.current.style.boxShadow = `
    //   ${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowSpread}px rgba(23, 170, 255, 0.4),
    //   inset 0 0 20px rgba(0, 100, 255, 0.2)
    // `;

  }, [mousePosition, isMobile]);

  const getVisibleEvents = () => {
    if (isMobile) {
      return [events[currentIndex], events[(currentIndex + 1) % events.length]];
    } else {
      const prevIndex = (currentIndex - 1 + events.length) % events.length;
      const nextIndex = (currentIndex + 1) % events.length;
      return [events[prevIndex], events[currentIndex], events[nextIndex]];
    }
  };

  const runScrollAnimation = (callback, zVal) => {
    if (!eventRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        callback();
      }
    });

    tl.to(eventRef.current, {
      y: -20,
      x: -20,
      duration: 0.4,
      rotateZ: zVal,
      scale: 0.5,
      opacity: 0,
      ease: "power1.inOut",
    });

    tl.set(eventRef.current, {
      opacity: 0,
      scale: 0.5,
      rotateZ: -zVal,
      y: 20,
      x: 20,
    });

    tl.to(eventRef.current, {
      y: 0,
      x: 0,
      duration: 0.4,
      rotateZ: 0,
      scale: 1,
      opacity: 1,
      ease: "power1.inOut",
    });
  };

  const handleScrollRight = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset to start
      audioRef.current.play().catch(error => {
        console.log("Audio play failed:", error);
      });
    }
    runScrollAnimation(() => setCurrentIndex((prev) => (prev + 1) % events.length), 50);
  };

  const handleScrollLeft = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset to start
      audioRef.current.play().catch(error => {
        console.log("Audio play failed:", error);
      });
    }
    runScrollAnimation(() => setCurrentIndex((prev) => (prev - 1 + events.length) % events.length), -50);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      handleScrollRight();
    } else if (e.deltaY < 0) {
      handleScrollLeft();
    }
  };

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      handleScrollRight();
    } else if (e.key === 'ArrowLeft') {
      handleScrollLeft();
    }
  };

  const handleSectionClick = (e) => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const sectionWidth = rect.width;

    if (clickX < sectionWidth * 0.4) {
      handleScrollLeft();
    }
    else if (clickX > sectionWidth * 0.6) {
      handleScrollRight();
    }
  };

  const visibleEvents = getVisibleEvents();

  useGSAP(() => {
    gsap.to(textRef.current, {
      x: "-100vw",
      duration: 20,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: (x) => {
          const xNum = parseFloat(x);
          return `${(xNum % (100 * events.length / 3)) - 100}vw`;
        }
      }
    });
  }, { scope: eventRef });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    section.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    section.addEventListener('mousemove', handleMouseMove);
    section.addEventListener('click', handleSectionClick);

    return () => {
      if (section) {
        section.removeEventListener('wheel', handleWheel);
        section.removeEventListener('mousemove', handleMouseMove);
        section.removeEventListener('click', handleSectionClick);
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex]);

  return (
    <section
      ref={sectionRef}
      id="events"
      className="relative w-screen h-screen bg-blue-900 [background:linear-gradient(180deg,#162145_0%,#122D53_35%,#0B4772_55%,#016797_100%)] overflow-hidden cursor-pointer"
    >
      <div className="absolute inset-0 z-0" />

      {backgroundLayers.map((layer) => (
        <img
          key={layer.src}
          src={layer.src}
          alt={layer.alt}
          className={`absolute inset-0 w-full h-full object-cover`}
          style={{ zIndex: layer.zIndex }}
        />
      ))}

      <div className="absolute md:top-50 top-55 z-10 w-full overflow-hidden">
        <h1
          ref={textRef}
          className="uppercase text-[220px] font-bold whitespace-nowrap [-webkit-text-stroke:3px_lightblue] [-webkit-text-fill-color:transparent] text-transparent filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
        >
          {Array.from({ length: 6 }, (_, index) => events[currentIndex].name + "  ")}
        </h1>
      </div>

      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <img
          className="md:scale-100 z-99  scale-200 absolute -bottom-50 lg:-bottom-280 md:-bottom-220 transition ease-in-out"
          src="/planet-blue.webp"
          alt=""
          style={{
            animation: 'spin-reverse 180s linear infinite'
          }}
        />
      </div>

      <div
        onClick={() => { navigate(`/event/${currentIndex}`) }}
        ref={eventRef}
        className="relative z-30 w-full h-full flex items-center justify-center"
      >
        <img
          ref={imageRef}
          className="absolute lg:bottom-230 md:bottom-205 bottom-220 md:scale-90 scale-70 md:h-[60%] transition-all duration-150 ease-out"
          style={{
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            filter: 'brightness(1.1) contrast(1.05)'
          }}
          src={events[currentIndex].img}
          alt=""
        />
      </div>

      <div className="md:bottom-5 bottom-18 fixed left-[50%] transform w-auto max-w-[560px] nav-holder">
        <div className="clipped-shape relative w-[90%] h-20">
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="w-full font-rust overflow-hidden h-full flex justify-around items-center text-white bg-gray-600/60 font-bold nav-inner-fill">
            <button
              onClick={handleScrollLeft}
              className="p-2 rounded-full text-white transition hover:bg-white/30"
            >
              <ChevronLeft size={24} />
            </button>

            <div className={`w-[90%]  font-manrope md:text-lg text-[14px] overflow-hidden h-full flex justify-around items-center text-white font-bold nav-inner-fill ${isMobile ? 'mx-1' : 'mx-2'}`}>
              {visibleEvents.map((event, index) => (
                <button
                  key={`${event.name}-${index}`}
                  className={`px-4 py-2 transition-all duration-500 ease-in-out capitalize cursor-pointer hover:scale-105 ${(isMobile && index === 0) || (!isMobile && index === 1) ? 'underline underline-offset-4' : ''}`}
                >
                  {event.name}
                </button>
              ))}
            </div>

            <button
              onClick={handleScrollRight}
              className="p-2 rounded-full text-white transition hover:bg-white/30"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      <button
        className="absolute bg-gray-200 px-2 py-1 rounded-xl uppercase cursor-pointer text-xl bottom-3 right-6 z-9999 tracking-wider border-2 border-gray-800 text-shadow-gray-600 font-bold hover:scale-110"
        onClick={() => {
          if (openAudioRef.current) {
            openAudioRef.current.currentTime = 0;
            openAudioRef.current.play().catch(error => {
              console.log("Open audio play failed:", error);
            });
          }
          setModal(!modal);
        }}
      >
        {modal ? "Close" : "About"}
      </button>

      {/* Modal */}
      {modal && <About />}

    </section>
  );
};