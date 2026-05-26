import { motion } from "framer-motion";
import { featured } from "../data/data";
import { Github,ExternalLink} from "lucide-react";

export function ProjectsSection() {
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