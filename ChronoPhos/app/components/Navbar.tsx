import { useState } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaBandcamp,
  FaTimes,
  FaBars,
  FaSpotify,
} from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";

const socialIcons = [
  { 
    id: 1,
    icon: FaYoutube,
    href: "https://www.youtube.com/@ChronoPhos",
    color: "xl:w-8 xl:h-8 md:w-6 md:h-6 text-red-700 hover:text-red-500 transition-colors",
  },
  {
    id: 2,
    icon: FaBandcamp,
    href: "https://chronophos.bandcamp.com/",
    color: "xl:w-8 xl:h-8 md:w-6 md:h-6 text-indigo-500 hover:text-indigo-300 transition-colors duration-300",
  },
   {
    id: 3,
    icon: SiApplemusic,
    href: "https://music.apple.com/us/artist/chrono-phos/1777943622",
    color: "xl:w-8 xl:h-8 md:w-6 md:h-6 text-red-600 hover:text-red-400 transition-colors duration-300",
  },
   {
    id: 4,
    icon: FaSpotify,
    href: "https://open.spotify.com/artist/07uUaAZtYgObH3SZXW0zqC?si=elszA-E3TV-920yJjtbIJg",
    color: "xl:w-8 xl:h-8 md:w-6 md:h-6 text-green-500 hover:text-green-300 transition-colors duration-300",
  },
   {
    id: 5,
    icon: FaFacebook,
    href: "https://www.facebook.com/people/Chrono-Phos/61567608567776/",
    color: "xl:w-8 xl:h-8 md:w-6 md:h-6 text-blue-500 hover:text-blue-300 transition-colors duration-300",
  },
  {
    id: 6,
    icon: FaInstagram,
    href: "https://www.instagram.com/chronophos_mk",
    color: "xl:w-8 xl:h-8 md:w-6 md:h-6 text-pink-600 hover:text-pink-400 transition-colors duration-300",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);  
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <div className="flex justify-between items-center font-chrono py-4 w-full px-8 fixed top-0 left-0 right-0 z-50 bg-transparent">
      {/* Logo */}
      <img
        src="app/assets/images/file.png"
        alt="Chrono Phos Logo"
        className="xl:w-24 md:w-20 w-20"
      />

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-white text-2xl md:hidden z-[60]"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex mx-auto custom-font">
        <ul className="flex space-x-8 text-xl text-white xl:text-2xl">
          <li>
            <a href="#who-am-i" className="hover:underline">
              Who am I
            </a>
          </li>
          <li>
            <a href="#news" className="hover:underline">
              News
            </a>
          </li>
          <li>
            <a href="#releases" className="hover:underline">
              Releases
            </a>
          </li>
          <li>
            <a href="#photos" className="hover:underline">
              Photos
            </a>
          </li>
          <li>
            <a href="#videos" className="hover:underline">
              Videos
            </a>
          </li>
          <li>
            <a href="#gear" className="hover:underline">
              Gear
            </a>
          </li>
        </ul>
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
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black transition-transform duration-300 transform z-50 custom-font 
          ${menuOpen ? "translate-x-0" : "translate-x-[110%]"}`}
      >
        <ul className="flex flex-col items-center space-y-4 py-8 text-white">
          <li>
            <a
              href="#who-am-i"
              onClick={handleLinkClick}
              className="hover:underline text-xl"
            >
              Who am I
            </a>
          </li>
          <li>
            <a
              href="#news"
              onClick={handleLinkClick}
              className="hover:underline text-xl"
            >
              News
            </a>
          </li>
          <li>
            <a
              href="#releases"
              onClick={handleLinkClick}
              className="hover:underline text-xl"
            >
              Releases
            </a>
          </li>
          <li>
            <a
              href="#photos"
              onClick={handleLinkClick}
              className="hover:underline text-xl"
            >
              Photos
            </a>
          </li>
          <li>
            <a
              href="#videos"
              onClick={handleLinkClick}
              className="hover:underline text-xl"
            >
              Videos
            </a>
          </li>
          <li>
            <a
              href="#gear"
              onClick={handleLinkClick}
              className="hover:underline text-xl"
            >
              Gear
            </a>
          </li>
        </ul>

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
