import { useRef, useState, useEffect } from "react";
export function SkillBar({ name, level }) {
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