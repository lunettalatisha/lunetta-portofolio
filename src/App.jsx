import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsEducation from './components/SkillsEducation';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <SkillsEducation />
                <Contact />
              </>
            } />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
