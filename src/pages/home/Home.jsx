import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ScrollDown from "./ScrollDown";

// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Debounce utility function
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const Home = () => {
  const navigate = useNavigate();
  const starsContainerRef = useRef(null);
  const splashContainerRef = useRef(null);
  const overlayRef = useRef(null);
  const astronautRef = useRef(null);
  const feat1Ref = useRef(null);
  const feat2Ref = useRef(null);
  const feat3Ref = useRef(null);
  const feat4Ref = useRef(null);
  const feat5Ref = useRef(null);

  // New refs for planet elements
  const planetRef = useRef(null);
  const planetSurfaceRef = useRef(null);
  const rocksRef = useRef(null);

  const [devMode, setDevMode] = useState(false);

  // Fixed media query - use the hook directly in component
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  // Stable mouse move handler with useCallback
  const handleMouseMove = useCallback((e) => {
    if (isMobile) return;

    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    if (planetRef.current) {
      planetRef.current.style.transform = `translateX(calc(-50% + ${mouseX * 20 - 10}px))`;
    }

    if (planetSurfaceRef.current) {
      planetSurfaceRef.current.style.transform = `translateX(calc(-50% + ${mouseX * 30 - 15}px))`;
    }

    if (rocksRef.current) {
      rocksRef.current.style.transform = `translate(${mouseX * 10 - 5}px, ${mouseY * 10 - 5}px)`;
    }
  }, [isMobile]);

  // GSAP animations with proper dependencies
  useGSAP(() => {
    const el1 = astronautRef.current;

    const scene1 = gsap.to(el1, {
      top: !isMobile ? "2600px" : "2400px",
      scale: 10,
      duration: 500,
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "30%",
        scrub: 2,
        markers: devMode,
      }
    });

    const el2 = overlayRef.current;

    const scene2 = gsap.to(el2, {
      opacity: 1,
      duration: 500,
      scrollTrigger: {
        trigger: document.body,
        start: "5%",
        end: "25%",
        scrub: 2,
        markers: devMode,
      }
    });

    // Feature 1 - Responsive animation
    const el3 = feat1Ref.current;
    const scene3 = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "20%",
        end: "41%",
        scrub: 2,
        markers: devMode,
      }
    });

    scene3.to(el3, {
      scale: isMobile ? 2.5 : 1.3,
      opacity: 1,
      // duration: 500,
    });

    scene3.to(el3, {
      scale: .5,
      opacity: 0,
      // duration: 500
    });

    // Feature 2 - Responsive animation
    const el4 = feat2Ref.current;
    const scene4 = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "42%",
        end: "57%",
        scrub: 2,
        markers: devMode,
      }
    });

    scene4.to(el4, {
      scale: isMobile ? 2.5 : 1,
      opacity: 1,
      // duration: 500,
    });

    scene4.to(el4, {
      scale: .5,
      opacity: 0,
      // duration: 500
    });

    // Feature 3 - Responsive text animation
    const el5 = feat3Ref.current;
    const scene5 = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "58%",
        end: "68%",
        scrub: 2,
        markers: devMode,
      }
    });

    scene5.to(el5, {
      scale: isMobile ? 1.8 : 1,
      opacity: 1,
      // duration: 500,
    });

    scene5.to(el5, {
      scale: .5,
      opacity: 0,
      // duration: 500
    });

    // Feature 4 - Responsive text animation
    const el6 = feat4Ref.current;
    const scene6 = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "69%",
        end: "79%",
        scrub: 2,
        markers: devMode,
      }
    });

    scene6.to(el6, {
      scale: isMobile ? 1.8 : 1,
      opacity: 1,
      // duration: 500,
    });

    scene6.to(el6, {
      scale: .5,
      opacity: 0,
      // duration: 500
    });

    // Feature 5 - Responsive animation with button scaling
    const el7 = feat5Ref.current;
    const scene7 = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "80%",
        end: "bottom",
        scrub: 2,
        markers: devMode,
      }
    });

    scene7.to(el7, {
      scale: isMobile ? 1.6 : 1,
      opacity: 1,
      // duration: 500,
    });

    scene7.to(el7, {
      scale: .5,
      opacity: 0,
      // duration: 500
    });

    return () => {
      scene1.kill();
      scene2.kill();
      scene3.kill();
      scene4.kill();
      scene5.kill();
      scene6.kill();
      scene7.kill();
    }

  }, [isMobile, navigate, devMode]); // ✅ Added all dependencies

  // Optimized star creation with DocumentFragment
  const createStars = useCallback(() => {
    const starsContainer = starsContainerRef.current;
    if (!starsContainer) return;

    const starCount = isMobile ? 40 : 80;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");

      if (i % 25 === 0) {
        star.className = "absolute shooting-star bg-gradient-to-r from-white to-transparent w-0.5 h-0.5 animate-shooting-star";
      } else {
        star.className = "absolute bg-white rounded-full shadow-[0_0_3px_rgba(255,255,255,0.6)] animate-twinkle";

        const sizeRandom = Math.random();
        let size;
        if (sizeRandom > 0.9) {
          size = Math.random() * (isMobile ? 1.5 : 2) + (isMobile ? 1 : 2);
        } else if (sizeRandom > 0.7) {
          size = Math.random() * (isMobile ? 0.8 : 1) + (isMobile ? 1 : 1.5);
        } else {
          size = Math.random() * (isMobile ? 0.3 : 0.5) + (isMobile ? 0.8 : 1);
        }
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
      }

      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;

      const opacityRandom = Math.random();
      let opacity;
      if (opacityRandom > 0.95) {
        opacity = Math.random() * 0.3 + 0.7;
      } else if (opacityRandom > 0.8) {
        opacity = Math.random() * 0.2 + 0.5;
      } else {
        opacity = Math.random() * 0.3 + 0.2;
      }
      star.style.opacity = opacity;

      fragment.appendChild(star);
    }

    starsContainer.appendChild(fragment);
  }, [isMobile]);

  // Optimized particle creation with DocumentFragment
  const createParticles = useCallback(() => {
    const container = splashContainerRef.current;
    if (!container) return;

    const particleCount = isMobile ? 6 : 10;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle absolute w-[3px] h-[3px] bg-radial-gradient rounded-full pointer-events-none z-15 shadow-[0_0_6px_rgba(255,255,255,0.6)] animate-particle-float";
      particle.style.background = "radial-gradient(circle, rgba(255, 255, 255, 0.9), rgba(255, 200, 150, 0.5))";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.bottom = "-10px";
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particle.style.animationDuration = `${Math.random() * 4 + 4}s`;

      fragment.appendChild(particle);
    }

    container.appendChild(fragment);
  }, [isMobile]);

  // Debounced resize handler
  const handleResize = useCallback(debounce(() => {
    const starsContainer = starsContainerRef.current;
    const splashContainer = splashContainerRef.current;

    if (starsContainer) starsContainer.innerHTML = "";
    if (splashContainer) {
      const particles = splashContainer.querySelectorAll(".particle");
      particles.forEach((particle) => particle.remove());
    }

    createStars();
    createParticles();
  }, 250), [createStars, createParticles]);

  useEffect(() => {
    createStars();
    createParticles();

    // Add event listeners only for non-mobile
    if (!isMobile) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener("resize", handleResize);
      handleResize.cancel?.();
    };
  }, [isMobile, handleMouseMove, handleResize, createStars, createParticles]);

  return (
    <div id="main-content" className="w-full h-full">
      <div
        ref={splashContainerRef}
        className="relative w-screen h-[1000vh] overflow-scroll bg-[#152448] bg-cover bg-center bg-no-repeat bg-blend-overlay"
        style={{
          backgroundImage: `linear-gradient(circle at 50% 30%,rgb(238, 37, 15) 0%,rgb(241, 29, 54) 80%,rgb(248, 0, 50) 100%), url('./home-cloud.webp')`,
        }}
      >
        {/* Featuring Section Start*/}
        <div
          ref={overlayRef}
          className="fixed h-screen w-screen bg-gray-950 z-95 opacity-0">
        </div>

        <div ref={feat1Ref} className="fixed opacity-0 inset-0 scale-60 flex z-96 items-center justify-center">
          <img
            src="feat2.png"
            alt=""
            className={isMobile ? "max-w-[90%] max-h-[60%] object-contain" : ""}
          />
        </div>

        <div ref={feat2Ref} className="fixed opacity-0 inset-0 scale-60 flex z-96 items-center justify-center">
          <img
            src="feat1.png"
            alt=""
            className={isMobile ? "max-w-[90%] max-h-[60%] object-contain" : ""}
          />
        </div>

        {/* New Feature Sections */}
        <div ref={feat3Ref} className="fixed opacity-0 inset-0 scale-75 flex z-96 items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className={`font-bold mb-4 bg-linear-to-r from-white to-[#ffcccc] bg-clip-text text-transparent ${isMobile ? "text-3xl" : "text-6xl"
              }`}>
              Department of MCA Presents
            </h1>
            <p className={`font-light text-gray-200 ${isMobile ? "text-xl" : "text-3xl"
              }`}>
              National Level Technical & Cultural Fest
            </p>
          </div>
        </div>

        <div ref={feat4Ref} className="fixed opacity-0 inset-0 scale-75 flex z-96 items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className={`font-bold mb-4 bg-linear-to-r from-white to-[#ffcccc] bg-clip-text text-transparent ${isMobile ? "text-3xl" : "text-6xl"
              }`}>
              When?
            </h1>
            <p className={`font-light text-gray-200 ${isMobile ? "text-xl" : "text-3xl"
              }`}>
              December 3rd & 4th
            </p>
          </div>
        </div>

        <div ref={feat5Ref} className="fixed opacity-0 inset-0 scale-75 flex z-96 items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className={`font-bold mb-4 bg-linear-to-r from-white to-[#ffcccc] bg-clip-text text-transparent ${isMobile ? "text-3xl" : "text-6xl"
              }`}>
              Where?
            </h1>
            <p className={`font-light text-gray-200 mb-8 ${isMobile ? "text-xl" : "text-3xl"
              }`}>
              Shree Devi Institute of Technology, Kenjar
            </p>
            <div className={`flex gap-8 justify-center ${isMobile ? "flex-col gap-4 items-center" : "flex-row"
              }`}>
              <button
                onClick={() => { navigate("/events") }}
                className="px-8 py-4 bg-linear-to-r from-[#83EFFF] to-[#0EA5E9] hover:from-[#67D8FF] hover:to-[#0284C7] text-gray-900/90 font-bold rounded-lg border-2 border-[#83EFFF] hover:scale-105 transition-all duration-300 shadow-lg uppercase tracking-wider cursor-pointer">
                Technical Events
              </button>
              <button
                onClick={() => { window.open("https://shreedevisambhram.in/events", "_blank") }}
                className="px-8 py-4 bg-linear-to-r from-[#FFDE1C] via-[#FDC700] to-[#F1B200] hover:from-[#FFE55C] hover:via-[#FFD700] hover:to-[#F1B200] text-gray-900/90 font-bold rounded-lg border-2 border-[#FFDE1C] hover:scale-105 transition-all duration-300 shadow-lg uppercase tracking-wider cursor-pointer">
                Cultural Events
              </button>
            </div>
          </div>
        </div>

        {/* Featuring Section End*/}

        {/* Glow Overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none animate-glow-pulse bg-radial-gradient"
          style={{ background: 'radial-gradient(ellipse at 50% 20%, rgba(255, 150, 50, 0.3) 0%, transparent 50%)' }} />

        <div ref={starsContainerRef} className="fixed inset-0 z-0" />

        <img
          ref={planetRef}
          src="/web_element.png"
          className="planet-bg fixed top-[5%] left-1/2 w-4/5 max-w-[800px] -translate-x-1/2 z-20 opacity-80 blur-xl animate-pulse-custom md:w-3/5"
          alt="Red planet background"
        />

        <img
          ref={planetSurfaceRef}
          src="./planet-yellow-sativa.png.webp"
          className="planet-surface fixed top-[5%] max-w-[600px] md:translate-x-162 translate-x-25 md:scale-100 scale-75 z-25 animate-slow-spin animate-planet-glow"
          style={{
            filter:
              "drop-shadow(0 0 40px rgba(255, 165, 0, 0.6)) drop-shadow(0 0 80px rgba(255, 100, 0, 0.3))",
          }}
          alt="Crated planet surface"
        />

        <img
          ref={rocksRef}
          src="./home-rocks.png.webp"
          className="floating-rocks fixed inset-0 object-cover object-center z-30 opacity-90 animate-float-rocks"
          style={{
            filter: "drop-shadow(0 5px 15px rgba(0, 0, 0, 0.5))",
          }}
          alt="Floating rocks in space"
        />

        <div className="marquee fixed top-[39%] left-0 w-full z-40 whitespace-nowrap overflow-hidden opacity-100 pointer-events-none md:top-[25%]">
          <div className={`uppercase marquee-inner inline-block font-rustea font-semibold bg-linear-to-b from-white to-[#ffcccc] bg-clip-text text-transparent animate-marquee text-shadow-lg text-shadow-white tracking-tighter ${isMobile ? "text-[10vh]" : "text-[22vh] md:text-[15vw]"
            }`}>
            <span>
              Medha <span className={isMobile ? "text-[6vh]" : "text-[12vh]"}>.25</span> &nbsp;
            </span>
            <span>
              Medha <span className={isMobile ? "text-[6vh]" : "text-[12vh]"}>.25</span> &nbsp;
            </span>
            <span>
              Medha <span className={isMobile ? "text-[6vh]" : "text-[12vh]"}>.25</span> &nbsp;
            </span>
          </div>
        </div>

        <img
          ref={astronautRef}
          src="./home-astronaut.webp"
          className="astronaut md:scale-150 scale-170 fixed md:top-[60%] top-[90%] h-[65%] w-auto md:translate-x-125 translate-x-20 md:-translate-y-40 -translate-y-65 z-40 min-h-[300px] animate-float-astronaut md:h-[90%] md:min-h-[400px]"
          style={{
            filter:
              "drop-shadow(0 15px 40px rgba(0, 0, 0, 0.6)) drop-shadow(0 0 30px rgba(255, 100, 150, 0.2))",
          }}
          alt="Astronaut in a pink spacesuit"
        />

        <img
          src="./home-spaceship-page.png.webp"
          className="spaceship-floor fixed md:bottom-0 -bottom-10 left-0 w-full h-[120%] object-cover object-bottom z-35 animate-fade-in md:h-[120%]"
          style={{
            filter: "drop-shadow(0 -10px 40px rgba(0, 0, 0, 0.7))",
          }}
          alt="Interior of a spaceship cockpit"
        />

        {/* Orbit Rings */}
        <div className="orbit-ring absolute w-[200px] h-[200px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-full animate-rotate-orbit pointer-events-none hidden md:block md:w-[300px] md:h-[300px]"></div>
        <div className="orbit-ring absolute w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-full animate-rotate-orbit pointer-events-none hidden md:block md:w-[450px] md:h-[450px]"
          style={{ animationDuration: '35s', animationDirection: 'reverse' }}></div>

        <ScrollDown />
      </div>
    </div>
  );
};

export default Home;