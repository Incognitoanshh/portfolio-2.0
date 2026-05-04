# Amritanshu — Portfolio

Cinematic dark portfolio built with React + TypeScript + Tailwind CSS + Framer Motion.

## Stack
- **React 18** + **TypeScript**
- **Vite** (blazing fast dev server)
- **Tailwind CSS v3** (custom design tokens)
- **React Router v6** (multipage)
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **Google Fonts**: Bebas Neue (display), Syne (body), JetBrains Mono (code)

## Features
- 🎨 Cinematic dark aesthetic — black bg, cyan/electric purple accents
- ✨ Animated particle canvas with network connections
- ⌨️ Typewriter effect cycling through roles
- 🖱️ Custom cursor with magnetic ring
- 📜 Scroll-triggered reveal animations
- 📱 Fully responsive (mobile → desktop)
- 🔢 Scroll progress bar
- 🔍 Scanline CRT effect overlay
- 🧩 4 pages: Home, About, Projects, Contact

## Project Structure
```
src/
├── app/           # App.tsx (router + layout)
├── pages/         # Home, About, Projects, Contact
├── sections/      # hero, about, skills, projects, contact
├── components/    # layout (Navbar, Footer), common (SectionWrapper)
├── hooks/         # useParticles, useTypewriter, useCursor, useInView, useScrollProgress
├── lib/           # constants (all resume data), utils
├── styles/        # globals.css
└── types/         # TypeScript interfaces
```

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Deployment
- **Netlify**: drag & drop the `dist/` folder, or connect repo
- **Vercel**: `vercel --prod`

## Customization
All personal data lives in `src/lib/constants.ts` — edit skills, projects, experience, social links there.
