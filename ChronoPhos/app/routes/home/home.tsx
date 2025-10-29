import HeroSequence from "~/components/HeroSequence";
import ScrollText from "~/components/ScrollText";
import type { Route } from "./+types/home";


export default function Home() {
  return <div>
    <HeroSequence/>
    <ScrollText/>    
  </div>;
}
