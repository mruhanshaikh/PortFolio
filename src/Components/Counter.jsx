import { useRef, useState, useEffect } from "react";
export function Counter({ to, suffix = "" }) {
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