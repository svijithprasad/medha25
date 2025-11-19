import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { House, LucideNewspaper, PartyPopper, Stars } from "lucide-react";
import { useNavigate } from "react-router-dom";
import beep from "../assets/beep.mp3"
import zap from "../assets/zap.mp3"

export default function SocialBar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const beepAudioRef = useRef(null);
  const zapAudioRef = useRef(null);

  useEffect(() => {
    beepAudioRef.current = new Audio(beep);
    zapAudioRef.current = new Audio(zap);

    beepAudioRef.current.load();
    zapAudioRef.current.load();

    return () => {
      if (beepAudioRef.current) {
        beepAudioRef.current.pause();
        beepAudioRef.current = null;
      }
      if (zapAudioRef.current) {
        zapAudioRef.current.pause();
        zapAudioRef.current = null;
      }
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-9999"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={() => {
              if (beepAudioRef.current) {
                beepAudioRef.current.currentTime = 0;
                beepAudioRef.current.play().catch(error => {
                  console.log("Beep audio play failed:", error);
                });
              }
              setOpen(false);
            }}
          />
        )}
      </AnimatePresence>

      <button
        onClick={() => {
          if (beepAudioRef.current) {
            beepAudioRef.current.currentTime = 0;
            beepAudioRef.current.play().catch(error => {
              console.log("Beep audio play failed:", error);
            });
          }
          setOpen(!open);
        }}
        className="fixed right-0 top-1/2 -translate-y-1/2 bg-white shadow-xl 
             rounded-l-full w-12 h-24 flex items-center justify-center 
             border border-gray-300 z-99999 cursor-pointer hover:bg-gray-100"
      >
        <span className="rotate-90 tracking-wider font-semibold">MENU</span>
      </button>

      <button
        onClick={() => {
          if (beepAudioRef.current) {
            beepAudioRef.current.currentTime = 0;
            beepAudioRef.current.play().catch(error => {
              console.log("Beep audio play failed:", error);
            });
          }
          setOpen(!open);
        }}
        className="fixed left-0 top-1/2 -translate-y-1/2 bg-white shadow-xl 
             rounded-r-full w-12 h-24 flex items-center justify-center 
             border border-gray-300 z-99999 cursor-pointer hover:bg-gray-100"
      >
        <span className="-rotate-90 tracking-wider font-semibold">MENU</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 14,
              mass: 0.2,
            }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                z-99999"
          >
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    if (zapAudioRef.current) {
                      zapAudioRef.current.currentTime = 0;
                      zapAudioRef.current.play().catch(error => {
                        console.log("Zap audio play failed:", error);
                      });
                    }
                    setOpen(false);
                    navigate("/");
                  }}
                  className="group cursor-pointer w-[90px] h-[90px] bg-white 
                  rounded-[90px_5px_5px_5px] border-[3px] border-[#2d2d2d]
                  shadow-[6px_6px_0px_#2d2d2d] pt-3 pl-3 flex flex-col items-center justify-center
                  transition-all duration-100 hover:-translate-x-1.5 hover:-translate-y-1.5
                  hover:shadow-[12px_12px_0px_#2d2d2d] hover:bg-[#fd1d1d]"
                >
                  <House size={30} className="group-hover:text-white" />
                  <p className="text-sm -mb-2 mt-1">Home</p>
                </button>

                <button
                  onClick={() => {
                    if (zapAudioRef.current) {
                      zapAudioRef.current.currentTime = 0;
                      zapAudioRef.current.play().catch(error => {
                        console.log("Zap audio play failed:", error);
                      });
                    }
                    setOpen(false);
                    navigate("/events");
                  }}
                  className="group cursor-pointer w-[90px] h-[90px] bg-white 
                  rounded-[5px_90px_5px_5px] border-[3px] border-[#2d2d2d]
                  shadow-[6px_6px_0px_#2d2d2d] pt-3 pr-3 flex flex-col items-center justify-center
                  transition-all duration-100 hover:-translate-x-1.5 hover:-translate-y-1.5
                  hover:shadow-[12px_12px_0px_#2d2d2d] hover:bg-[#24a0ed]"
                >
                  <PartyPopper size={30} className="group-hover:text-white" />
                  <p className="text-sm -mb-2 mt-1">Events</p>
                </button>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    if (zapAudioRef.current) {
                      zapAudioRef.current.currentTime = 0;
                      zapAudioRef.current.play().catch(error => {
                        console.log("Zap audio play failed:", error);
                      });
                    }
                    setOpen(false);
                    navigate("/glimpse");
                  }}
                  className="group cursor-pointer w-[90px] h-[90px] bg-white 
                  rounded-[5px_5px_5px_90px] border-[3px] border-[#2d2d2d]
                  shadow-[6px_6px_0px_#2d2d2d] pb-2.5 pl-3 flex flex-col text-sm items-center justify-center
                  transition-all duration-100 hover:-translate-x-1.5 hover:-translate-y-1.5
                  hover:shadow-[12px_12px_0px_#2d2d2d] hover:bg-[#f7b733]"
                >
                  <p className="text-sm mr-2 -mt-2 mb-1">Glimpse</p>
                  <Stars size={30} className="group-hover:text-white" />
                </button>

                <button
                  onClick={() => {
                    // --- Your existing logic ---
                    if (zapAudioRef.current) {
                      zapAudioRef.current.currentTime = 0;
                      zapAudioRef.current.play().catch(error => {
                        console.log("Zap audio play failed:", error);
                      });
                    }
                    setOpen(false);
                    const link = document.createElement('a');
                    link.href = '/medha25.pdf';
                    link.setAttribute(
                      'download',
                      'medha25.pdf',
                    );
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="group cursor-pointer w-[90px] h-[90px] bg-white 
                  rounded-[5px_5px_90px_5px] border-[3px] border-[#2d2d2d]
                  shadow-[6px_6px_0px_#2d2d2d] pb-3 pr-3 flex flex-col items-center justify-center
                  transition-all duration-100 hover:-translate-x-1.5 hover:-translate-y-1.5
                  hover:shadow-[12px_12px_0px_#2d2d2d] hover:bg-[#4cd137]"
                >
                  <p className="text-sm ml-2 -mt-2 mb-1">Brochure</p>
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