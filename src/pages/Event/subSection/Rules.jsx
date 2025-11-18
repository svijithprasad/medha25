import './event.css';

export const Rules = ({ 
  eventName = "Astrinix", 
  eventType = "Code Web",
  rules = [], 
  coordinators = [], 
  section = 0 
}) => {
  const boxStyle = {
    '--clip-border-color': 'royalblue',
    '--bg-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%)'
  };

  const validRules = rules.filter(rule => rule.trim() !== "");

  return (
    <>
      {/* Guidelines/Rules Section */}
      <div
        className="absolute md:left-10 left-5 top-[40%] fookin-a-box aboutPopup is-visible z-999 bg-transparent backdrop-blur-sm"
        style={boxStyle}
      >
        <h2 className="md:pr-16 pr-9 md:text-lg text-[14px] z-1 p-3 heading-clip-mirrored font-space">
          <span>Guidelines</span>
        </h2>

        <div className="clip-shape-border-mirrored"></div>

        <div className="clip-shape-mirrored -mt-15 p-5">
          <div className="pt-14 my-2 text-white">
            <div className="opacity-76 normal-case text-base font-sans">
              <ul className="list-disc pl-5">
                {validRules.length > 0 ? (
                  validRules.map((rule, index) => (
                    <li key={index} className="mb-4">
                      {rule}
                    </li>
                  ))
                ) : (
                  <li>No rules available for this event.</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Coordinators Section */}
      <div
        className="absolute md:right-10 right-5 top-[70%] fookin-a-box aboutPopup is-visible z-999 bg-transparent backdrop-blur-sm"
        style={boxStyle}
      >
        <h2 className="md:pr-16 pr-9 md:text-lg text-[14px] z-1 p-3 heading-clip-mirrored font-space">
          <span>Coordinators</span>
        </h2>

        <div className="clip-shape-border-mirrored"></div>

        <div className="clip-shape-mirrored -mt-15 p-5">
          <div className="pt-14 my-2 text-white">
            <div className="opacity-76 normal-case text-base font-sans">
              <div className="flex flex-col space-y-6">
                {coordinators.length > 0 ? (
                  coordinators.map((coordinator, index) => (
                    <div key={index} className="flex md:pl-10 md:gap-10 flex-col items-center md:flex-row md:items-center md:space-x-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-400 overflow-hidden border-2 border-white shrink-0 mb-3 md:mb-0">
                        <img
                          src={coordinator.image}
                          alt={coordinator.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="text-center md:text-left">
                        <div className="font-semibold text-white">{coordinator.name}</div>
                        <a
                          href={`tel:${coordinator.contact.replace(/\s+/g, '')}`}
                          className="text-sm text-gray-300 hover:text-white transition-colors"
                        >
                          {coordinator.contact}
                        </a>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>No coordinators available</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};