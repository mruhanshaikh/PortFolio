import { useState} from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight} from "lucide-react";
export function ContactForm() {
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