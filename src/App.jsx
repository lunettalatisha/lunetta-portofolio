import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsEducation from './components/SkillsEducation';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <SkillsEducation />
        <Gallery />
      </main>
      <Contact />
    </div>
  );
}

export default App;
