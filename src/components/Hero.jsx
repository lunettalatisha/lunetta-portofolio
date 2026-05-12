import { Link } from 'react-router-dom';
import './Hero.css';
import profileImg from '../assets/profile.png';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h3>- Open To Work</h3>
        <h1 className="hero-title">Saya <span>Lunetta Latisha Adzrallya Nugraha</span></h1>
        <p className="hero-description">
          Saya merupakan siswa Front-end  Developer di SMK Wikrama Bogor yang memiliki minat besar di bidang teknologi informasi. Saya senang mempelajari cara kerja aplikasi serta proses pembuatan sistem digital.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn" onClick={(e) => {
            const contactSec = document.getElementById('contact');
            if (contactSec) {
              e.preventDefault();
              contactSec.scrollIntoView({ behavior: 'smooth' });
            }
          }}>Hubungi Saya</a>
          <Link to="/projects" className="btn btn-secondary">Lihat Karya</Link>
        </div>
      </div>
      <div className="hero-image">
        <img src={profileImg} alt="Profile" />
      </div>
    </section>
  );
};

export default Hero;
