import { useState, useEffect } from "react";

export function Typewriter({ words, speed = 80, pause = 1800 }) {
  const [text, setText] = useState("");
  const [wIndex, setWIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDeleting(true), pause);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length === 0) { setDeleting(false); setWIndex((wIndex + 1) % words.length); }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, wIndex, words, speed, pause]);

  return <span className="typewriter text-cyan-400">{text}</span>;
}