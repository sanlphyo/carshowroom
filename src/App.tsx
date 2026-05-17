import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BottomControls from "./components/BottomControls";
import heroVideo from "./assets/hero.mp4";

function App() {
  return (
    <div className="min-h-screen flex flex-col text-white relative overflow-hidden">
      {/* Fallback Background Color */}
      <div className="absolute inset-0 bg-[#12131C] -z-20"></div>

      {/* Background Video */}
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40 -z-5"></div>

      <Navbar />
      <div className="grow flex items-center">
        <div className="w-full">
          <Hero />
        </div>
      </div>
      <BottomControls />
    </div>
  );
}

export default App;
