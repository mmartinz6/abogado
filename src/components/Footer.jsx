import React from 'react';
import { Scale, Phone, Mail, MapPin } from 'lucide-react';
import { CONFIG } from '../config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container footer-top">
        <div className="grid-3 footer-grid">
          
          {/* Logo and Description Column */}
          <div className="footer-col-brand">
            <a href="#inicio" className="footer-logo">
              <div className="logo-box">
                <Scale size={20} className="logo-icon" />
              </div>
              <div className="logo-text">
                <span className="logo-title">{CONFIG.brandName}</span>
                <span className="logo-subtitle">Retana {CONFIG.brandSub}</span>
              </div>
            </a>
            <p className="footer-brand-desc">
              {CONFIG.lawyerName} - Abogado Penalista y Notario con más de {CONFIG.experienceYears} años de experiencia brindando servicios legales de excelencia.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col-links">
            <h4 className="footer-col-title">Enlaces Rápidos</h4>
            <ul className="footer-links-list">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#sobre-mi">Sobre Mí</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          {/* Contact details Column */}
          <div className="footer-col-contact">
            <h4 className="footer-col-title">Contacto</h4>
            <ul className="footer-contact-list">
              <li>
                <Phone size={16} className="contact-icon" />
                <a href={`tel:${CONFIG.phoneCall.replace(/\s+/g, '')}`}>{CONFIG.phoneCall}</a>
              </li>
              <li>
                <Mail size={16} className="contact-icon" />
                <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>
              </li>
              <li>
                <MapPin size={16} className="contact-icon" />
                <span>{CONFIG.address}</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Footer Bottom Bar (Confidentiality and copyright) */}
      <div className="footer-bottom">
        <div className="container bottom-content">
          <p className="copyright-text">
            © {currentYear} {CONFIG.brandName} - Todos los derechos reservados
          </p>
          <p className="disclaimer-text">
            Este sitio web es confidencial. La información compartida está protegida por el secreto profesional.
          </p>
        </div>
      </div>

      {/* CSS for Footer */}
      <style>{`
        .footer-section {
          background-color: #080C16;
          border-top: 1px solid var(--color-border-dark);
          color: var(--color-text-light);
          padding-top: 60px;
        }

        .footer-top {
          padding-bottom: 50px;
        }

        .footer-grid {
          gap: 40px;
          text-align: left;
        }

        /* Brand Column */
        .footer-logo {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: var(--color-text-white);
          margin-bottom: 20px;
        }

        .footer-logo .logo-box {
          background-color: #121A2D;
          border: 1px solid var(--color-accent);
          width: 38px;
          height: 38px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-logo .logo-icon {
          color: var(--color-accent);
        }

        .footer-logo .logo-title {
          font-weight: 800;
          font-size: 1.3rem;
          line-height: 1;
        }

        .footer-logo .logo-subtitle {
          font-size: 0.7rem;
          color: var(--color-text-muted-light);
          font-weight: 500;
        }

        .footer-brand-desc {
          color: var(--color-text-muted-light);
          font-size: 0.9rem;
          line-height: 1.6;
          max-width: 360px;
        }

        /* Links and Contact Columns */
        .footer-col-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-text-white);
          margin-bottom: 20px;
          position: relative;
          padding-bottom: 8px;
        }

        .footer-col-title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 30px;
          height: 2px;
          background-color: var(--color-accent);
        }

        .footer-links-list,
        .footer-contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-size: 0.9rem;
        }

        .footer-links-list a {
          color: var(--color-text-muted-light);
          text-decoration: none;
          transition: var(--transition-smooth);
        }

        .footer-links-list a:hover {
          color: var(--color-accent);
          padding-left: 4px;
        }

        .footer-contact-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--color-text-muted-light);
        }

        .footer-contact-list a {
          color: var(--color-text-muted-light);
          text-decoration: none;
          transition: var(--transition-smooth);
        }

        .footer-contact-list a:hover {
          color: var(--color-accent);
        }

        .contact-icon {
          color: var(--color-accent);
          flex-shrink: 0;
        }

        /* Footer Bottom Bar */
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 24px 0;
          font-size: 0.8rem;
          color: var(--color-text-muted-light);
        }

        .bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        .copyright-text {
          font-weight: 500;
        }

        .disclaimer-text {
          font-weight: 400;
          opacity: 0.8;
          text-align: right;
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .bottom-content {
            flex-direction: column;
            text-align: center;
          }
          .disclaimer-text {
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .footer-section {
            padding-top: 44px;
          }
          .footer-top {
            padding-bottom: 36px;
          }
          .footer-brand-desc {
            font-size: 0.85rem;
          }
          .footer-col-title {
            font-size: 1rem;
          }
        }
      `}</style>
    </footer>
  );
}
