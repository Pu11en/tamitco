
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">What We Do</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold uppercase italic italic tracking-tight dark:text-white">
              Comprehensive Utility <br className="hidden md:block" /> Solutions
            </h3>
          </div>
          <p className="text-slate-500 dark:text-zinc-400 max-w-sm font-medium">
            Deploying cutting-edge technology and heavy machinery to ensure Texas infrastructure is built to last.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="p-8 border border-slate-100 dark:border-zinc-800 rounded-lg hover:border-primary/50 transition-all group bg-slate-50 dark:bg-zinc-900/50 hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-icons text-3xl">{service.icon}</span>
              </div>
              <h4 className="text-xl font-display font-bold uppercase mb-4 dark:text-white">{service.title}</h4>
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
