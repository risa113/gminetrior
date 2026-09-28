import React from 'react';
import { STUDIO_INFO } from '../data/mockData';

export interface HeroProps {
  readonly onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section
      className="relative min-h-[92vh] flex items-end justify-start bg-primary-container overflow-hidden"
      id="hero"
    >
      {/* Hero Image Background with Architectural Warm Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Double-height luxury living room with wood paneling and vast glass windows overlooking a verdant courtyard"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuApciGqstYdjcbW0xOfB2De-366pspDSPfYU4Y6N0H1PD2X509ZTXAJU3FKaOuZ0n6pwwZwHgrlETJvq15Z4xI2nMmqK6mXHRXnuTnIzfLYCXt-1mF6rU_tRyca6wDAFLg8AGaMy1SQh54ZCDhvMadahF31ogJ0Ae5pyo6btfdWxp7mN5_8GlDjoNDp13Q2mE3wYpeJv2JyR0tPwY3Vp7eWjWOJR28P85ef6ak5y08bauS-nZaXV1RwtQ"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/45 to-transparent"></div>
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-[0.5px]"></div>
      </div>

      {/* Editorial Hero Narrative Overlay */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 md:px-16 pb-16 md:pb-24 pt-32">
        <div className="max-w-3xl">
          {/* Location Archival Chip */}
          <div className="inline-flex items-center space-x-2 bg-surface/90 dark:bg-primary-container/90 backdrop-blur-md px-3.5 py-1.5 rounded-[2px] mb-8 border border-outline-variant/40">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            <span className="font-label-sm text-label-sm text-primary dark:text-surface tracking-widest uppercase font-semibold">
              INTERIOR DESIGN STUDIO • PALAYAMKOTTAI, TIRUNELVELI
            </span>
          </div>

          {/* Monumental Serif Headline */}
          <h1 className="font-display text-display text-surface-container-lowest mb-6 leading-tight font-normal">
            Spaces Designed
            <br />
            <span className="italic font-display font-light text-secondary-fixed">
              to Feel Like You.
            </span>
          </h1>

          {/* Supporting Paragraph */}
          <p className="font-body-lg text-body-lg text-surface-container-high max-w-xl mb-10 leading-relaxed font-light">
            Thoughtfully crafted interiors that bring together refined aesthetics, functionality and
            timeless comfort for discerning homeowners in Tamil Nadu.
          </p>

          {/* Twin Luxury CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              className="bg-surface-container-lowest text-primary px-7 py-3.5 rounded-[2px] font-label-md text-label-md uppercase tracking-widest hover:bg-surface-container transition-all duration-300 flex items-center space-x-2 cursor-pointer"
              href="#projects"
              onClick={onExploreClick}
            >
              <span>Explore Selected Work</span>
              <span className="material-symbols-outlined text-base" data-icon="arrow_forward">
                arrow_forward
              </span>
            </a>

            <a
              className="border border-surface-container-lowest/60 text-surface-container-lowest px-7 py-3.5 rounded-[2px] font-label-md text-label-md uppercase tracking-widest hover:bg-surface-container-lowest hover:text-primary transition-all duration-300 flex items-center space-x-2"
              href={STUDIO_INFO.phoneTel}
            >
              <span className="material-symbols-outlined text-base" data-icon="phone_in_talk">
                phone_in_talk
              </span>
              <span>{STUDIO_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Studio Geolocation Coordinates & Architectural Scroll Indicator */}
        <div className="mt-16 pt-8 border-t border-surface-container-lowest/20 flex flex-wrap justify-between items-center text-surface-container-high font-label-sm text-label-sm tracking-widest uppercase">
          <div className="flex items-center space-x-6">
            <span>{STUDIO_INFO.coordinates}</span>
            <span className="hidden sm:inline text-outline-variant">•</span>
            <span className="hidden sm:inline">{STUDIO_INFO.locationTag}</span>
          </div>

          <div className="flex items-center space-x-2 animate-pulse mt-4 md:mt-0">
            <span>SCROLL TO DISCOVER</span>
            <span className="material-symbols-outlined text-base" data-icon="arrow_downward">
              arrow_downward
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
