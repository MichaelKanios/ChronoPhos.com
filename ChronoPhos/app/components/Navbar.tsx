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
          href="https://chronoPhos.bandcamp.com/album/no-time"
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
          href="https://youtube.com"
          target="_blank"
          className="transform transition-transform duration-300 hover:scale-125"
        >
          <img
            src="app/assets/images/youtube.png"
            alt="Chrono Phos YouTube"
            className="xl:w-8 xl:h-8 md:w-6 md:h-6"
          />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61567174657178"
          target="_blank"
          className="transform transition-transform duration-300 hover:scale-125"
        >
          <img
            src="app/assets/images/facebook.png"
            alt="Chrono Phos Facebook"
            className="xl:w-8 xl:h-8 md:w-6 md:h-6"
          />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61567174657178"
          target="_blank"
          className="transform transition-transform duration-300 hover:scale-125"
        >
          <img
            src="app/assets/images/facebook.png"
            alt="Chrono Phos Facebook"
            className="xl:w-8 xl:h-8 md:w-6 md:h-6"
          />
        </a>
      </div>
    </div>
  );
};
export default Navbar;
