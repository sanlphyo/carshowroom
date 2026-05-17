import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-6 px-6 md:px-12 bg-transparent text-white relative z-50">
      <div className="text-xl font-extrabold tracking-wider">CARSHOWROOM</div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 text-xs tracking-widest text-gray-300 font-bold">
        <a href="#" className="hover:text-white transition-colors duration-300">
          GALLERY
        </a>
        <a href="#" className="hover:text-white transition-colors duration-300">
          ABOUT
        </a>
        <a href="#" className="hover:text-white transition-colors duration-300">
          CONTACT
        </a>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className="flex md:hidden text-white focus:outline-none z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu (Full screen, appearing from the left) */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-[#12131C] backdrop-blur-md transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:hidden z-40 flex flex-col items-center justify-center gap-8 text-lg tracking-widest font-bold text-gray-300`}
      >
        <a
          href="#"
          className="hover:text-white transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          GALLERY
        </a>
        <a
          href="#"
          className="hover:text-white transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          ABOUT
        </a>
        <a
          href="#"
          className="hover:text-white transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          CONTACT
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
