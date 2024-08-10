import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurMission from "./components/OurMission";
import Astronaut from "./components/Astronaut";
import ChapterList from "./components/ChapterList";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const page1Ref = useRef(null);
  const astronautRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const page1Height = page1Ref.current.offsetHeight;
      const progress = Math.min(scrollPosition / page1Height, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (astronautRef.current) {
      const scale = 1 + scrollProgress * 0.6; // Zoom effect
      // const rotation = scrollProgress * 360; // Rotation effect
      const translateY = scrollProgress * 750; // Move downward
      const translateX = scrollProgress * -200; // Move rightward

      astronautRef.current.style.transform = `translate(0%, 0%) translateY(${translateY}px) translateX(${translateX}px) scale(${scale})`;
    }
  }, [scrollProgress]);

  return (
    <section className="container mx-auto max-w-screen-2xl font-inter relative">
      <Navbar />
      <main>
        <Hero ref={page1Ref} />
        <OurMission />
        <Astronaut ref={astronautRef} />
        <ChapterList />
      </main>
    </section>
  );
}

export default App;
