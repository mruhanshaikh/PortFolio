import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Phone, ArrowRight, ChevronDown } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";

// ─── Data ───────────────────────────────────────────────────────────────────

const SECTIONS = ["Home", "Journey", "Projects", "Labs", "Experience", "Contact"];

const timeline = [
  "Everything started with a chapter about Steve Jobs in my 9th grade English textbook. That was probably the first time technology felt personal.",
  "Instead of taking the usual 11th and 12th route, I chose Diploma in Computer Engineering because I already knew I wanted to enter this field early and seriously.",
  "Completed Diploma from Government Polytechnic Ahmedabad with 9.44 CGPA while building projects, joining hackathons, and learning beyond college.",
  "Built a fitness startup idea called Fitzy during COVID using PHP. It didn't really work out, but it taught me product thinking, consistency, and how difficult execution actually is.",
  "Continued into BTech at Silver Oak University through a merit-based TFWS scholarship and graduated with 9.19 CGPA.",
  "Gave serious attempts to GATE, BARC, and ISRO after graduation. Things didn't go as planned, but it pushed me to rethink my direction instead of staying stuck.",
  "Spent the next phase focusing deeply on frontend development — React, motion, state management, performance, APIs, and interaction-focused UI work.",
  "Today I build frontend experiences that combine clean architecture, smooth interaction, and practical usability.",
];

const featured = [
  {
    title: "DevPulse",
    image: "/devpulse.png",
    live: "https://devpulsee.netlify.app/",
    github: "https://github.com/mruhanshaikh/Devpulse",
    desc: "Developer productivity dashboard with real GitHub analytics via GraphQL API, drag-and-drop Kanban board, code snippet vault, and GitHub contribution heatmap — all in one place.",
    stack: ["React", "GraphQL", "TanStack Query", "Zustand", "Framer Motion", "dnd-kit"],
    color: "#22d3ee",
  },
  {
    title: "FocusBoard",
    image: "/focusboard.png",
    live: "https://focusboardd.netlify.app/",
    github: "https://github.com/mruhanshaikh/FocusBoard",
    desc: "Client-side productivity suite built in Vanilla JS — features a Pomodoro timer, sticky notes, daily planner, weather dashboard, and zero-dependency modular architecture with full localStorage persistence.",
    stack: ["Vanilla JS", "SCSS", "HTML5", "Web APIs", "LocalStorage"],
    color: "#a78bfa",
  },
];

const skills = [
  { name: "React / Next.js", level: 0.9 },
  { name: "Framer Motion / Animation", level: 0.88 },
  { name: "TypeScript", level: 0.78 },
  { name: "UI / Interaction Design", level: 0.85 },
  { name: "GraphQL & APIs", level: 0.75 },
  { name: "Performance Optimization", level: 0.8 },
];

const labsRow1 = [
  ["Multi API Bento Dashboard", "https://multiapi-dashboard.netlify.app/"],
  ["Reels Style Video Feed", "https://reeel.netlify.app/"],
  ["ShopMemo Performance Lab", "https://shopmemo.netlify.app/"],
  ["Scroll Trigger Landing", "https://scrolllltriggeer.netlify.app/"],
  ["Infinite Scroll Feed", "https://infinite-query.netlify.app"],
  ["Virtual Piano", "https://virtuallpianoo.netlify.app/"],
  ["Apple Clone", "https://github.com/mruhanshaikh/Popular-Clones"],
  ["Dribbble Clone", "https://github.com/mruhanshaikh/Popular-Clones"],
  ["Alvy Responsive Clone", "https://github.com/mruhanshaikh/Popular-Clones"],
  ["Instagram Reels Feature", "https://github.com/mruhanshaikh/Popular-Clones"],
];

const labsRow2 = [
  ["Scroll Animated HomePage", "https://github.com/mruhanshaikh/Popular-Clones"],
  ["Google Pagination UI", "https://github.com/mruhanshaikh/Popular-Clones"],
  ["Full Stack Practice Repo", "https://github.com/mruhanshaikh/Full-Stack-Development-Practice"],
  ["Weather Dashboard Widget", "https://focusboardd.netlify.app/"],
  ["GitHub Stats Visualiser", "https://devpulsee.netlify.app/"],
  ["Drag & Drop Kanban", "https://focusboardd.netlify.app/"],
  ["Code Snippet Vault", "https://devpulsee.netlify.app/"],
  ["Animated Landing Page", "https://scrolllltriggeer.netlify.app/"],
  ["Sticky Notes Board", "https://focusboardd.netlify.app/"],
  ["Daily Planner App", "https://focusboardd.netlify.app/"],
];

