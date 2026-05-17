import carSound from "../assets/carsound.wav";

export const BottomControls = () => {
  const playSound = () => {
    const audio = new Audio(carSound);
    audio.play();
  };

  return (
    <div className="px-12 py-6 grid grid-cols-12 items-center gap-6 mt-auto relative z-10">
      {/* Center (Explore & Sound) */}
      <div className="col-span-12 flex items-center justify-center gap-4">
        {/* Explore Button */}
        <button className="border-2 border-gray-500 px-10 py-2.5 rounded-full text-xs font-bold tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-300">
          EXPLORE
        </button>

        {/* Play Sound Button */}
        <button
          onClick={playSound}
          className="border-2 border-gray-500 px-6 py-2.5 rounded-full text-xs font-bold tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-300 flex items-center gap-2"
        >
          <span>HEAR ENGINE</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BottomControls;
