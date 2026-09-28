import React, { useState } from 'react';
import { PROJECTS } from '../data/mockData';

export interface ProjectsProps {
  readonly onRequestDossier?: () => void;
}

type CategoryFilter = 'all' | 'residential' | 'kitchens' | 'master-suites' | 'commercial';

export const Projects: React.FC<ProjectsProps> = ({ onRequestDossier }) => {
  const [selectedFilter, setSelectedFilter] = useState<CategoryFilter>('all');

  const filterTabs: { id: CategoryFilter; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'kitchens', label: 'Kitchens' },
    { id: 'master-suites', label: 'Master Suites' },
    { id: 'commercial', label: 'Commercial' },
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    if (selectedFilter === 'all') return true;
    return project.category === selectedFilter;
  });

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 max-w-screen-2xl mx-auto" id="projects">
      {/* Title & Editorial Filtering Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <div>
          <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-semibold">
            PORTFOLIO ARCHIVE
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary dark:text-surface mt-2">
            Selected Spaces
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {filterTabs.map((tab) => {
            const isSelected = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 font-label-md text-label-md uppercase tracking-widest transition-colors rounded-[1px] ${
                  isSelected
                    ? 'text-primary dark:text-surface border border-primary dark:border-secondary bg-surface-container dark:bg-primary-container font-semibold'
                    : 'text-on-surface-variant dark:text-outline border border-outline-variant/40 hover:text-primary dark:hover:text-surface hover:border-primary'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Asymmetrical Masonry Editorial Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {filteredProjects.map((project) => {
          const isLarge = project.colSpan === 'large';
          return (
            <div
              key={project.id}
              className={`${
                isLarge ? 'md:col-span-8' : 'md:col-span-4'
              } group transition-all duration-500`}
            >
              <div
                className={`overflow-hidden bg-surface-container dark:bg-primary-container rounded-[2px] hairline-all relative ${
                  isLarge ? 'aspect-[16/10]' : 'aspect-[4/5]'
                }`}
              >
                <img
                  alt={project.alt}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                  src={project.image}
                />
                <div className="absolute top-4 right-4 bg-surface/90 dark:bg-primary-container/90 backdrop-blur-md px-3 py-1 text-label-sm font-label-sm uppercase tracking-wider text-primary dark:text-surface">
                  {project.tag}
                </div>
              </div>

              <div
                className={`mt-4 border-b border-outline-variant/30 dark:border-outline-variant/20 pb-4 ${
                  isLarge ? 'flex flex-col sm:flex-row sm:items-baseline justify-between' : ''
                }`}
              >
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary dark:text-surface group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-outline">
                    {project.subtitle}
                  </p>
                </div>
                <span
                  className={`font-label-sm text-label-sm text-outline uppercase tracking-wider ${
                    isLarge ? 'mt-2 sm:mt-0' : 'block mt-1'
                  }`}
                >
                  {project.location}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Archival Link */}
      <div className="text-center mt-16">
        <a
          className="inline-flex items-center space-x-3 text-primary dark:text-surface border-b border-primary dark:border-surface pb-1 hover:text-secondary hover:border-secondary dark:hover:text-secondary dark:hover:border-secondary transition-colors font-label-md text-label-md uppercase tracking-widest cursor-pointer"
          href="#contact"
          onClick={onRequestDossier}
        >
          <span>Request Portfolio Dossier &amp; Material Swatches</span>
          <span className="material-symbols-outlined text-base" data-icon="arrow_forward">
            arrow_forward
          </span>
        </a>
      </div>
    </section>
  );
};
