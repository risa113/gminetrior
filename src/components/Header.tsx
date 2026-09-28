import React, { useState, useEffect } from 'react';
import { NAV_LINKS, STUDIO_INFO } from '../data/mockData';

export interface HeaderProps {
  readonly activeSection?: string;
  readonly onBookConsultation?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection = 'hero', onBookConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleConsultationClick = (e: React.MouseEvent) => {
    if (onBookConsultation) {
      e.preventDefault();
      onBookConsultation();
    }
  };

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/95 dark:bg-primary-container/95 shadow-sm'
          : 'bg-surface/90 dark:bg-primary-container/90'
      } backdrop-blur-md border-b border-outline-variant/30 dark:border-outline-variant/10`}
    >
      <div className="flex justify-between items-center w-full px-6 md:px-16 max-w-screen-2xl mx-auto h-20">
        {/* Brand Wordmark & Studio Subtitle */}
        <a className="flex flex-col group text-left" href="#hero">
          <span className="font-headline-sm text-headline-sm tracking-widest font-normal text-primary dark:text-surface">
            {STUDIO_INFO.name}
          </span>
          <span className="font-label-sm text-label-sm tracking-widest text-on-surface-variant dark:text-outline uppercase -mt-1 group-hover:text-secondary transition-colors duration-300">
            {STUDIO_INFO.subtitle}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                className={`font-label-md text-label-md uppercase tracking-wider transition-colors duration-300 ${
                  isActive
                    ? 'text-primary dark:text-surface border-b border-primary dark:border-surface pb-1'
                    : 'text-on-surface-variant dark:text-outline hover:text-secondary'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Trailing Quick Contact & Primary Action */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="hidden lg:flex flex-col text-right">
            <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
              Direct Studio Line
            </span>
            <a
              className="font-label-md text-label-md text-primary dark:text-surface-container font-medium tracking-wider hover:text-secondary transition-colors"
              href={STUDIO_INFO.phoneTel}
            >
              {STUDIO_INFO.phone}
            </a>
          </div>

          <a
            onClick={handleConsultationClick}
            className="bg-primary-container dark:bg-secondary text-surface-container-lowest px-5 py-2.5 rounded-[2px] font-label-md text-label-md tracking-widest uppercase hover:bg-primary dark:hover:bg-secondary-container dark:hover:text-primary transition-all duration-300 shadow-sm flex items-center space-x-2"
            href="#contact"
          >
            <span>Book Consultation</span>
            <span className="material-symbols-outlined text-sm" data-icon="north_east">
              north_east
            </span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="md:hidden text-primary dark:text-surface p-1 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 py-6 bg-surface dark:bg-primary-container border-b border-outline-variant/30 space-y-4 animate-fadeIn">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-label-md text-label-md uppercase tracking-wider text-on-surface dark:text-surface hover:text-secondary py-2 border-b border-outline-variant/10"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 text-on-surface-variant dark:text-outline text-sm">
            <span>Direct Studio Line: </span>
            <a href={STUDIO_INFO.phoneTel} className="text-primary dark:text-secondary font-medium">
              {STUDIO_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
