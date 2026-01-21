
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import Assistant from './components/Assistant';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar scrolled={scrolled} />
      
      <main className="flex-grow">
        <Hero />
        <div id="services">
          <Services />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="quote">
          <QuoteForm />
        </div>
      </main>

      <Footer />
      
      {/* Floating Assistant */}
      <Assistant />
    </div>
  );
};

export default App;
