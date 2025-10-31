import HeroSequence from "~/components/HeroSequence";
import ScrollText from "~/components/ScrollText";
import type { Route } from "./+types/home";
import Albums from "~/components/Albums";

export default function Home() {
  return (
    <div>
      <HeroSequence />
      <ScrollText />
      <Albums />
    </div>
  );
}
