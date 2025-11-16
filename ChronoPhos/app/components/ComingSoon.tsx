const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gray-900/10 flex flex-col items-center justify-center    relative px-6">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-90 bg-[url(/images/ArtWolf.jpg)]"></div>

      <h1 className="text-4xl md:text-7xl text-white font-bold mb-6 mt-22 z-10">
        Coming Soon
      </h1>

      <p className="text-white text-m md:text-2xl z-10">
        I am working hard to bring you something amazing. Stay tuned!
      </p>
    </div>
  );
};

export default ComingSoon;
