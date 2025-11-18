import React from "react";
import InfiniteMenu from "./InfiniteMenu";

const Glimpse = () => {
  const items = [
    {
      image: "/glimpse/g1.jpg",
      link: "https://google.com/",
      title: "Item 1",
      description: "This is pretty cool, right?",
    },
    {
      image: "/glimpse/g2.jpg",
      link: "https://google.com/",
      title: "Item 1",
      description: "This is pretty cool, right?",
    },
    {
      image: "/glimpse/g3.jpg",
      link: "https://google.com/",
      title: "Item 1",
      description: "This is pretty cool, right?",
    },
    {
      image: "/glimpse/g4.jpg",
      link: "https://google.com/",
      title: "Item 1",
      description: "This is pretty cool, right?",
    },
    {
      image: "/glimpse/g5.jpg",
      link: "https://google.com/",
      title: "Item 1",
      description: "This is pretty cool, right?",
    },
    {
      image: "/glimpse/g6.jpg",
      link: "https://google.com/",
      title: "Item 1",
      description: "This is pretty cool, right?",
    },
    {
      image: "/glimpse/g7.jpg",
      link: "https://google.com/",
      title: "Item 1",
      description: "This is pretty cool, right?",
    },
    {
      image: "/glimpse/g8.jpg",
      link: "https://google.com/",
      title: "Item 1",
      description: "This is pretty cool, right?",
    },
    {
      image: "/glimpse/g9.jpg",
      link: "https://google.com/",
      title: "Item 1",
      description: "This is pretty cool, right?",
    },
    {
      image: "/glimpse/g10.jpg",
      link: "https://google.com/",
      title: "Item 1",
      description: "This is pretty cool, right?",
    },
    {
      image: "/glimpse/g11.jpg",
      link: "https://google.com/",
      title: "Item 1",
      description: "This is pretty cool, right?",
    },
    {
      image: "/glimpse/g12.jpg",
      link: "https://google.com/",
      title: "Item 1",
      description: "This is pretty cool, right?",
    },
    {
      image: "/glimpse/g13.jpg",
      link: "https://google.com/",
      title: "Item 1",
      description: "This is pretty cool, right?",
    },
  ];
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* --- LAYER 1: GRADIENT BACKGROUND --- */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-indigo-950 to-gray-950 z-0" />

      {/* --- LAYER 2: STARS BACKGROUND --- */}
      <div
        className="
          absolute inset-0 
          bg-[url('/2.png.webp')]
          bg-cover bg-center bg-no-repeat
          z-10
        "
      />

      {/* --- LAYER 3: FOREGROUND IMAGE (NEBULA / DUST / CITY etc.) --- */}
      <div
        className="
          absolute inset-0
          bg-[url('/1.png.webp')]
          bg-cover bg-center bg-no-repeat
          mix-blend-screen
          z-20
        "
      />

      <div
        className="
            fixed inset-0
            bg-cover bg-center bg-no-repeat
            z-0
            flex
            w-full
            justify-end
            md:h-[450px] -translate-y-[50%] h-[300px]
        "
      >
        <img src="/event/bg/img1.webp" alt="" />
      </div>

      {/* --- CONTENT LAYER: CAROUSEL --- */}
      <div
        className="relative h-screen py-2 z-40
        flex flex-col items-center justify-center
      "
      >
        <h1 className="text-white absolute md:text-[280px] text-8xl opacity-30">
          Glimpse
        </h1>
        <InfiniteMenu items={items} />
      </div>
    </div>
  );
};

export default Glimpse;