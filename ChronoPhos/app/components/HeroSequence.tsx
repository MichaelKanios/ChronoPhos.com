import { motion } from "framer-motion";

const videos: string[] = [
  "/videos/ChronoPhos.mov",
  "/videos/clip2.mp4",
  "/videos/clip3.mp4",
  "/videos/clip4.mp4",
];

export default function HeroSequence() {
  return (
    <section className="relative flex items-center justify-center h-screen w-full overflow-hidden bg-black">
      {/* Background progressive video sequence */}
      <div className="absolute inset-0 flex">
        {videos.map((src, i) => (
          <motion.video
            key={i}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            src={src}
            className="object-cover w-1/4 h-full opacity-0"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: i * 1.5, // καθυστέρηση για κάθε clip
              duration: 1.2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Overlay content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: videos.length * 1.2 }}
        >
          Chrono Phos
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: videos.length * 1.3 }}
        >
          Escape to the Horizon • Out Soon
        </motion.p>

        <motion.button
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: videos.length * 1.4 }}
        >
          Explore
        </motion.button>
      </div>

      {/* Optional gradient overlay για καλύτερο contrast */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-transparent" />
    </section>
  );
}
