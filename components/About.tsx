
import React from 'react';

const About: React.FC = () => {
  const stats = [
    { label: 'Years in Texas', value: '15+' },
    { label: 'Completed Projects', value: '2.5k' },
    { label: 'Crew Members', value: '120+' },
    { label: 'Service Coverage', value: '100%' }
  ];

  return (
    <section className="relative py-24 bg-zinc-900 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/utility/800/1000" 
              alt="TAMITCO Heavy Equipment" 
              className="rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-lg shadow-2xl hidden md:block">
              <span className="text-white font-display text-5xl font-bold uppercase italic block mb-2">Safety First</span>
              <span className="text-white/80 font-bold uppercase tracking-widest text-xs">Exceeding OSHA Standards Every Day</span>
            </div>
          </div>

          <div>
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Legacy</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white uppercase italic tracking-tight mb-8">
              Decades of Experience <br /> Beneath the Surface
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              At TAMITCO, we don't just dig holes; we engineer pathways for the future. Based in the heart of Texas, our crews are equipped with the latest directional drilling and trenching tech to tackle any terrain. 
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-12">
              From urban master-planned communities to remote energy infrastructure, we deliver on-time, on-budget, and above-standard.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1 italic">{stat.value}</div>
                  <div className="text-primary font-bold uppercase tracking-tighter text-[10px]">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <button className="mt-12 group flex items-center gap-3 text-white font-bold uppercase tracking-widest text-sm">
              <span className="w-12 h-px bg-primary group-hover:w-20 transition-all"></span>
              Learn More About Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
