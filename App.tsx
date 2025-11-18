import React from 'react';
import { Navbar } from './components/Navbar';
import { Background } from './components/Background';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-purple-500 selection:text-white">
      <Background />
      <Navbar />
      
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;