import { useEffect } from 'react';
import './Gallery.css';
import projectImg from '../assets/project.png';
import project2Img from '../assets/project2.png';
import project3Img from '../assets/project3.png';
import project4Img from '../assets/project4.png';
import project5Img from '../assets/project5.png';
import project6Img from '../assets/project6.png';
import project7Img from '../assets/project7.png';
import project8Img from '../assets/project8.png';
import project9Img from '../assets/project9.png';


const Projects = () => {
  // Scroll to top when view is loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="gallery-page-container">
      <section id="projects" style={{ background: 'rgba(108, 92, 231, 0.02)', padding: '120px 10% 50px' }}>
        <h2 className="section-title">Proyek</h2>

        <div className="gallery-category">
          <h3 className="category-title">Web Development</h3>
          <div className="gallery-grid">
            <div className="gallery-card">
              <img src={projectImg} alt="Proyek 1" className="gallery-image" />
              <div className="gallery-content">
                <h4>English Dictionary</h4>
                <div className="project-tags">
                  <span className="language-tag react">React.js</span>
                </div>
                <a href="https://github.com/lunettalatisha/english-dictionary" target="_blank" rel="noopener noreferrer" className="project-link">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ marginRight: '8px' }}><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  GitHub
                </a>
              </div>
            </div>
            <div className="gallery-card">
              <img src={project2Img} alt="Proyek 2" className="gallery-image" />
              <div className="gallery-content">
                <h4>P!NJAM</h4>
                <div className="project-tags">
                  <span className="language-tag react">React.js</span>
                </div>
                <a href="https://github.com/lunettalatisha/Website-Inventaris-Sekolah" target="_blank" rel="noopener noreferrer" className="project-link">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ marginRight: '8px' }}><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  GitHub
                </a>
              </div>
            </div>
            <div className="gallery-card">
              <img src={project3Img} alt="Proyek 2" className="gallery-image" />
              <div className="gallery-content">
                <h4>Calculator</h4>
                <div className="project-tags">
                  <span className="language-tag javascript">JavaScript</span>
                </div>
                <a href="https://github.com/lunettalatisha/kalkulator-lunetta" target="_blank" rel="noopener noreferrer" className="project-link">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ marginRight: '8px' }}><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  GitHub
                </a>
              </div>
            </div>
             <div className="gallery-card">
              <img src={project4Img} alt="Proyek 1" className="gallery-image" />
              <div className="gallery-content">
                <h4>Court Booking</h4>
                <div className="project-tags">
                  <span className="language-tag flutter">Flutter</span>
                </div>
                <a href="https://github.com/lunettalatisha/court-booking" target="_blank" rel="noopener noreferrer" className="project-link">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ marginRight: '8px' }}><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  GitHub
                </a>
              </div>
            </div>
            <div className="gallery-card">
              <img src={project5Img} alt="Proyek 1" className="gallery-image" />
              <div className="gallery-content">
                <h4>Profil Diri</h4>
                <div className="project-tags">
                  <span className="language-tag flutter">Flutter</span>
                </div>
                <a href="https://github.com/lunettalatisha/profil-flutter" target="_blank" rel="noopener noreferrer" className="project-link">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ marginRight: '8px' }}><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  GitHub
                </a>
              </div>
            </div>
             <div className="gallery-card">
              <img src={project6Img} alt="Proyek 1" className="gallery-image" />
              <div className="gallery-content">
                <h4>TIXID</h4>
                <div className="project-tags">
                  <span className="language-tag javascript">JavaScript</span>
                  <span className="language-tag laravel">Laravel</span>
                </div>
                <a href="https://github.com/lunettalatisha/tixid" target="_blank" rel="noopener noreferrer" className="project-link">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ marginRight: '8px' }}><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  GitHub
                </a>
              </div>
            </div>
             <div className="gallery-card">
              <img src={project7Img} alt="Proyek 1" className="gallery-image" />
              <div className="gallery-content">
                <h4>Apple Company Profile</h4>
                <div className="project-tags">
                  <span className="language-tag laravel">Laravel</span>
                  <span className="language-tag javascript">JavaScript</span>
                </div>
                <a href="https://github.com/lunettalatisha/laravel-project" target="_blank" rel="noopener noreferrer" className="project-link">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ marginRight: '8px' }}><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="gallery-category">
          <h3 className="category-title">UI/UX Design</h3>
          <div className="gallery-grid">
            <div className="gallery-card">
              <img src={project8Img} alt="Proyek 1" className="gallery-image" />
              <div className="gallery-content">
                <h4>BVLGARI</h4>
                <div className="project-tags">
                  <span className="language-tag figma">UI Design</span>
                </div>
                <a href="https://www.figma.com/design/j32lR0KPpw3RxXV4c0UoG9/BVLGARI?node-id=0-1&p=f&t=yB5NdT7CWhJHrdOV-0" target="_blank" rel="noopener noreferrer" className="project-link">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ marginRight: '8px' }}><path d="M12 5.5c0-1.933-1.567-3.5-3.5-3.5S5 3.567 5 5.5s1.567 3.5 3.5 3.5h3.5v-3.5zM12 12.5c0-1.933-1.567-3.5-3.5-3.5S5 10.567 5 12.5s1.567 3.5 3.5 3.5h3.5v-3.5zM12 19.5c0 1.933-1.567 3.5-3.5 3.5S5 21.433 5 19.5s1.567-3.5 3.5-3.5h3.5v3.5zM19 12.5c0 1.933-1.567 3.5-3.5 3.5S12 14.433 12 12.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5zM19 5.5c0 1.933-1.567 3.5-3.5 3.5S12 7.433 12 5.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5z"/></svg>
                  Figma
                </a>
              </div>
            </div>
             <div className="gallery-card">
              <img src={project9Img} alt="Proyek 1" className="gallery-image" />
              <div className="gallery-content">
                <h4>Hear Me Out</h4>
                <div className="project-tags">
                  <span className="language-tag figma">UI Design</span>
                  <span className="language-tag figma">Wireframe</span>
                </div>
                <a href="https://www.figma.com/design/nEgfBjq4DGM6kJGv86P1QT/HearMeOut---Aspirasi-Siswa?node-id=122-115&p=f&t=WFICOlg41ZFw7fSu-0" target="_blank" rel="noopener noreferrer" className="project-link">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ marginRight: '8px' }}><path d="M12 5.5c0-1.933-1.567-3.5-3.5-3.5S5 3.567 5 5.5s1.567 3.5 3.5 3.5h3.5v-3.5zM12 12.5c0-1.933-1.567-3.5-3.5-3.5S5 10.567 5 12.5s1.567 3.5 3.5 3.5h3.5v-3.5zM12 19.5c0 1.933-1.567 3.5-3.5 3.5S5 21.433 5 19.5s1.567-3.5 3.5-3.5h3.5v3.5zM19 12.5c0 1.933-1.567 3.5-3.5 3.5S12 14.433 12 12.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5zM19 5.5c0 1.933-1.567 3.5-3.5 3.5S12 7.433 12 5.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5z"/></svg>
                  Figma
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
