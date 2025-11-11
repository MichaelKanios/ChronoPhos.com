import { motion } from "framer-motion";

const AlbumsPage = () => {
  return (
    <div className="w-full">
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
            className="text-lg md:text-2xl mb-6 italic"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p>A new music chapter for me started in 2023. Dirty guitars,</p>
            <p>
              nervous riffs, deep ambience. Not built for radio — built for
              escape.
            </p>
            <p>Heavy instrumental music that pushes motion and imagination.</p>
          </motion.div>
        </div>
      </div>

      {/* Section 2 */}
     <div className="relative min-h-screen bg-[url(/images/11.jpg)] bg-cover bg-top rounded-2xl ">
        <div className="absolute inset-0 bg-gray-800/20 rounded-2xl"></div>

        <div className="absolute inset-20 md:inset-40 text-white">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 font-chrono"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            No Time
          </motion.h1>

          <motion.div
            className="text-lg md:text-2xl mb-6 italic"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
           <p>My debut album was released in 2024.</p>
<p>
  Recorded between 2023 and 2024, <em>No Time</em> is a journey through soundscapes
  that blend ambient textures with dynamic rhythms.
</p>
<p>
  When I first started the project, I wrote all the songs with lyrics in mind,
  but eventually decided to release it as an instrumental album.
</p>
<p>
  The lyrics I was writing felt too raw, too angry — maybe even offensive to some.
  So I chose to express those emotions through riffs and solos instead.
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
            animate={{ opacity: 1, y: 0 }}
          >
            Escape To The Horizon
          </motion.h1>

          <motion.div
            className="text-lg md:text-2xl mb-6 italic"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
           <p>My debut album was released in 2024.</p>
<p>
  Recorded between 2023 and 2024, <em>No Time</em> is a journey through soundscapes
  that blend ambient textures with dynamic rhythms.
</p>
<p>
  When I first started the project, I wrote all the songs with lyrics in mind,
  but eventually decided to release it as an instrumental album.
</p>
<p>
  The lyrics I was writing felt too raw, too angry — maybe even offensive to some.
  So I chose to express those emotions through riffs and solos instead.
</p>

          </motion.div>
        </div>
      </div>
        <div className="relative min-h-screen bg-[url(/images/4.jpg)] bg-cover bg-top rounded-2xl">
        <div className="absolute inset-0 bg-gray-800/20 rounded-2xl"></div>

        <div className="absolute inset-20 md:inset-40 text-white">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 font-chrono"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Behind The Woolf
          </motion.h1>

          <motion.div
            className="text-lg md:text-2xl mb-6 italic"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p>A new music chapter for me started in 2023. Dirty guitars,</p>
            <p>
              nervous riffs, deep ambience. Not built for radio — built for
              escape.
            </p>
            <p>Heavy instrumental music that pushes motion and imagination.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AlbumsPage;
