import ScrollVelocity from "../components/ui/shadcn-io/scroll-velocity";

const ScrollText = () => {
  return (
    <ScrollVelocity
      texts={["Escape To The Horizon-", "👉New Realease"]}
      velocity={50}
      className="text-2xl  md:text-4xl font-bold text-gray-400 tracking-wider mt-12"
    />
  );
};
export default ScrollText;
