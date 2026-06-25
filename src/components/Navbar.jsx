import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { CONFIG } from '../config';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        {/* Brand Logo */}
        <a href="#inicio" className="nav-logo">
          <img src="/ran-logo.jpg" alt="RAN Abogados & Notarios" className="nav-logo-img" />
        </a>

        {/* Desktop Menu */}
        <ul className="nav-links-desktop">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="nav-item">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Call to Action Button in Header */}
        <div className="nav-actions">
          <a href="#contacto" className="btn-primary btn-nav">
            Consultar Ahora
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="mobile-sidebar-header">
          <img src="/ran-logo.jpg" alt="RAN Abogados & Notarios" className="nav-logo-img" />
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <ul className="mobile-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="mobile-item" 
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="mobile-cta-li">
            <a 
              href="#contacto" 
              className="btn-primary" 
              style={{ width: '100%' }}
              onClick={() => setIsOpen(false)}
            >
              Consultar Ahora
            </a>
          </li>
        </ul>
      </div>

      {/* CSS for Navbar */}
      <style>{`
        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background-color: var(--color-bg-dark);
          border-bottom: 1px solid var(--color-border-dark);
          transition: var(--transition-smooth);
          height: 80px;
          display: flex;
          align-items: center;
        }

        .navbar-container.scrolled {
          background-color: rgba(10, 15, 29, 0.85);
          backdrop-filter: blur(12px);
          height: 70px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .nav-logo-img {
          height: 56px;
          width: auto;
          object-fit: contain;
          border-radius: 6px;
          transition: var(--transition-smooth);
        }

        .nav-logo-img:hover {
          filter: brightness(1.1);
          transform: scale(1.03);
        }

        .nav-links-desktop {
          display: flex;
          list-style: none;
          gap: 32px;
        }

        .nav-item {
          color: var(--color-text-light);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: var(--transition-smooth);
          position: relative;
          padding: 8px 0;
        }

        .nav-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--color-accent);
          transition: var(--transition-smooth);
        }

        .nav-item:hover {
          color: var(--color-accent);
        }

        .nav-item:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .btn-nav {
          padding: 10px 20px;
          font-size: 0.9rem;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--color-text-white);
          cursor: pointer;
        }

        /* Mobile Sidebar */
        .mobile-sidebar {
          position: fixed;
          top: 0;
          right: -100%;
          width: 300px;
          height: 100vh;
          background-color: var(--color-bg-card);
          z-index: 101;
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
          padding: 30px 24px;
          display: flex;
          flex-direction: column;
          gap: 32px;
          transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-sidebar.open {
          right: 0;
        }

        .mobile-sidebar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--color-border-dark);
          padding-bottom: 20px;
        }

        .close-btn {
          background: none;
          border: none;
          color: var(--color-text-white);
          cursor: pointer;
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          list-style: none;
          gap: 24px;
        }

        .mobile-item {
          color: var(--color-text-light);
          text-decoration: none;
          font-weight: 500;
          font-size: 1.1rem;
          display: block;
          transition: var(--transition-smooth);
        }

        .mobile-item:hover {
          color: var(--color-accent);
          padding-left: 8px;
        }

        .mobile-cta-li {
          margin-top: 12px;
        }

        @media (max-width: 900px) {
          .nav-links-desktop, .btn-nav {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
