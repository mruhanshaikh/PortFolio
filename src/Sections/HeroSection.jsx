import { motion} from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Typewriter } from "../Components/TypeWriter";
import { Counter } from "../Components/Counter";

export function HeroSection({ onNext }) {
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