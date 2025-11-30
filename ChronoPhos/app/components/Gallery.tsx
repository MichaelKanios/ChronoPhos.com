import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const columns = [
  [
    "/images/Escape1.webp",
    "/images/8.jpg",
    "/images/Escape2.webp",
    "/images/Escape3.webp",
    
  ],
  ["/images/10.jpg", "/images/Gallery (1).png", "/images/Michael (1).jpg"],
  ["/images/Michael (2).jpg", "/images/7.jpg", "/images/Gallery (2).png"],
  [
    "/images/Gallery (3).png",
    "/images/Michael (2).png",
    "/images/Gallery (4).png",
  ],
];

export default function Gallery() {
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setLightboxImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h1 className="text-3xl font-semibold text-center mx-auto">
        Explore the Chrono-Library
      </h1>

      <p className="text-m text-slate-500 text-center mb-6 max-w-lg mx-auto">
        Where sound becomes image. A collection of visual stories echoing the
        energy and spirit of Chrono-Phos.
      </p>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 gap-2"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {columns.map((col, colIndex) => (
          <div key={colIndex} className="space-y-2">
            {col.map((src, imgIndex) => (
              <motion.img
                key={imgIndex}
                src={src}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-full h-auto object-cover rounded-lg shadow-sm cursor-pointer"
                alt=""
                onClick={() => setLightboxImage(src)}
              />
            ))}
          </div>
        ))}
      </motion.div>

      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
          >
            <motion.img
              src={lightboxImage}
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking the image
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
