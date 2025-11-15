import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { House, LucideNewspaper, PartyPopper, Stars } from "lucide-react";

export default function SocialBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* === OVERLAY (click to close) === */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* === RIGHT MENU BUTTON === */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed right-0 top-1/2 -translate-y-1/2 bg-white shadow-xl 
             rounded-l-full w-12 h-24 flex items-center justify-center 
             border border-gray-300 z-99999 cursor-pointer hover:bg-gray-100"
      >
        <span className="rotate-90 tracking-wider font-semibold">MENU</span>
      </button>

      {/* === LEFT MENU BUTTON === */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed left-0 top-1/2 -translate-y-1/2 bg-white shadow-xl 
             rounded-r-full w-12 h-24 flex items-center justify-center 
             border border-gray-300 z-99999 cursor-pointer hover:bg-gray-100"
      >
        <span className="-rotate-90 tracking-wider font-semibold">MENU</span>
      </button>

      {/* === SOCIAL MENU (CENTERED) === */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: 60, opacity: 0, scale: 0.95 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: 60, opacity: 0, scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 14,
              mass: 0.2,
            }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                z-99999"
          >
            {/* === 4 Quadrants === */}
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                {/* INSTAGRAM */}
                <button
                  className="group cursor-pointer w-[90px] h-[90px] bg-white 
                  rounded-[90px_5px_5px_5px] border-[3px] border-[#2d2d2d]
                  shadow-[6px_6px_0px_#2d2d2d] pt-3 pl-3 flex items-center justify-center
                  transition-all duration-100 hover:-translate-x-1.5 hover:-translate-y-1.5
                  hover:shadow-[12px_12px_0px_#2d2d2d] hover:bg-[#fd1d1d]"
                >
                  <House size={30} className="group-hover:text-white" />
                </button>

                {/* TWITTER */}
                <button
                  className="group cursor-pointer w-[90px] h-[90px] bg-white 
                  rounded-[5px_90px_5px_5px] border-[3px] border-[#2d2d2d]
                  shadow-[6px_6px_0px_#2d2d2d] pt-3 pr-3 flex items-center justify-center
                  transition-all duration-100 hover:-translate-x-1.5 hover:-translate-y-1.5
                  hover:shadow-[12px_12px_0px_#2d2d2d] hover:bg-[#24a0ed]"
                >
                  <PartyPopper size={30} className="group-hover:text-white"/>
                </button>
              </div>

              <div className="flex gap-3">
                {/* GITHUB */}
                <button
                  className="group cursor-pointer w-[90px] h-[90px] bg-white 
                  rounded-[5px_5px_5px_90px] border-[3px] border-[#2d2d2d]
                  shadow-[6px_6px_0px_#2d2d2d] pb-2.5 pl-3 flex items-center justify-center
                  transition-all duration-100 hover:-translate-x-1.5 hover:-translate-y-1.5
                  hover:shadow-[12px_12px_0px_#2d2d2d] hover:bg-[#f7b733]"
                >
                  <Stars size={30} className="group-hover:text-white" />
                </button>

                {/* WHATSAPP */}
                <button
                  className="group cursor-pointer w-[90px] h-[90px] bg-white 
                  rounded-[5px_5px_90px_5px] border-[3px] border-[#2d2d2d]
                  shadow-[6px_6px_0px_#2d2d2d] pb-3 pr-3 flex items-center justify-center
                  transition-all duration-100 hover:-translate-x-1.5 hover:-translate-y-1.5
                  hover:shadow-[12px_12px_0px_#2d2d2d] hover:bg-[#4cd137]"
                >
                  <LucideNewspaper size={30} className="group-hover:text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
