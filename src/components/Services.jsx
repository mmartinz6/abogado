import React from 'react';
import { ShieldAlert, FileText, Scale, CheckCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <ShieldAlert size={36} />,
      title: 'Derecho Penal',
      description: 'Defensa penal experta y representación rigurosa en juicios. Protegemos su libertad con estrategias sólidas.',
      items: [
        'Defensa en juicios y procesos penales',
        'Representación ante el Ministerio Público',
        'Apelaciones y Recursos de Casación',
        'Asesoría integral a víctimas y querellantes',
        'Medidas cautelares y excarcelaciones',
      ],
    },
    {
      icon: <FileText size={36} />,
      title: 'Servicios Notariales',
      description: 'Fe pública y seguridad jurídica para todas sus transacciones, actas, traspasos y matrimonios civiles.',
      items: [
        'Escrituras públicas y traspasos de bienes',
        'Autenticación de firmas y documentos',
        'Constitución de sociedades comerciales',
        'Testamentos y sucesiones notariales',
        'Matrimonios civiles y divorcios de mutuo acuerdo',
      ],
    },
    {
      icon: <Scale size={36} />,
      title: 'Asesoría Jurídica Integral',
      description: 'Consultoría preventiva e inmediata para personas y empresas. Evite conflictos legales con asesoría a tiempo.',
      items: [
        'Redacción y revisión de contratos',
        'Resolución alternativa de conflictos',
        'Consultoría corporativa y empresarial',
        'Estudios registrales y saneamiento de propiedades',
        'Atención inmediata de urgencias legales',
      ],
    },
  ];

  return (
    <section id="servicios" className="services-section">
      <div className="container">
        {/* Section Header */}
        <div className="services-header">
          <h2 className="services-subtitle">Servicios Profesionales</h2>
          <h3 className="services-title">Especialidades Legales</h3>
          <p className="services-desc">
            Brindo asesoría legal de primer nivel en materias penales y notariales, asegurando la máxima confidencialidad, ética y efectividad en cada caso.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid-3 services-grid">
          {services.map((service, idx) => (
            <div key={idx} className="service-card card-hover">
              <div className="service-icon-box">
                {service.icon}
              </div>
              <h4 className="service-card-title">{service.title}</h4>
              <p className="service-card-desc">{service.description}</p>
              
              <ul className="service-list">
                {service.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="service-list-item">
                    <CheckCircle size={14} className="list-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for Services Section */}
      <style>{`
        .services-section {
          background-color: #0C1222; /* Slightly different dark shade for section separation */
        }

        .services-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 56px;
        }

        .services-subtitle {
          color: var(--color-accent);
          font-size: 1.1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 12px;
        }

        .services-title {
          font-size: 2.5rem;
          margin-bottom: 16px;
          color: var(--color-text-white);
        }

        .services-desc {
          color: var(--color-text-muted-light);
          font-size: 1.05rem;
        }

        .services-grid {
          gap: 24px;
        }

        .service-card {
          background-color: var(--color-bg-card);
          border: 1px solid var(--color-border-dark);
          border-radius: 12px;
          padding: 40px 30px;
          text-align: left;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .service-icon-box {
          color: var(--color-accent);
          background-color: rgba(226, 135, 20, 0.06);
          border: 1px solid rgba(226, 135, 20, 0.15);
          width: 70px;
          height: 70px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 28px;
          transition: var(--transition-smooth);
        }

        .service-card:hover .service-icon-box {
          background-color: var(--color-accent);
          color: var(--color-text-white);
          transform: scale(1.05);
        }

        .service-card-title {
          font-size: 1.4rem;
          color: var(--color-text-white);
          margin-bottom: 16px;
          font-weight: 700;
        }

        .service-card-desc {
          color: var(--color-text-muted-light);
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 24px;
        }

        .service-list {
          list-style: none;
          margin-top: auto; /* Push items list to bottom */
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 20px;
        }

        .service-list-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 12px;
          font-size: 0.9rem;
          color: var(--color-text-light);
        }

        .list-icon {
          color: var(--color-accent);
          margin-top: 3px;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .services-title {
            font-size: 2rem;
          }
          .services-header {
            margin-bottom: 36px;
          }
          .service-card {
            padding: 28px 20px;
          }
        }

        @media (max-width: 480px) {
          .services-title {
            font-size: 1.7rem;
          }
          .service-card {
            padding: 24px 16px;
          }
          .service-icon-box {
            width: 60px;
            height: 60px;
            margin-bottom: 20px;
          }
          .service-card-title {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
}
