import React from 'react';
import Hero from './components/Hero';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';

function App() {

  return (
    <main className="font-sans">

      <div id="hero" className="section">
        <Hero />
      </div>
      <div id="skills" className="section">
        <Skills />
      </div>
      <div id="work-experience" className="section">
        <WorkExperience />
      </div>
      <div id="education" className="section">
        <Education />
        <Languages />
      </div>

    </main>
  );
}

export default App;