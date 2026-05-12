import { useState } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Jika tidak berada di beranda, arahkan ke beranda dulu
    if (location.pathname !== '/') {
      navigate('/');
      // Tunggu render beranda, lalu scroll
      setTimeout(() => {
        const contactSec = document.getElementById('contact');
        if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Jika di beranda, langsung scroll
      const contactSec = document.getElementById('contact');
      if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
        <span>L . L . A . N</span>
      </Link>
      
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Beranda</NavLink>
        <NavLink to="/projects" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Proyek Web</NavLink>
        <NavLink to="/certificates" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Sertifikat & Penghargaan</NavLink>
        <a href="#contact" onClick={handleContactClick}>Kontak</a>
      </nav>
    </header>
  );
};

export default Navbar;
