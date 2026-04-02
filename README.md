# Dhanush Reddy Portfolio

A modern developer portfolio built with Next.js, Tailwind CSS, TypeScript, and Framer Motion.

## Features

- Dark, clean, minimal UI
- Fully responsive for mobile and desktop
- Smooth scroll and reveal animations
- Portfolio sections: Hero, About, Projects, Skills, Contact
- SEO metadata, Open Graph, Twitter cards, robots, and sitemap
- Vercel-ready deployment setup

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Project Structure

```text
src/
	app/
		globals.css
		layout.tsx
		page.tsx
		robots.ts
		sitemap.ts
	components/
		portfolio/
			AboutSection.tsx
			AnimatedReveal.tsx
			ContactSection.tsx
			HeroSection.tsx
			ProjectsSection.tsx
			SectionHeading.tsx
			SkillsSection.tsx
	data/
		portfolio.ts
```

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open http://localhost:3000

## Production Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this project to a Git repository.
2. Import the repository in Vercel.
3. Keep default Next.js build settings.
4. Deploy.

Update `metadataBase` in `src/app/layout.tsx` to match your final production domain.
