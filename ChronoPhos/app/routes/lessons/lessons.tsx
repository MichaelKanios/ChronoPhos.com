import ComingSoon from "../../components/ComingSoon";
import { Link } from "react-router-dom";
const Lessons = () => {
  return (
    <div className="text-center">
      <ComingSoon />
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
export default Lessons;
