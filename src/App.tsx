import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Laboratory from './pages/Laboratory';
import Lecture from './pages/Lecture';
import LectureContent from './pages/LectureContent';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

function App() {
  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };

  return (
    <Router>
      <div className="bg-primary min-h-screen">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              move: {
                direction: "bottom",
                enable: true,
                speed: 2,
              },
              number: {
                value: 100,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: 3,
              },
            },
          }}
          className="absolute inset-0"
        />
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/laboratory" element={<Laboratory />} />
            <Route path="/lecture" element={<Lecture />} />
            <Route path="/lecture/:id" element={<LectureContent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
