# Ishitva Agrawal — Portfolio

A high-performance, visually stunning personal portfolio built with Nuxt 3 (Nuxt 4 framework), Tailwind CSS v4, and GSAP. 

## ✨ Features

- **Premium Design**: Sleek dark mode with electric lime accents (`#C8F542`) and modern typography.
- **Smooth Animations**: Powered by GSAP 3 and ScrollTrigger for reveals, entrance animations, and interactive transitions.
- **Data-Driven**: All site content (experience, projects, skills) is managed in a single `content/portfolio-data.ts` file.
- **Contact Form**: Functional backend integration with FastAPI (Python) and SMTP for direct email submissions.
- **Optimized Assets**: Automatic WebP conversion and lazy loading via `@nuxt/image`.
- **SSG Ready**: Configured for static site generation for peak performance and SEO.

## 🛠️ Tech Stack

- **Frontend**: Nuxt 3, Vue 3, Tailwind CSS v4, GSAP 3.
- **Backend**: Python FastAPI, Pydantic, SMTP.
- **Icons**: Nuxt Icon (Heroicons + Simple Icons).
- **Fonts**: Space Grotesk (Headings), Inter (Body), JetBrains Mono (Code).

## 🚀 Getting Started

### Prerequisites

- Node.js v20+
- pnpm
- Python 3.10+ (for contact form backend)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ishitvaagrawal/portfolio.git
   cd portfolio
   ```

2. **Install Frontend Dependencies**:
   ```bash
   pnpm install
   ```

3. **Install Backend Dependencies**:
   ```bash
   cd backend
   python -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   pip install -r requirements.txt
   ```

### Running Locally

1. **Start the Nuxt Dev Server**:
   ```bash
   pnpm run dev
   ```
   Visit `http://localhost:3000`.

2. **Start the FastAPI Backend**:
   ```bash
   cd backend
   uvicorn main:app --reload
   ```

### Environment Variables

Create a `.env` file in the `backend/` directory based on `.env.example`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
TO_EMAIL=your-recipient-email@gmail.com
CORS_ORIGIN=http://localhost:3000
```

## 📦 Deployment

This project is configured for **Static Site Generation (SSG)**.

1. **Build the project**:
   ```bash
   pnpm run generate
   ```
2. The static files will be generated in the `.output/public` directory.
3. Deploy the contents of `.output/public` to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## 📝 License

&copy; 2026 Ishitva Agrawal. All rights reserved.
