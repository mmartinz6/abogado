import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Briefcase } from 'lucide-react';
import { CONFIG } from '../config';

export default function About() {
  const stats = [
    {
      icon: <Award size={28} className="stat-icon" />,
      value: `${CONFIG.experienceYears}+`,
      label: `Más de ${CONFIG.experienceYears} años de experiencia`,
    },
    {
      icon: <Briefcase size={28} className="stat-icon" />,
      value: CONFIG.successfulCases,
      label: 'Casos exitosos',
    },
    {
      icon: <ShieldCheck size={28} className="stat-icon" />,
      value: CONFIG.specializationRate,
      label: 'Especialización continua',
    },
  ];

  return (
    <section id="sobre-mi" className="about-section">
      <div className="container">
        <div className="grid-2 about-grid">
          {/* Left Column: Image with Figma Accent */}
          <div className="about-image-wrapper">
            <div className="image-border-decor" />
            <img 
              src="./scales_of_justice_about.png" 
              alt="Balanza de la Justicia" 
              className="about-image" 
            />
            {/* The orange "RAN" label box at the bottom right corner of the image, as seen in the mockup */}
            <div className="image-badge-ran">
              <span>{CONFIG.brandName}</span>
            </div>
          </div>

          {/* Right Column: Bio Details and Metrics */}
          <div className="about-info">
            <h2 className="about-subtitle">Sobre Mí</h2>
            <h3 className="about-title">
              Soy <span className="text-highlight">{CONFIG.lawyerName}</span>, abogado penalista y notario.
            </h3>
            <p className="about-desc-primary">
              Con más de 16 años de experiencia defendiendo los derechos de mis clientes con profesionalismo, ética y dedicación absoluta.
            </p>
            <p className="about-desc-secondary">
              Mi compromiso es brindar un servicio legal de excelencia, combinando conocimiento técnico con un trato humano y personalizado. Cada caso es único y merece atención especializada.
            </p>

            {/* Metrics cards row (Matches Figma Mockup 2 style: White card, orange icon, thin borders) */}
            <div className="stats-container">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <div className="stat-icon-wrapper">
                    {stat.icon}
                  </div>
                  <h4 className="stat-value">{stat.value}</h4>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS for About Section */}
      <style>{`
        .about-section {
          background-color: var(--color-bg-dark);
          border-top: 1px solid rgba(255, 255, 255, 0.03);
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
        }

        .about-grid {
          align-items: center;
        }

        /* Image Styling */
        .about-image-wrapper {
          position: relative;
          width: 100%;
          border-radius: 12px;
          padding-bottom: 15px;
        }

        .about-image {
          width: 100%;
          height: auto;
          max-height: 480px;
          object-fit: cover;
          border-radius: 12px;
          display: block;
          position: relative;
          z-index: 2;
          box-shadow: 0 20px 40px -15px rgba(0,0,0,0.5);
        }

        .image-border-decor {
          position: absolute;
          top: -10px;
          left: -10px;
          right: 10px;
          bottom: 10px;
          border: 2px solid var(--color-accent);
          border-radius: 12px;
          z-index: 1;
        }

        /* The orange RAN badge box from Mockup 2 */
        .image-badge-ran {
          position: absolute;
          bottom: 0px;
          right: 20px;
          background-color: var(--color-accent);
          color: var(--color-text-white);
          font-family: var(--font-sans);
          font-weight: 800;
          font-size: 1.6rem;
          padding: 8px 32px;
          border-radius: 6px;
          z-index: 3;
          box-shadow: 0 8px 16px rgba(0,0,0,0.3);
          letter-spacing: 0.05em;
        }

        /* Right Column Info Styling */
        .about-info {
          text-align: left;
        }

        .about-subtitle {
          color: var(--color-accent);
          font-size: 1.1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 12px;
        }

        .about-title {
          font-size: 2.2rem;
          line-height: 1.25;
          margin-bottom: 20px;
          color: var(--color-text-white);
        }

        .text-highlight {
          color: var(--color-text-white);
          border-bottom: 2px solid var(--color-accent);
        }

        .about-desc-primary {
          font-size: 1.2rem;
          color: var(--color-text-light);
          font-weight: 400;
          margin-bottom: 16px;
          line-height: 1.5;
        }

        .about-desc-secondary {
          font-size: 1rem;
          color: var(--color-text-muted-light);
          margin-bottom: 36px;
        }

        /* Stat cards layout (from mockup 2) */
        .stats-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .stat-card {
          background-color: #FFFFFF; /* Figma mockup shows white background cards for stats */
          border: 1px solid var(--color-border-light);
          border-radius: 8px;
          padding: 24px 16px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          transition: var(--transition-smooth);
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .stat-icon-wrapper {
          color: var(--color-accent);
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-value {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--color-text-dark); /* Dark text on white background */
          line-height: 1;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--color-text-muted-dark); /* Dark grey text on white background */
          font-weight: 500;
          line-height: 1.3;
        }

        @media (max-width: 768px) {
          .about-image-wrapper {
            max-width: 380px;
            margin: 0 auto 32px;
          }
          .about-title {
            font-size: 1.8rem;
          }
          .stats-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
        }

        @media (max-width: 480px) {
          .about-title {
            font-size: 1.6rem;
          }
          .about-desc-primary {
            font-size: 1.05rem;
          }
          .stats-container {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .stat-card {
            padding: 18px;
            flex-direction: row;
            gap: 16px;
            text-align: left;
            align-items: center;
          }
          .stat-icon-wrapper {
            margin-bottom: 0;
            flex-shrink: 0;
          }
          .stat-value {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
