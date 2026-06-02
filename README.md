# 🌟 Faishal Rahman Ansari — Modern Engineering Portfolio

<div align="center">
  
  [![Live Demo](https://img.shields.io/badge/Live_Demo-faishal--rahman.vercel.app-8b5cf6?style=for-the-badge&logo=vercel&logoColor=white)](https://faishal-rahman.vercel.app)
  [![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-0f172a?style=for-the-badge&logo=tailwindcss&logoColor=38bdf8)](https://tailwindcss.com/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  
  <p align="center">
    <strong>A high-end, responsive developer portfolio featuring a premium Deep Space-Purple & Black glowing theme, hardware-accelerated fluid animations, an interactive SaaS dashboard preview, and a custom recruiter shell.</strong>
  </p>
</div>

---

## 🎨 Premium Visual Theme & Experience

The portfolio has been fully upgraded to deliver a jaw-dropping first impression with a **luxury SaaS-dashboard aesthetic**:
* 🌌 **Space-Black Canvas (`#030014`)**: A gorgeous, deep cosmic-black backdrop carrying sophisticated violet undertones.
* 🔮 **Dynamic Viewport Spotlights**: Ambient top-left violet and bottom-right fuchsia/indigo blur spots that breathe and drift organic-style via GPU-accelerated CSS keyframes.
* 🥂 **Glossy Translucent Panels**: Translucent glassmorphism panels (`rgba(9, 5, 29, 0.55)` with `rgba(139, 92, 246, 0.12)` thin borders) that allow spotlight flows to bleed underneath.
* ⌨️ **Interactive Recruiter Terminal**: A fully functional interactive terminal overlay that simulates an engineering terminal, allowing recruiters to execute commands like `skills`, `projects`, and `contact` inside an in-browser shell.
* 🚀 **Custom Monogram Icon**: Integrates a highly personalized, custom red-orange "F" monogram favicon for polished browser-tab branding.

---

## 🛠️ Technical Stack & Tooling

### Core Frontend Architecture
* **Framework**: **Next.js 14** (App Router, Static Pre-rendering, Server Components)
* **Language**: **TypeScript** (100% Type-Safe)
* **Styling**: **TailwindCSS** (Vanilla Utility Design System)
* **Animations**: **Framer Motion** & **GSAP (ScrollTrigger & SplitType)**
* **Layout Utilities**: **Lucide Icons**, **CN Utility (Clsx/Tailwind-Merge)**

### Backend & Project Specialties
* **Full Stack**: Java, Spring Boot, PostgreSQL, React
* **AI & Machine Learning**: Python, TensorFlow, Deep Learning (CNN/LSTM networks), IBM Watson AutoAI
* **Integrations**: Web3Forms API (Real-time email contact deliveries)

---

## ⚡ Production & Performance Optimizations

Engineered to score perfect metrics on PageSpeed audits and load instantly:
1. **Next.js Compiler Optimization (`next.config.mjs`)**:
   * **SWC Minifier**: Rust-based compilation and lightning-fast static builds.
   * **Production Console Stripping**: Removes all `console.log` executions in production to ensure raw JavaScript runtime speed.
   * **Tree-Shaking**: Custom `experimental.optimizePackageImports` settings to automatically tree-shake heavy UI packages like `lucide-react`, `framer-motion`, and `gsap`.
2. **First Input Paint Optimization**:
   * **Font-Display Swap**: Set to `display: "swap"` on Google Fonts (`Space_Grotesk`, `JetBrains_Mono`, `Playfair_Display`) to prevent invisible text lag on slower network connections.
   * **FOUC Prevention**: Modified the text reveals to pre-hide raw text containers during client-side hydration, preventing layout shifts (CLS) when GSAP animations activate.
3. **Hardware Acceleration (Compositor Layers)**:
   * Promoted heavy glowing blurs, floating panels, and pulsing spotlights to their own GPU compositor layer using CSS `will-change` properties and 3D transforms (`translateZ(0)`), guaranteeing scrolling performance at **60fps**.

---

## 🚀 Running Locally

Follow these quick steps to launch the workspace on your machine:

### 1. Clone the Repository
```bash
git clone https://github.com/Faishal058/Portfolio.git
cd Portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Local Environments
Create a `.env.local` file in the root folder and add your Web3Forms Access Key:
```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_key_here
```
*(To get a free key, simply enter your email at [web3forms.com](https://web3forms.com))*

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) inside your browser to view the portfolio.

---

## ☁️ Deployment

This project is fully ready for zero-downtime hosting on **Vercel** or **Netlify**:

* **Framework Preset**: Next.js
* **Build Command**: `npm run build`
* **Output Directory**: Next.js default (Auto-detected `.next`)
* **Environment Variables**: Make sure to add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` to your Vercel settings under Project Settings -> Environment Variables.

---

<div align="center">
  Made with 🤍 and ⚡ by Faishal Rahman Ansari
</div>
