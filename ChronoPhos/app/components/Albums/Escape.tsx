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

const EscapeTracks = [
  {
    title: "First Light",
    youtube: "https://www.youtube.com/embed/rxPozpmG1bU?si=7dMtkeAnzQCXRAZB",
    description:
      "The opening track of Escape to the Horizon — a bright, hopeful introduction with layered guitars and sunrise energy.",
  },
  {
    title: "Endless Road",
    youtube: "https://www.youtube.com/embed/6IoMFFi-71g?si=pEaL-7cP_FV83ADs",
    description:
      "An atmospheric journey toward a cinematic sunset, featuring a sudden burst of rain captured in a sharp, nervous solo.",
  },
  {
    title: "Wide Skies",
    youtube: "https://www.youtube.com/embed/ZsOui1o19G0?si=dWoeJcQ1ds1TJtby",
    description:
      "Mixed emotions under vast skies — hopeful yet melancholic melodies reflecting the tension and the cost of the journey.",
  },
  {
    title: "Far Away",
    youtube: "https://www.youtube.com/embed/m6MHMySOf40?si=RfDoqwZSf7ZdRCaz",
    description:
      "The road opens wide — raw emotions and forgotten souls everywhere, driven by strength and determination to continue.",
  },
  {
    title: "Crimson Line",
    youtube: "https://www.youtube.com/embed/8iW0BxAuefM?si=USJJulpaPZpHAiKG",
    description:
      "Close to the sunset now — melodies calm into optimism and joy, yet a lingering mystery holds the mind back.",
  },
  {
    title: "The Horizon",
    youtube: "https://www.youtube.com/embed/9VPIiWEcmjU?si=9Arjy0HX6jhW7zcU",
    description:
      "The final steps before redemption — rising flame, unstoppable strength, and an explosive solo leading to a soft, peaceful ending.",
  },
];

export default function Escape() {
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
            Escape To The Horizon — Tracklist
          </DialogTitle>
          <DialogDescription className="text-gray-300">
            Explore the full tracklist from Escape to the Horizon.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-12">
          {EscapeTracks.map((track, index) => (
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
