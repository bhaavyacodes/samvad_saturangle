# Samvad — Website

A simple 3-page React website for Samvad, the debate event by Saturangle Club, presented during Srijan.

## Pages

1. **Home** — hero introduction + "Samvad 2026, Coming Soon"
2. **About Samvad** — what Samvad is
3. **Samvad Through the Years** — past editions, from `/from our archives`

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints in your terminal (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
```

## Project structure

```
src/
  components/   Navbar, Footer, Button, SectionHeading, EventCard
  pages/        Home, About, ThroughYears
  App.jsx       routes between the three pages
  index.css     shared design tokens (colors, fonts, spacing)
```

## Editing content

- Placeholder text is marked clearly (e.g. `[Add Name]`) and can be edited directly in
  `src/pages/*.jsx`.
- To add a future edition to "Samvad Through the Years", add a new object to the
  `editions` array at the top of `src/pages/ThroughYears.jsx`.
- Placeholder images come from placehold.co and can be swapped for real photos.
