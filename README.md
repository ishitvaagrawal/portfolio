# Ishitva Agrawal — Portfolio

A high-performance, visually stunning personal portfolio built with Nuxt 3 (Nuxt 4 framework), Tailwind CSS v4, and GSAP. 

## ✨ Features

- **Premium Design**: Sleek dark mode with electric lime accents (`#C8F542`) and modern typography.
- **Smooth Animations**: Powered by GSAP 3 and ScrollTrigger for reveals, entrance animations, and interactive transitions.
- **Data-Driven**: All site content (experience, projects, skills) is managed in a single `content/portfolio-data.ts` file.
- **Contact Form**: Integrated with **Netlify Forms** for zero-backend management and built-in spam protection.
- **Optimized Assets**: Automatic WebP conversion and lazy loading via `@nuxt/image`.
- **SSG Ready**: Configured for static site generation for peak performance and SEO.

## 🛠️ Tech Stack

- **Frontend**: Nuxt 3, Vue 3, Tailwind CSS v4, GSAP 3.
- **Forms**: Netlify Forms (no separate backend needed).
- **Icons**: Nuxt Icon (Heroicons + Simple Icons).
- **Fonts**: Space Grotesk (Headings), Inter (Body), JetBrains Mono (Code).

## 🚀 Getting Started

### Prerequisites

- Node.js v20+
- pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ishitvaagrawal/portfolio.git
   cd portfolio
   ```

2. **Install Dependencies**:
   ```bash
   pnpm install
   ```

### Running Locally

1. **Start the Nuxt Dev Server**:
   ```bash
   pnpm run dev
   ```
   Visit `http://localhost:3000`.

## 📦 Deployment

This project is optimized for **Netlify**.

1. **Build Settings**:
   - **Build Command**: `pnpm run generate`
   - **Publish Directory**: `.output/public`
2. **Netlify Forms**:
   - The contact form is pre-configured to work with Netlify. No extra setup is needed! Submissions will appear in your Netlify dashboard under the "Forms" tab.

## 📝 License

&copy; 2026 Ishitva Agrawal. All rights reserved.
