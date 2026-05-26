import { SkillBar } from "../Components/SkillBar";
import { skills, timeline } from "../data/data";
import { motion } from "framer-motion";
export function JourneySection() {
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