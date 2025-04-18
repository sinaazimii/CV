import React from 'react';
import Hero from './components/Hero';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';

function App() {
  return (
    <main className="font-sans">
        <Hero />
        <Skills />
        <WorkExperience />
        <Education />
        <Languages />
    </main>
  );
}

export default App;
