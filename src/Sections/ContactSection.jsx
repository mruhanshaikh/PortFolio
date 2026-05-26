import { motion } from "framer-motion";
import { ContactForm } from "../Components/ContactForm";
import { Mail, Phone} from "lucide-react";

export function ContactSection() {
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
              Available for frontend roles, freelance work, and creative collaborations.
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