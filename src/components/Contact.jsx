import { Instagram, Globe, Facebook, MapPin, Volume2, VolumeOffIcon } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import bg from "../assets/bg.mp3";

export const Contact = () => {
  const [play, setPlay] = useState(true);
  const [isAudioReady, setIsAudioReady] = useState(false);
  const bgMusicRef = useRef(null);

  // Initialize audio when component mounts
  useEffect(() => {
    if (bgMusicRef.current) {
      const audio = bgMusicRef.current;
      
      const handleCanPlay = () => {
        setIsAudioReady(true);
      };

      const handleError = () => {
        console.error("Audio loading failed");
        setIsAudioReady(false);
        setPlay(false);
      };

      audio.addEventListener('canplaythrough', handleCanPlay);
      audio.addEventListener('error', handleError);

      // Set up audio properties
      audio.loop = true;
      audio.volume = 0.7; // Set reasonable volume

      // Attempt auto-play
      const playAudio = async () => {
        try {
          await audio.play();
          setPlay(true);
        } catch (error) {
          console.log("Auto-play prevented or failed:", error);
          setPlay(false);
        }
      };

      playAudio();

      // Cleanup event listeners
      return () => {
        audio.removeEventListener('canplaythrough', handleCanPlay);
        audio.removeEventListener('error', handleError);
      };
    }
  }, []);


  useEffect(() => {
    if (bgMusicRef.current && isAudioReady) {
      if (play) {
        bgMusicRef.current.play().catch(error => {
          console.error("Audio play failed:", error);
          setPlay(false);
        });
      } else {
        bgMusicRef.current.pause();
      }
    }
  }, [play, isAudioReady]);

  useEffect(() => {
    return () => {
      if (bgMusicRef.current) {
        bgMusicRef.current.pause();
      }
    };
  }, []);

  const togglePlay = () => {
    if (!isAudioReady) {
      console.log("Audio not ready yet");
      return;
    }
    setPlay(!play);
  };

  return (
    <>
      <audio ref={bgMusicRef} preload="auto">
        <source src={bg} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className="fixed md:left-6 left-3 md:bottom-6 bottom-3 flex md:space-x-4 space-x-1 z-99">
        <span className="p-2 bg-gray-200/90 rounded-lg border border-gray-800">
          <a href="https://www.instagram.com/medha_sdit" target="_blank" rel="noopener noreferrer">
            <Instagram className="cursor-pointer hover:scale-110 transition text-pink-600" size={24} />
          </a>
        </span>
        <span className="p-2 bg-gray-200/90 rounded-lg border border-gray-800">
          <a href="https://sdit.ac.in" target="_blank" rel="noopener noreferrer">
            <Globe className="cursor-pointer hover:scale-110 transition text-blue-600" size={24} />
          </a>
        </span>
        <span className="p-2 bg-gray-200/90 rounded-lg border border-gray-800">
          <a href="https://www.facebook.com/shreedeviinstituteoftechnologymangalore/" target="_blank" rel="noopener noreferrer">
            <Facebook className="cursor-pointer hover:scale-110 transition text-blue-800" size={24} />
          </a>
        </span>
        <span className="p-2 bg-gray-200/90 rounded-lg border border-gray-800">
          <a href="https://maps.app.goo.gl/ogkykTHehmiLCfxo9" target="_blank" rel="noopener noreferrer">
            <MapPin className="cursor-pointer hover:scale-110 transition text-red-600" size={24} />
          </a>
        </span>
        
        <span 
          className={`p-2 rounded-lg border border-gray-800 cursor-pointer transition-all ${
            isAudioReady 
              ? 'bg-gray-200/90 hover:bg-gray-300/90' 
              : 'bg-gray-400/70 cursor-not-allowed'
          }`}
          onClick={togglePlay}
          title={isAudioReady ? (play ? "Mute music" : "Play music") : "Audio loading..."}
        >
          {!isAudioReady ? (
            <div className="w-6 h-6 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
          ) : play ? (
            <Volume2 className={`hover:scale-110 transition text-gray-950 ${play ? 'animate-pulse' : ''}`} size={24} />
          ) : (
            <VolumeOffIcon className="hover:scale-110 transition text-gray-800" size={24} />
          )}
        </span>
      </div>
    </>
  );
};