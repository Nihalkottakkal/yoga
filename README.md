# Dr. VKS Yoga & Wellness Home

A responsive React + Vite + Tailwind CSS website for Dr. VKS Yoga & Wellness Home, Kerala.

## Stack

- **React 18** – component-based UI
- **Vite 5** – fast dev server & build tool
- **Tailwind CSS 3** – utility-first styling
- **Font Awesome 6** – icons (via CDN)
- **Google Fonts** – Inter + Playfair Display (via CDN)

---

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start dev server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

### 3. Build for production
```bash
npm run build
```
Output goes to `dist/`.

### 4. Preview production build locally
```bash
npm run preview
```

---

## Deploy to Vercel

### Option A – Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option B – Vercel Dashboard
1. Push this repo to GitHub / GitLab / Bitbucket.
2. Import the project on [vercel.com](https://vercel.com).
3. Vercel auto-detects Vite. Leave all settings as default.
4. Click **Deploy**.

The included `vercel.json` handles SPA client-side routing rewrites.

---

## Project Structure

```
dr-vks-yoga/
├── index.html              # Entry HTML (fonts + FA icons loaded here)
├── vite.config.js
├── tailwind.config.js      # Custom palette (pastel blue ivory/sand)
├── postcss.config.js
├── vercel.json             # SPA rewrites for Vercel
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css           # Tailwind directives + custom utilities
    └── components/
        ├── Reveal.jsx      # Scroll-reveal animation wrapper
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Vision.jsx
        ├── Philosophy.jsx  # Pancha Koshas
        ├── Programs.jsx    # Bento grid
        ├── Courses.jsx
        ├── Certification.jsx
        ├── WhyChooseUs.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

---

## Color Palette

| Token      | Value     | Usage                         |
|------------|-----------|-------------------------------|
| `ivory`    | `#f0f5ff` | Page background (pastel blue) |
| `sand`     | `#dce8f5` | Secondary bg (soft blue-grey) |
| `sage`     | `#a3b19b` | Accent green                  |
| `charcoal` | `#2a2a2a` | Dark sections / text          |
| `earth`    | `#5c4a3d` | Warm body text                |
| `gold`     | `#d4af37` | Primary accent                |
