import {SECTIONS} from "../data/data"
import { Github, Linkedin, Mail} from "lucide-react";
export function VerticalNav({ activeSection, onNavigate }) {
  return (
    <nav className="vertical-nav">
      <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); onNavigate(0); }}>
        MRS
      </a>

      <div className="nav-links">
        {SECTIONS.map((label, i) => (
          <button
            key={label}
            className={`nav-dot ${activeSection === i ? "active" : ""}`}
            data-label={label}
            onClick={() => onNavigate(i)}
            aria-label={label}
          />
        ))}
      </div>

      <div className="nav-socials">
        <a href="https://github.com/mruhanshaikh" target="_blank" rel="noreferrer" aria-label="GitHub">
          <Github size={17} />
        </a>
        <a href="https://www.linkedin.com/in/mohammed-ruhan-shaikh-86a237398/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <Linkedin size={17} />
        </a>
        <a href="mailto:ruhan1192002@gmail.com" aria-label="Email">
          <Mail size={17} />
        </a>
      </div>
    </nav>
  );
}