import React from 'react';
import { STUDIO_INFO } from '../data/mockData';

export interface CtaBannerProps {
  readonly onStartProject?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onStartProject }) => {
  return (
    <section className="px-6 md:px-16 max-w-screen-2xl mx-auto mb-24">
      <div className="bg-primary-container dark:bg-[#2c1d14] text-surface-container-lowest p-12 md:p-20 rounded-[2px] relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        <div className="max-w-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed block mb-3 font-semibold">
            BEGIN YOUR TRANSFORMATION
          </span>
          <h2 className="font-headline-lg text-headline-lg font-normal mb-4">
            Let’s Create a Space You’ll Love Coming Home To.
          </h2>
          <p className="font-body-lg text-body-lg text-surface-container font-light leading-relaxed">
            Tell us about your space and let’s explore what’s possible for your home in Tirunelveli.
            We welcome appointments at our Palayamkottai studio.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
          <a
            className="bg-surface-container-lowest text-primary px-8 py-4 rounded-[2px] font-label-md text-label-md uppercase tracking-widest hover:bg-surface-container text-center transition-all duration-300 font-semibold cursor-pointer"
            href="#contact"
            onClick={onStartProject}
          >
            Start Your Project
          </a>
          <a
            className="border border-surface-container-lowest/60 text-surface-container-lowest px-8 py-4 rounded-[2px] font-label-md text-label-md uppercase tracking-widest hover:bg-surface-container-lowest hover:text-primary text-center transition-all duration-300 flex items-center justify-center space-x-2"
            href={STUDIO_INFO.phoneTel}
          >
            <span className="material-symbols-outlined text-base" data-icon="call">
              call
            </span>
            <span>{STUDIO_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
