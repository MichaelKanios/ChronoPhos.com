
import { useScrollPosition } from "../hooks/useScrollPosition";     
import { useAutoAnimate } from "@formkit/auto-animate/react";      

export default function BackToTop() {
  // Παίρνουμε ref από το auto-animate
  const [parent] = useAutoAnimate();

  // Boolean από το custom hook: true αν έχουμε κάνει scroll > threshold
  const visible = useScrollPosition(400);

  // Όταν το πατήσεις → scroll στην κορυφή με smooth συμπεριφορά
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // Βάζουμε ref εδώ — το auto-animate “παρακολουθεί” αυτό το div
    <div ref={parent}>
      {visible && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-6 right-6 z-50
            p-3 rounded-full
            bg-gray-900 text-white
            shadow-lg hover:bg-gray-800
            transition-transform hover:-translate-y-1
          "
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}
