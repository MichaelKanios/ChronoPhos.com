import HeroSequence from "~/components/HeroSequence";
import ScrollText from "~/components/ScrollText";
import type { Route } from "./+types/home";
import Albums from "~/components/Albums";
import News from "~/components/News";
import RealaseSample from "~/components/ReleaseSample";

export default function Home() {
  return (
    <div>
      <HeroSequence />      
      <Albums />
      <News />
      <ScrollText />
      <RealaseSample/>
    </div>
  );
}
