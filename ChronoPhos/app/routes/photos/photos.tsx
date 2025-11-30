import Gallery from "~/components/Gallery";

import { Link } from "react-router-dom";

const Photos = () => {
  return (
    <div className="text-center">
      <Gallery />

      <Link
        className="font-chrono text-white text-center text-xl md:text-2xl 
    tracking-wide rounded  hover:bg-yellow-600  px-4 py-2 
    bg-gray-500 transition-colors duration-300 z-10 mt-4 inline-block"
        to="/"
      >
        Back to home
      </Link>
    </div>
  );
};

export default Photos;
