import { useState } from "react";
import { NavLink } from "react-router-dom";
import navLogo from "../../assets/navlogo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `hover:opacity-70 transition ${
      isActive ? "border-b-2 border-black pb-1" : ""
    }`;

  const mobileLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `${isActive ? "font-medium underline" : ""}`;

  return (
    <nav className="w-full bg-[#FFFDEC] border-b border-black/50">
      
      {/* Container */}
      <div className="w-full max-w-[1440px] mx-auto h-[72px] px-4 sm:px-8 lg:px-[64px] flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/">
          <img
            src={navLogo}
            alt="Reve Patisserie Logo"
            className="w-[90px] sm:w-[100px] h-[60px] sm:h-[65px] object-contain"
          />
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-8 text-black text-base font-normal">
          <NavLink to="/about" className={linkClasses}>About Us</NavLink>
          <NavLink to="/cakes" className={linkClasses}>Cakes</NavLink>
          <NavLink to="/custom-orders" className={linkClasses}>Custom Orders</NavLink>
          <NavLink to="/chocolates" className={linkClasses}>Chocolates</NavLink>
          <NavLink to="/workshops" className={linkClasses}>Workshops</NavLink>
          <NavLink to="/hamper" className={linkClasses}>Hamper</NavLink>
        </div>

        {/* Desktop Contact Button */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `hidden lg:block bg-black text-white px-6 py-2 text-sm font-normal transition hover:bg-gray-800 ${
              isActive ? "ring-2 ring-black ring-offset-2" : ""
            }`
          }
        >
          Contact Now
        </NavLink>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#FFFDEC] border-t border-black/20 px-6 py-6 flex flex-col gap-4 text-black text-base">

          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={mobileLinkClasses}
          >
            About Us
          </NavLink>

          <NavLink
            to="/cakes"
            onClick={() => setIsOpen(false)}
            className={mobileLinkClasses}
          >
            Cakes
          </NavLink>

          <NavLink
            to="/custom-orders"
            onClick={() => setIsOpen(false)}
            className={mobileLinkClasses}
          >
            Custom Orders
          </NavLink>

          <NavLink
            to="/chocolates"
            onClick={() => setIsOpen(false)}
            className={mobileLinkClasses}
          >
            Chocolates
          </NavLink>

          <NavLink
            to="/workshops"
            onClick={() => setIsOpen(false)}
            className={mobileLinkClasses}
          >
            Workshops
          </NavLink>

          <NavLink
            to="/hamper"
            onClick={() => setIsOpen(false)}
            className={mobileLinkClasses}
          >
            Hamper
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `bg-black text-white px-6 py-2 text-sm font-normal mt-4 text-center ${
                isActive ? "ring-2 ring-black ring-offset-2" : ""
              }`
            }
          >
            Contact Now
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;