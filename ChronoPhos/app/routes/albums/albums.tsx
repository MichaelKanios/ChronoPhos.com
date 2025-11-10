import {motion} from "framer-motion"
const AlbumsPage = () => {
  return (
  <div className=" ">

    <div className="relative size-full ">

      <img className=""src="/images/1.jpg" alt="" />
      <div className="absolute inset-0 bg-gray-800/20 rounded-2xl"></div>

      <div className="absolute inset-20 md:inset-40 ">
        
         <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 font-chrono"
           initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
      >
      Discography
    </motion.h1>
     <motion.p
      className="text-lg md:text-2xl mb-6 italic "
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
     A new music chapter for me started in 2023. Dirty guitars, 
     nervous riffs, deep ambience. Not built for radio — built for escape. 
     Heavy instrumental music that pushes motion and imagination.
    </motion.p>
      
       </div>

    </div>
     
    <div className="relative size-full">

      <img className=""src="/images/3.jpg" alt="" />
      <div className="absolute inset-0 bg-gray-800/20 rounded-2xl"></div>

      <div className="absolute inset-20 md:inset-40 ">

    </div>
 
</div>
</div>

  );
};

export default AlbumsPage;
