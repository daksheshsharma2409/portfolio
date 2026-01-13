import { use, useRef } from "react";
import HeroPage from "./components/HeroPage";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (elem) => {
    window.scrollTo({
      top: elem.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-[#f9f8f1] font-display">
      <Navbar
        scrollToSection={scrollToSection}
        heroRef={heroRef}
        aboutRef={aboutRef}
        resumeRef={resumeRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <div ref={heroRef}>
        <HeroPage scrollToSection={scrollToSection} contactRef={contactRef} />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={resumeRef}>
        <Resume />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default App;
