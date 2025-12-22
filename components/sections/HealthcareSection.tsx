
import React from 'react';
import { CheckCircle2, ShieldCheck, HeartPulse } from 'lucide-react';
import { siteContent } from '../../constants';

const HealthcareSection: React.FC = () => {
  return (
    <section id="healthcare" className="py-24 lg:py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <div className="flex items-center space-x-3 text-sky-600 mb-6">
              <HeartPulse size={32} />
              <span className="font-black uppercase tracking-widest">Medical Specialty</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 leading-tight">
              Clinical Licensing <br/>
              <span className="text-sky-500">Made Seamless</span>
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              {siteContent.healthcare.intro}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {siteContent.healthcare.features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                  <CheckCircle2 size={24} className="text-sky-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-base font-bold text-slate-800">{feature}</span>
                </div>
              ))}
            </div>

            <div className="p-8 bg-sky-600 text-white rounded-3xl shadow-xl shadow-sky-200 inline-flex items-center space-x-6">
              <ShieldCheck size={40} />
              <div className="flex flex-col">
                <span className="text-xl font-black uppercase tracking-tight">{siteContent.healthcare.highlight}</span>
                <span className="text-sm opacity-80">Dubai Health Authority Approved Processes</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-16">
                <div className="h-48 bg-sky-500 rounded-[2.5rem] p-8 flex flex-col justify-end shadow-lg shadow-sky-100">
                   <div className="text-white font-black text-xl leading-tight">DHA/MOH<br/>Clearance</div>
                </div>
                <div className="h-72 bg-slate-200 rounded-[2.5rem] overflow-hidden relative group shadow-xl">
                   <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400" alt="Clinic Interior" className="object-cover w-full h-full" />
                   <div className="absolute inset-0 bg-sky-900/40 group-hover:bg-sky-900/20 transition-colors"></div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="h-72 bg-slate-800 rounded-[2.5rem] overflow-hidden relative group shadow-xl">
                   <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400" alt="Medical Professional" className="object-cover w-full h-full" />
                   <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors"></div>
                </div>
                <div className="h-48 bg-slate-900 rounded-[2.5rem] p-8 flex flex-col justify-start shadow-lg shadow-slate-200">
                   <div className="text-white font-black text-xl leading-tight mb-2">License<br/>Vault</div>
                   <div className="h-1 w-12 bg-sky-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareSection;
