import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { Distinction } from './components/Distinction';
import { BannerQuote } from './components/BannerQuote';
import { Testimonials } from './components/Testimonials';
import { CtaBanner } from './components/CtaBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export interface AppProps {
  readonly initialSection?: string;
}

export const App: React.FC<AppProps> = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'projects', 'process', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-surface dark:bg-[#19130f] text-on-surface dark:text-[#f7f3ed] selection:bg-tertiary-fixed-dim font-body-md antialiased">
      <Header
        activeSection={activeSection}
        onBookConsultation={() => scrollToSection('contact')}
      />

      <main>
        <Hero onExploreClick={() => scrollToSection('projects')} />
        <About />
        <Services />
        <Projects onRequestDossier={() => scrollToSection('contact')} />
        <Process />
        <Distinction />
        <BannerQuote />
        <Testimonials />
        <CtaBanner onStartProject={() => scrollToSection('contact')} />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
