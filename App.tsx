
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import ServicesGrid from './components/sections/ServicesGrid';
import HealthcareSection from './components/sections/HealthcareSection';
import AnnualContracts from './components/sections/AnnualContracts';
import CompanyFormation from './components/sections/CompanyFormation';
import GovtServices from './components/sections/GovtServices';
import WhyUs from './components/sections/WhyUs';
import FAQ from './components/sections/FAQ';
import ConsultationForm from './components/sections/ConsultationForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen gradient-bg">
      <Header activeSection={activeSection} />
      
      <main>
        <Hero />
        <ServicesGrid />
        <HealthcareSection />
        <AnnualContracts />
        <CompanyFormation />
        <GovtServices />
        <WhyUs />
        <FAQ />
        <ConsultationForm />
      </main>

      <Footer />
    </div>
  );
};

export default App;
