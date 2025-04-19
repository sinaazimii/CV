import React from "react";
import Hero from "./components/Hero";
import WorkSamples from "./components/WorkSamples";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import ScrollNav from "./components/ScrollNavigation";
import WorkExperience from "./components/WorkExperience";
import { useEffect, useState } from "react";

function App() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768); 
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  return (
    <main className="font-sans" style={{ backgroundColor: "#f6f6f6" }}>
      
      {/* {!isMobile && (<ScrollNav />)} */}
      <div id="hero" className="section">
        <Hero />
      </div>
      <div id="skills" className="section">
        <Skills />
      </div>

      <div id="work-experience" className="section">
        <WorkExperience />
      </div>

      <div id="work-samples" className="section">
        <WorkSamples />
      </div>
      <div id="education" className="section">
        <Education />
        <Languages />
      </div>
    </main>
  );
}

export default App;
