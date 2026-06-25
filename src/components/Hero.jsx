import React from 'react';
import { Phone, Mail, Shield, ArrowRight } from 'lucide-react';
import { CONFIG } from '../config';

export default function Hero() {
  return (
    <section id="inicio" className="hero-section">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className="container hero-content animate-slide-up">
        {/* Badge Label (Mockup Figma) */}
        <div className="hero-badge animate-fade">
          <Shield className="badge-icon" size={18} />
          <span>Abogado Penalista y Notario</span>
        </div>

        {/* Lawyer Name */}
        <h1 className="hero-title">
          {CONFIG.lawyerName}
        </h1>

        {/* Subtitle / Value Proposition */}
        <p className="hero-subtitle">
          Más de {CONFIG.experienceYears} años defendiendo tus derechos con profesionalismo y dedicación absoluta
        </p>

        {/* CTA Buttons */}
        <div className="hero-actions">
          <a href="#contacto" className="btn-primary">
            Agendar Consulta
            <ArrowRight size={18} />
          </a>
          <a href="#sobre-mi" className="btn-secondary">
            Conocer Trayectoria
          </a>
        </div>

        {/* Trust Indicators (Footer of Hero in Figma Mockup) */}
        <div className="hero-footer">
          <div className="footer-item">
            <div className="footer-icon-box">
              <Phone size={18} />
            </div>
            <span>Consultas inmediatas</span>
          </div>
          <div className="footer-item">
            <div className="footer-icon-box">
              <Mail size={18} />
            </div>
            <span>Respuesta garantizada</span>
          </div>
        </div>
      </div>

      {/* CSS for Hero Section */}
      <style>{`
        .hero-section {
          min-height: 90vh;
          display: flex;
          align-items: center;
          position: relative;
          background-color: #080C16;
          padding-top: 140px;
          padding-bottom: 80px;
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('./lady_justice_bg.png');
          background-size: cover;
          background-position: center right;
          opacity: 0.35;
          z-index: 1;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 50%, rgba(10, 15, 29, 0.95) 0%, rgba(10, 15, 29, 0.8) 50%, rgba(8, 12, 22, 0.98) 100%);
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          max-width: 900px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--color-accent);
          background-color: rgba(226, 135, 20, 0.08);
          border: 1px solid rgba(226, 135, 20, 0.2);
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 24px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .badge-icon {
          stroke-width: 2.5px;
        }

        .hero-title {
          font-size: 3.8rem;
          line-height: 1.15;
          font-weight: 800;
          color: var(--color-text-white);
          margin-bottom: 20px;
          max-width: 800px;
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
        }

        .hero-subtitle {
          font-size: 1.4rem;
          color: var(--color-text-light);
          opacity: 0.9;
          font-weight: 350;
          margin-bottom: 40px;
          max-width: 650px;
          line-height: 1.4;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          margin-bottom: 60px;
          width: 100%;
          flex-wrap: wrap;
        }

        .hero-footer {
          display: flex;
          gap: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 30px;
          width: 100%;
        }

        .footer-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--color-text-light);
          font-weight: 500;
          font-size: 0.95rem;
        }

        .footer-icon-box {
          color: var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: 100px;
            padding-bottom: 60px;
            min-height: auto;
          }
          .hero-title {
            font-size: 2.4rem;
          }
          .hero-subtitle {
            font-size: 1.05rem;
            margin-bottom: 28px;
          }
          .hero-actions {
            flex-direction: column;
            gap: 12px;
            width: 100%;
          }
          .hero-actions .btn-primary,
          .hero-actions .btn-secondary {
            width: 100%;
            text-align: center;
            justify-content: center;
          }
          .hero-footer {
            flex-direction: column;
            gap: 14px;
            padding-top: 24px;
          }
          .hero-bg {
            background-position: center;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            padding-top: 88px;
            padding-bottom: 48px;
          }
          .hero-title {
            font-size: 1.95rem;
            line-height: 1.2;
          }
          .hero-badge {
            font-size: 0.78rem;
            padding: 6px 12px;
          }
          .hero-subtitle {
            font-size: 0.97rem;
          }
          .hero-actions {
            margin-bottom: 36px;
          }
        }
      `}</style>
    </section>
  );
}
