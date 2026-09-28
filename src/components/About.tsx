import React from 'react';
import { STUDIO_METRICS } from '../data/mockData';

export interface AboutProps {
  readonly onLearnMoreClick?: () => void;
}

export const About: React.FC<AboutProps> = () => {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-16 max-w-screen-2xl mx-auto border-b border-outline-variant/30 dark:border-outline-variant/10"
      id="about"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Editorial Narrative (7 Columns) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-2">
            <span className="font-label-md text-label-md tracking-widest uppercase text-secondary font-semibold">
              GM INTERIOR • PALAYAMKOTTAI
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary dark:text-surface font-normal leading-snug">
              Where thoughtful design meets everyday living.
            </h2>
          </div>

          <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-outline font-light leading-relaxed">
            At GM Interior Studio, we believe spaces should not simply impress at first glance—they
            should endure through decades of shared moments. Grounded in Tirunelveli and serving clients
            across Southern Tamil Nadu, our atelier synthesizes clean architectural lines with organic
            warmth, local craft intelligence, and European ergonomic precision.
          </p>

          <p className="font-body-md text-body-md text-on-surface-variant dark:text-outline font-normal leading-relaxed">
            From custom book-matched walnut joinery to serene natural travertine hearths, every single
            millimeter is designed around your specific daily rituals. We avoid manufactured trends in
            pursuit of balanced light, tactile surfaces, and timeless architectural serenity.
          </p>

          {/* Studio Metrics Matrix */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-outline-variant/40 dark:border-outline-variant/20">
            {STUDIO_METRICS.map((metric) => (
              <div key={metric.label}>
                <span className="block font-headline-lg text-headline-lg text-primary dark:text-secondary-fixed">
                  {metric.value}
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Asymmetrical Editorial Visual & Material Vignette (5 Columns) */}
        <div className="lg:col-span-5 relative space-y-6">
          <div className="relative overflow-hidden bg-surface-container dark:bg-primary-container rounded-[2px] hairline-all aspect-[4/5] group">
            <img
              alt="Sunlit living dining courtyard residence showcasing organic textures and wood elements"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuADSi2tqkaGbQg1BgNd34KiK_S8Q-EktCsdmwqElHMzGY_mYk0rx7tAqf2wi59l4tS9SVJeuwh7UkWg-IgUm5lB4CVco5eMvqIsGlGeYwHo_AuXgZyw9sDQZHBkrhRMeQlj1PDdrCxb9LkmmwYb1Kaa_NAfu1nCLNkgoc66iVbxMfR1pLkyl3x-lZZRav3djIA_eCnAKr9nOUGaLG2VW5eDgwtrataWRSJdOgieVWUm61dnaatsB4FqlQ"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-surface/90 dark:bg-primary-container/90 backdrop-blur-md p-4 rounded-[2px] border border-outline-variant/30">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block font-semibold">
                Tirunelveli Residence
              </span>
              <span className="font-headline-sm text-headline-sm text-primary dark:text-surface">
                Courtyard Harmony &amp; Light
              </span>
            </div>
          </div>

          {/* Material Vignette Pill */}
          <div className="bg-surface-container-low dark:bg-primary-container/60 p-6 rounded-[2px] hairline-all flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-primary-container dark:bg-secondary flex items-center justify-center text-surface-container-lowest">
                <span className="material-symbols-outlined text-lg" data-icon="texture">
                  texture
                </span>
              </div>
              <div>
                <span className="font-label-md text-label-md uppercase tracking-wider text-primary dark:text-surface font-semibold block">
                  Artisan Sourcing
                </span>
                <span className="font-body-sm text-body-sm text-outline">
                  Teak, Travertine, Honed Quartzite &amp; Brass
                </span>
              </div>
            </div>
            <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
              Bespoke Spec
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
