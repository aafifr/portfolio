# Afif Ramadhan — Personal Portfolio

A minimalist, high-performance personal portfolio website built with **React 19**, **Vite**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

---

## ⚡ Tech Stack

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS v4 + Custom Design Tokens
- **Typography:** PP Neue Montreal / Inter / JetBrains Mono
- **Animations:** Framer Motion (Physics-based Lerp Marquee & Layout Transitions)
- **Icons:** Lucide React + Inline Brand SVG Marks

---

## 🚀 Getting Started

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
npm install
```

### 2. Run Locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```

---

## 📁 Project Structure

```
├── public/
│   ├── profile.jpg         # Profile avatar
│   └── cv-afif-ramadhan.pdf # Resume
├── src/
│   ├── components/         # Modular UI Components
│   │   ├── Navbar.tsx      # Sticky frosted navigation
│   │   ├── Hero.tsx        # Hero section with 470px typography & portrait
│   │   ├── TechMarquee.tsx # Infinite brand logos with physics deceleration
│   │   ├── About.tsx       # (01) About & Stats row
│   │   ├── TechStackSection.tsx # (02) Stack tools
│   │   ├── Experience.tsx  # (03) Career timeline
│   │   ├── FeaturedProjects.tsx # (04) Selected work & mockups
│   │   ├── OpenSource.tsx  # (05) Open-source repositories
│   │   ├── Testimonials.tsx # (06) Testimonials marquee
│   │   ├── FAQ.tsx         # (07) Frequently asked questions
│   │   ├── Footer.tsx      # Obsidian dark footer
│   │   └── ContactModal.tsx # Interactive contact pop-up
│   ├── data/
│   │   └── portfolioData.ts # Centralized portfolio content & data
│   ├── index.css           # Global typography & design system
│   ├── App.tsx             # Root layout component
│   └── main.tsx            # Application entry point
```

---

## 📄 License

MIT © [Afif Ramadhan](https://afif.dev)
