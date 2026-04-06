import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsEducation from './components/SkillsEducation';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import assets from './assets';    
import profile from './assets/profile.jpg';
import project1 from './assets/project1.jpg';
import project2 from './assets/project2.jpg';
import certificate1 from './assets/certificate1.jpg';
import certificate2 from './assets/certificate2.jpg';

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
