import { ScrollingRow } from "../Components/ScrollingRow";
import { labsRow1, labsRow2 } from "../data/data";
import { motion } from "framer-motion";
export function LabsSection() {
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