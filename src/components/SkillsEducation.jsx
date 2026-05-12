import './SkillsEducation.css';

const hardSkillsData = [
  { name: 'HTML', desc: 'Struktur halaman web yang semantis dan tampilan responsif dengan animasi halus.', percent: 85, icon: <svg viewBox="0 0 24 24" fill="#E34F26"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.001.23-2.582H5.433l.69 8.169h7.457l-.23 2.584-3.327.9-3.35-.901-.157-1.748H3.94l.288 3.751 7.747 2.148 7.747-2.148.498-5.558H8.531z"/></svg> },
  { name: 'CSS', desc: 'Styling halaman web, desain responsif, tata letak modern (Flexbox/Grid), dan animasi.', percent: 85, icon: <svg viewBox="0 0 24 24" fill="#1572B6"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.451H5.432l.231 2.582h10.058l-.232 2.718H8.531l.23 2.582h7.02l-.497 5.558-7.307 2.03-7.33-2.03-.157-1.748H3.94l.288 3.751 7.747 2.148 7.747-2.148.69-8.169H8.531l-.23-2.584h10.156l.135-1.5z"/></svg> },
  { name: 'JavaScript', desc: 'Logika interaktif, manipulasi DOM, dan pengembangan web dinamis.', percent: 75, icon: <svg viewBox="0 0 24 24" fill="#F7DF1E"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.81.39.024.75.426.87.684l2.58-1.64c-.525-1.065-1.61-2.04-3.54-2.11-3.09-.105-5.037 1.2-5.46 3.465-.405 2.13.735 3.015 3.045 3.96.825.375 1.55.6 1.76 1.15.074.256.09.585-.015.84-.28.705-1.25.855-1.9.825-1.01-.06-1.76-.735-2.06-1.23l-2.73 1.53c.63 1.35 1.8 2.82 4.65 3.03 2.45.18 5.17-.99 5.67-3.66.195-1.095-.03-1.665-.54-2.31zM11.694 21.57V6h-3.4v10.965c0 1.22.135 2.11.435 2.625.555 1.005 1.77 1.395 3.51 1.05.51-.105 1.02-.33 1.485-.69v-2.85c-.345.24-.765.405-1.125.435-.615.045-.9-.21-.9-1.065z"/></svg> },
  { name: 'React.js', desc: 'Membangun antarmuka pengguna berbasis komponen yang efisien dan modern.', percent: 70, icon: <svg viewBox="0 0 24 24" fill="#61DAFB"><circle cx="12" cy="12" r="2.05"/><g stroke="#61DAFB" strokeWidth="1" fill="none"><ellipse cx="12" cy="12" rx="11" ry="4.2"/><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)"/></g></svg> },
  { name: 'PHP', desc: 'Pemrograman server-side untuk aplikasi web dinamis dan pengelolaan database.', percent: 70, icon: <svg viewBox="0 0 24 24" fill="#777BB4"><path d="M12.003 2c-5.748 0-10.407 3.551-10.407 7.933 0 4.381 4.659 7.931 10.407 7.931 5.746 0 10.405-3.55 10.405-7.931C22.408 5.551 17.749 2 12.003 2zm-5.464 10.748H4.667l1.042-5.433h2.383c2.04 0 2.502 1.328 2.19 2.923-.271 1.392-1.222 2.51-2.909 2.51H6.183l-.644 3.355H4.261l2.278-11.85h3.047c2.476 0 4.195 1.42 4.542 3.652.33 2.131-1.018 4.261-3.692 4.261H7.135l-.596 3.104zm6.059-4.839l-1.041 5.434h-1.275l1.042-5.434h1.274zm4.499.596c-.313 1.595-1.22 2.923-2.908 2.923H13.63l-.645 3.355H11.71l2.277-11.85h3.048c2.475 0 4.194 1.42 4.541 3.652.332 2.131-1.018 4.261-3.692 4.261h-2.22l.597-3.104h1.872c2.042 0 2.502-1.328 2.192-2.923-.273-1.392-1.222-2.51-2.908-2.51H16.14l-.45 2.355h1.407z"/></svg> },
  { name: 'Laravel', desc: 'Framework PHP modern dengan routing, Eloquent ORM, dan Blade templating.', percent: 70, icon: <svg viewBox="0 0 24 24" fill="#FF2D20"><path d="M22.062 18.068L12 23.957l-1.684-.984-7.587-4.436V6.666L1.045 5.682v12.285L12 24l10.955-6.425-1.332-.78v-11.16L22.955 6v12.068H22.062zm-.89-13.842l-9.172 5.378-9.173-5.378L12 .248l9.172 5.378zm-9.172 4.881l8.361-4.903-8.361-4.903-8.361 4.903 8.361 4.903zm8.324-4.881L12 1.48 3.676 4.226v13.56L12 22.52l8.324-4.881V4.226zM12 13.916V8.14L10.316 9.12v5.77l1.684-.974zm.842-.487V7.654L11.16 8.64v5.77l1.682-.984zm.84-.487V7.167L12 8.15v5.776l1.682-.983zm.842-.487V6.68L12.842 7.665v5.775l1.682-.983zm.842-.488V6.193L13.684 7.18v5.77l1.682-.984z"/></svg> },
  { name: 'Flutter', desc: 'Framework open-source oleh Google untuk membangun aplikasi mobile.', percent: 60, icon: <svg viewBox="0 0 24 24" fill="#02569B"><path fill="#37C3FF" d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37z"/><path fill="#02569B" d="M14.314 24H21.68l-5.25-5.25-7.37-7.37-3.7 3.7L14.314 24z"/></svg> }
];

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
            
            <div className="biodata-list">
              <div className="biodata-item">
                <span className="biodata-label">Nama</span>
                <span className="biodata-value">: Lunetta Latisha A.N</span>
              </div>
              <div className="biodata-item">
                <span className="biodata-label">Tanggal Lahir</span>
                <span className="biodata-value">: 19 September 2009</span>
              </div>
              <div className="biodata-item">
                <span className="biodata-label">Domisili</span>
                <span className="biodata-value">: Kota Bogor, Jawa Barat</span>
              </div>
              <div className="biodata-item">
                <span className="biodata-label">Sekolah</span>
                <span className="biodata-value">: SMK Wikrama Bogor</span>
              </div>
              <div className="biodata-item">
                <span className="biodata-label">Jurusan</span>
                <span className="biodata-value">: Rekayasa Perangkat Lunak (RPL)</span>
              </div>
            </div>
          </div>

          <div className="about-card education-card">
            <h3 style={{ marginBottom: '1.5rem' }}>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              Riwayat Pendidikan
            </h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                </div>
                <div className="timeline-content">
                  <span className="timeline-date">2024 - Sekarang | Kelas XI</span>
                  <h4>SMK Wikrama Bogor</h4>
                  <div style={{ marginBottom: '0.8rem' }}>
                    <span className="timeline-badge">Jurusan RPL</span>
                  </div>
                  <p>Fokus pada pengembangan aplikasi web, desain antarmuka pengguna (UI/UX), dan rekayasa perangkat lunak.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                </div>
                <div className="timeline-content">
                  <span className="timeline-date">2021 - 2024</span>
                  <h4>SMP AISCHO 1 Serpong</h4>
                  <p>Pendidikan menengah pertama dengan pencapaian dasar yang kuat dalam bidang akademik dan non-akademik.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                </div>
                <div className="timeline-content">
                  <span className="timeline-date">2015 - 2021</span>
                  <h4>SD Insantama Bogor</h4>
                  <p>Pendidikan dasar yang membentuk fondasi pembelajaran dan nilai-nilai moral sejak dini.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="about-card skills-card" style={{ marginTop: '3rem' }}>
          <h3>Tech Stack</h3>
          <div className="detailed-skills-grid">
            {hardSkillsData.map((skill, index) => (
              <div className="detailed-skill-item" key={index} style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="skill-icon-wrapper">
                  {skill.icon}
                </div>
                <div className="skill-header">
                  <h4>{skill.name}</h4>
                  <span className="skill-percent">{skill.percent}%</span>
                </div>
                <p className="skill-desc">{skill.desc}</p>
                <div className="progress-bg">
                  <div className="progress-bar" style={{ width: `${skill.percent}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-card skills-card" style={{ marginTop: '3rem' }}>
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
    </section>
  );
};

export default SkillsEducation;
