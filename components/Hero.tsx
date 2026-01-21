
import React from 'react';
import { HERO_BG } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          alt="Construction crew working in Texas" 
          className="object-cover w-full h-full scale-105 animate-fade-in" 
          src={HERO_BG}
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 pt-20">
        <div className="max-w-4xl mx-auto md:mx-0">
          <div className="inline-flex items-center gap-2 bg-primary px-3 py-1 mb-6 rounded text-[10px] font-bold uppercase tracking-[0.2em] text-white animate-fade-in">
            <span className="material-icons text-[14px]">location_on</span>
            Proudly Serving Texas
          </div>
          
          <h1 className="font-display text-4xl md:text-7xl lg:text-8xl text-white font-bold leading-[1.05] mb-8 uppercase italic tracking-tight text-shadow animate-slide-up">
            Building Texas <br className="hidden md:block" /> Infrastructure <br/>
            <span className="text-primary italic">From The Ground Down</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-200 leading-relaxed mb-10 max-w-2xl font-medium animate-slide-up" style={{ animationDelay: '0.2s' }}>
            The leading specialists in underground and aerial utility construction. From telecom fiber to industrial gas lines, we build the foundations of a connected Texas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a 
              href="#quote"
              className="bg-primary hover:bg-red-700 text-white font-bold py-4 px-10 rounded flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-red-600/30 text-lg uppercase tracking-wider"
            >
              REQUEST A QUOTE
            </a>
            <a 
              href="#services"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold py-4 px-10 border border-white/30 rounded flex items-center justify-center transition-all hover:scale-105 active:scale-95 text-lg uppercase tracking-wider"
            >
              OUR SERVICES
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Features Strip */}
      <div className="relative z-10 grid grid-cols-3 gap-px bg-white/5 backdrop-blur-md border-t border-white/10">
        <div className="p-4 md:p-8 flex flex-col items-center justify-center text-center group">
          <span className="material-icons text-primary mb-2 text-2xl group-hover:scale-110 transition-transform">construction</span>
          <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest">Excavation</span>
        </div>
        <div className="p-4 md:p-8 flex flex-col items-center justify-center text-center group">
          <span className="material-icons text-primary mb-2 text-2xl group-hover:scale-110 transition-transform">cell_tower</span>
          <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest">Fiber Optics</span>
        </div>
        <div className="p-4 md:p-8 flex flex-col items-center justify-center text-center group">
          <span className="material-icons text-primary mb-2 text-2xl group-hover:scale-110 transition-transform">bolt</span>
          <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest">Power & Gas</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
