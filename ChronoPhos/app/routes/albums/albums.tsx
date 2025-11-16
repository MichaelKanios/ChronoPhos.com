import { motion } from "framer-motion";
import { SplittingText } from "../../components/ui/shadcn-io/splitting-text";
import { Link } from "react-router-dom";
import Escape from "../../components/Albums/Escape";

const AlbumsPage = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Section 1 */}
      <div className="relative min-h-screen bg-[url(/images/1.jpg)] bg-cover bg-top rounded-2xl">
        <div className="absolute inset-0 bg-gray-800/20 rounded-2xl"></div>

        <div className="absolute inset-20 md:inset-40 text-white">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 font-chrono"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Discography
          </motion.h1>

          <motion.div
            className="text-m md:text-2xl mb-6 italic"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p>A new music chapter for me started in 2023. Dirty guitars,</p>
            <p>
              nervous riffs, deep ambience. Not built for radio — built for
              escape.
            </p>
            <p>Heavy instrumental music that pushes motion and imagination.</p>
            <SplittingText
              className="italic font-extralight text-yellow-400 tracking-[5px]"
              text="....Michael Kanios"
              inView={true}
              inViewOnce={true}
              inViewMargin="-50px"
            />
          </motion.div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="relative min-h-screen bg-[url(/images/11.jpg)] bg-cover bg-top rounded-2xl  ">
        <div className="absolute inset-0 bg-gray-800/20 outline-none"></div>

        <div className="absolute inset-20 md:inset-40 text-white">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 font-chrono"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            No Time
          </motion.h1>

          <motion.div
            className="text-m md:text-2xl mb-6 italic"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p>My debut album was released in 2024.</p>
            <p>
              Recorded between 2023 and 2024,{" "}
              <span>
                <SplittingText
                  className="italic font-bold text-yellow-400 tracking-[5px]"
                  text="No Time"
                  inView={true}
                  inViewOnce={true}
                  inViewMargin="-50px"
                />
              </span>{" "}
              is a journey through soundscapes that blend ambient textures with
              dynamic rhythms.
            </p>
            <p>
              When I first started the project, I wrote all the songs with
              lyrics in mind, but eventually decided to release it as an
              instrumental album.
            </p>
            <p>
              The lyrics I was writing felt too raw, too angry — maybe even
              offensive to some. So I chose to express those emotions through
              riffs and solos instead.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="relative min-h-screen bg-[url(/images/5.jpg)] bg-cover bg-center rounded-2xl">
        <div className="absolute inset-0 bg-gray-800/20 rounded-2xl"></div>

        <div className="absolute inset-20 md:inset-40 text-white">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 font-chrono"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Escape To The Horizon
          </motion.h1>

          <motion.div
            className="text-m md:text-2xl mb-6 italic"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p>
              My second album,{" "}
              <span>
                <SplittingText
                  className="italic font-bold text-yellow-400 tracking-[5px]"
                  text="Escape To The Horizon"
                  inView={true}
                  inViewOnce={true}
                  inViewMargin="-50px"
                />
              </span>{" "}
              , is a journey with ourselves.
            </p>
            <p>
              It’s about all the struggles, obstacles, and moments of doubt we
              meet along the way to our own sunset.
            </p>
            <p>
              The path is clear, but full of traps — emotions rise and fall,
              pushing the rhythm forward until it all reaches the peak.
            </p>
            <p>
              Melodic solos and powerful riffs will guide you through this
              journey and help you connect with it completely.
            </p>
          </motion.div>
          <Escape />
        </div>
      </div>
      <div className="relative min-h-screen bg-[url(/images/4.jpg)] bg-cover bg-top rounded-2xl">
        <div className="absolute inset-0 bg-gray-800/20 rounded-2xl"></div>

        <div className="absolute inset-20 md:inset-40 text-white">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 font-chrono"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Behind The Woolf
          </motion.h1>

          <motion.div
            className="text-m md:text-2xl mb-6 italic"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p>
              <span>
                <SplittingText
                  className="italic font-bold text-yellow-400 tracking-[5px]"
                  text="Behind The Wolf"
                  inView={true}
                  inViewOnce={true}
                  inViewMargin="-50px"
                />
              </span>{" "}
              is the first single from my upcoming album.
            </p>
            <p>
              We follow the wolf on a journey of survival through snowy,
              mysterious forests.
            </p>
            <p>
              The only goal is to endure — to protect ourselves and our pack.
            </p>
            <p>
              I’ll show you the way through the melodic path I’ve been creating
              for this story.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center items-center my-10">
        <Link
          className="font-chrono text-white text-center text-xl md:text-2xl 
    tracking-wide rounded  hover:bg-yellow-600 px-4 py-2 
    bg-gray-500 transition-colors duration-300"
          to="/"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default AlbumsPage;
