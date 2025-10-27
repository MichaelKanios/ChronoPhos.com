
import { motion, useSpring, useScroll } from "framer-motion"
import { SplittingText } from '../../components/ui/shadcn-io/splitting-text';

export default function Who() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })


    return (
        <>
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#94882e",
                }}
            />
            <Content />
        </>
    )
}


function Content() {
    return (
        <>
        <article className="w-full md:w-2/3 lg:w-1/2 mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Who am i</h2>
            <SplittingText
      className="mb-6 text-xl leading-8 space-y-6"
      type="lines"
      inView
      motionVariants={{
        initial: { y: 50, opacity: 0, x: 0 },
        animate: { y: 0, opacity: 1, x: 0 },
         transition: { duration: 1.2, ease: "easeOut" },
      }}
      text={[
        "I was born in Nikaia, Athens, and from a young age, I would turn wooden spoons into makeshift guitars, pretending to play! When I turned 10, my father, noticing my enthusiasm, decided it was time to trade the spoons for something real, and got me my first guitar and I began studying classical music.At the same time, I started listening to bands like Iron Maiden, as well as classic rock artists such as Jimi Hendrix, Rory Gallagher, Stevie Ray Vaughan, Led Zeppelin, and Black Sabbath. From the Greek rock scene, I was significantly influenced by the likes of Pavlos Sidiropoulos, Syndromo, and Trypes.",
        "Ever since I took my first steps with the guitar, I started writing music. Almost every time I practiced, I tried to create something new . I've composed classical pieces for guitar and even performed my own song during exams. When I got my first computer—don’t ask me when; it was ages ago!—I attempted to translate my ideas into digital form to hear my creations in their entirety. I delved into various music programs, starting with Cakewalk and later Cubase, which I still use today.",
        "I would describe my style as a blend of hard rock and metal, with significant blues elements, heavily influenced by Hendrix, who has left a lasting mark on my music. For me, music is a way to express myself; it's comfort, it's friendship—it's everything. My guitar is my greatest therapist. Whatever happens in my life is reflected in my music, whether it's through melancholic notes, energetic riffs, or screaming lyrics that don't always make sense!",
        "I have a basic setup with around nine analog pedals, though in the past, I amassed about thirty-five! I also have quite a few guitars, two of which I built myself. I delved into pedal building as I was always searching for my unique sound. After many experiments and purchases, I’ve finally crafted a specific sound that captivates me and represents who I am.",
        "For my debut album, I decided to make most tracks instrumental, as I felt too angry to write lyrics without resorting to cursing every other line! I'm already preparing my second album, which, after much thought, may include some songs with lyrics. I haven’t felt the need to express myself through lyrics yet, but if that need arises in the future, I won’t rule out the possibility of doing so.",
        "Anyway, enjoy and support my efforts in every way possible so I can keep writing."
      ]}
    /> 
          
           
           
          
   
            </article>
        </>
    )
}




 


