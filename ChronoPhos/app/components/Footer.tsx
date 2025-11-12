
import { socialIcons, menuItems } from "app/data/navbarData";

const Footer =()=>{
    return(
        <div className="flex justify-between items-center mt-24 bg-gray-950/70 relative p-4 overflow-hidden">

  <img src="/images/Skull2.png" className="relative w-32 md:w-48 lg:w-64 rounded-bl-full" />

  <nav className="relative text-gray-200 text-center">
    
   
       <div className="flex space-x-2 md:space-x-6 justify-center mb-4 ">
        {socialIcons.map(({ id, icon: Icon, href, color }) => (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-125 "
          >
            <Icon className={`${color} w-8! h-8!`} />
          </a>
        ))}
      </div>
      <div>
  <span className="font-semibold text-m">📧 Contact:</span>{' '}
  <a
    href="mailto:info@chronophos.com"
    className="italic text-yellow-400 hover:text-yellow-300 underline-offset-4 hover:underline transition-colors"
  >
    info@chronophos.com
  </a>
</div>
   
    <div className="text-sm font-semibold m-2">&copy;2025 <a href="https://my-portfolio-project-react-tailwind.vercel.app/"  target="_blank"
            rel="noopener noreferrer" className="italic text-yellow-400 hover:underline " >Chrono Phos.</a> All rights reserved.</div>
   
  </nav>

  <img src="/images/Skull1.png" className="relative w-32 md:w-48 lg:w-64 rounded-br-full" />

</div>
    )
}
export default Footer