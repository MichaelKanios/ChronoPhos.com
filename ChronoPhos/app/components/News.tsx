import { SplittingText } from "../components/ui/shadcn-io/splitting-text";
const News = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-6xl font-chrono text-center mt-8">
        News
      </h1>

      <div className="flex flex-col xl:flex-row  items-center mt-8 mb-16 ">
        <img
          height="500"
          width="500"
          className=" m:min-w-xl xl:min-w-2xl object-cover rounded-xl group-hover/card:shadow-xl"
          src="../../images/BehindStorie.png"
          alt="Behind"
        />

        <div className="mt-8 px-4 max-w-3xl mx-auto text-xl xl:text-2xl ">
          <div className="flex flex-col">
            <SplittingText
              className="text-2xl md:text-4xl text-yellow-300 "
              text="Behind the Wolf"
              inView={true}
              inViewOnce={true}
              inViewMargin="-50px"
            />
            <SplittingText
              className="mb-12 italic text-gray-500"
              text="...So let me tell you a story here."
              inView={true}
              inViewOnce={true}
              inViewMargin="-50px"
            />
          </div>

          <div className="text-gray-200 font-extralight">
            <p className="mb-4">
              <span className="text-yellow-300">Behind</span> the Wolf my new
              album. I believe it will be released sometime next year, and the
              first single is almost ready to see the light of day.{" "}
            </p>

            <p className="mb-4">
              The <span className="text-yellow-300">feeling </span>
              around this record is mixed — it might turn out heavier, maybe
              more melodic, maybe more atmospheric… but the emotion remains the
              same: music. Music that expresses everything I feel, about
              everything around me.
            </p>

            <p className="mb-4">
              Through this project, I find a way to express{" "}
              <span className="text-yellow-300">myself</span>, and I hope that
              emotion reaches you too. I don’t know if you’ll hear my voice on
              this album — maybe you will, who knows? But I promise you’ll hear
              my distorted tones and screaming guitars again, wrapped in soft,
              dreamy synth chords.
            </p>

            <p className="mb-4">
              {" "}
              So, <span className="text-red-400">support</span> me in any way
              you can — every bit of encouragement helps me find the time and
              inspiration to keep writing and creating.
            </p>
          </div>
          <div className="flex w-1/3 gap-3 ">
            <img
              className="border-2 p-2 mt-8 rounded-lg border-gray-600"
              src="../../images/wolf1.png"
              alt=""
            />
            <img
              className="border-2 p-2 mt-8 rounded-lg border-gray-600"
              src="../../images/wolf2.png"
              alt=""
            />
            <img
              className="border-2 p-2 mt-8 rounded-lg border-gray-600"
              src="../../images/wolf3.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default News;
