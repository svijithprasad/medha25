import { useNavigate } from "react-router-dom"


export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full h-20 bg-transparent fixed top-0 left-0 flex justify-between items-center px-4 z-99">
      <div className="hidden w-1/3 uppercase md:flex items-center text-white">
        <img src="/sdit.png" className="h-14 w-14" alt="" />
        <h3 onClick={() => { navigate("/") }} className="cursor-pointer scale-x-125 pl-8">shree devi institute<br />of technology</h3>
      </div>

      <div className="md:w-1/3 w-full text-white">
        {/* <img className="h-15" src="medha2.png" alt="" /> */}
        <h3 onClick={() => { navigate("/") }} className="cursor-pointer uppercase text-3xl md:text-3xl">Medha <span className="text-2xl">.25</span></h3>
      </div>

      <div className="">
        <button
          className="cursor-pointer text-xl text-gray-800 bg-linear-to-br from-[#b3bde7] via-50% to-[#E8EDFF] tracking-wide font-semibold px-3 py-2 rounded-lg transition-all duration-300 transform shadow-lg hover:shadow-xl"
          onClick={() => window.open('https://konfhub.com/medha-2k25', '_blank,')}
        >
          Register
        </button>
      </div>

    </header>
  )
}