import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const events = [
  { name: "Astrinix", img: "/events/img/e1.png" },
  { name: "Tech Blitz", img: "/events/img/e2.png" },
  { name: "Galactic Rise", img: "/events/img/e3.png" },
  { name: "Reel Verse", img: "/events/img/e4.png" },
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

  return (
    <section
      id="event"
      className="relative w-screen h-screen bg-black/90 bg-linear-to-b from-[#162145] via-[#122D53_35%] to-[#073448] overflow-hidden cursor-pointer"
    >
      {backgroundLayers.map((layer) => (
        <img
          key={layer.src}
          src={layer.src}
          alt={layer.alt}
          className={`absolute inset-0 w-full h-full object-cover`}
          style={{ zIndex: layer.zIndex }}
        />
      ))}

      {/* Top Right Image */}
      <img
        className="absolute top-0 right-0 md:scale-55 -translate-y-145 translate-x-90 transition ease-in-out"
        src={images[0].src}
        alt={images[0].alt}
        style={{ zIndex: images[0].zIndex }}
      />

      {/* Top Bottom Image */}
      <img
        className="absolute bottom-0 left-0 md:scale-100 translate-y-100 -translate-x-25 transition ease-in-out"
        src={images[1].src}
        alt={images[1].alt}
        style={{ zIndex: images[1].zIndex }}
      />

      {/* Floating Astronaut */}
      <img
        className="absolute bottom-0 left-0 scale-25 translate-y-120 translate-x-78 transition ease-in-out"
        src={images[2].src}
        alt={images[2].alt}
        style={{ zIndex: images[1].zIndex }}
      />

      {/* Center Floating Image*/}
      <div className="absolute inset-0 z-20 w-full h-full flex items-center justify-center">
        <img
          className="transition scale-30 -rotate-z-8 ease-in-out transform -translate-y-10" // Adjust -translate-y-20 to position above text
          src={events[section]?.img}
          alt={events[section]?.name}
        />
      </div>

      {/* Center Event Name */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <h1 className="text-[150px] transition ease-in-out uppercase text-[#83EFFF]">
          {events[section]?.name || ""}
        </h1>
      </div>

    </section>
  );
}