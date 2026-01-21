
import React from 'react';
import { LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <img src={LOGO_URL} alt="TAMITCO" className="h-10" />
            <p className="text-zinc-500 leading-relaxed font-medium">
              Building Texas infrastructure from the ground down. Leading the way in underground utility installation and telecommunications development.
            </p>
            <div className="flex gap-4">
               <button className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"><span className="material-icons text-xl">facebook</span></button>
               <button className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"><span className="material-icons text-xl">camera_alt</span></button>
               <button className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"><span className="material-icons text-xl">corporate_fare</span></button>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-widest mb-8 text-primary">Quick Links</h4>
            <ul className="space-y-4 text-zinc-400 font-bold uppercase text-xs tracking-wider">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#quote" className="hover:text-white transition-colors">Request Quote</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Career Opportunities</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-widest mb-8 text-primary">Contact</h4>
            <ul className="space-y-6 text-zinc-400">
              <li className="flex items-start gap-3">
                <span className="material-icons text-primary">location_on</span>
                <span>123 Infrastructure Way, <br /> Houston, TX 77001</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-icons text-primary">phone</span>
                <span>Main: +1 (800) TAMITCO <br /> Sales: +1 (888) TEXAS-DIG</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-icons text-primary">mail</span>
                <span>info@tamitco.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-widest mb-8 text-primary">Newsletter</h4>
            <p className="text-zinc-500 text-sm mb-6">Get updates on our latest projects across the Lone Star State.</p>
            <form className="space-y-4">
              <input type="email" className="w-full bg-white/5 border-none p-4 rounded text-sm focus:ring-1 focus:ring-primary outline-none" placeholder="Email Address" />
              <button className="w-full bg-white/10 hover:bg-white/20 p-4 rounded font-bold uppercase tracking-widest text-xs transition-colors">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-zinc-600 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} TAMITCO UNDERGROUND UTILITIES. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Safety Portal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
