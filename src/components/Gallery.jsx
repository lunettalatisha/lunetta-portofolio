import './Gallery.css';
import projectImg from '../assets/project.png';
import project2Img from '../assets/project2.png';
import certificateImg from '../assets/certificate.png';
import certificate2Img from '../assets/certificate2.png';

const Gallery = () => {
  return (
    <section id="gallery" style={{ background: 'rgba(108, 92, 231, 0.02)' }}>
      <h2 className="section-title">Galeri Karya</h2>

      <h3 className="gallery-section-title">Proyek Web</h3>
      <div className="gallery-grid">
        <div className="gallery-card">
          <img src={projectImg} alt="Proyek 1" className="gallery-image" />
          <div className="gallery-content">
            <h4>English Dictionary</h4>
            <p>Aplikasi web modern untuk mencari arti kata bahasa inggris. Dibuat menggunakan React.js dan desain responsif.</p>
          </div>
        </div>
        <div className="gallery-card">
          <img src={project2Img} alt="Proyek 2" className="gallery-image" />
          <div className="gallery-content">
            <h4>P!NJAM</h4>
            <p>Aplikasi web modern untuk meminjam barang. Dibuat menggunakan React.js dan desain responsif.</p>
          </div>
        </div>
      </div>

      <h3 className="gallery-section-title">Sertifikat & Penghargaan</h3>
      <div className="gallery-grid">
        <div className="gallery-card">
          <img src={certificateImg} alt="Sertifikat 1" className="gallery-image" style={{objectFit: 'contain', background: '#f8f8f8'}} />
          <div className="gallery-content">
            <h4>Frontend Web</h4>
            <p>Penyelesaian kursus pengembangan Frontend modern menggunakan React.js dari Dicoding Indonesia.</p>
          </div>
        </div>
        <div className="gallery-card">
          <img src={certificate2Img} alt="Sertifikat 2" className="gallery-image" style={{objectFit: 'contain', background: '#f8f8f8'}} />
          <div className="gallery-content">
            <h4>Programming Logic</h4>
            <p>Penyelesaian kursus logika pemrograman dari Dicoding Indonesia.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
