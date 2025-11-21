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

      <div className="flex  items-center gap-6 h-[400px] w-full max-w-5xl mt-10 mx-auto">
        <div
          className="relative group grow transition-all w-56 h-[400px] duration-500 hover:w-full"
          tabIndex={0}
        >
          <img
            className="h-full w-full object-cover object-center rounded-3xl"
            src="./images/Gear/5.jpg"
            alt="image"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-all duration-300">
            <h1 className="text-3xl">Freak Caster</h1>
            <p className="text-sm md:text-m">
              Custom Partcaster Strat with old DiMarzio pickups: Heavy Blues 2
              in the bridge, Area 72 in the middle and neck. The neck and bridge
              are from a Fender Mexico model. Alder body, relic’d by me — it’s
              either from a Mexican or a US Fender, I honestly don’t remember.
            </p>
          </div>
        </div>
        <div className="relative group grow transition-all w-56 h-[400px] duration-500 hover:w-full">
          <img
            className="h-full w-full object-cover object-center rounded-3xl"
            src="./images/Gear/4.jpg"
            alt="image"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h1 className="text-3xl">Fender Strat USA '04</h1>
            <p className="text-sm md:text-m">
              Killer Hendrix–Woodstock-style sound with original Custom Shop ’69
              pickups. Reversed bridge pickup on the pickguard. This is the
              ultimate guitar for Hendrix and Gallagher vibes, delivering an
              authentic, vintage blues tone.
            </p>
          </div>
        </div>
        <div className="relative group grow transition-all w-56 h-[400px] duration-500 hover:w-full">
          <img
            className="h-full w-full object-cover object-center rounded-3xl"
            src="./images/Gear/6.jpg"
            alt="image"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h1 className="text-3xl">Blue Sage Rock n Roll </h1>
            <p className="text-sm md:text-m">
              This guitar was made by Melody in Italy, sometime in the late ’80s
              or early ’90s. It’s loaded with killer Shadow humbucker pickups.
              The body is likely cherry; I removed the old nitro finish and
              polished it with Tru-Oil, and it looks amazing. Great sound and
              sustain.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Guitars;
