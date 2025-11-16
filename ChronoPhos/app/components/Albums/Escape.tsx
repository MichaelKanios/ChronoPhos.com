import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/shadcn-io/dialog";

import { Button } from "../ui/shadcn-io/button";

const EscapeTracks = [
  {
    title: "First Light",
    youtube: "https://www.youtube.com/embed/rxPozpmG1bU?si=7dMtkeAnzQCXRAZB",
    description:
      "A dark opening track with atmospheric guitars and evolving tension.",
  },
  {
    title: "Endless Road",
    youtube: "https://www.youtube.com/embed/6IoMFFi-71g?si=pEaL-7cP_FV83ADs",
    description:
      "Faster riffs and driving rhythm, representing the chaos of modern life.",
  },
  {
    title: "Wide Skies",
    youtube: "https://www.youtube.com/embed/ZsOui1o19G0?si=dWoeJcQ1ds1TJtby",
    description:
      "A melodic progression that feels like breathing after long pressure.",
  },
  {
    title: "Far Away",
    youtube: "https://www.youtube.com/embed/m6MHMySOf40?si=RfDoqwZSf7ZdRCaz",
    description: "A drifting instrumental representing mental escape.",
  },
  {
    title: "Crimson Line",
    youtube: "https://www.youtube.com/embed/8iW0BxAuefM?si=USJJulpaPZpHAiKG",
    description: "A heavier middle section with strong emotional push.",
  },
  {
    title: "The Horizon",
    youtube: "https://www.youtube.com/embed/9VPIiWEcmjU?si=9Arjy0HX6jhW7zcU",
    description:
      "Final track — emotional build-up ending in open space and release.",
  },
];

export default function Escape() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-yellow-500 text-black font-bold hover:bg-yellow-600 transition">
          Listen Now
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-y-auto bg-gray-900 text-white p-6">
        <DialogHeader className="mb-6">
          <DialogTitle className="text-3xl font-bold text-yellow-400">
            No Time — Tracklist
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
