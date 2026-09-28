export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export interface Metric {
  readonly value: string;
  readonly label: string;
}

export interface ServiceItem {
  readonly id: string;
  readonly number: string;
  readonly category: string;
  readonly title: string;
  readonly description: string;
  readonly tag: string;
  readonly image?: string;
  readonly alt?: string;
}

export interface ProjectItem {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly location: string;
  readonly tag: string;
  readonly category: 'residential' | 'kitchens' | 'master-suites' | 'commercial';
  readonly image: string;
  readonly alt: string;
  readonly colSpan: 'large' | 'small'; // 8 cols or 4 cols
}

export interface ProcessStep {
  readonly step: string;
  readonly title: string;
  readonly description: string;
  readonly isAccent?: boolean;
}

export interface DistinctionPillar {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

export interface Testimonial {
  readonly quote: string;
  readonly author: string;
  readonly location: string;
  readonly rating: number;
}

export const NAV_LINKS: readonly NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const STUDIO_INFO = {
  name: 'GM INTERIOR',
  subtitle: 'Studio Tirunelveli',
  phone: '097905 75083',
  phoneTel: 'tel:09790575083',
  phoneDisplay: '+91 97905 75083',
  whatsappUrl: 'https://wa.me/919790575083',
  mapsUrl: 'https://maps.google.com/?q=Palayamkottai+Tirunelveli',
  address: {
    line1: 'GM Interior, Railway Feeder Road,',
    line2: 'Palayamkottai, Tirunelveli,',
    line3: 'Tamil Nadu — 627002',
  },
  hours: {
    weekdays: 'Monday — Saturday: 9:30 AM – 7:30 PM',
    sunday: 'Sunday: By Confirmed Appointment Only',
  },
  coordinates: 'LAT: 8.7139° N, LONG: 77.7567° E',
  locationTag: 'RAILWAY FEEDER ROAD, PALAYAMKOTTAI',
};

export const STUDIO_METRICS: readonly Metric[] = [
  { value: '12+', label: 'Years of Craft' },
  { value: '150+', label: 'Spaces Delivered' },
  { value: 'Flagship', label: 'Palayamkottai Studio' },
];

export const SERVICES: readonly ServiceItem[] = [
  {
    id: 'complete-home',
    number: '01',
    category: 'TURNKEY',
    title: 'Complete Home Interiors',
    description:
      'Full-scope conceptualization, spatial reallocation, civil detailing, and luxury furniture curation for independent villas and residences.',
    tag: 'Turnkey Villas & Suites',
  },
  {
    id: 'living-room',
    number: '02',
    category: 'SPATIAL',
    title: 'Living Room Interiors',
    description:
      'Double-height architectural paneling, fluted timber walls, custom focal media credenzas, and sculpted seating lounges.',
    tag: 'Double-Height Lounges',
  },
  {
    id: 'modular-kitchens',
    number: '03',
    category: 'CULINARY',
    title: 'Modular Kitchens',
    description:
      'Bespoke fluted walnut cabinetry, seamless quartzite waterfall islands, Blum hardware, and discreet appliance integration.',
    tag: 'Honed Quartzite & Walnut',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAs1HBOaEvyVtNvJokmgxo3GZH_wBiNRwL7f7qKg826IR5PRVhKDUCTzjvYqMyJ2vckI7EXrM9oQ4l9GCZT_jW-7-EbtEhYWo-LVPuoH-82dmMMycr4UX2Y4skNiC-kAFlDEIyaLLo7wUmQq2x3eP-U3LE7MkSFkGkKFciWaTsBptFJ74XqM8EbNYLPB4j1hYmdH9Phl7xCPrWunrkth4VtWPqDrXhlCkoWxycJd2qdhoMD5Pdwb4fVQQ',
    alt: 'Minimalist fluted timber kitchen island with honed quartzite and integrated bronze lighting',
  },
  {
    id: 'bedroom-interiors',
    number: '04',
    category: 'SANCTUARY',
    title: 'Bedroom Interiors',
    description:
      'Serene master sanctuaries, custom upholstered headboards, acoustic wall treatments, and ambient nocturnal lighting.',
    tag: 'Fluted Headboards & Linens',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuByjTzeGKb0NjxZb7iDCxt8JjpFul5bRQyg_FE2q48Kl1HS79kcn9W7B_vp0mUVDe0ZElsg_zFPtDaLg1vi8R3j5Ld8cnz5h_-FYtZeQ0MYy6O2R6EsdhCHU64oP6bnmXrSzjNlzOqAiOXTPRP1F-8WT8W9Nddv-EUl3JeEpN_E0KbuO-Y1SRtFqUJxzf3U3BVKD5-ogTpelJPSunSBvKxMPCUK4INwsjELgAKpHUZL6OF84NoKPD2T-A',
    alt: 'Serene master bedroom featuring fluted wood accent wall and soft linen textiles',
  },
  {
    id: 'wardrobes-storage',
    number: '05',
    category: 'JOINERY',
    title: 'Wardrobes & Storage',
    description:
      'Floor-to-ceiling walk-in wardrobes with tinted fluted glass, leather-lined jewelry drawers, and automated warm sensor illumination.',
    tag: 'Walk-In Closets & Glass',
  },
  {
    id: 'false-ceiling-lighting',
    number: '06',
    category: 'ILLUMINATION',
    title: 'False Ceiling & Lighting',
    description:
      'Shadow-gap plasterwork, seamless continuous cove warmth, and anti-glare museum-grade brass recessed spots calibrated to 2700K.',
    tag: 'Shadow Gap & Brass Spots',
  },
  {
    id: 'commercial-studios',
    number: '07',
    category: 'COMMERCIAL',
    title: 'Commercial & Studios',
    description:
      'Distinguished executive workspaces, medical and dental suites, and boutique retail flagships that elevate enterprise credibility.',
    tag: 'Executive Suites & Boutiques',
  },
  {
    id: 'custom-solutions',
    number: '08',
    category: 'ATELIER',
    title: 'Custom Interior Solutions',
    description:
      'One-of-a-kind monolithic dining tables, sculptural acoustic partitions, handcrafted brass hardware, and personalized art placement.',
    tag: 'Sculptural Millwork',
  },
];

export const PROJECTS: readonly ProjectItem[] = [
  {
    id: 'travertine-villa',
    title: 'The Travertine Villa',
    subtitle: 'Double-Height Living & Courtyard Integration • 4,800 Sq.Ft',
    location: 'Palayamkottai, Tirunelveli',
    tag: 'Featured Residence',
    category: 'residential',
    colSpan: 'large',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuApciGqstYdjcbW0xOfB2De-366pspDSPfYU4Y6N0H1PD2X509ZTXAJU3FKaOuZ0n6pwwZwHgrlETJvq15Z4xI2nMmqK6mXHRXnuTnIzfLYCXt-1mF6rU_tRyca6wDAFLg8AGaMy1SQh54ZCDhvMadahF31ogJ0Ae5pyo6btfdWxp7mN5_8GlDjoNDp13Q2mE3wYpeJv2JyR0tPwY3Vp7eWjWOJR28P85ef6ak5y08bauS-nZaXV1RwtQ',
    alt: 'Living room with travertine fireplace and double height glass wall looking out to garden pool',
  },
  {
    id: 'walnut-quartzite-kitchen',
    title: 'Walnut & Quartzite Kitchen',
    subtitle: 'Bespoke Fluted Cabinetry & Island',
    location: 'Maharaja Nagar, Tirunelveli',
    tag: 'Culinary Atelier',
    category: 'kitchens',
    colSpan: 'small',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAs1HBOaEvyVtNvJokmgxo3GZH_wBiNRwL7f7qKg826IR5PRVhKDUCTzjvYqMyJ2vckI7EXrM9oQ4l9GCZT_jW-7-EbtEhYWo-LVPuoH-82dmMMycr4UX2Y4skNiC-kAFlDEIyaLLo7wUmQq2x3eP-U3LE7MkSFkGkKFciWaTsBptFJ74XqM8EbNYLPB4j1hYmdH9Phl7xCPrWunrkth4VtWPqDrXhlCkoWxycJd2qdhoMD5Pdwb4fVQQ',
    alt: 'Fluted wood kitchen island with honed natural stone counter and hanging brass light fixture',
  },
  {
    id: 'fluted-oak-master-sanctuary',
    title: 'Fluted Oak Master Sanctuary',
    subtitle: 'Acoustic Paneling & Floating Joinery',
    location: 'V.M. Chatram, Tirunelveli',
    tag: 'Master Suite',
    category: 'master-suites',
    colSpan: 'small',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuByjTzeGKb0NjxZb7iDCxt8JjpFul5bRQyg_FE2q48Kl1HS79kcn9W7B_vp0mUVDe0ZElsg_zFPtDaLg1vi8R3j5Ld8cnz5h_-FYtZeQ0MYy6O2R6EsdhCHU64oP6bnmXrSzjNlzOqAiOXTPRP1F-8WT8W9Nddv-EUl3JeEpN_E0KbuO-Y1SRtFqUJxzf3U3BVKD5-ogTpelJPSunSBvKxMPCUK4INwsjELgAKpHUZL6OF84NoKPD2T-A',
    alt: 'Modern master bedroom with vertical wood slatted accent wall and neutral linen bedding',
  },
  {
    id: 'courtyard-residence',
    title: 'Courtyard Residence',
    subtitle: 'Biophilic Indoor-Outdoor Dining & Living Suite',
    location: 'Railway Feeder Road, Tirunelveli',
    tag: 'Open Living',
    category: 'residential',
    colSpan: 'large',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuADSi2tqkaGbQg1BgNd34KiK_S8Q-EktCsdmwqElHMzGY_mYk0rx7tAqf2wi59l4tS9SVJeuwh7UkWg-IgUm5lB4CVco5eMvqIsGlGeYwHo_AuXgZyw9sDQZHBkrhRMeQlj1PDdrCxb9LkmmwYb1Kaa_NAfu1nCLNkgoc66iVbxMfR1pLkyl3x-lZZRav3djIA_eCnAKr9nOUGaLG2VW5eDgwtrataWRSJdOgieVWUm61dnaatsB4FqlQ',
    alt: 'Warm open-concept dining room with lush garden views through full height glass sliders',
  },
];

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    step: '01',
    title: 'Understand',
    description:
      'We listen to your lifestyle, daily rituals, family spatial dynamics, cooking habits, and aesthetic aspirations during an exhaustive site survey.',
  },
  {
    step: '02',
    title: 'Concept',
    description:
      'We develop tactile mood boards, authentic material palettes, 3D photorealistic spatial visualizations, and ergonomic circulation layouts.',
  },
  {
    step: '03',
    title: 'Design',
    description:
      'Every joinery millimeter, electrical conduit, cove light profile, and custom fixture is engineered into shop drawings and precise architectural specs.',
  },
  {
    step: '04',
    title: 'Execute',
    description:
      'Our master carpenters, stone masons, and project managers oversee on-site construction with rigorous quality checks and weekly milestone reports.',
  },
  {
    step: '05',
    title: 'Reveal',
    description:
      'Deep-cleaned, art-curated, and fully styled, the interior is presented turnkey—ready for you to simply unpack and begin living immediately.',
    isAccent: true,
  },
];

