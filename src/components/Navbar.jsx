import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <a href="#home" className="navbar-logo">Porto<span>Folio</span></a>
      
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>Beranda</a>
        <a href="#about" onClick={() => setIsOpen(false)}>Tentang</a>
        <a href="#gallery" onClick={() => setIsOpen(false)}>Galeri</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Kontak</a>
      </nav>
    </header>
  );
};

export default Navbar;
