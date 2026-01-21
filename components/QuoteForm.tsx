
import React, { useState } from 'react';

const QuoteForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/3 bg-zinc-900 p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <img src="https://picsum.photos/seed/map/800/1200" alt="background" className="object-cover w-full h-full grayscale" />
            </div>
            <div className="relative z-10">
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Request Quote</h2>
              <h3 className="text-4xl font-display font-bold text-white uppercase italic tracking-tight mb-8">
                Ready to Start Your Next Project?
              </h3>
              <p className="text-zinc-400 mb-8 font-medium">
                Provide your project details and our estimation team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center text-primary">
                    <span className="material-icons">phone</span>
                  </div>
                  <div>
                    <div className="text-white font-bold uppercase text-xs tracking-widest mb-1">Call Anytime</div>
                    <div className="text-zinc-400 font-bold">+1 (800) TAMITCO</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center text-primary">
                    <span className="material-icons">location_on</span>
                  </div>
                  <div>
                    <div className="text-white font-bold uppercase text-xs tracking-widest mb-1">Texas HQ</div>
                    <div className="text-zinc-400 font-bold">Houston • Austin • Dallas</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 relative z-10">
              <div className="text-white/20 font-display text-8xl font-bold uppercase italic absolute bottom-0 left-0 -mb-10 -ml-4">
                TEXAS
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 p-8 md:p-12">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mb-6">
                  <span className="material-icons text-4xl">check</span>
                </div>
                <h4 className="text-3xl font-display font-bold uppercase dark:text-white mb-4">Message Received</h4>
                <p className="text-slate-500 dark:text-zinc-400 max-w-sm">
                  Thank you for your interest in TAMITCO. One of our project managers will contact you shortly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-primary font-bold uppercase tracking-widest text-sm"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-zinc-500">Full Name</label>
                    <input required type="text" className="w-full bg-slate-50 dark:bg-zinc-800 border-none rounded p-4 dark:text-white focus:ring-2 focus:ring-primary outline-none" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-zinc-500">Email Address</label>
                    <input required type="email" className="w-full bg-slate-50 dark:bg-zinc-800 border-none rounded p-4 dark:text-white focus:ring-2 focus:ring-primary outline-none" placeholder="john@company.com" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-zinc-500">Project Type</label>
                    <select className="w-full bg-slate-50 dark:bg-zinc-800 border-none rounded p-4 dark:text-white focus:ring-2 focus:ring-primary outline-none">
                      <option>Underground Utility</option>
                      <option>Fiber Deployment</option>
                      <option>Directional Drilling</option>
                      <option>Electrical/Gas</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-zinc-500">Project Location</label>
                    <input required type="text" className="w-full bg-slate-50 dark:bg-zinc-800 border-none rounded p-4 dark:text-white focus:ring-2 focus:ring-primary outline-none" placeholder="City or County" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-zinc-500">Project Details</label>
                  <textarea rows={4} className="w-full bg-slate-50 dark:bg-zinc-800 border-none rounded p-4 dark:text-white focus:ring-2 focus:ring-primary outline-none" placeholder="Tell us about the scope..."></textarea>
                </div>

                <button type="submit" className="w-full bg-primary hover:bg-red-700 text-white font-bold py-5 rounded flex items-center justify-center gap-3 transition-all shadow-xl shadow-red-600/20 text-lg uppercase">
                  SUBMIT REQUEST
                  <span className="material-icons">send</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
