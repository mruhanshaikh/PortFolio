export const SECTIONS = ["Home", "Journey", "Projects", "Labs", "Experience", "Contact"];

export const timeline = [
  "Everything started with a chapter about Steve Jobs in my 9th grade English textbook. That was probably the first time technology felt personal.",
  "Instead of taking the usual 11th and 12th route, I chose Diploma in Computer Engineering because I already knew I wanted to enter this field early and seriously.",
  "Completed Diploma from Government Polytechnic Ahmedabad with 9.44 CGPA while building projects, joining hackathons, and learning beyond college.",
  "Built a fitness startup idea called Fitzy during COVID using PHP. It didn't really work out, but it taught me product thinking, consistency, and how difficult execution actually is.",
  "Continued into BTech at Silver Oak University through a merit-based TFWS scholarship and graduated with 9.19 CGPA.",
  "Gave serious attempts to GATE, BARC, and ISRO after graduation. Things didn't go as planned, but it pushed me to rethink my direction instead of staying stuck.",
  "That pushed me into building real products, first in React and modern JavaScript and then across the full stack with Node.js and databases.",
  "Since May 2025 I have delivered 10 client projects with Friendly Infotech across healthcare, real estate and finance, usually as the client's main technical contact.",
  "In November 2025 I joined GroupTakey, where I lead development on five subscription SaaS products used by more than 100 paying businesses.",
  "In 2026 I built and launched POSitive, a billing SaaS for restaurants and food counters with offline billing, 960+ automated tests and a 100-outlet load test with zero errors.",
];

export const featured = [
  {
    title: "POSitive",
    image: "https://simplypositive.app/og-image.png",
    imageClass: "object-left",
    live: "https://simplypositive.app/",
    github: null,
    desc: "A live billing SaaS for restaurants and food counters with counter billing, QR ordering with UPI, a kitchen screen, waiter orders on phones and offline billing. Shipped with 960+ automated tests and a 100-outlet load test with zero errors.",
    stack: ["React", "Node.js", "Express", "Prisma", "MySQL", "Vitest"],
    color: "#818cf8",
  },
  {
    title: "DevPulse",
    image: "/devpulse.png",
    live: "https://devpulsee.netlify.app/",
    github: "https://github.com/mruhanshaikh/Devpulse",
    desc: "Developer dashboard with real GitHub stats from the GraphQL API, a Kanban board, code snippet vault and Pomodoro timer. Built with React, Zustand, TanStack Query, Framer Motion and dnd-kit.",
    stack: ["React", "GraphQL", "TanStack Query", "Zustand", "Framer Motion"],
    color: "#22d3ee",
  },
  {
    title: "FocusBoard",
    image: "/focusboard1.png",
    live: "https://focusboardd.netlify.app/",
    github: "https://github.com/mruhanshaikh/FocusBoard",
    desc: "Productivity app with a task manager, time blocking, Kanban board, Pomodoro timer, sticky notes and live weather, built with HTML, SCSS and JavaScript.",
    stack: ["JavaScript", "SCSS", "HTML5", "Web APIs", "LocalStorage"],
    color: "#a78bfa",
  },
];

export const skills = [
  { name: "React.js / JavaScript", level: 0.92 },
  { name: "Node.js / Express", level: 0.88 },
  { name: "Tailwind CSS / SCSS", level: 0.88 },
  { name: "Prisma / MySQL / MongoDB", level: 0.85 },
  { name: "REST APIs / GraphQL", level: 0.84 },
  { name: "TanStack Query / Zustand", level: 0.84 },
  { name: "Vitest / Supertest", level: 0.80 },
  { name: "PHP / LAMP", level: 0.78 },
  { name: "Git / Hostinger / Netlify", level: 0.80 },
];

export const labsRow1 = [
  ["Multi-API Bento Dashboard", "https://multiapi-dashboard.netlify.app/"],
  ["Reels-Style Video Feed", "https://reeel.netlify.app/"],
  ["ShopMemo · Performance Lab", "https://shopmemo.netlify.app/"],
  ["E-Commerce Product Viewer", "https://shoppmee.netlify.app/"],
  ["Google-Style Pagination", "https://google-style-pagination.netlify.app/"],
  ["Virtual Piano", "https://virtuallpianoo.netlify.app/"],
  ["Cards App", "https://createecards.netlify.app/"],
  ["Animated Gradient Card", "https://card-glow-effect.netlify.app/"],
  ["Spotlight Effect", "https://spotlighhtt.netlify.app/"],
  ["Quote Explorer", "https://randomm-quotes.netlify.app/"],
];

export const labsRow2 = [
  ["Infinite Scroll Feed", "https://infinite-query.netlify.app/"],
  ["Scroll-Triggered Landing Page", "https://scrolllltriggeer.netlify.app/"],
  ["Responsive Studio Website", "https://responsive-studio-website.netlify.app/"],
  ["Hover Expand Card", "https://tougen-anki.netlify.app/"],
  ["Random Position Generator", "https://randompositionedquotes.netlify.app/"],
  ["Form to Card Generator", "https://dynamicprofilebuilder.netlify.app/"],
  ["Download Progress Effect", "https://downloadnoweffect.netlify.app/"],
  ["Scroll Progress Bar", "https://scrolling-animationn.netlify.app/"],
  ["Anchor-Based Navbar", "https://nav-anchor.netlify.app/"],
  ["Text-Reveal-Effect", "https://matrix-text-revealed.netlify.app/"],
  ["userCard-generator", "https://fetchuserdatacard.netlify.app/"],
];

export const experiences = [
  {
    title: "Software Engineer (Contract)",
    company: "GroupTakey",
    period: "Nov 2025 – Present",
    desc: "I lead development on five subscription SaaS products, Billants for GST billing, Beyond Healthcare for hospitals, Supervision for schools, Auctison for live sports auctions and Cyber Desk for event check-in. Each customer gets a separate database with role-based access and daily backups. Together the products serve 100+ paying businesses with 1,000+ staff logins and bring in over ₹10 lakh a year.",
    tags: ["React", "Node.js", "PHP", "MySQL", "MongoDB", "Multi-tenant SaaS"],
  },
  {
    title: "Software Engineer (Freelance)",
    company: "Friendly Infotech",
    period: "May 2025 – Present",
    desc: "Delivered 10 client projects in 17 months across healthcare, real estate, financial services and business, including Medi Panel, Sparsh Hospital, Sofia Hospital Management System, Wasi Property and Shree Dhankuber. For each project I choose MERN or LAMP based on budget and scale, design the database, build REST APIs and handle releases, hosting and DNS.",
    tags: ["MERN", "LAMP", "REST APIs", "Client Delivery"],
  },
  {
    title: "Web Developer Intern",
    company: "Icon Websolution",
    period: "Oct 2023 – Mar 2024",
    desc: "Built and improved websites for healthcare, education and business clients in an agency team, including a lead generation website for SpeakBetter Foreign Education and a website for Maa Multicare Hospital, with theme customisation, responsive layouts and SEO.",
    tags: ["WordPress", "SEO", "Responsive Design"],
  },
  {
    title: "Web Developer (Industrial Training)",
    company: "InfoLabz IT Services",
    period: "Jun 2021 – Apr 2022",
    desc: "An 11-month industrial training on the company's in-house projects. Built responsive pages with HTML, CSS, JavaScript and Bootstrap, and wrote server-side code and databases with PHP and MySQL.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
  },
];
