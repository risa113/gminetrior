import React from 'react';
import { SERVICES, ServiceItem } from '../data/mockData';

export interface ServicesProps {
  readonly onSelectService?: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section className="py-24 md:py-32 bg-surface-container-low dark:bg-[#201813] hairline-b" id="services">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-semibold">
              CRAFT &amp; EXPERTISE
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary dark:text-surface mt-2">
              Designed Around You.
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-outline max-w-md font-light">
            A turnkey atelier practice catering to complete architectural transformations, bespoke
            carpentry, and refined spatial curation.
          </p>
        </div>

        {/* 8-Card Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const hasImage = Boolean(service.image);
            return (
              <div
                key={service.id}
                onClick={() => onSelectService?.(service)}
                className={`bg-surface dark:bg-primary-container p-7 rounded-[2px] hairline-all flex flex-col justify-between group hover:border-primary/40 dark:hover:border-secondary transition-all duration-300 ${
                  hasImage ? 'relative overflow-hidden' : ''
                }`}
              >
                {hasImage && (
                  <div className="h-32 -mx-7 -mt-7 mb-6 overflow-hidden bg-surface-container dark:bg-primary">
                    <img
                      alt={service.alt || service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={service.image}
                    />
                  </div>
                )}

                <div>
                  <div className={`flex justify-between items-start ${hasImage ? 'mb-2' : 'mb-6'}`}>
                    <span className="font-label-sm text-label-sm text-outline uppercase tracking-widest">
                      {service.number} / {service.category}
                    </span>
                    <span
                      className="material-symbols-outlined text-primary dark:text-secondary-fixed group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      data-icon="north_east"
                    >
                      north_east
                    </span>
                  </div>

                  <h3 className="font-headline-sm text-headline-sm text-primary dark:text-surface mb-3">
                    {service.title}
                  </h3>

                  <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-outline leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-outline-variant/30 dark:border-outline-variant/20 font-label-sm text-label-sm text-secondary tracking-widest uppercase">
                  {service.tag}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
