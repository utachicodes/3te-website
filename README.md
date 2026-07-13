# 3TE - Energie & Reseaux

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2-06B6D4?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4-0055FF)
![License](https://img.shields.io/badge/License-Proprietary-red)
![Build](https://img.shields.io/badge/Build-Passing-brightgreen)

Corporate website for 3TE, a Senegalese energy and electrical infrastructure company. The site showcases their services across industrial, commercial, and public sectors.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS 4.2 with custom design tokens (oklch color system)
- **Animations**: Framer Motion 12 (scroll-triggered, spring physics, layout animations)
- **UI Library**: shadcn/ui with custom theme
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics

## Sections

- **Hero** - Full-width background with parallax zoom, animated text reveal, infinite keyword marquee
- **Features** - Three-column value props with scroll-triggered stagger and icon hover effects
- **About** - Company overview with animated stat counters (count-up on scroll)
- **Services** - Tabbed interface with crossfade transitions and image animations
- **Engagements** - Values cards with hover lift and partner logo showcase
- **Contact** - Split layout with staggered form fields and animated success state
- **Header** - Sticky nav with scroll-based backdrop blur and mobile slide menu
- **Footer** - Three-column layout with staggered reveal

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Project Structure

```
.
├── app/
│   ├── globals.css          # Theme tokens, base styles
│   ├── layout.tsx           # Root layout, fonts, metadata
│   └── page.tsx             # Home page composition
├── components/
│   ├── hero.tsx             # Hero section with marquee
│   ├── features.tsx         # Value proposition cards
│   ├── about.tsx            # Company info with animated stats
│   ├── services.tsx         # Tabbed service showcase
│   ├── engagements.tsx      # Values and partners
│   ├── contact.tsx          # Contact form and details
│   ├── site-header.tsx      # Sticky navigation
│   ├── site-footer.tsx      # Footer layout
│   ├── logo.tsx             # Brand logo component
│   ├── linkedin-icon.tsx    # LinkedIn SVG icon
│   └── ui/                  # shadcn primitives
├── lib/
│   └── animations.ts        # Shared motion variants and transitions
└── public/
    └── images/              # Site imagery
```

## Design Decisions

- **Color system**: oklch-based tokens for perceptual uniformity and wide gamut support
- **Typography**: Oswald (display), Montserrat (headings), Open Sans (body) via Google Fonts
- **Animations**: Every section uses scroll-triggered reveal with spring physics for organic feel
- **Responsive**: Mobile-first with lg breakpoints for desktop layouts
- **Performance**: Static generation, unoptimized images for simplicity, analytics in production only

## Contact

- **Email**: contact@3te-energies.com
- **Phone**: +221 33 000 00 00
- **Address**: Km 6.5 Route de Rufisque, Dakar, Senegal
