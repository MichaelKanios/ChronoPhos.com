import ScrollVelocity from "../components/ui/shadcn-io/scroll-velocity";


const ScrollText=()=>{
return (
    <ScrollVelocity
  texts={['Escape To The Horizon-', '👉New Realease']} 
  velocity={50} 
  className="text-3xl  md:text-5xl font-bold text-gray-400 tracking-wider mt-12"
/>
)
}
export default ScrollText