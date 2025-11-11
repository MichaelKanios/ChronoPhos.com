import { AspectRatio } from "../components/ui/shadcn-io/aspect-ratio"

const RealaseSample = () => {
  return (
    <>
      {/* --- FIRST --- */}
      <div className="flex flex-col md:flex-row w-full items-center gap-6 p-6 overflow-hidden">
        <video
          src="/videos/NewRelease.mov"
          autoPlay
          muted
          loop
          playsInline
          className="w-sm h-auto rounded-2xl shadow-2xl shadow-amber-100"
        />

        <div className="w-full">
          <div className="w-full max-w-2xl min-w-sm mx-auto">
            <h2 className="text-center font-semibold my-5 text-2xl">
              Listen Now 👉 On Youtube
            </h2>
            <AspectRatio ratio={16 / 9}>
              <iframe
                className="w-full h-full min-h-[220px] rounded-xl border-2 border-amber-100 shadow-2xl shadow-amber-100"
                src="https://www.youtube.com/embed/videoseries?si=3X_EB_PqXC6uS6D3&amp;list=PL008rsvtOFUCJGfubVbvnSP6xXSLK16vz"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </AspectRatio>
          </div>
        </div>
      </div>

      {/* --- SECOND --- */}
      <div className="flex flex-col md:flex-row w-full items-center gap-6 p-6 overflow-hidden">
        <video
          src="/videos/NoTime.mov"
          autoPlay
          muted
          loop
          playsInline
          className="w-sm h-auto rounded-2xl shadow-2xl shadow-amber-100"
        />

        <div className="w-full">
          <div className="w-full max-w-2xl min-w-sm mx-auto">
            <h2 className="text-center font-semibold my-5 text-2xl">
              Listen Now 👉 On Youtube
            </h2>
            <AspectRatio ratio={16 / 9}>
              <iframe
                className="w-full h-full min-h-[220px] rounded-xl border-2 border-amber-100 shadow-2xl shadow-amber-100"
                src="https://www.youtube.com/embed/LsI8vlo-zrE?si=dA9S_fK1zX4jRCpo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </AspectRatio>
          </div>
        </div>
      </div>
    </>
  )
}

export default RealaseSample
