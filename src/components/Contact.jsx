import { Instagram, Globe, Facebook, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <>
      <div className="fixed md:left-6 left-3 md:bottom-6 bottom-3 flex md:space-x-4 space-x-1  z-99">
        <span className="p-2 bg-gray-200/90 rounded-lg border border-gray-800">
          <a href="https://www.instagram.com/sdit.official" target="_blank" rel="noopener noreferrer">
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
      </div>
    </>
  )
}