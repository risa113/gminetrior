import React from 'react';
import { DISTINCTION_PILLARS } from '../data/mockData';

export interface DistinctionProps {
  readonly onPillarClick?: (pillar: string) => void;
}

export const Distinction: React.FC<DistinctionProps> = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Editorial Image Collage (5 Columns) */}
        <div className="lg:col-span-5 relative">
          <div className="bg-surface-container dark:bg-primary-container rounded-[2px] hairline-all overflow-hidden aspect-[4/5] shadow-sm">
            <img
              alt="Detailed view of kitchen island showing fine fluted millwork and precision stone craftsmanship"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs1HBOaEvyVtNvJokmgxo3GZH_wBiNRwL7f7qKg826IR5PRVhKDUCTzjvYqMyJ2vckI7EXrM9oQ4l9GCZT_jW-7-EbtEhYWo-LVPuoH-82dmMMycr4UX2Y4skNiC-kAFlDEIyaLLo7wUmQq2x3eP-U3LE7MkSFkGkKFciWaTsBptFJ74XqM8EbNYLPB4j1hYmdH9Phl7xCPrWunrkth4VtWPqDrXhlCkoWxycJd2qdhoMD5Pdwb4fVQQ"
            />
          </div>

          {/* Architectural Accent Callout */}
          <div className="absolute -bottom-6 -right-6 hidden sm:block bg-primary text-surface dark:bg-secondary p-6 max-w-xs rounded-[2px] border border-outline-variant/30 shadow-lg">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed dark:text-primary-container block mb-1 font-semibold">
              OUR PHILOSOPHY
            </span>
            <p className="font-body-sm text-body-sm text-surface-container-high dark:text-primary-fixed-dim leading-snug">
              “Architecture is the thoughtful making of space. Interior design is making that space human.”
            </p>
          </div>
        </div>

        {/* Right 6 Pillars of Distinction (7 Columns) */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-semibold">
              DISTINCTION
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary dark:text-surface mt-2">
              Details Make the Difference.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
            {DISTINCTION_PILLARS.map((pillar) => (
              <div key={pillar.title} className="space-y-2">
                <div className="flex items-center space-x-2 text-primary dark:text-secondary-fixed">
                  <span className="material-symbols-outlined text-lg" data-icon={pillar.icon}>
                    {pillar.icon}
                  </span>
                  <h3 className="font-label-lg text-label-lg uppercase tracking-wider font-semibold">
                    {pillar.title}
                  </h3>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-outline leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
