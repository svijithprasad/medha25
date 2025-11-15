import './About.css';

export const About = () => {
  const boxStyle = {
    '--clip-border-color': '#fff',
    '--bg-gradient': 'linear-gradient(180deg, rgba(49, 14, 0, 0.40) 0%, rgba(30, 0, 0, 0.40) 100%)'
  };

  return (
    <div className=" flex flex-wrap md:justify-around items-center absolute inset-0 w-full h-full bg-transparent backdrop-blur-xl z-98">
      <div
        className="z-100 fookin-a-box aboutPopup is-visible"
        style={boxStyle}
      >
        <h2 className="md:pr-16 pr-9 md:text-lg text-[14px] z-1 p-3 heading-clip-mirrored font-space">
          <span>About Medha .25</span>
        </h2>

        <div className="clip-shape-border-mirrored"></div>

        <div className="clip-shape-mirrored -mt-15 p-5">
          <div className="pt-14 my-2 text-white">
            <div className="opacity-76 normal-case text-base font-sans">
              <p className='font-space'>
                The dynamic minds of the <span className='text-amber-500'>MCA department</span> at <span className='text-blue-400'>Shree Devi Institute of Technology</span> proudly presents <span className='text-amber-500'>MEDHA .25</span> a fest like no other, blending technology and creativity into an extraordinary experience.
              </p>
              <br />
              <p>
                A grand spectacle like no other, where the tides of innovation and creativity converge in a breathtaking fusion of technology and artistry. Choose your passion, set a road map and achieve the success. <span className='text-amber-500'>MEDHA .25</span> is where you unleash your true potential!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="z-100 md:block hidden fookin-a-box aboutPopup is-visible"
        style={boxStyle}
      >
        <h2 className="md:pr-16 pr-9 md:text-lg text-[14px] z-1 p-3 heading-clip-mirrored font-space">
          <span>About College</span>
        </h2>

        <div className="clip-shape-border-mirrored"></div>

        <div className="clip-shape-mirrored -mt-15 p-5">
          <div className="pt-14 my-2 text-white">
            <div className="opacity-76 normal-case text-base font-sans">
              <p className='font-space'>
                The dynamic minds of the <span className='text-amber-500'>MCA department</span> at <span className='text-blue-400'>Shree Devi Institute of Technology</span> proudly presents <span className='text-amber-500'>MEDHA .25</span> a fest like no other, blending technology and creativity into an extraordinary experience.
              </p>
              <br />
              <p>
                A grand spectacle like no other, where the tides of innovation and creativity converge in a breathtaking fusion of technology and artistry. Choose your passion, set a road map and achieve the success. <span className='text-amber-500'>MEDHA .25</span> is where you unleash your true potential!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};