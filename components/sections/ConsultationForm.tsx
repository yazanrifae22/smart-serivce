
import React, { useState } from 'react';
import { Send, CheckCircle2, Headphones } from 'lucide-react';

const ConsultationForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Smart Service Form Capture:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="consultation" className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-sky-500 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-slate-400 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="inline-flex items-center space-x-3 text-sky-400 mb-8 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
              <Headphones size={20} />
              <span className="font-black uppercase tracking-widest text-xs">Advisory Desk</span>
            </div>
            <h2 className="text-4xl lg:text-7xl font-black text-white mb-10 leading-[1.1]">
              Consult <br/> with our <br/> <span className="text-sky-400 underline decoration-sky-400/30 underline-offset-8">Specialists</span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-lg font-medium">
              Take the first step towards a compliant UAE operation. Our experts provide clarity where there is complexity.
            </p>
            <div className="grid grid-cols-1 gap-8">
               <div className="flex items-start space-x-6 text-white group">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-sky-500 transition-all duration-300">
                    <CheckCircle2 className="text-sky-400 group-hover:text-white" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-1">Tailored Regulatory Analysis</h4>
                    <p className="text-slate-400 font-medium">We assess your specific clinic or business activity requirements.</p>
                  </div>
               </div>
               <div className="flex items-start space-x-6 text-white group">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-sky-500 transition-all duration-300">
                    <CheckCircle2 className="text-sky-400 group-hover:text-white" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-1">Honest Cost Estimation</h4>
                    <p className="text-slate-400 font-medium">Full transparency on government fees and our service charges.</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-white p-10 lg:p-16 rounded-[4rem] shadow-3xl relative">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-20 animate-in zoom-in duration-500">
                <div className="w-24 h-24 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 mb-8 shadow-inner shadow-sky-200">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Transmission Successful!</h3>
                <p className="text-slate-500 max-w-sm text-lg font-medium">An expert advisor will contact you within one business day via phone or email.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-12 text-sky-600 font-black hover:underline uppercase tracking-widest text-sm"
                >
                  Submit Another Query
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="e.g. Ahmad Rashid"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 outline-none transition-all font-bold text-slate-800"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">UAE Mobile</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      placeholder="+971 5X XXX XXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 outline-none transition-all font-bold text-slate-800"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Professional Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="name@business.ae"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 outline-none transition-all font-bold text-slate-800"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Target Service</label>
                  <div className="relative">
                    <select
                      required
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 outline-none transition-all appearance-none cursor-pointer font-bold text-slate-800"
                    >
                      <option value="">Select Category</option>
                      <option value="Healthcare Licensing">Healthcare & Clinic Licensing</option>
                      <option value="Annual Contracts">Annual PRO Contracts</option>
                      <option value="Company Formation">Company Formation (Mainland/FZ)</option>
                      <option value="Govt Services">Visas & Immigration</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <Send size={16} className="rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Brief Requirements</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Describe your current situation or goals..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 outline-none transition-all resize-none font-bold text-slate-800"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white py-6 rounded-[2rem] font-black text-xl hover:bg-sky-600 transition-all flex items-center justify-center space-x-3 shadow-2xl hover:shadow-sky-200 active:scale-95 group uppercase tracking-widest"
                >
                  <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                  <span>Initiate Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
