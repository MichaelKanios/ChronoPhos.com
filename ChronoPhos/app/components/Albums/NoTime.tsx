import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/shadcn-io/dialog";

import { Button } from "../ui/shadcn-io/button";
import { SplittingText } from "../../components/ui/shadcn-io/splitting-text";

const NoTimeTracks = [
  {
    title: "Frozen in Time",
    youtube: "https://www.youtube.com/embed/LsI8vlo-zrE?si=Eep1geW55Qej-Dpu",
    description:
      "“Frozen in Time” is the opening track from the album No Time by Chrono Phos. A powerful instrumental piece that blends heavy, immersive riffs with an eerie, time-warping atmosphere",
  },
  {
    title: "Chrono Collapse",
    youtube: "https://www.youtube.com/embed/fbflYS0HxmY?si=BjTq1BOny_Nq3Gir",
    description:
      "Chrono Collapse” is the second track from the album No Time by Chrono Phos. This instrumental piece blends dark hard rock with intense, nervous riffs and electrifying solos.",
  },
  {
    title: "Travel Without Fear",
    youtube: "https://www.youtube.com/embed/wF7Gk0O6m1A?si=u7Ycbc1r2ixZ6P_r",
    description:
      "Travel Without Fear” is the third track from the album No Time by Chrono Phos. This instrumental piece takes you on a high-energy journey filled with powerful riffs and atmospheric melodies.",
  },
  {
    title: "Echoes of Yesterday",
    youtube: "https://www.youtube.com/embed/QXvEIeFo3R8?si=Qfu90cG1lyGBke8w",
    description:
      "Echoes of Yesterday” is the fourth track from the album No Time by Chrono Phos. This instrumental piece blends haunting melodies with powerful riffs, taking you on a journey through time and memory.",
  },
  {
    title: "Against the Clock",
    youtube: "https://www.youtube.com/embed/ygHbJUaumNQ?si=IQqIIWOxvurpHTw_",
    description:
      "Against the Clock” is the fifth track from the album No Time by Chrono Phos. This high-energy instrumental combines intense riffs and driving rhythms, capturing the urgency of time slipping away.",
  },
  {
    title: "Eternal Drift",
    youtube: "https://www.youtube.com/embed/dplpXgD8GoI?si=eZ3WikfDHWMfGRwu",
    description:
      "Eternal Drift” is the sixth track from the album No Time by Chrono Phos. This atmospheric instrumental takes you on a hypnotic journey, blending deep grooves and ethereal melodies with a sense of endless motion.",
  },
  {
    title: "Timewave",
    youtube: "https://www.youtube.com/embed/PLYe3TDEtMw?si=3P7Pa5l4xDqfDLVy",
    description:
      " The seventh track from No Time, Timewave is a high-energy ride through time and sound. It kicks off with driving riffs and relentless momentum, only to break into a melodic shift that pulls you into a hypnotic flow—before launching back into full force.",
  },
  {
    title: "No Time",
    youtube: "https://www.youtube.com/embed/cDqSiew0t2g?si=_3R_f1toAnO63sVl",
    description:
      "The eighth and final track from the debut album No Time. This instrumental closes the journey with a heavy, immersive sound that blends thick grooves, dark atmosphere, and intense guitar work. A bass-driven storm that leaves no room to breathe—just raw emotion and momentum.",
  },
];

export default function NoTime() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-yellow-500 text-black font-bold hover:bg-yellow-600 transition ">
          <SplittingText
            className="italic semibold text-black tracking-[5px]"
            text="Listen Now"
            inView={true}
            inViewOnce={true}
            inViewMargin="-50px"
          />
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-y-auto bg-gray-900 text-white p-6">
        <DialogHeader className="mb-6">
          <DialogTitle className="text-3xl font-bold text-yellow-400">
            No Time — Tracklist
          </DialogTitle>
          <DialogDescription className="text-gray-300">
            Explore the full tracklist from No Time Album.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-12">
          {NoTimeTracks.map((track, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-2xl font-bold text-yellow-300">
                {index + 1}. {track.title}
              </h3>

              <p className="text-gray-300">{track.description}</p>

              <div className="overflow-hidden">
                <iframe
                  className="w-full h-48 md:h-64 rounded-lg"
                  src={track.youtube}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
