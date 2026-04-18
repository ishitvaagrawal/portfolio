# Ishitva Agrawal Portfolio — Agent Rules
# These rules apply to every action taken in this project.
# The agent must follow all of these without exception.

## Identity of this project
This is a personal portfolio website for Ishitva Agrawal,
a fullstack and AI developer based in India.

## Tech stack — do not deviate from this
- Nuxt 3 with SSG (static site generation, nitro preset: static)
- Nuxt UI v3 (replaces any other component library — do NOT use PrimeVue)
- Tailwind CSS v4 (all styling goes here — no inline styles except GSAP transforms)
- GSAP 3 + ScrollTrigger (all animations — import only what is needed)
- @nuxt/fonts for Space Grotesk, Inter, JetBrains Mono
- @nuxt/image for all images (WebP, lazy load, srcset automatic)
- @nuxt/icon + Simple Icons + Heroicons for all icons
- Python FastAPI for the contact form backend (in /backend folder)
- pnpm as the package manager — never use npm or yarn

## What NOT to do
- Do NOT add any hosting config (no vercel.json, netlify.toml, etc.)
- Do NOT use PrimeVue, Vuetify, or any other UI library
- Do NOT use inline styles except where GSAP requires it
- Do NOT hardcode any personal content in components —
  all content lives in content/portfolio-data.ts only
- Do NOT use 'any' TypeScript types
- Do NOT leave any file without a comment block explaining its purpose

## Code quality rules
- TypeScript everywhere — strict mode
- Every function must have a JSDoc comment explaining what it does
- Every Vue component must have a comment block at the top
- Variable names must be descriptive and human-readable
  (e.g. heroTextElements not els, navigationLinks not links)
- No magic numbers — extract to named constants
- All GSAP code runs client-side only (inside onMounted or .client.ts plugins)
- Check window.matchMedia('prefers-reduced-motion') before every animation —
  if user prefers reduced motion, skip animation and set final state directly

## Design rules
- Color palette: background #0A0A0A, surface #111111, text #F0EBE1,
  accent #C8F542 (electric lime — use sparingly, maximum impact)
- Fonts: Space Grotesk for headings, Inter for body, JetBrains Mono for code
- Minimalist dark theme — let whitespace breathe
- Mobile-first responsive — every component works on 320px screens
- Animations: expo-out easing cubic-bezier(0.16,1,0.3,1), 
  0.6s reveals, 0.3s hovers

## Execution order
Complete each step 100% before moving to the next.
Do not combine steps. Do not skip steps.    