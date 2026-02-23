import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Internship from "./Internship";
import Education from "./Education";
import Contact from "./Contact";
import ThreeBackground from "./ThreeBackground";

function App() {
  return (
    <>
      <ThreeBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Internship />
      <Contact />
    </>
  );
}

export default App;