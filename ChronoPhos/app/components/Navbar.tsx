import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaBandcamp } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 w-full px-8 fixed top-0 left-0 right-0 z-50 bg-transparent">
      <img
        src="app/assets/images/file.png"
        alt="Chrono Phos Logo"
        className="xl:w-24 md:w-20 w-20"
      />
      <button id="menu-toggle" className="text-white text-3xl md:hidden">
        ☰
      </button>
      <nav className="hidden md:flex mx-auto custom-font">
        <ul className="flex space-x-8 text-xl text-white tracking-wider md:text-base xl:text-xl">
          <li>
            <a href="#who-am-i" id="open-popup" className="hover:underline ">
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
      <div
        id="social-icons"
        className="hidden md:flex xl:space-x-4 md:space-x-2"
      >
        <a
          href="https://www.youtube.com/@ChronoPhos"
          target="_blank"
          className="transform transition-transform duration-300 hover:scale-125"
        >
          <FaYoutube className="xl:w-8 xl:h-8 md:w-6 md:h-6  text-red-700 hover:text-red-500 transition-colors duration-300" />
        </a>
        <a
          href="https://chronophos.bandcamp.com/music"
          target="_blank"
          className="transform transition-transform duration-300 hover:scale-125"
        >
          <FaBandcamp className="xl:w-8 xl:h-8 md:w-6 md:h-6 rounded-full text-indigo-500 hover:text-indigo-300 transition-colors duration-300 " />
        </a>
        <a
          href="https://chronophos.bandcamp.com/music"
          target="_blank"
          className="transform transition-transform duration-300 hover:scale-125"
        >
          <img
            src="app/assets/images/bandcamp.png"
            alt="Chrono Phos Bandcamp"
            className="xl:w-8 xl:h-8 md:w-6 md:h-6 rounded-full"
          />
        </a>
        <a
          href="https://spotify.com"
          target="_blank"
          className="transform transition-transform duration-300 hover:scale-125"
        >
          <img
            src="app/assets/images/spotify.png"
            alt="Chrono Phos Spotify"
            className="xl:w-8 xl:h-8 md:w-6 md:h-6"
          />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=61567174657178"
          target="_blank"
          className="transform transition-transform duration-300 hover:scale-125"
        >
          <FaFacebook className="xl:w-8 xl:h-8 md:w-6 md:h-6 text-blue-500 hover:text-blue-300 transition-colors duration-300" />
        </a>
        <a
          href="https://www.instagram.com/chronophos_mk/"
          target="_blank"
          className="transform transition-transform duration-300 hover:scale-125"
        >
          <FaInstagram className="xl:w-8 xl:h-8 md:w-6 md:h-6 text-pink-600 hover:text-pink-400 transition-colors duration-300" />
        </a>
      </div>
    </div>
  );
};
export default Navbar;
