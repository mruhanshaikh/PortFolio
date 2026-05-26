import { motion } from "framer-motion";
import { experiences } from "../data/data";

export function ExperienceSection() {
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