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
import type { IconType } from "react-icons";

export interface SocialIcon {
  id: number;
  icon: IconType;
  href: string;
  color: string;
}

export const socialIcons: SocialIcon[] = [
  {
    id: 1,
    icon: FaYoutube,
    href: "https://www.youtube.com/@ChronoPhos",
    color:
      "xl:w-8 xl:h-8 md:w-6 md:h-6 text-red-700 hover:text-red-500 transition-colors",
  },
  {
    id: 2,
    icon: FaBandcamp,
    href: "https://chronophos.bandcamp.com/",
    color:
      "xl:w-8 xl:h-8 md:w-6 md:h-6 text-indigo-500 hover:text-indigo-300 transition-colors duration-300",
  },
  {
    id: 3,
    icon: SiApplemusic,
    href: "https://music.apple.com/us/artist/chrono-phos/1777943622",
    color:
      "xl:w-8 xl:h-8 md:w-6 md:h-6 text-red-600 hover:text-red-400 transition-colors duration-300",
  },
  {
    id: 4,
    icon: FaSpotify,
    href: "https://open.spotify.com/artist/07uUaAZtYgObH3SZXW0zqC?si=elszA-E3TV-920yJjtbIJg",
    color:
      "xl:w-8 xl:h-8 md:w-6 md:h-6 text-green-500 hover:text-green-300 transition-colors duration-300",
  },
  {
    id: 5,
    icon: FaFacebook,
    href: "https://www.facebook.com/people/Chrono-Phos/61567608567776/",
    color:
      "xl:w-8 xl:h-8 md:w-6 md:h-6 text-blue-500 hover:text-blue-300 transition-colors duration-300",
  },
  {
    id: 6,
    icon: FaInstagram,
    href: "https://www.instagram.com/chronophos_mk",
    color:
      "xl:w-8 xl:h-8 md:w-6 md:h-6 text-pink-600 hover:text-pink-400 transition-colors duration-300",
  },
];

export interface MenuItem {
  id: number;
  name: string;
  page: string;
}

export const menuItems: MenuItem[] = [
  { id: 1, name: "Home", page: "./" },
  { id: 2, name: "Albums", page: "./albums" },
  { id: 3, name: "Gear", page: "./gear" },
  { id: 4, name: "Photos", page: "./photos" },
  { id: 5, name: "Lessons", page: "./lessons" },
  { id: 6, name: "Who am I", page: "./who" },
];
