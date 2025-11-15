import { useEffect, useRef, useState } from "react";
import ScrollDown from "./ScrollDown";

// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SocialBar from "../../components/SocialBar";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Home = () => {
  const starsContainerRef = useRef(null);
  const splashContainerRef = useRef(null);
  const astronautRef = useRef(null);

  useGSAP(() => {
    const el1 = astronautRef.current;

    const scene1 = gsap.to(el1, {
      top: "2600px",
      scale: 10,
      duration: 500,
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "500px",
        scrub: 2,
        markers: true,
      }
    });

    return () => {
      scene1.kill();
    }

  }, []);

  const createStars = () => {
    const starsContainer = starsContainerRef.current;
    if (!starsContainer) return;

    const starCount = 300;

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.className =
        "absolute bg-white rounded-full shadow-[0_0_3px_rgba(255,255,255,0.6)] animate-twinkle";

      if (i % 25 === 0) {
        star.className +=
          " shooting-star bg-gradient-to-r from-white to-transparent w-0.5 h-0.5 animate-shooting-star";
      } else {
        const sizeRandom = Math.random();
        let size;
        if (sizeRandom > 0.9) {
          size = Math.random() * 2 + 2;
        } else if (sizeRandom > 0.7) {
          size = Math.random() * 1 + 1.5;
        } else {
          size = Math.random() * 0.5 + 1;
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

      starsContainer.appendChild(star);
    }
  };

  const createParticles = () => {
    const container = splashContainerRef.current;
    if (!container) return;

    const particleCount = 10;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className =
        "particle absolute w-[3px] h-[3px] bg-radial-gradient rounded-full pointer-events-none z-15 shadow-[0_0_6px_rgba(255,255,255,0.6)] animate-particle-float";
      particle.style.background =
        "radial-gradient(circle, rgba(255, 255, 255, 0.9), rgba(255, 200, 150, 0.5))";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.bottom = "-10px";
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particle.style.animationDuration = `${Math.random() * 4 + 4}s`;
      container.appendChild(particle);
    }
  };

  const handleMouseMove = (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    const planet = document.querySelector(".planet-bg");
    const planetSurface = document.querySelector(".planet-surface");
    const rocks = document.querySelector(".floating-rocks");
    const astronaut = document.querySelector(".astronaut");

    if (planet) {
      planet.style.transform = `translateX(calc(-50% + ${mouseX * 20 - 10}px))`;
    }

    if (planetSurface) {
      planetSurface.style.transform = `translateX(calc(-50% + ${
        mouseX * 30 - 15
      }px))`;
    }

    if (rocks) {
      rocks.style.transform = `translate(${mouseX * 10 - 5}px, ${
        mouseY * 10 - 5
      }px)`;
    }

    if (astronaut) {
      astronaut.style.transform = `translate(calc(-50% + ${mouseX * 15 - 7.5}px), calc(-50% + ${mouseY * 15 - 7.5}px))`;
    }
  };

  useEffect(() => {
    createStars();
    createParticles();

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      const starsContainer = starsContainerRef.current;
      const splashContainer = splashContainerRef.current;

      if (starsContainer) starsContainer.innerHTML = "";
      if (splashContainer) {
        const particles = splashContainer.querySelectorAll(".particle");
        particles.forEach((particle) => particle.remove());
      }

      createStars();
      createParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="main-content" className="w-full h-full">
      <div
        ref={splashContainerRef}
        className="relative w-screen h-[300vh] overflow-scroll bg-[#152448] bg-cover bg-center bg-no-repeat bg-blend-overlay"
        style={{
          backgroundImage: `linear-gradient(circle at 50% 30%,rgb(238, 37, 15) 0%,rgb(241, 29, 54) 80%,rgb(248, 0, 50) 100%), url('./home-cloud.webp')`,
        }}
      >
        {/* Glow Overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none animate-glow-pulse bg-radial-gradient"
          style={{ background: 'radial-gradient(ellipse at 50% 20%, rgba(255, 150, 50, 0.3) 0%, transparent 50%)' }} />

        <div ref={starsContainerRef} className="fixed inset-0 z-0" />

        <img
          src="/web_element.png"
          className="planet-bg fixed top-[5%] left-1/2 w-4/5 max-w-[800px] -translate-x-1/2 z-20 opacity-80 blur-xl animate-pulse-custom md:w-3/5"
          alt="Red planet background"
        />

        <img
          src="./planet-yellow-sativa.png.webp"
          className="planet-surface fixed top-[5%] max-w-[600px] md:translate-x-162 translate-x-25 md:scale-100 scale-75  z-25 animate-slow-spin animate-planet-glow"
          style={{
            filter:
              "drop-shadow(0 0 40px rgba(255, 165, 0, 0.6)) drop-shadow(0 0 80px rgba(255, 100, 0, 0.3))",
          }}
          alt="Crated planet surface"
        />

        <img
          src="./home-rocks.png.webp"
          className="floating-rocks fixed inset-0 object-cover object-center z-30 opacity-90 animate-float-rocks"
          style={{
            filter: "drop-shadow(0 5px 15px rgba(0, 0, 0, 0.5))",
          }}
          alt="Floating rocks in space"
        />

        <div className="marquee fixed top-[39%] left-0 w-full z-40 whitespace-nowrap overflow-hidden opacity-100 pointer-events-none md:top-[25%]">
          <div className="uppercase marquee-inner inline-block font-rustea text-[22vh] font-semibold bg-linear-to-b from-white to-[#ffcccc] bg-clip-text text-transparent animate-marquee text-shadow-lg text-shadow-white tracking-tighter md:text-[15vw]">
            <span>
              Medha <span className="text-[12vh]">.25</span> &nbsp;
            </span>
            <span>
              Medha <span className="text-[12vh]">.25</span> &nbsp;
            </span>
            <span>
              Medha <span className="text-[12vh]">.25</span> &nbsp;
            </span>
          </div>
        </div>

        <img
          ref={astronautRef}
          src="./home-astronaut.webp"
          className="astronaut md:scale-150 scale-170 fixed md:top-[60%] top-[90%] h-[65%] w-auto md:translate-x-125 translate-x-17 md:-translate-y-40 -translate-y-65 z-40 min-h-[300px] animate-float-astronaut  md:h-[90%] md:min-h-[400px]"
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
        <SocialBar />
      </div>
    </div>
  );
};

export default Home;
