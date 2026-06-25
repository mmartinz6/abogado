import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, AlertCircle, CheckCircle2 } from 'lucide-react';
import { CONFIG } from '../config';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    caseType: '',
    message: '',
  });

  const [status, setStatus] = useState({
    type: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // QR de WhatsApp con el número correcto
  const whatsappUrl = `https://wa.me/${CONFIG.phoneWhatsApp.replace(/[^0-9]/g, '')}?text=Hola%20Lic.%20Ulises%20Retana%2C%20necesito%20realizar%20una%20consulta%20legal%20confidencial.`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&color=0b1220&data=${encodeURIComponent(whatsappUrl)}`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.caseType || !formData.message) {
      setStatus({ type: 'error', message: 'Por favor complete todos los campos obligatorios (*).' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // ── FormSubmit.co ────────────────────────────────────────────────────
      // Servicio gratuito de email directo. Sin registro ni cuentas.
      // PRIMERA VEZ: llegará un correo de activación a CONFIG.contactEmail.
      // Solo hay que hacer clic en "Confirm your submission" y listo.
      // ─────────────────────────────────────────────────────────────────────
      const body = new FormData();
      body.append('Nombre',         formData.name);
      body.append('Telefono',       formData.phone);
      body.append('Correo_Cliente', formData.email || 'No proporcionado');
      body.append('Tipo_de_Caso',   formData.caseType);
      body.append('Mensaje',        formData.message);

      // Opciones de FormSubmit
      body.append('_subject',  `🔔 Nueva Consulta Legal — ${formData.caseType} — ${formData.name}`);
      body.append('_template', 'table');   // Email en formato tabla, legible
      body.append('_captcha',  'false');   // Sin captcha para mejor UX
      body.append('_next',     'false');   // No redirigir (usamos AJAX)

      // Usar el hash/token si está configurado, de lo contrario usar el email
      // (la primera vez siempre se usa el email para recibir el correo de activación)
      const formTarget = CONFIG.formSubmitToken && CONFIG.formSubmitToken.trim()
        ? CONFIG.formSubmitToken.trim()
        : CONFIG.contactEmail;

      const response = await fetch(
        `https://formsubmit.co/ajax/${formTarget}`,
        {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body,
        }
      );

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true)) {
        setStatus({
          type: 'success',
          message: `✅ ¡Consulta enviada con éxito! El Lic. Ulises Retana Jiménez le contactará a la brevedad bajo estricto secreto profesional.`,
        });
        setFormData({ name: '', phone: '', email: '', caseType: '', message: '' });
      } else {
        throw new Error(data.message || 'Sin respuesta del servidor');
      }

    } catch (err) {
      setStatus({
        type: 'warning',
        message: `⚠️ Si es la primera vez que se usa el formulario, revise el correo ${CONFIG.contactEmail} y haga clic en el enlace de activación que llegó de FormSubmit, luego intente de nuevo. También puede contactar directamente por WhatsApp.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="contact-section">
      <div className="container">
        <div className="grid-2 contact-grid">

          {/* ── Columna izquierda: Info + QR ── */}
          <div className="contact-info-panel animate-fade">
            <h2 className="contact-section-subtitle">Contacto Directo</h2>
            <h3 className="contact-section-title">Información de Contacto</h3>
            <p className="contact-section-desc">
              Comuníquese directamente para programar una cita en la oficina o recibir asistencia urgente en materia penal y notarial.
            </p>

            <div className="info-list">
              <div className="info-row">
                <div className="info-icon-wrapper"><Phone size={20} /></div>
                <div className="info-row-text">
                  <span className="info-label">Teléfono</span>
                  <a href={`tel:${CONFIG.phoneCall.replace(/[\s-]/g, '')}`} className="info-value">
                    {CONFIG.phoneCall}
                  </a>
                </div>
              </div>

              <div className="info-row">
                <div className="info-icon-wrapper"><Mail size={20} /></div>
                <div className="info-row-text">
                  <span className="info-label">Email</span>
                  <a href={`mailto:${CONFIG.email}`} className="info-value">
                    {CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="info-row">
                <div className="info-icon-wrapper"><MapPin size={20} /></div>
                <div className="info-row-text">
                  <span className="info-label">Dirección</span>
                  <span className="info-value">{CONFIG.address}</span>
                </div>
              </div>

              <div className="info-row">
                <div className="info-icon-wrapper"><Clock size={20} /></div>
                <div className="info-row-text">
                  <span className="info-label">Horario</span>
                  <span className="info-value">{CONFIG.scheduleWeek}</span>
                  <span className="info-value">{CONFIG.scheduleSat}</span>
                </div>
              </div>
            </div>

            {/* WhatsApp Card + QR */}
            <div className="whatsapp-qr-card">
              <div className="whatsapp-qr-header">
                <MessageSquare className="wa-icon" size={24} />
                <h4 className="wa-title">WhatsApp</h4>
              </div>
              <p className="wa-text">
                Escanea el código QR para iniciar una consulta directa desde tu teléfono.
              </p>
              <div className="qr-container">
                <img
                  src={qrCodeUrl}
                  alt="WhatsApp QR Code"
                  className="qr-img"
                  onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                />
              </div>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="wa-btn">
                Abrir WhatsApp — {CONFIG.phoneCall}
              </a>
            </div>
          </div>

          {/* ── Columna derecha: Formulario ── */}
          <div className="contact-form-panel animate-fade">
            <div className="form-card">
              <h3 className="form-title">Enviar Consulta</h3>
              <p className="form-subtitle">
                Cualquier consulta, escríbela aquí y me pondré en contacto contigo a la brevedad posible.
              </p>

              {status.message && (
                <div className={`status-alert ${status.type}`}>
                  {status.type === 'error'   && <AlertCircle  size={20} className="alert-icon" />}
                  {status.type === 'success' && <CheckCircle2 size={20} className="alert-icon" />}
                  {status.type === 'warning' && <AlertCircle  size={20} className="alert-icon" />}
                  <span className="status-text">{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="legal-form" noValidate>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">Nombre Completo *</label>
                    <input
                      type="text" id="name" name="name"
                      placeholder="Juan Pérez"
                      value={formData.name} onChange={handleChange} required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Número de Teléfono *</label>
                    <input
                      type="tel" id="phone" name="phone"
                      placeholder="+506 8888-8888"
                      value={formData.phone} onChange={handleChange} required
                    />
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="email">Su Correo Electrónico</label>
                    <input
                      type="email" id="email" name="email"
                      placeholder="juan@ejemplo.com"
                      value={formData.email} onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="caseType">Tipo de Caso *</label>
                    <select id="caseType" name="caseType" value={formData.caseType} onChange={handleChange} required>
                      <option value="">Seleccione el tipo de caso</option>
                      <option value="Penal (Defensa/Querella)">Derecho Penal (Defensa o Querella)</option>
                      <option value="Notarial (Traspaso/Certificación)">Servicios Notariales (Traspaso/Certificación)</option>
                      <option value="Civil / Contratos">Derecho Civil y Contratos</option>
                      <option value="Familia / Matrimonio">Derecho de Familia o Matrimonio Civil</option>
                      <option value="Tránsito / Accidentes">Tránsito y Accidentes</option>
                      <option value="Otra Consulta">Otra Consulta Legal</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Consulta o Nota *</label>
                  <textarea
                    id="message" name="message" rows="5"
                    placeholder="Describe brevemente tu caso o consulta legal. Toda la información será tratada con absoluta confidencialidad..."
                    value={formData.message} onChange={handleChange} required
                  />
                </div>

                <button
                  type="submit"
                  id="btn-enviar-consulta"
                  className="btn-primary form-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando consulta...' : 'Enviar Consulta'}
                  <Send size={18} />
                </button>
              </form>

              <p className="confidentiality-notice">
                * Campos obligatorios. Tu información es tratada con absoluta confidencialidad y bajo secreto profesional.
              </p>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: var(--color-bg-dark);
          border-bottom: 1px solid var(--color-border-dark);
        }

        .contact-grid {
          align-items: flex-start;
          gap: 48px;
        }

        .contact-info-panel { text-align: left; }

        .contact-section-subtitle {
          color: var(--color-accent);
          font-size: 1.1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 12px;
        }

        .contact-section-title {
          font-size: 2.4rem;
          margin-bottom: 20px;
          color: var(--color-text-white);
        }

        .contact-section-desc {
          color: var(--color-text-muted-light);
          font-size: 1.05rem;
          margin-bottom: 40px;
        }

        .info-list {
          display: flex;
          flex-direction: column;
          gap: 28px;
          margin-bottom: 48px;
        }

        .info-row {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .info-icon-wrapper {
          background-color: rgba(226, 135, 20, 0.08);
          border: 1px solid rgba(226, 135, 20, 0.2);
          color: var(--color-accent);
          width: 44px; height: 44px;
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .info-row-text { display: flex; flex-direction: column; }

        .info-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-text-muted-light);
          font-weight: 600;
          margin-bottom: 2px;
        }

        .info-value {
          font-size: 1.05rem;
          color: var(--color-text-light);
          text-decoration: none;
          font-weight: 500;
          transition: var(--transition-smooth);
          word-break: break-word;
        }
        a.info-value:hover { color: var(--color-accent); }

        /* WhatsApp QR Card */
        .whatsapp-qr-card {
          background-color: var(--color-bg-card);
          border: 1px solid var(--color-border-dark);
          border-radius: 12px;
          padding: 30px;
          box-shadow: var(--shadow-premium);
        }

        .whatsapp-qr-header {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 12px;
        }

        .wa-icon { color: #25D366; }

        .wa-title {
          font-size: 1.3rem;
          color: var(--color-text-white);
          font-weight: 700;
        }

        .wa-text {
          color: var(--color-text-muted-light);
          font-size: 0.95rem;
          margin-bottom: 20px;
        }

        .qr-container {
          background-color: #FFFFFF;
          padding: 16px;
          border-radius: 8px;
          display: inline-flex;
          justify-content: center; align-items: center;
          margin-bottom: 20px;
          border: 1px solid var(--color-border-light);
        }

        .qr-img { width: 160px; height: 160px; display: block; }

        .wa-btn {
          display: flex; align-items: center; justify-content: center;
          background-color: #25D366;
          color: white;
          font-weight: 600;
          padding: 12px 24px;
          border-radius: 6px;
          text-decoration: none;
          transition: var(--transition-smooth);
          width: 100%;
          font-size: 0.95rem;
          gap: 8px;
        }
        .wa-btn:hover {
          background-color: #128C7E;
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(37, 211, 102, 0.3);
        }

        /* Form Panel */
        .contact-form-panel { width: 100%; }

        .form-card {
          background-color: #F8FAFC;
          border: 1px solid var(--color-border-light);
          border-radius: 12px;
          padding: 40px;
          box-shadow: var(--shadow-premium);
          text-align: left;
        }

        .form-title {
          font-size: 1.8rem;
          color: var(--color-text-dark);
          margin-bottom: 8px;
          font-weight: 700;
        }

        .form-subtitle {
          color: var(--color-text-muted-dark);
          font-size: 0.95rem;
          margin-bottom: 28px;
          line-height: 1.5;
        }

        /* Status alerts */
        .status-alert {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 16px;
          border-radius: 6px;
          margin-bottom: 24px;
          font-size: 0.9rem;
          line-height: 1.5;
        }
        .status-alert.error   { background: #FEE2E2; color: #991B1B; border: 1px solid #FCA5A5; }
        .status-alert.success { background: #D1FAE5; color: #065F46; border: 1px solid #6EE7B7; }
        .status-alert.warning { background: #FEF3C7; color: #92400E; border: 1px solid #FCD34D; }

        .alert-icon { flex-shrink: 0; margin-top: 2px; }

        .legal-form { display: flex; flex-direction: column; gap: 20px; }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .form-group { display: flex; flex-direction: column; gap: 6px; }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-text-dark);
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 12px 16px;
          border-radius: 6px;
          border: 1px solid #CBD5E1;
          background-color: #FFFFFF;
          color: var(--color-text-dark);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          transition: var(--transition-smooth);
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-accent);
          box-shadow: 0 0 0 3px rgba(226, 135, 20, 0.15);
        }

        .form-group textarea { resize: vertical; min-height: 120px; }

        .form-submit-btn {
          width: 100%;
          padding: 14px 28px;
          margin-top: 10px;
          font-size: 1rem;
        }

        .confidentiality-notice {
          font-size: 0.75rem;
          color: var(--color-text-muted-dark);
          text-align: center;
          margin-top: 24px;
          line-height: 1.5;
        }

        /* ── RESPONSIVE ─────────────────────────────────── */
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; gap: 40px; }
          .contact-section-title { font-size: 2rem; }
          .form-grid { grid-template-columns: 1fr; gap: 16px; }
        }

        @media (max-width: 600px) {
          .form-card { padding: 24px 18px; }
          .contact-section-title { font-size: 1.7rem; }
          .contact-section-desc { font-size: 0.95rem; }
          .wa-btn { font-size: 0.85rem; padding: 12px 16px; }
          .info-list { gap: 20px; margin-bottom: 32px; }
          .qr-container { display: flex; width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  );
}
