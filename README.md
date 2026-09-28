# GM Interior Studio — Web Application

Architectural & Interior Design Studio website built with **React 18**, **TypeScript**, **Vite**, and **Tailwind CSS**, faithfully reproducing the Stitch design from project `12500559771571066101` (screen `c94e33cd95084d2f90f557b7293743a4`).

## Features

- **Architectural Editorial Design**: Styled with Playfair Display for editorial typography, Manrope for technical precision, and a warm walnut palette (`#321f14`, `#4a3428`, `#725a37`, `#fdf9f3`).
- **Sticky Glassmorphic Navigation**: Smooth scroll tracking with active section highlights and mobile-responsive drawer.
- **Cinematic Hero**: Scrim-layered architectural photography, geolocation coordinates, and quick telephone & portfolio CTAs.
- **Brand Statement & Metrics**: 12+ Years of Craft, 150+ Spaces Delivered, and artisan material sourcing highlight.
- **8-Card Services Grid**: Turnkey Villas, Living Rooms, Modular Kitchens, Bedroom Suites, Wardrobes, Lighting & False Ceiling, Commercial & Studios, and Custom Solutions.
- **Selected Spaces (Portfolio)**: Interactive category filtering (All Projects, Residential, Kitchens, Master Suites, Commercial) in an asymmetrical masonry layout.
- **5-Step Atelier Framework**: Sequential methodology (Understand, Concept, Design, Execute, Reveal).
- **Distinction (6 Pillars)**: Personalized Architecture, Material Integrity, Ergonomic Precision, Obsessive Joinery, Transparent Timelines, and Turnkey Handover.
- **Testimonials & Full-Width Statement**: Client experiences with authentic ratings and studio ethos.
- **Interactive Consultation Suite**: Working consultation inquiry form with state management, phone triggers, WhatsApp direct chat, and Google Maps direction links.

## Project Structure

```
├── .stitch/
│   ├── designs/
│   │   ├── c94e33cd95084d2f90f557b7293743a4.html
│   │   └── c94e33cd95084d2f90f557b7293743a4.png
│   └── metadata.json
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── BannerQuote.tsx
│   │   ├── ContactSection.tsx
│   │   ├── CtaBanner.tsx
│   │   ├── Distinction.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Process.tsx
│   │   ├── Projects.tsx
│   │   ├── Services.tsx
│   │   └── Testimonials.tsx
│   ├── data/
│   │   └── mockData.ts
│   ├── hooks/
│   │   └── useConsultationForm.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Production Build

```bash
npm run build
```
