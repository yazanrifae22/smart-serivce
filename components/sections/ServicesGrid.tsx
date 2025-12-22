
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { siteContent } from '../../constants';

const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6">Our Core Services</h2>
          <div className="w-24 h-2 bg-sky-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {siteContent.services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-slate-50/50 p-12 rounded-[2.5rem] border-2 border-transparent hover:border-sky-100 hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
            >
              <div className="w-20 h-20 rounded-2xl bg-sky-500/10 text-sky-600 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 shadow-sm">
                <service.icon size={36} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-sky-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-10 flex-grow text-lg">
                {service.description}
              </p>
              <a
                href={service.href}
                className="inline-flex items-center text-sky-600 font-black group-hover:translate-x-2 transition-transform uppercase tracking-widest text-sm"
              >
                Detailed View <ChevronRight size={20} className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
