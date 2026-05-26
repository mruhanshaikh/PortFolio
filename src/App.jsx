import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight} from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";
import {SECTIONS, timeline, featured, skills, labsRow1, labsRow2} from "./data/data"
import { CustomCursor } from "./Components/CustomCursor";
import { VerticalNav } from "./Components/VerticalNav";
import { MobileNav } from "./Components/MobileNav";
import { ScrollingRow } from "./Components/ScrollingRow";
import { SkillBar } from "./Components/SkillBar";
import { Counter } from "./Components/Counter";
import { ContactForm } from "./Components/ContactForm";
import { Typewriter } from "./Components/TypeWriter";
import { HeroSection } from "./Sections/HeroSection";
import { JourneySection } from "./Sections/JourneySection";
import { ProjectsSection } from "./Sections/ProjectSection";
import { LabsSection } from "./Sections/LabsSection";
import { ExperienceSection } from "./Sections/ExperienceSection";
import { ContactSection } from "./Sections/ContactSection";

// Sections which need scrolling Journey, Projects, Experience, Contact
const SCROLLABLE_SECTIONS = new Set([1, 2, 4, 5]); 
// Ierating over each section
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
