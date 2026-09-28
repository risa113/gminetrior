import React from 'react';
import { STUDIO_INFO } from '../data/mockData';

export interface FooterProps {
  readonly onLinkClick?: (href: string) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="w-full bg-surface-container-low dark:bg-[#140f0c] border-t border-outline-variant/40 dark:border-outline-variant/20">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-16 py-16 flex flex-col justify-between gap-12">
        {/* Top Level: Brand Wordmark & Discipline Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Wordmark & Ethos */}
          <div className="md:col-span-6 space-y-3">
            <span className="font-headline-sm text-headline-sm tracking-widest text-primary dark:text-surface block">
              {STUDIO_INFO.name}
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-outline max-w-md font-light leading-relaxed">
              Thoughtful interiors. Timeless spaces. An architectural interior design atelier
              specialized in bespoke residential villas and commercial spaces in Tirunelveli, Tamil
              Nadu.
            </p>
          </div>

          {/* Links Matrix */}
          <div className="md:col-span-6 flex flex-wrap gap-8 md:justify-end text-on-surface-variant dark:text-outline">
            <div className="flex flex-col space-y-2">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">
                Disciplines
              </span>
              <a
                className="hover:text-primary dark:hover:text-surface underline decoration-secondary transition-all duration-200 font-label-sm text-label-sm"
                href="#services"
              >
                Architecture
              </a>
              <a
                className="hover:text-primary dark:hover:text-surface underline decoration-secondary transition-all duration-200 font-label-sm text-label-sm"
                href="#services"
              >
                Interiors
              </a>
              <a
                className="hover:text-primary dark:hover:text-surface underline decoration-secondary transition-all duration-200 font-label-sm text-label-sm"
                href="#about"
              >
                Materiality
              </a>
            </div>

            <div className="flex flex-col space-y-2">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">
                Atelier
              </span>
              <a
                className="hover:text-primary dark:hover:text-surface underline decoration-secondary transition-all duration-200 font-label-sm text-label-sm"
                href="#about"
              >
                Studio
              </a>
              <a
                className="hover:text-primary dark:hover:text-surface underline decoration-secondary transition-all duration-200 font-label-sm text-label-sm"
                href="#projects"
              >
                Journal
              </a>
              <a
                className="hover:text-primary dark:hover:text-surface underline decoration-secondary transition-all duration-200 font-label-sm text-label-sm"
                href="#contact"
              >
                Contact
              </a>
            </div>

            <div className="flex flex-col space-y-2">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">
                Connect
              </span>
              <a
                className="hover:text-primary dark:hover:text-surface underline decoration-secondary transition-all duration-200 font-label-sm text-label-sm"
                href="https://instagram.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram
              </a>
              <a
                className="hover:text-primary dark:hover:text-surface underline decoration-secondary transition-all duration-200 font-label-sm text-label-sm"
                href="https://pinterest.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Pinterest
              </a>
              <a
                className="hover:text-primary dark:hover:text-surface underline decoration-secondary transition-all duration-200 font-label-sm text-label-sm"
                href="#contact"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line: Exact Immutable Copyright & Geotag */}
        <div className="pt-8 border-t border-outline-variant/30 dark:border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant dark:text-outline font-label-sm text-label-sm">
          <p>© 2024 GM Interior Studio. All rights reserved. Railway Feeder Road, Palayamkottai, Tirunelveli.</p>
          <div className="flex items-center space-x-6">
            <span className="text-outline">TN / IN</span>
            <span>CURATED LUXURY INTERIORS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
