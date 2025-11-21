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
      <div
        className="max-w-[720px] w-full mx-auto mt-12 group transition duration-300
    rounded-2xl border border-white/10
    shadow-[0_0_20px_rgba(255,255,255,0.06)]
    hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]
    overflow-hidden"
      >
        <div className="bg-[url(/images/Gear/Orange.PNG)] bg-cover bg-center w-full h-96 "></div>

        <div className="bg-white/5 backdrop-blur-sm p-4 flex flex-col items-center">
          <p className="text-m text-yellow-400 font-medium mt-3 text-center">
            Orange Head Micro Terror
          </p>

          <h3 className="text-base text-white font-light mt-2 text-center">
            My main amp setup — warm mids, tight low end, and the signature
            Orange grit that shapes my core tone.I use it with Seventy 80
            Celestion speaker.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default StompBoxes;
