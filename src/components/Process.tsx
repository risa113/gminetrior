import React from 'react';
import { PROCESS_STEPS } from '../data/mockData';

export interface ProcessProps {
  readonly onStepClick?: (step: string) => void;
}

export const Process: React.FC<ProcessProps> = () => {
  return (
    <section
      className="py-24 md:py-32 bg-surface-container dark:bg-[#1d1612] hairline-t hairline-b"
      id="process"
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-16">
        {/* Headline & Philosophy */}
        <div className="max-w-2xl mb-16">
          <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-semibold">
            METHODICAL RIGOR
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary dark:text-surface mt-2">
            The 5-Step Atelier Framework
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-outline font-light mt-4">
            From the first conversational dialogue to the turnkey key handover, our sequential
            methodology ensures absolute transparency, architectural precision, and zero compromises.
          </p>
        </div>

        {/* Sequential Architectural Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
          {PROCESS_STEPS.map((step) => {
            return (
              <div
                key={step.step}
                className={`border-t-2 ${
                  step.isAccent
                    ? 'border-primary dark:border-secondary-fixed'
                    : 'border-secondary/60'
                } pt-6 space-y-4`}
              >
                <span
                  className={`font-headline-lg text-headline-lg ${
                    step.isAccent
                      ? 'text-primary dark:text-secondary-fixed'
                      : 'text-secondary/60 dark:text-secondary-fixed/50'
                  }`}
                >
                  {step.step}
                </span>

                <h3 className="font-headline-sm text-headline-sm text-primary dark:text-surface">
                  {step.title}
                </h3>

                <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-outline leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
