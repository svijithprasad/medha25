import ChromaGrid from "@/components/ChromaGrid";
import GradientText from "@/components/GradientText";
import { GridScan } from "@/components/GridScan";
import ShinyText from "@/components/ShinyText";
import React from "react";

const Team = () => {
  const items = [
    {
      image: "/team/adi.png",
      title: "Aditya",
      subtitle: "Frontend Developer",
      handle: "@sarahjohnson",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
    },
    {
      image: "/team/darshan.jpg",
      title: "Darshan T",
      subtitle: "Backend Engineer",
      handle: "@mikechen",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
    },
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Fixed Background Big Text */}
      <div className="fixed inset-0 z-10 flex items-center justify-center pointer-events-none">
        <ShinyText
          text="OUR TEAM"
          disabled={false}
          speed={3}
          className="
            text-[140px]
            sm:text-[140px]
            md:text-[220px]
            lg:text-[300px]
            xl:text-[380px]
            font-bold
            opacity-20
            select-none
            mix-blend-screen
            leading-none
            text-center
          "
        />
      </div>

      {/* Top Title + ChromaGrid */}
      <div className="relative w-full z-40 pt-25 md:pt-20 flex flex-col items-center justify-center text-center">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="text-3xl sm:text-4xl md:text-6xl leading-tight"
        >
          TECHNICAL LEAD
        </GradientText>

        <div className="mt-6 sm:mt-10 w-full flex justify-center h-screen">
          <ChromaGrid
            items={items}
            radius={150}
            radiusSm={200}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
            className="bg-transparent"
          />
        </div>

        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="text-3xl sm:text-4xl md:text-6xl leading-tight"
        >
          BROCHURE
        </GradientText>

        <div className="mt-6 sm:mt-10 w-full flex justify-center h-screen">
          <ChromaGrid
            items={items}
            radius={150}
            radiusSm={200}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
            className="bg-transparent"
          />
        </div>
      </div>

      {/* Background Grid Scan */}
      <div className="z-0 fixed inset-0 w-full h-full pointer-events-none">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#0000FF"
          gridScale={0.15}
          scanColor="#8F00FF"
          scanOpacity={0.4}
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>
    </div>
  );
};

export default Team;
