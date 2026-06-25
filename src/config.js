// Configuración de la aplicación y datos de contacto de RAN Abogado & Notario

export const CONFIG = {
  // Datos Generales del Cliente
  lawyerName: 'Ulises José Retana Jiménez',
  lawyerShortName: 'Ulises Retana',
  brandName: 'RAN',
  brandSub: 'Abogado & Notario',
  experienceYears: 16,
  successfulCases: '200+',
  specializationRate: '100%',

  // Datos de Contacto
  phoneCall: '+506 8861-0292',        // Número telefónico comercial
  phoneWhatsApp: '+506 88610292',     // Número de WhatsApp para consultas directas y QR
  email: 'sergio2025fwd@gmail.com',   // Correo electrónico oficial (mostrado en la web)
  address: 'San José, Costa Rica',
  
  // Horarios de Atención
  scheduleWeek: 'Lun - Vie: 8:00 - 18:00',
  scheduleSat: 'Sáb: 9:00 - 13:00',

  // Configuración de WhatsApp
  whatsappLink: 'https://wa.me/50688610292?text=Hola%20Lic.%20Ulises%20Retana%2C%20necesito%20realizar%20una%20consulta%20legal%20confidencial.',

  // ─── CONFIGURACIÓN FORMSUBMIT.CO ─────────────────────────────────────────
  // PASO 1: El formulario envía al correo 'contactEmail' la primera vez.
  // PASO 2: FormSubmit envía un correo de ACTIVACIÓN a ese email → revisar SPAM.
  //         Hay que hacer clic en "Activate Form" para confirmar.
  // PASO 3: Una vez activado, copiar el hash que aparece en la URL de confirmación
  //         (ej: abc123def456) y pegarlo en formSubmitToken (sin espacios ni URL).
  //         El formulario usará ese hash en vez del correo.
  contactEmail: 'sergio2025fwd@gmail.com',  // ← correo destino (se usa si formSubmitToken está vacío)
  formSubmitToken: '',  // ← Pegar aquí SOLO el hash (ej: 'abc123def456'), NO la URL completa
};

