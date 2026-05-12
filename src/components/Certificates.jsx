import { useState, useEffect } from 'react';
import './Gallery.css';
import certificateImg from '../assets/certificate.png';
import certificate2Img from '../assets/certificate2.png';
import certificate3Img from '../assets/certificate3.png';
import certificate4Img from '../assets/certificate4.png';
import certificate5Img from '../assets/certificate5.png';
import certificate6Img from '../assets/certificate6.png';
import certificate7Img from '../assets/certificate7.png';
import certificate8Img from '../assets/certificate8.png';
import certificate9Img from '../assets/certificate9.png';
import certificate10Img from '../assets/certificate10.png';
import certificate11Img from '../assets/certificate11.png';
import certificate12Img from '../assets/certificate12.png';

const Certificates = () => {
  const [zoomedImg, setZoomedImg] = useState(null);

  // Scroll to top when view is loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="gallery-page-container">
      <section id="certificates" style={{ background: 'rgba(108, 92, 231, 0.02)', padding: '120px 10% 50px' }}>
        {/* Modal untuk Zoom Gambar */}
        {zoomedImg && (
          <div className="image-modal-overlay" onClick={() => setZoomedImg(null)}>
            <span className="close-modal" onClick={() => setZoomedImg(null)}>&times;</span>
            <img src={zoomedImg} alt="Zoomed" className="image-modal-content" onClick={(e) => e.stopPropagation()} />
          </div>
        )}

        <h2 className="section-title">Sertifikat & <span>Penghargaan</span></h2>
        
        <div className="gallery-category">
          <h3 className="category-title">Pendidikan & Teknologi</h3>
          <div className="gallery-grid">
            <div className="gallery-card">
              <img 
                src={certificateImg} 
                alt="Sertifikat 1" 
                className="gallery-image clickable-image" 
                style={{objectFit: 'contain', background: '#f8f8f8'}} 
                onClick={() => setZoomedImg(certificateImg)}
              />
              <div className="gallery-content">
                <h4>Frontend Web <span className="cert-year">(2024)</span></h4>
                <p>Penyelesaian kursus pengembangan Frontend modern menggunakan React.js dari Dicoding Indonesia.</p>
              </div>
            </div>
            <div className="gallery-card">
              <img 
                src={certificate2Img} 
                alt="Sertifikat 2" 
                className="gallery-image clickable-image" 
                style={{objectFit: 'contain', background: '#f8f8f8'}} 
                onClick={() => setZoomedImg(certificate2Img)}
              />
              <div className="gallery-content">
                <h4>Programming Logic <span className="cert-year">(2024)</span></h4>
                <p>Penyelesaian kursus logika pemrograman dari Dicoding Indonesia.</p>
              </div>
            </div>
            <div className="gallery-card">
              <img 
                src={certificate3Img} 
                alt="Sertifikat 3" 
                className="gallery-image clickable-image" 
                style={{objectFit: 'contain', background: '#f8f8f8'}} 
                onClick={() => setZoomedImg(certificate3Img)}
              />
              <div className="gallery-content">
                <h4>Dasar Pemrograman Web <span className="cert-year">(2024)</span></h4>
                <p>Penyelesaian kursus dasar pemrograman web dari Dicoding Indonesia.</p>
              </div>
            </div>
            <div className="gallery-card">
              <img 
                src={certificate4Img} 
                alt="Sertifikat 4" 
                className="gallery-image clickable-image" 
                style={{objectFit: 'contain', background: '#f8f8f8'}} 
                onClick={() => setZoomedImg(certificate4Img)}
              />
              <div className="gallery-content">
                <h4>Pengembangan Software <span className="cert-year">(2024)</span></h4>
                <p>Penyelesaian kursus pengembangan software dari Dicoding Indonesia.</p>
              </div>
            </div>
            <div className="gallery-card">
              <img 
                src={certificate5Img} 
                alt="Sertifikat 5" 
                className="gallery-image clickable-image" 
                style={{objectFit: 'contain', background: '#f8f8f8'}} 
                onClick={() => setZoomedImg(certificate5Img)}
              />
              <div className="gallery-content">
                <h4>Cloud & Gen AI di AWS <span className="cert-year">(2024)</span></h4>
                <p>Penyelesaian kursus Cloud & Gen AI di AWS dari Dicoding Indonesia.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="gallery-category">
          <h3 className="category-title">Kepemimpinan & Relawan</h3>
          <div className="gallery-grid">
            <div className="gallery-card">
              <img 
                src={certificate6Img} 
                alt="Sertifikat 6" 
                className="gallery-image clickable-image" 
                style={{objectFit: 'contain', background: '#f8f8f8'}} 
                onClick={() => setZoomedImg(certificate6Img)}
              />
              <div className="gallery-content">
                <h4>Keselamatan dan Kesehatan Kerja (K3) <span className="cert-year">(2022)</span></h4>
                <p>Pelatihan Keselamatan dan Kesehatan Kerja (K3).</p>
              </div>
            </div>
            <div className="gallery-card">
              <img 
                src={certificate7Img} 
                alt="Sertifikat 7" 
                className="gallery-image clickable-image" 
                style={{objectFit: 'contain', background: '#f8f8f8'}} 
                onClick={() => setZoomedImg(certificate7Img)}
              />
              <div className="gallery-content">
                <h4>Latihan Dasar Kepemimpinan (LDK)<span className="cert-year">(2022)</span></h4>
                <p>Pelatihan Dasar Kepemimpinan (LDK).</p>
              </div>
            </div>
            <div className="gallery-card">
              <img 
                src={certificate8Img} 
                alt="Sertifikat 8" 
                className="gallery-image clickable-image" 
                style={{objectFit: 'contain', background: '#f8f8f8'}} 
                onClick={() => setZoomedImg(certificate8Img)}
              />
              <div className="gallery-content">
                <h4>LocalYouth ID Batch 0.6<span className="cert-year">(2025)</span></h4>
                <p>Volunteering period at LocalYouths.id as a Public Speaker.</p>
              </div>
            </div>
            <div className="gallery-card">
              <img 
                src={certificate9Img} 
                alt="Sertifikat 9" 
                className="gallery-image clickable-image" 
                style={{objectFit: 'contain', background: '#f8f8f8'}} 
                onClick={() => setZoomedImg(certificate9Img)}
              />
              <div className="gallery-content">
                <h4>MC and Moderator <span className="cert-year">(2022)</span></h4>
                <p>Participating in LocalYouths.id's event as an MC and moderator.</p>
              </div>
            </div>
            <div className="gallery-card">
              <img 
                src={certificate10Img} 
                alt="Sertifikat 10" 
                className="gallery-image clickable-image" 
                style={{objectFit: 'contain', background: '#f8f8f8'}} 
                onClick={() => setZoomedImg(certificate10Img)}
              />
              <div className="gallery-content">
                <h4>LYI Berbagi 3.0 <span className="cert-year">(2024)</span></h4>
                <p>Volunteer at LocalYouths.id's "Berbagi 3.0" activity focusing on donating.</p>
              </div>
            </div>
            <div className="gallery-card">
              <img 
                src={certificate11Img} 
                alt="Sertifikat 11" 
                className="gallery-image clickable-image" 
                style={{objectFit: 'contain', background: '#f8f8f8'}} 
                onClick={() => setZoomedImg(certificate11Img)}
              />
              <div className="gallery-content">
                <h4>LYI Best Volunteer <span className="cert-year">(2025)</span></h4>
                <p>Best volunteer in the "Space Of Youth, Pages Of Literacy" webinar.</p>
              </div>
            </div>
            <div className="gallery-card">
              <img 
                src={certificate12Img} 
                alt="Sertifikat 12" 
                className="gallery-image clickable-image" 
                style={{objectFit: 'contain', background: '#f8f8f8'}} 
                onClick={() => setZoomedImg(certificate12Img)}
              />
              <div className="gallery-content">
                <h4>Sertifikat Partisipasi <span className="cert-year">(2024)</span></h4>
                <p>Partisipasi aktif dalam kegiatan atau pelatihan pengembangan diri.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificates;
