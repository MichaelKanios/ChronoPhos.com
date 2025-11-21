const Guitars = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold text-center mx-auto ">
        The Sound Of Chrono Phos
      </h1>
      <p className="text-m text-slate-500 text-center mt-2 max-w-lg mx-auto">
        “Dive into the Chrono Phos sound: guitars, pedals, amps, picks, strings,
        and all the gear behind my recordings.”
      </p>

<div className="flex flex-col md:flex-row items-center gap-6 h-auto w-full max-w-5xl mt-10 mx-auto">
  <div className="relative group grow w-full md:w-56 h-[400px] transition-all duration-500 hover:w-full">
    <img
      className="h-full w-full object-cover object-center rounded-3xl"
      src="./images/Gear/5.jpg"
      alt="image"
    />
    <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50
                    opacity-100 sm:opacity-100 md:opacity-0 group-hover:md:opacity-100 transition-all duration-300">
      <h1 className="text-3xl">Freak Caster</h1>
      <p className="text-sm md:text-m">
        Custom Partcaster Strat with old DiMarzio pickups...
      </p>
    </div>
  </div>

  <div className="relative group grow w-full md:w-56 h-[400px] transition-all duration-500 hover:w-full">
    <img
      className="h-full w-full object-cover object-center rounded-3xl"
      src="./images/Gear/4.jpg"
      alt="image"
    />
    <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50
                    opacity-100 sm:opacity-100 md:opacity-0 group-hover:md:opacity-100 transition-all duration-300">
      <h1 className="text-3xl">Fender Strat USA '04</h1>
      <p className="text-sm md:text-m">
        Killer Hendrix–Woodstock-style sound...
      </p>
    </div>
  </div>

  <div className="relative group grow w-full md:w-56 h-[400px] transition-all duration-500 hover:w-full">
    <img
      className="h-full w-full object-cover object-center rounded-3xl"
      src="./images/Gear/6.jpg"
      alt="image"
    />
    <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50
                    opacity-100 sm:opacity-100 md:opacity-0 group-hover:md:opacity-100 transition-all duration-300">
      <h1 className="text-3xl">Blue Sage Rock n Roll</h1>
      <p className="text-sm md:text-m">
        This guitar was made by Melody in Italy...
      </p>
    </div>
  </div>
</div>

    </>
  );
};
export default Guitars;
