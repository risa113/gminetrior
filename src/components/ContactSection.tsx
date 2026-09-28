import React from 'react';
import { STUDIO_INFO } from '../data/mockData';
import { useConsultationForm } from '../hooks/useConsultationForm';

export interface ContactSectionProps {
  readonly onFormSuccess?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onFormSuccess }) => {
  const { formData, submitted, loading, handleChange, handleSubmit, resetForm } =
    useConsultationForm();

  const handleFormSubmit = (e: React.FormEvent) => {
    handleSubmit(e);
    onFormSuccess?.();
  };

  return (
    <section className="py-24 bg-surface-container-low dark:bg-[#1a1410] hairline-t" id="contact">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Studio Directory & Immediate Triggers (5 Columns) */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-semibold">
                VISIT &amp; CONNECT
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary dark:text-surface mt-2">
                Palayamkottai Atelier
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant dark:text-outline font-light mt-3 leading-relaxed">
                We welcome homeowners, architects, and estate developers for private spatial
                discussions and tactile material previews.
              </p>
            </div>

            {/* Studio Address Spec Card */}
            <div className="space-y-6 border-y border-outline-variant/40 dark:border-outline-variant/20 py-8">
              <div className="flex items-start space-x-4">
                <span
                  className="material-symbols-outlined text-primary dark:text-secondary-fixed text-xl mt-1"
                  data-icon="location_on"
                >
                  location_on
                </span>
                <div>
                  <span className="font-label-md text-label-md uppercase tracking-wider text-primary dark:text-surface font-semibold block">
                    Studio Flagship
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-outline mt-1 leading-relaxed">
                    {STUDIO_INFO.address.line1}
                    <br />
                    {STUDIO_INFO.address.line2}
                    <br />
                    {STUDIO_INFO.address.line3}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span
                  className="material-symbols-outlined text-primary dark:text-secondary-fixed text-xl mt-1"
                  data-icon="phone"
                >
                  phone
                </span>
                <div>
                  <span className="font-label-md text-label-md uppercase tracking-wider text-primary dark:text-surface font-semibold block">
                    Direct Telephone
                  </span>
                  <a
                    className="font-body-sm text-body-sm text-primary dark:text-secondary-fixed hover:text-secondary transition-colors mt-1 block font-medium"
                    href={STUDIO_INFO.phoneTel}
                  >
                    {STUDIO_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span
                  className="material-symbols-outlined text-primary dark:text-secondary-fixed text-xl mt-1"
                  data-icon="schedule"
                >
                  schedule
                </span>
                <div>
                  <span className="font-label-md text-label-md uppercase tracking-wider text-primary dark:text-surface font-semibold block">
                    Visiting Hours
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-outline mt-1 leading-relaxed">
                    {STUDIO_INFO.hours.weekdays}
                    <br />
                    {STUDIO_INFO.hours.sunday}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                className="bg-primary dark:bg-secondary text-surface dark:text-primary-container px-5 py-3 rounded-[2px] font-label-md text-label-md uppercase tracking-wider flex items-center space-x-2 hover:bg-primary-container dark:hover:bg-secondary-fixed transition-colors font-semibold"
                href={STUDIO_INFO.phoneTel}
              >
                <span className="material-symbols-outlined text-base" data-icon="call">
                  call
                </span>
                <span>Call Studio</span>
              </a>

              <a
                className="border border-primary dark:border-secondary text-primary dark:text-secondary-fixed px-5 py-3 rounded-[2px] font-label-md text-label-md uppercase tracking-wider flex items-center space-x-2 hover:bg-surface-container dark:hover:bg-primary-container transition-colors font-semibold"
                href={STUDIO_INFO.whatsappUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-base" data-icon="chat">
                  chat
                </span>
                <span>WhatsApp</span>
              </a>

              <a
                className="border border-outline-variant text-outline dark:text-outline-variant px-5 py-3 rounded-[2px] font-label-md text-label-md uppercase tracking-wider flex items-center space-x-2 hover:border-primary hover:text-primary dark:hover:border-secondary dark:hover:text-secondary-fixed transition-colors font-semibold"
                href={STUDIO_INFO.mapsUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-base" data-icon="near_me">
                  near_me
                </span>
                <span>Directions</span>
              </a>
            </div>
          </div>

          {/* Right: Bespoke Consultation Form (7 Columns) */}
          <div className="lg:col-span-7 bg-surface dark:bg-primary-container p-8 md:p-12 rounded-[2px] hairline-all">
            <div className="mb-8">
              <h3 className="font-headline-sm text-headline-sm text-primary dark:text-surface">
                Request Studio Consultation
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-outline mt-1">
                Provide initial details about your residence to schedule an architectural assessment.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 px-6 text-center space-y-4 bg-surface-container-low dark:bg-primary rounded-[2px] hairline-all animate-fadeIn">
                <span className="material-symbols-outlined text-4xl text-secondary">
                  check_circle
                </span>
                <h4 className="font-headline-sm text-headline-sm text-primary dark:text-surface">
                  Consultation Request Received
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant dark:text-outline max-w-md mx-auto">
                  Thank you, <strong className="text-primary dark:text-surface">{formData.name}</strong>. A senior interior
                  architect from GM Interior Studio will review your specifications and connect with
                  you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-6 inline-block text-sm uppercase tracking-widest text-secondary underline hover:text-primary transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label
                      className="block font-label-sm text-label-sm uppercase tracking-wider text-outline mb-2"
                      htmlFor="name"
                    >
                      Full Name *
                    </label>
                    <input
                      className="w-full bg-surface-container-low dark:bg-primary/50 border border-outline-variant/60 dark:border-outline-variant/30 focus:border-primary dark:focus:border-secondary focus:ring-0 rounded-[2px] py-3 px-4 font-body-sm text-body-sm text-primary dark:text-surface placeholder-outline/60"
                      id="name"
                      placeholder="e.g. S. Rajendran"
                      required
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      className="block font-label-sm text-label-sm uppercase tracking-wider text-outline mb-2"
                      htmlFor="phone"
                    >
                      Contact Number *
                    </label>
                    <input
                      className="w-full bg-surface-container-low dark:bg-primary/50 border border-outline-variant/60 dark:border-outline-variant/30 focus:border-primary dark:focus:border-secondary focus:ring-0 rounded-[2px] py-3 px-4 font-body-sm text-body-sm text-primary dark:text-surface placeholder-outline/60"
                      id="phone"
                      placeholder="e.g. 097905 75083"
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email Address */}
                  <div>
                    <label
                      className="block font-label-sm text-label-sm uppercase tracking-wider text-outline mb-2"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      className="w-full bg-surface-container-low dark:bg-primary/50 border border-outline-variant/60 dark:border-outline-variant/30 focus:border-primary dark:focus:border-secondary focus:ring-0 rounded-[2px] py-3 px-4 font-body-sm text-body-sm text-primary dark:text-surface placeholder-outline/60"
                      id="email"
                      placeholder="name@domain.com"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label
                      className="block font-label-sm text-label-sm uppercase tracking-wider text-outline mb-2"
                      htmlFor="project-type"
                    >
                      Project Classification
                    </label>
                    <select
                      className="w-full bg-surface-container-low dark:bg-primary/50 border border-outline-variant/60 dark:border-outline-variant/30 focus:border-primary dark:focus:border-secondary focus:ring-0 rounded-[2px] py-3 px-4 font-body-sm text-body-sm text-primary dark:text-surface"
                      id="project-type"
                      value={formData.projectType}
                      onChange={handleChange}
                    >
                      <option value="villa">Turnkey Residential Villa</option>
                      <option value="apartment">Luxury Apartment Renovation</option>
                      <option value="kitchen">Modular Kitchen &amp; Dining</option>
                      <option value="master-suite">Master Bedroom &amp; Walk-in Wardrobe</option>
                      <option value="commercial">Commercial Atelier / Studio</option>
                    </select>
                  </div>
                </div>

                {/* Tentative Timeline */}
                <div>
                  <label
                    className="block font-label-sm text-label-sm uppercase tracking-wider text-outline mb-2"
                    htmlFor="timeline"
                  >
                    Desired Timeline
                  </label>
                  <select
                    className="w-full bg-surface-container-low dark:bg-primary/50 border border-outline-variant/60 dark:border-outline-variant/30 focus:border-primary dark:focus:border-secondary focus:ring-0 rounded-[2px] py-3 px-4 font-body-sm text-body-sm text-primary dark:text-surface"
                    id="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                  >
                    <option value="immediate">Immediate (Ready for Site Survey)</option>
                    <option value="1-3-months">Within 1 – 3 Months</option>
                    <option value="planning">Civil Construction Stage (Planning Ahead)</option>
                  </select>
                </div>

                {/* Spatial Requirements */}
                <div>
                  <label
                    className="block font-label-sm text-label-sm uppercase tracking-wider text-outline mb-2"
                    htmlFor="message"
                  >
                    Spatial Context &amp; Requirements
                  </label>
                  <textarea
                    className="w-full bg-surface-container-low dark:bg-primary/50 border border-outline-variant/60 dark:border-outline-variant/30 focus:border-primary dark:focus:border-secondary focus:ring-0 rounded-[2px] py-3 px-4 font-body-sm text-body-sm text-primary dark:text-surface placeholder-outline/60"
                    id="message"
                    placeholder="Mention project location (e.g. Palayamkottai, Tirunelveli), square footage, and key requirements..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  className="w-full bg-primary dark:bg-secondary text-surface-container-lowest dark:text-primary-container py-4 rounded-[2px] font-label-md text-label-md uppercase tracking-widest hover:bg-primary-container dark:hover:bg-secondary-fixed transition-colors duration-300 flex items-center justify-center space-x-2 font-semibold disabled:opacity-50 cursor-pointer"
                  type="submit"
                  disabled={loading}
                >
                  <span>{loading ? 'Submitting...' : 'Submit Consultation Request'}</span>
                  <span className="material-symbols-outlined text-base" data-icon="send">
                    send
                  </span>
                </button>

                <p className="font-label-sm text-label-sm text-outline text-center">
                  Direct consultation inquiries are kept strictly confidential.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
