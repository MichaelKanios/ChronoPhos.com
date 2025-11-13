import { Button } from "../ui/shadcn-io/button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "../ui/shadcn-io/drawer";

const noTimeTracks = [
  {
    title: "First Light",
    youtube: "https://www.youtube.com/embed/rxPozpmG1bU?si=7dMtkeAnzQCXRAZB",
    description:
      "A dark opening track with atmospheric guitars and evolving tension.",
  },
  {
    title: "Endless Road",
    youtube: "https://www.youtube.com/embed/yyyyyyy",
    description:
      "Faster riffs and driving rhythm, representing the chaos of modern life.",
  },
  {
    title: "Wide Skies",
    youtube: "https://www.youtube.com/embed/zzzzzzz",
    description:
      "A melodic progression that feels like breathing after long pressure.",
  },
  {
    title: "Far Away",
    youtube: "https://www.youtube.com/embed/aaaaaaa",
    description: "A drifting instrumental representing mental escape.",
  },
  {
    title: "Crimson Line",
    youtube: "https://www.youtube.com/embed/bbbbbbb",
    description: "A heavier middle section with strong emotional push.",
  },
  {
    title: "The Horizon",
    youtube: "https://www.youtube.com/embed/ccccccc",
    description:
      "Final track — emotional build-up ending in open space and release.",
  },
];

export default function NoTime() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="bg-yellow-500 text-black font-bold hover:bg-yellow-600 transition">
          Listen Now
        </Button>
      </DrawerTrigger>

      <DrawerContent className="h-[90vh] overflow-y-auto p-6 bg-gray-900 text-white">
        <DrawerHeader className="mb-6">
          <DrawerTitle className="text-3xl font-bold text-yellow-400">
            No Time — Tracklist
          </DrawerTitle>
        </DrawerHeader>

        <div className="space-y-12">
          {noTimeTracks.map((track, index) => (
            <div key={index} className="space-y-3">
              {/* Track Number & Title */}
              <h3 className="text-2xl font-bold text-yellow-300">
                {index + 1}. {track.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300">{track.description}</p>

              {/* YouTube Embed (small) */}
              <div className=" overflow-hidden ">
                <iframe
                  className="w-1/2 h-full"
                  src={track.youtube}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <DrawerClose asChild>
            <Button
              variant="outline"
              className="bg-yellow-500 text-black font-bold hover:bg-yellow-600 transition"
            >
              Close
            </Button>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
