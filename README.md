# Developer PortFolio - Mohammed Ruhan Shaikh 

> A polished, interaction-driven frontend portfolio built to make a lasting impression.

A fullscreen, section-based personal portfolio that blends clean architecture with high-quality motion design. Every section is an isolated component, navigation is fluid across wheel, keyboard, and touch, and the overall aesthetic leans into dark glass-morphism with glowing cyan accents.

---

## Features

- **Fullscreen section navigation** — scroll, keyboard arrows, and swipe between six distinct sections with smooth slide transitions powered by Framer Motion
- **Custom animated cursor** — replaces the default cursor with a branded interactive element
- **Typewriter effect** — cycling phrases on the hero headline with smooth character animation
- **Animated counters** — stats that count up on viewport entry for visual impact
- **Scrolling ticker rows** — infinite marquee strips in the Labs section showcasing experiments
- **Skill bars** — animated proficiency indicators with staggered entrance
- **Featured project cards** — rich project showcase with live links, GitHub links, tech stack tags, and per-project accent colors
- **Timeline journey** — personal story rendered as a vertical narrative scroll
- **Experience section** — work history with role tags and chronological layout
- **Contact form** — ready-to-wire contact section with form component
- **Vertical nav** — desktop dot navigation with active section highlighting
- **Mobile nav** — responsive bottom navigation for smaller screens
- **Progress bar** — thin top-bar progress indicator tracking section position
- **Section label** — live section name and index display (bottom-right, desktop)
- **Keyboard accessibility** — full arrow-key navigation support

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 7 |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion 12 |
| Icons | Lucide React |
| Language | JavaScript (JSX) |
| Deployment | Netlify |

---

## Project Structure

```
src/
├── App.jsx                   # Root — section orchestration, navigation logic
├── main.jsx                  # Entry point
├── styles.css                # Global styles, CSS variables, glass/orb/glow tokens
│
├── data/
│   └── data.js               # All content: sections, timeline, projects, skills, labs, experience
│
├── Sections/
│   ├── HeroSection.jsx       # Landing — name, tagline, typewriter, stats, social links
│   ├── JourneySection.jsx    # Personal timeline — origin story in scroll narrative
│   ├── ProjectSection.jsx    # Featured projects — cards with stack, links, accent colors
│   ├── LabsSection.jsx       # Experiments — infinite scrolling marquee of mini-projects
│   ├── ExperienceSection.jsx # Work history — roles, companies, tags, periods
│   └── ContactSection.jsx    # Contact — form wrapper and CTA
│
└── Components/
    ├── CustomCursor.jsx      # Branded custom cursor with motion tracking
    ├── VerticalNav.jsx       # Desktop dot navigation sidebar
    ├── MobileNav.jsx         # Mobile bottom navigation bar
    ├── ScrollingRow.jsx      # Infinite marquee ticker component
    ├── SkillBar.jsx          # Animated skill proficiency bar
    ├── Counter.jsx           # Animated number counter (counts up on mount)
    ├── Typewriter.jsx        # Cycling typewriter text effect
    └── ContactForm.jsx       # Contact form with fields and submit handler
```

---

## Design System

The visual language is built around a dark base with glass-morphism surfaces, subtle blur layers, and two primary accent colors — **cyan (`#22d3ee`)** and **violet (`#8b5cf6`)** — used for glows, borders, and highlights. Ambient orbs, rotating border effects, and smooth easing curves (`[0.76, 0, 0.24, 1]`) give the UI a premium, motion-forward feel.

---

## License

This is a personal portfolio project. The code is open for reference and inspiration, but the content, copy, and personal details belong to Mohammed Ruhan Shaikh.