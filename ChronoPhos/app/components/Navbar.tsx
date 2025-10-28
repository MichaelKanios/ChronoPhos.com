import { useState } from "react";
import { NavLink } from "react-router-dom";
import { socialIcons, menuItems } from "app/data/navbarData.ts";
import { FaTimes, FaBars } from "react-icons/fa";

const base =
  "transform transition-transform duration-300 hover:scale-125 hover:text-yellow-400";
const active = "text-yellow-400 font-semibold";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <div className="flex justify-between items-center font-chrono py-4 w-full px-8 mt-0.5 md:fixed top-0 left-0 right-0 z-50 bg-gray-950 md:bg-gray-950/50 md:backdrop-blur-sm">
      {/* Logo */}
      <img
        src="/images/file.png"
        alt="Chrono Phos Logo"
        className="xl:w-24 md:w-20 w-20"
      />

      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setMenuOpen((prev) => !prev)}
        className="relative z-60 text-white text-2xl md:hidden"
        aria-label="Toggle Menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex mx-auto custom-font">
        <div className="flex space-x-8 text-xl text-white xl:text-2xl">
          {menuItems.map((menuitem) => (
            <NavLink
              key={menuitem.id}
              to={menuitem.page}
              className={({ isActive }) => (isActive ? active : base)}
            >
              {menuitem.name}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Desktop Social Icons */}
      <div className="hidden md:flex xl:space-x-4 md:space-x-2">
        {socialIcons.map(({ id, icon: Icon, href, color }) => (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-125"
          >
            <Icon className={color} />
          </a>
        ))}
      </div>

      {/* Overlay όταν ανοίγει το mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 bg-opacity-95 transition-transform duration-300 transform z-50 md:hidden custom-font 
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col items-center space-y-4 py-8 text-white">
          {menuItems.map((menuitem) => (
            <NavLink
              key={menuitem.id}
              to={menuitem.page}
              onClick={handleLinkClick}
              className="hover:underline text-xl"
            >
              {menuitem.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Social Icons */}
        <div className="flex space-x-4 mt-4 justify-center text-2xl">
          {socialIcons.map(({ id, icon: Icon, href, color }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform duration-300 hover:scale-125"
            >
              <Icon className={color} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
