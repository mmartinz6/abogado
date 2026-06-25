import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { CONFIG } from './config';

function App() {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <a
        href={CONFIG.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={32} style={{ strokeWidth: 2 }} />
      </a>
    </>
  );
}

export default App;
