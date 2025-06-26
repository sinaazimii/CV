import React from "react";
import Hero from "./components/Hero";
import WorkSamples from "./components/WorkSamples";
import Education from "./components/Education";
import Skills from "./components/Skills";
import ScrollNav from "./components/ScrollNavigation";
import WorkExperience from "./components/WorkExperience";
import { useEffect, useState } from "react";
import theme from "./components/theme"; 
import Picture from "./components/Picture";

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
    <main
      className="font-sans overflow-x-hidden"
      style={{
        backgroundColor: theme.dark.background,
        scrollSnapType: isMobile ? "none" : "y mandatory",
        width: "100vw",
      }}
    >
      {!isMobile && <ScrollNav />}
      <div id="hero" className={`${isMobile ? "" : "section"}`}>
        <Hero />
      </div>

      {isMobile && (<Picture />)}

      {isMobile && (<Skills />)}
      

      <div id="work-experience" className="section">
        <WorkExperience />
      </div>

      <div id="work-samples" className="section">
        <WorkSamples />
      </div>
      <div id="education" className="section">
        <Education />
      </div>
    </main>
  );
}

export default App;
