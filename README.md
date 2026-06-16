# Mobashir Ali — AI Services

Dark, premium single-page site for an AI services business (AI Receptionist + custom websites) targeting US dental clinics and local businesses.

Built with **React + Vite + Tailwind CSS + Framer Motion**.

## Local development

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:5173.

## Production build

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build locally
```

## Deploy to Vercel

1. Push this folder to a Git repository (GitHub / GitLab / Bitbucket).
2. Import the repo at https://vercel.com/new.
3. Vercel auto-detects Vite — no config needed:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Add your custom domain `mobashirali.in` under **Settings → Domains**.

## Editing the key details

All booking links, email, and brand name live in [`src/constants.js`](src/constants.js):

- `CALENDLY_URL` — https://calendly.com/mobashirali0316/new-meeting
- `EMAIL` — mobashirali0316@gmail.com
- `BRAND` — Mobashir Ali

## Sections

Navbar · Hero · Services · How It Works · Contact · Footer