export const DISTINCTION_PILLARS: readonly DistinctionPillar[] = [
  {
    icon: 'architecture',
    title: 'Personalized Architecture',
    description:
      'No generic catalog templates. Every configuration is tailored to the specific sun orientation and habits of your household.',
  },
  {
    icon: 'diamond',
    title: 'Material Integrity',
    description:
      'Italian travertine, seasoned teak, natural walnuts, honed quartzite, and commercial-grade PVD brass accents.',
  },
  {
    icon: 'straighten',
    title: 'Ergonomic Precision',
    description:
      'Counter heights, passage clearances, drawer pull resistances, and task lighting angles calibrated for bodily comfort.',
  },
  {
    icon: 'handyman',
    title: 'Obsessive Joinery',
    description:
      'Fluted paneling alignment, 45-degree mitered stone aprons, concealed hinges, and seamless flush baseboards.',
  },
  {
    icon: 'schedule',
    title: 'Transparent Timelines',
    description:
      'Structured procurement schedules, clear milestones, and dedicated on-site engineering supervision to eliminate delays.',
  },
  {
    icon: 'key',
    title: 'Turnkey Handover',
    description:
      'Complete deep cleaning, mechanical testing, appliance commissioning, and styling before presenting the keys.',
  },
];

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    quote:
      '“The custom walnut kitchen they created for our villa in Maharaja Nagar exceeded all our expectations. The attention to the fluted island joinery and concealed lighting was extraordinary.”',
    author: 'Dr. S. Ramakrishnan',
    location: 'Maharaja Nagar, Tirunelveli',
    rating: 5,
  },
  {
    quote:
      '“From our first discussion at their Palayamkottai office to the turnkey reveal, GM Interior demonstrated total professionalism. They managed everything seamlessly while we were residing in Chennai.”',
    author: 'Meera & Anand Narayanan',
    location: 'Palayamkottai Residence',
    rating: 5,
  },
  {
    quote:
      '“Their mastery over natural materials and cove architectural lighting converted our new home into a tranquil sanctuary. Truly the premier interior studio in Southern Tamil Nadu.”',
    author: 'K. Vijayakumar',
    location: 'V.M. Chatram, Tirunelveli',
    rating: 5,
  },
];
