import React from "react";
import Hero from "./components/Hero";
import WorkSamples from "./components/WorkSamples";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import ScrollNav from "./components/ScrollNavigation";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <main className="font-sans">
      <ScrollNav />
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