// Sections where internal vertical scroll is needed
const SCROLLABLE_SECTIONS = new Set([1, 2, 4, 5]); // Journey, Projects, Experience, Contact

// ─── Custom Cursor ──────────────────────────────────────────────────────────

function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
      }
    };
    const onEnter = () => followerRef.current?.classList.add("hovered");
    const onLeave = () => followerRef.current?.classList.remove("hovered");

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a,button,[data-hover]").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    let raf;
    const animate = () => {
      followerPos.current.x += (pos.current.x - followerPos.current.x) * 0.12;
      followerPos.current.y += (pos.current.y - followerPos.current.y) * 0.12;
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${followerPos.current.x - 20}px, ${followerPos.current.y - 20}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" style={{ transform: "translate(-100px,-100px)" }} />
      <div ref={followerRef} className="cursor-follower" style={{ transform: "translate(-100px,-100px)" }} />
    </>
  );
}

// ─── Vertical Navigation ────────────────────────────────────────────────────

function VerticalNav({ activeSection, onNavigate }) {
  return (
    <nav className="vertical-nav">
      <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); onNavigate(0); }}>
        MRS
      </a>

      <div className="nav-links">
        {SECTIONS.map((label, i) => (
          <button
            key={label}
            className={`nav-dot ${activeSection === i ? "active" : ""}`}
            data-label={label}
            onClick={() => onNavigate(i)}
            aria-label={label}
          />
        ))}
      </div>

      <div className="nav-socials">
        <a href="https://github.com/mruhanshaikh" target="_blank" rel="noreferrer" aria-label="GitHub">
          <Github size={17} />
        </a>
        <a href="https://www.linkedin.com/in/mohammed-ruhan-shaikh-86a237398/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <Linkedin size={17} />
        </a>
        <a href="mailto:ruhan1192002@gmail.com" aria-label="Email">
          <Mail size={17} />
        </a>
      </div>
    </nav>
  );
}

// ─── Mobile Nav ─────────────────────────────────────────────────────────────

function MobileNav({ activeSection, onNavigate }) {
  return (
    <nav className="mobile-nav">
      {SECTIONS.map((label, i) => (
        <button
          key={label}
          onClick={() => onNavigate(i)}
          style={{
            background: "none", border: "none", cursor: "pointer",
            color: activeSection === i ? "var(--cyan)" : "rgba(255,255,255,0.3)",
            fontSize: 10, fontFamily: "'Syne',sans-serif", fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.05em",
            transition: "color 0.2s ease",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
          }}
        >
          <span style={{
            width: 4, height: 4, borderRadius: "50%",
            background: activeSection === i ? "var(--cyan)" : "transparent",
            boxShadow: activeSection === i ? "0 0 8px var(--cyan)" : "none",
            transition: "all 0.2s ease",
          }} />
          {label}
        </button>
      ))}
    </nav>
  );
}

// ─── Scrolling Labs Row ──────────────────────────────────────────────────────

function ScrollingRow({ items, reverse = false }) {
  const all = [...items, ...items];
  return (
    <div className="flex gap-4 overflow-hidden py-2">
      <div className="flex gap-4 w-max" style={{ animation: `scroll${reverse ? "Rev" : ""} 30s linear infinite` }}>
        {all.map((lab, i) => (
          <a
            key={i} href={lab[1]} target="_blank" rel="noreferrer"
            className="glass rounded-full px-6 py-3 whitespace-nowrap text-zinc-300 text-sm hover:text-cyan-400 hover:border-cyan-400/30 transition-colors duration-300"
          >
            {lab[0]}
          </a>
        ))}
      </div>
    </div>
  );
}

// ─── Skill Bar ───────────────────────────────────────────────────────────────

function SkillBar({ name, level }) {
  const ref = useRef(null);
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setAnimated(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm text-zinc-300">{name}</span>
        <span className="text-sm text-cyan-400 font-semibold">{Math.round(level * 100)}%</span>
      </div>
      <div className="skill-bar-bg">
        <div
          className={`skill-bar-fill ${animated ? "animated" : ""}`}
          style={{ transform: animated ? `scaleX(${level})` : "scaleX(0)" }}
        />
      </div>
    </div>
  );
}

// ─── Counter ──────────────────────────────────────────────────────────────────

