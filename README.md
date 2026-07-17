# Elementum — React + Vite + Tailwind

A pixel-close, fully responsive React implementation of the Elementum landing
page design (thinkers & doers agency site).

## Tech stack

- React 18
- Vite 5
- Tailwind CSS 3
- react-icons (menu / arrow glyphs only)

No UI kits (Bootstrap, MUI, Chakra, shadcn) and no Next.js are used, per the
assignment requirements.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (defaults to `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  assets/            static assets (currently image references use remote URLs)
  components/
    decor/Shapes.jsx  reusable hand-drawn style SVG decorations
    Avatar.jsx         reusable circular avatar
    Navbar.jsx          header + mobile off-canvas menu
    Hero.jsx            hero headline + avatar cluster
    TomorrowSection.jsx "Tomorrow should be better than today"
    ProgressSection.jsx "See how we can help you progress"
    OfferSection.jsx    "What we can offer you!" list
    Testimonials.jsx    customer testimonial block
    Newsletter.jsx       subscribe form (mint band)
    Footer.jsx            footer link columns + contact
  data/content.js      all copy / link / avatar data, kept out of components
  App.jsx              page composition / section order
  main.jsx             React entry point
  index.css            Tailwind directives + hand-drawn underline/highlight utilities
```

## Notes on implementation

- Headline underlines and highlight marker effects (the pink/mint "highlighter"
  look and the orange hand-drawn underline) are implemented with small CSS
  utility classes (`.underline-squiggle`, `.highlight-mark`) rather than raster
  images, so they scale cleanly and inherit the surrounding text color.
- Decorative triangles, blobs and squiggles are inline SVG components in
  `components/decor/Shapes.jsx` so they can be recolored/resized via props
  instead of shipping raster PNGs.
- Portrait imagery uses `pravatar.cc` (avatars) and `picsum.photos` (larger
  editorial photography) as free, key-less placeholder image services —
  swap the `src` values in `src/data/content.js` / the section components for
  real brand photography before shipping.
- Layout is mobile-first with explicit `sm` / `lg` breakpoints; the scattered
  testimonial avatar layout gracefully collapses to a simple stacked row on
  small screens where the free-form scatter would overlap the quote card.
- The mobile navigation uses an accessible off-canvas panel (focus-visible
  styles, `aria-expanded`, `aria-label`s) rather than a plain dropdown.

## Deployment

The project is a static Vite build, so it deploys to Vercel with zero
configuration: import the repo, framework preset "Vite", build command
`npm run build`, output directory `dist`.
