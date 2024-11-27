import React, { useEffect, lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import CornerIcons from './components/CornerIcons';

const Home = lazy(() => import('./components/Home/Home'));
const About = lazy(() => import('./components/About/About'));
const Skills = lazy(() => import('./components/Skills/Skills'));
const Experience = lazy(() => import('./components/Experience/Experience'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Contact = lazy(() => import('./components/Contact/Contact'));

function App() {
  useEffect(() => {
    document.body.style.overflowY = "scroll";
    document.body.style.overflowX = "hidden";
    document.body.style.height = 'auto';
    document.body.style.minHeight = '100vh';

    return () => {
      document.body.style.overflowY = "";
      document.body.style.overflowX = "";
    };
  }, []);

  return (
    <Router>
      <CornerIcons />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