function Counter({ to, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0;
        const step = to / 40;
        const timer = setInterval(() => {
          start += step;
          if (start >= to) { setVal(to); clearInterval(timer); } else { setVal(Math.floor(start)); }
        }, 30);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref} className="counter-num">{val}{suffix}</span>;
}

// ─── Contact Form ──────────────────────────────────────────────────────────

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.message.trim()) errs.message = "Message is required";
    else if (form.message.trim().length < 10) errs.message = "Message must be at least 10 characters";
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSending(true);
    try {
      const res = await fetch("https://formsubmit.co/ajax/ruhan1192002@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) { setSent(true); setForm({ name: "", email: "", message: "" }); }
    } catch { setSent(true); }
    setSending(false);
  };

  if (sent) return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
      className="glass rounded-[30px] p-10 text-center mt-12">
      <p className="text-4xl mb-4">🚀</p>
      <p className="text-2xl font-bold text-cyan-400">Message sent!</p>
      <p className="text-zinc-400 mt-3">I'll get back to you as soon as possible.</p>
      <button onClick={() => setSent(false)} className="mt-6 glass rounded-full px-6 py-3 text-sm text-zinc-300 hover:text-white transition">
        Send another
      </button>
    </motion.div>
  );

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-10 grid gap-5">
      {[
        { name: "name", type: "text", placeholder: "Your name" },
        { name: "email", type: "email", placeholder: "Your email" },
      ].map(({ name, type, placeholder }) => (
        <div key={name}>
          <input type={type} name={name} value={form[name]} onChange={handleChange} placeholder={placeholder}
            className={`glass rounded-2xl p-5 text-white bg-transparent w-full outline-none transition-all duration-200 ${errors[name] ? "border-red-500/60" : "focus:border-cyan-400/40"}`} />
          {errors[name] && <p className="text-red-400 text-sm mt-1 ml-2">{errors[name]}</p>}
        </div>
      ))}
      <div>
        <textarea name="message" rows="4" value={form.message} onChange={handleChange} placeholder="Tell me about your project"
          className={`glass rounded-2xl p-5 text-white bg-transparent w-full outline-none resize-none transition-all duration-200 ${errors.message ? "border-red-500/60" : "focus:border-cyan-400/40"}`} />
        {errors.message && <p className="text-red-400 text-sm mt-1 ml-2">{errors.message}</p>}
      </div>
      <motion.button type="submit" disabled={sending} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
        className="water-btn bg-white text-black rounded-full px-8 py-5 font-semibold disabled:opacity-60 transition flex items-center justify-center gap-2">
        {sending ? "Sending…" : <><span>Send Message</span> <ArrowRight size={16} /></>}
      </motion.button>
    </form>
  );
}

// ─── Typewriter ──────────────────────────────────────────────────────────────

function Typewriter({ words, speed = 80, pause = 1800 }) {
  const [text, setText] = useState("");
  const [wIndex, setWIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDeleting(true), pause);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length === 0) { setDeleting(false); setWIndex((wIndex + 1) % words.length); }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, wIndex, words, speed, pause]);

  return <span className="typewriter text-cyan-400">{text}</span>;
}

// ─── Section components ──────────────────────────────────────────────────────

