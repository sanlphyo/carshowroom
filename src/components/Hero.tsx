import { Star } from "lucide-react";

export const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center px-6 md:px-12 py-10 relative z-10">
      {/* Left Section */}
      <div className="md:col-span-3 space-y-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-wider mb-2">
            FERRARI
          </h1>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wider text-gray-400">
            458 GT3
          </h2>
        </div>

        <p className="text-gray-300 text-sm font-medium leading-relaxed max-w-xs">
          A track-focused evolution of the 458 Italia, designed for GT3
          competition. Featuring advanced aerodynamics and a high-revving V8
          engine.
        </p>

        <div className="flex items-center gap-4">
          <span className="text-5xl font-bold">4.2</span>
          <div className="flex flex-col">
            <div className="flex text-yellow-500">
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} className="text-gray-600" />
            </div>
            <span className="text-xs text-gray-400 font-bold mt-1">RATING</span>
          </div>
        </div>
      </div>

      {/* Center Section (Empty to show background video) */}
      <div className="md:col-span-6 flex justify-center items-center relative h-[100px] md:h-[400px]">
        {/* Glow effect can remain to enhance the video center */}
        <div className="absolute w-[80%] h-[60%] bg-blue-500/5 blur-[100px] rounded-full -z-10"></div>
      </div>

      {/* Right Section (Specs) */}
      <div className="md:col-span-3 flex justify-start md:justify-end">
        <div className="w-full max-w-xs">
          <h3 className="text-xs font-extrabold tracking-widest text-gray-300 mb-6">
            SPECS
          </h3>

          <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-gray-700">
            {/* Spec Item 1 */}
            <div className="flex items-start gap-4 relative">
              <div className="w-[23px] h-[23px] rounded-full bg-[#12131C] border-2 border-white flex items-center justify-center mt-0.5 z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold">ENGINE</p>
                <p className="text-sm font-bold text-white">4.5L V8</p>
              </div>
            </div>

            {/* Spec Item 2 */}
            <div className="flex items-start gap-4 relative">
              <div className="w-[23px] h-[23px] rounded-full bg-[#12131C] border-2 border-gray-600 flex items-center justify-center mt-0.5 z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold">POWER</p>
                <p className="text-sm font-bold text-white">550 HP</p>
              </div>
            </div>

            {/* Spec Item 3 */}
            <div className="flex items-start gap-4 relative">
              <div className="w-[23px] h-[23px] rounded-full bg-[#12131C] border-2 border-gray-600 flex items-center justify-center mt-0.5 z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold">WEIGHT</p>
                <p className="text-sm font-bold text-white">1214 KG</p>
              </div>
            </div>

            {/* Spec Item 4 */}
            <div className="flex items-start gap-4 relative">
              <div className="w-[23px] h-[23px] rounded-full bg-[#12131C] border-2 border-gray-600 flex items-center justify-center mt-0.5 z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold">TOP SPEED</p>
                <p className="text-sm font-bold text-white">325 KM/H</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
