import React from "react";
import InfiniteMenu from "./InfiniteMenu";

const Glimpse = () => {
  const items = [
    {
      image: "/glimpse/g1.jpeg",
      link: "https://google.com/",
      title: "Item 1",
      description: "This is pretty cool, right?",
    },
    {
      image: "/glimpse/g2.jpeg",
      link: "https://google.com/",
      title: "Item 2",
      description: "This is pretty cool, right?",
    },
    {
      image: "/glimpse/g3.jpeg",
      link: "https://google.com/",
      title: "Item 3",
      description: "This is pretty cool, right?",
    },
    {
      image: "/glimpse/g4.jpeg",
      link: "https://google.com/",
      title: "Item 4",
      description: "This is pretty cool, right?",
    },
    {
      image: "/glimpse/g5.jpeg",
      link: "https://google.com/",
      title: "Item 4",
      description: "This is pretty cool, right?",
    },
    {
      image: "/glimpse/g4.jpeg",
      link: "https://google.com/",
      title: "Item 4",
      description: "This is pretty cool, right?",
    },
  ];
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* --- LAYER 1: GRADIENT BACKGROUND --- */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-indigo-950 to-blue-950 z-0" />

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
            z-20
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
        <h1 className="text-white absolute md:text-[300px] text-8xl opacity-15">
          Glimpse
        </h1>
        <InfiniteMenu items={items} />
      </div>
    </div>
  );
};

export default Glimpse;