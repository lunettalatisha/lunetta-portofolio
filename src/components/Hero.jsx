import './Hero.css';
import profileImg from '../assets/profile.png';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h3>Halo, Selamat Datang!</h3>
        <h1 className="hero-title">Saya <span>Lunetta Latisha A.N</span></h1>
        <p className="hero-description">
          Seorang pengembang web antusias yang bersemangat dalam menciptakan antarmuka pengguna yang indah, interaktif, dan responsif.
          Ini adalah portofolio tugas Praktikum Kelas XI saya.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn">Hubungi Saya</a>
          <a href="#gallery" className="btn btn-secondary">Lihat Karya</a>
        </div>
      </div>
      <div className="hero-image">
        <img src={profileImg} alt="Profile" />
      </div>
    </section>
  );
};

export default Hero;
