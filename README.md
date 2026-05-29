# InfoManage Website

Corporate website for **InfoManage** — structured IT management for businesses that depend on technology. Built with React, Vite, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Brand

- Primary: Navy `#003366`
- Accent: `#0056a3`
- Logo: `public/assets/img/infomanage-logo.png` (horizontal SmallBlueLogo)

## Images (`public/assets/img/`)

| Asset | Use |
|-------|-----|
| `hero-illustration.png` | Hero (Arsha-style isometric IT) |
| `it-team-illustration.png` | Outsourced IT section |
| `illustration/operations-illustration.webp` | Operations |
| `photos/*.jpg` | Team, technology, security, meeting (Unsplash) |
| `bg/parallax-cta.webp` | Final CTA fixed parallax |
| `cta/newsletter-figure.webp` | Strategic partnership |

## Parallax & motion

- **Scroll parallax bands** between sections (`ParallaxSection`) — like [Arsha](https://bootstrapmade.com/demo/Arsha/) CTA background movement
- **Fixed parallax** on final CTA (`FixedParallaxCTA`) — Arsha `position: fixed` + `clip-path` technique
- **Fade/slide on scroll** (`AnimateIn`) — similar to Arsha AOS animations
- **Hero illustration float** — Arsha hero animation

## Sections

Hero, Outsourced IT, parallax break, How We Manage IT, Operations, parallax break, Client Partnership, Service Plans, Strategic Partnership, Established, parallax CTA, Contact.
# corporate_website