function HeroSection({ onNext }) {
  return (
    <div className="h-section flex items-center justify-center relative overflow-hidden px-6 lg:px-16 py-10 lg:py-0">
      {/* Orbs */}
      <div className="orb" style={{ width: 500, height: 500, background: "#22d3ee", top: "-100px", right: "5%", opacity: 0.08 }} />
      <div className="orb" style={{ width: 400, height: 400, background: "#8b5cf6", bottom: "-80px", left: "5%", opacity: 0.07 }} />

      <div className="max-w-7xl w-full mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
        <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="uppercase tracking-[0.4em] text-zinc-500 text-xs sm:text-sm mb-3 sm:mb-4">
            Frontend Developer · Ahmedabad
          </motion.p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight">
            Mohammed<br />
            <span className="glow-text text-white">Ruhan</span><br />
            Shaikh
          </h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="text-zinc-400 mt-4 sm:mt-6 leading-7 sm:leading-8 text-sm sm:text-lg max-w-xl">
            I craft interfaces that{" "}
            <Typewriter words={["feel alive.", "move beautifully.", "perform flawlessly.", "leave impressions."]} />
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-2 sm:gap-3 mt-5 sm:mt-8">
            <a href="mailto:ruhan1192002@gmail.com"
              className="water-btn glass rounded-full px-4 py-2.5 sm:py-3 flex items-center gap-2 text-xs sm:text-sm hover:border-cyan-400/30 transition-colors">
              <Mail size={13} /> <span className="hidden sm:inline">ruhan1192002@gmail.com</span><span className="sm:hidden">Email</span>
            </a>
            <a href="https://github.com/mruhanshaikh" target="_blank" rel="noreferrer"
              className="water-btn glass rounded-full px-4 py-2.5 sm:py-3 flex items-center gap-2 text-xs sm:text-sm hover:border-cyan-400/30 transition-colors">
              <Github size={13} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/mohammed-ruhan-shaikh-86a237398/" target="_blank" rel="noreferrer"
              className="water-btn glass rounded-full px-4 py-2.5 sm:py-3 flex items-center gap-2 text-xs sm:text-sm hover:border-cyan-400/30 transition-colors">
              <Linkedin size={13} /> LinkedIn
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
            className="flex gap-6 sm:gap-8 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/08">
            {[{ n: 3, s: "+", label: "Years Experience" }, { n: 20, s: "+", label: "Projects Built" }, { n: 9, s: ".44", label: "Diploma CGPA" }].map(({ n, s, label }) => (
              <div key={label}>
                <p className="text-xl sm:text-3xl font-black text-white"><Counter to={n} suffix={s} /></p>
                <p className="text-xs text-zinc-500 mt-1 uppercase tracking-widest leading-tight">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="rotate-border w-32 sm:w-48 lg:w-80 mx-auto flex-shrink-0">
          <img src="/ruhan.jpg" className="w-full rounded-[36px]" alt="Mohammed Ruhan Shaikh" />
        </motion.div>
      </div>

      <button onClick={onNext} className="scroll-indicator text-zinc-600 hover:text-cyan-400 transition-colors hidden lg:flex">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={16} />
      </button>
    </div>
  );
}

function JourneySection() {
  return (
    <div className="section-scroll-inner">
      <div className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-3">Chapter by chapter</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-12 sm:mb-16">Journey</h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-20 items-start">
          <div className="space-y-12 border-l border-white/08 pl-10">
            {timeline.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: i * 0.08 }} viewport={{ once: true, margin: "-60px" }}
                className="relative group">
                <div className="absolute -left-[47px] top-3 timeline-dot transition-transform duration-300 group-hover:scale-125" />
                <p className="text-zinc-300 leading-8 text-sm sm:text-base lg:text-lg group-hover:text-white transition-colors duration-300">{item}</p>
              </motion.div>
            ))}
          </div>

          {/* Skills panel */}
          <div className="hidden lg:block sticky top-24 h-fit">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-[30px] p-8">
              <p className="text-zinc-500 uppercase text-xs tracking-[0.3em] mb-6">Skill Levels</p>
              {skills.map((s) => <SkillBar key={s.name} name={s.name} level={s.level} />)}
            </motion.div>
          </div>

          <div className="lg:hidden glass rounded-[24px] p-6">
            <p className="text-zinc-500 uppercase text-xs tracking-[0.3em] mb-4">Current Focus</p>
            <div className="flex flex-wrap gap-3">
              {["React Ecosystem", "Motion & Interaction", "Performance", "Frontend Architecture"].map((s) => (
                <div key={s} className="glass rounded-full px-4 py-2 text-sm">{s}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <div className="section-scroll-inner">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-3">What I've built</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-12 sm:mb-16">Featured Projects</h2>
        </motion.div>

        <div className="space-y-10 sm:space-y-16">
          {featured.map((project, i) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="glass rounded-[28px] sm:rounded-[36px] overflow-hidden group"
              whileHover={{ borderColor: `${project.color}30` }}>
              <div className={`grid lg:grid-cols-2 ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                <div className={`overflow-hidden relative ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <img src={project.image} alt={project.title}
                    className="w-full h-48 sm:h-64 lg:h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className={`p-6 sm:p-10 md:p-14 ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <p className="text-zinc-600 text-sm">0{i + 1}</p>
                  <h3 className="text-2xl sm:text-3xl lg:text-5xl font-black mt-2" style={{ color: project.color }}>{project.title}</h3>
                  <p className="mt-4 text-zinc-400 leading-7 text-sm sm:text-base">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.stack.map((s) => (
                      <span key={s} className="glass rounded-full px-3 py-1.5 text-xs text-zinc-400">{s}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 mt-6">
                    <motion.a href={project.live} target="_blank" rel="noreferrer"
                      whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                      className="water-btn bg-white text-black rounded-full px-5 py-3 font-semibold flex items-center gap-2 text-sm">
                      Live Site <ExternalLink size={15} />
                    </motion.a>
                    <motion.a href={project.github} target="_blank" rel="noreferrer"
                      whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                      className="water-btn glass rounded-full px-5 py-3 text-sm flex items-center gap-2">
                      <Github size={15} /> GitHub
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LabsSection() {
  return (
    <div className="h-section flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-6 py-10 w-full">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-3">Experiments & explorations</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-3">Labs</h2>
          <p className="text-zinc-500 text-sm sm:text-base mb-8 max-w-lg">Quick projects, components, and UI experiments — where I try ideas before they become products.</p>
        </motion.div>
      </div>

      <div className="space-y-5 overflow-hidden">
        <ScrollingRow items={labsRow1} />
        <ScrollingRow items={labsRow2} reverse />
      </div>
    </div>
  );
}

function ExperienceSection() {
  const experiences = [
    {
      title: "Freelance Frontend Developer",
      period: "2025 — Present",
      desc: "Delivered websites independently for pharmaceutical and finance sector clients including Wecure Pharmaceuticals, Sencora Pharma Solutions, and accounting businesses — handling design, development, content, and deployment end-to-end.",
      tags: ["React", "Tailwind", "Vite", "Framer Motion"],
    },
    {
      title: "Web Development Trainer",
      company: "Infolabz IT Services",
      period: "2024 — 2025",
      desc: "Trained students and professionals in frontend web development — covering HTML, CSS, JavaScript, and React. Designed curriculum modules and helped learners build real-world projects from scratch.",
      tags: ["HTML", "CSS", "JavaScript", "React", "Teaching"],
    },
    {
      title: "WordPress Developer & SEO Intern",
      company: "Icon Websolution",
      period: "2023 — 2024",
      desc: "Worked on multiple client projects across education, healthcare, and business sectors while learning professional workflows, deadlines, and production delivery.",
      tags: ["WordPress", "SEO", "PHP", "Client Work"],
    },
  ];

  return (
    <div className="section-scroll-inner">
      <div className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-3">Where I've worked</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-12 sm:mb-16">Experience</h2>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="glass rounded-[24px] sm:rounded-[28px] p-6 sm:p-10 group hover:border-cyan-400/20 transition-all duration-500">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">{exp.title}</h3>
                  {exp.company && <p className="text-zinc-500 text-sm mt-1">{exp.company}</p>}
                </div>
                <span className="text-cyan-400 text-sm shrink-0">{exp.period}</span>
              </div>
              <p className="text-zinc-400 leading-7 text-sm sm:text-base mb-4">{exp.desc}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((t) => (
                  <span key={t} className="glass rounded-full px-3 py-1 text-xs text-zinc-500">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="section-scroll-inner relative">
      <div className="orb" style={{ width: 600, height: 600, background: "#22d3ee", top: "-150px", right: "-100px", opacity: 0.06 }} />
      <div className="orb" style={{ width: 400, height: 400, background: "#8b5cf6", bottom: "-100px", left: "-50px", opacity: 0.06 }} />

      <div className="max-w-5xl mx-auto px-6 py-16 sm:py-24 w-full">
        <div className="glass rounded-[32px] sm:rounded-[40px] p-6 sm:p-12 md:p-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-3 text-center">Let's create something</p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-center leading-tight mb-4">
              Let's build something<br />
              <span className="text-cyan-400">meaningful</span> together.
            </h2>
            <p className="text-zinc-400 text-center leading-8 text-sm sm:text-base max-w-lg mx-auto">
              Available for frontend development, freelance work, and creative collaborations.
            </p>
          </motion.div>

          <ContactForm />

          <div className="flex justify-center gap-6 mt-10 text-zinc-500 flex-wrap text-sm">
            <a href="mailto:ruhan1192002@gmail.com" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <Mail size={14} /> ruhan1192002@gmail.com
            </a>
            <a href="tel:+919316606360" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <Phone size={14} /> +91 9316606360
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main App ────────────────────────────────────────────────────────────────

const SECTION_COMPONENTS = [
  HeroSection,
  JourneySection,
  ProjectsSection,
  LabsSection,
  ExperienceSection,
  ContactSection,
];

export default function App() {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(1);
  const prevActive = useRef(0);
  const sectionRef = useRef(null);

  const navigateTo = useCallback((index) => {
    if (index === active || isAnimating) return;
    setDirection(index > active ? 1 : -1);
    prevActive.current = active;
    setIsAnimating(true);
    setActive(index);
    setTimeout(() => setIsAnimating(false), 800);
  }, [active, isAnimating]);

  // Reset scroll position when section changes
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollTop = 0;
    }
  }, [active]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") navigateTo(Math.min(active + 1, SECTIONS.length - 1));
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") navigateTo(Math.max(active - 1, 0));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active, navigateTo]);

  // Wheel navigation — all sections; scrollable sections only navigate at edges
  useEffect(() => {
    let lastWheel = 0;
    const handler = (e) => {
      const now = Date.now();
      if (now - lastWheel < 800) return;

      if (SCROLLABLE_SECTIONS.has(active)) {
        // Only navigate when at the scroll edge
        const el = sectionRef.current;
        if (!el) return;
        const atTop = el.scrollTop <= 2;
        const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 2;

        if (e.deltaY > 30 && atBottom) {
          lastWheel = now;
          navigateTo(Math.min(active + 1, SECTIONS.length - 1));
        } else if (e.deltaY < -30 && atTop) {
          lastWheel = now;
          navigateTo(Math.max(active - 1, 0));
        }
        // else let native scroll handle it — don't update lastWheel
      } else {
        lastWheel = now;
        if (e.deltaY > 30) navigateTo(Math.min(active + 1, SECTIONS.length - 1));
        else if (e.deltaY < -30) navigateTo(Math.max(active - 1, 0));
      }
    };
    window.addEventListener("wheel", handler, { passive: true });
    return () => window.removeEventListener("wheel", handler);
  }, [active, navigateTo]);

  // Touch / swipe navigation — for both scrollable and non-scrollable sections
  useEffect(() => {
    let touchStartY = 0;
    let touchStartX = 0;
    let touchStartScrollTop = 0;

    const onTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
      touchStartScrollTop = sectionRef.current?.scrollTop ?? 0;
    };

    const onTouchEnd = (e) => {
      const deltaY = touchStartY - e.changedTouches[0].clientY;
      const deltaX = touchStartX - e.changedTouches[0].clientX;

      // Ignore mostly-horizontal swipes
      if (Math.abs(deltaX) > Math.abs(deltaY) * 1.5) return;
      // Need at least 50px swipe
      if (Math.abs(deltaY) < 50) return;

      if (SCROLLABLE_SECTIONS.has(active)) {
        // For scrollable sections, only navigate if we're at the top/bottom edge
        const el = sectionRef.current;
        if (!el) return;
        const atTop = el.scrollTop <= 2;
        const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 2;

        if (deltaY > 0 && atBottom) {
          navigateTo(Math.min(active + 1, SECTIONS.length - 1));
        } else if (deltaY < 0 && atTop) {
          navigateTo(Math.max(active - 1, 0));
        }
        // else: let native scroll handle it
      } else {
        // Non-scrollable sections: swipe navigates directly
        if (deltaY > 0) navigateTo(Math.min(active + 1, SECTIONS.length - 1));
        else navigateTo(Math.max(active - 1, 0));
      }
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [active, navigateTo]);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  const SectionComp = SECTION_COMPONENTS[active];
  const isScrollable = SCROLLABLE_SECTIONS.has(active);

  return (
    <>
      <CustomCursor />

      {/* Progress bar */}
      <div className="section-progress">
        <div className="section-progress-fill" style={{ width: `${((active + 1) / SECTIONS.length) * 100}%` }} />
      </div>

      <VerticalNav activeSection={active} onNavigate={navigateTo} />
      <MobileNav activeSection={active} onNavigate={navigateTo} />

      {/* 
        Main container: fixed viewport height, no overflow.
        The motion.div inside handles scroll for scrollable sections via overflow-y: auto
        with a hidden scrollbar (CSS handles the hide).
      */}
      <main className="main-content" style={{ height: "100dvh", overflow: "hidden", position: "relative" }}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={active}
            ref={sectionRef}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
            className={isScrollable ? "section-frame scrollable" : "section-frame"}
          >
            {active === 0
              ? <SectionComp onNext={() => navigateTo(1)} />
              : <SectionComp />
            }
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Section label */}
      <motion.div
        key={`label-${active}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="fixed bottom-8 right-8 text-right pointer-events-none z-50 hidden lg:block"
      >
        <p className="text-zinc-600 text-xs uppercase tracking-widest">{active + 1} / {SECTIONS.length}</p>
        <p className="text-zinc-500 text-sm font-medium mt-1">{SECTIONS[active]}</p>
      </motion.div>
    </>
  );
}
