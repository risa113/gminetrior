import React from 'react';
import { TESTIMONIALS } from '../data/mockData';

export interface TestimonialsProps {
  readonly onReadMoreReviews?: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16 max-w-screen-2xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-semibold">
            TESTIMONIALS
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary dark:text-surface mt-2">
            Client Experiences
          </h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant dark:text-outline max-w-md font-light">
          A legacy built on enduring trust and word-of-mouth recommendations throughout Tirunelveli
          and surrounding districts.
        </p>
      </div>

      {/* Editorial Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((review) => (
          <div
            key={review.author}
            className="bg-surface-container-low dark:bg-primary-container p-8 rounded-[2px] hairline-all flex flex-col justify-between hover:border-primary/40 dark:hover:border-secondary transition-colors duration-300"
          >
            <div>
              <div className="flex text-secondary dark:text-secondary-fixed mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-base"
                    data-icon="star"
                    data-weight="fill"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="font-body-md text-body-md text-on-surface dark:text-surface italic leading-relaxed mb-6">
                {review.quote}
              </p>
            </div>
            <div className="pt-6 border-t border-outline-variant/30 dark:border-outline-variant/20">
              <span className="font-label-md text-label-md uppercase tracking-wider text-primary dark:text-secondary-fixed font-semibold block">
                {review.author}
              </span>
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                {review.location}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
