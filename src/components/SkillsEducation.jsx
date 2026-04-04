import './SkillsEducation.css';

const SkillsEducation = () => {
  return (
    <section id="about">
      <h2 className="section-title">Tentang Saya</h2>
      
      <div className="about-container">
        <div className="about-grid">
          
          <div className="about-card text-card">
            <h3>Profil Diri</h3>
            <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>
              Saya adalah seorang siswa Rekayasa Perangkat Lunak (RPL) yang gemar mempelajari cara membangun website dan aplikasi. 
              Berfokus pada desain antarmuka yang ramah pengguna (UI/UX) dan pengembangan fungsionalitas yang mulus (Front-End). 
              Saya percaya desain yang baik memecahkan masalah.
            </p>
          </div>

          <div className="about-card education-card">
            <h3>Riwayat Pendidikan</h3>
            <div className="timeline">
              <div className="timeline-item">
                <h4>SMK Wikrama Bogor(Jurusan RPL)</h4>
                <p>2024 - Sekarang | Kelas XI</p>
              </div>
              <div className="timeline-item">
                <h4>SMP AISCHO 1 Serpong</h4>
                <p>2021 - 2024</p>
              </div>
            </div>
          </div>

        </div>

        <div className="about-grid">
          
          <div className="about-card skills-card">
            <h3>Hard Skills</h3>
            <div className="skills-list">
              <span className="skill-tag">HTML5 & CSS</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">UI/UX Design</span>
              <span className="skill-tag">Git & GitHub</span>
            </div>
          </div>

          <div className="about-card skills-card">
            <h3>Soft Skills</h3>
            <div className="skills-list">
              <span className="skill-tag">Problem Solving</span>
              <span className="skill-tag">Kerja Sama Tim</span>
              <span className="skill-tag">Komunikasi</span>
              <span className="skill-tag">Manajemen Waktu</span>
              <span className="skill-tag">Kreativitas</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsEducation;
