import React from 'react';

export interface BannerQuoteProps {
  readonly quote?: string;
  readonly location?: string;
}

export const BannerQuote: React.FC<BannerQuoteProps> = () => {
  return (
    <section className="relative py-32 md:py-44 bg-primary overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          alt="Full breadth view of warm contemporary interior with landscaped garden backdrop"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuADSi2tqkaGbQg1BgNd34KiK_S8Q-EktCsdmwqElHMzGY_mYk0rx7tAqf2wi59l4tS9SVJeuwh7UkWg-IgUm5lB4CVco5eMvqIsGlGeYwHo_AuXgZyw9sDQZHBkrhRMeQlj1PDdrCxb9LkmmwYb1Kaa_NAfu1nCLNkgoc66iVbxMfR1pLkyl3x-lZZRav3djIA_eCnAKr9nOUGaLG2VW5eDgwtrataWRSJdOgieVWUm61dnaatsB4FqlQ"
        />
      </div>
      <div className="absolute inset-0 bg-primary/80 backdrop-blur-xs"></div>

      <div className="relative z-10 text-center max-w-3xl px-6">
        <span className="font-label-sm text-label-sm tracking-widest uppercase text-secondary-fixed mb-4 inline-block font-semibold">
          GM INTERIOR ATELIER
        </span>
        <h2 className="font-display text-display text-surface-container-lowest font-normal leading-tight mb-8">
          “Your space.
          <br />
          Your story.
          <br />
          <span className="italic text-secondary-fixed">Our design.”</span>
        </h2>
        <div className="w-16 h-px bg-secondary-fixed/50 mx-auto mb-6"></div>
        <p className="font-label-md text-label-md text-surface-container tracking-widest uppercase">
          Palayamkottai • Tirunelveli • Tamil Nadu
        </p>
      </div>
    </section>
  );
};
