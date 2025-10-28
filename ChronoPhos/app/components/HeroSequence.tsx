import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const videos: string[] = [
  "/videos/1.mp4",
  "/videos/3.mp4",
  "/videos/2.mp4",
  "/videos/4.mp4",
];

export default function HeroSequence() {
  const refs = useRef<HTMLVideoElement[]>([]);

  useEffect(() => {
    // καθυστερεί κάθε autoplay με βάση το index
    refs.current.forEach((video, i) => {
      if (!video) return;
      setTimeout(() => {
        video.play();
      }, i * 1000); // 1 δευτερόλεπτο καθυστέρηση ανά βίντεο
    });
  }, []);

  return (
    <section className="relative flex items-center justify-center h-[80vh] bg-black overflow-hidden w-full rounded-3xl">
      <div className="absolute inset-0 flex">
        {videos.map((src, i) => (
          <motion.video
            key={i}
            ref={(el) => el && (refs.current[i] = el)}
            muted
            playsInline
            preload="auto"
            loop={false}
            src={src}
            className="object-cover md:object-contain w-full h-full opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: i * 1, // καθυστέρηση για το fade-in
              duration: 1.2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Overlay */}
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

      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-transparent" />
    </section>
  );
}
