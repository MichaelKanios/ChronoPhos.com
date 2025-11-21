import { stompData } from "~/data/stompData";

const StompBoxes = () => {
  return (
    <div className="mt-12 ">
      <h1 className="text-3xl font-semibold text-center mx-auto">
        Chrono-boxes
      </h1>

      <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
        Here’s where all the magic happens — the heart of my sound and the place
        where everything gets mixed and transformed.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-8 pt-12">
        {stompData.map((stom) => (
          <div
            key={stom.id}
            className="
        max-w-72 w-full group transition duration-300
        bg-white/5 backdrop-blur-sm
        rounded-2xl border border-white/10
        shadow-[0_0_20px_rgba(255,255,255,0.06)]
        hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]
        p-4
      "
          >
            <div className="relative rounded-xl overflow-hidden">
              <img
                className="size-56 mx-auto object-contain transition-transform duration-300 group-hover:scale-110"
                src={stom.image}
                alt={stom.name}
              />
            </div>

            <p className="text-m text-yellow-400 font-medium mt-3 text-center">
              {stom.name}
            </p>

            <h3 className="text-base text-white font-light mt-2 text-center">
              {stom.description}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StompBoxes;
