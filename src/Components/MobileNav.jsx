import {SECTIONS} from "../data/data"
export function MobileNav({ activeSection, onNavigate }) {
  return (
    <nav className="mobile-nav">
      {SECTIONS.map((label, i) => (
        <button
          key={label}
          onClick={() => onNavigate(i)}
          style={{
            background: "none", border: "none", cursor: "pointer",
            color: activeSection === i ? "var(--cyan)" : "rgba(255,255,255,0.3)",
            fontSize: 10, fontFamily: "'Syne',sans-serif", fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.05em",
            transition: "color 0.2s ease",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
          }}
        >
          <span style={{
            width: 4, height: 4, borderRadius: "50%",
            background: activeSection === i ? "var(--cyan)" : "transparent",
            boxShadow: activeSection === i ? "0 0 8px var(--cyan)" : "none",
            transition: "all 0.2s ease",
          }} />
          {label}
        </button>
      ))}
    </nav>
  );
}