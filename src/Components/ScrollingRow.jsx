export function ScrollingRow({ items, reverse = false }) {
  const all = [...items, ...items];
  return (
    <div className="flex gap-4 overflow-hidden py-2">
      <div className="flex gap-4 w-max" style={{ animation: `scroll${reverse ? "Rev" : ""} 30s linear infinite` }}>
        {all.map((lab, i) => (
          <a
            key={i} href={lab[1]} target="_blank" rel="noreferrer"
            className="glass rounded-full px-6 py-3 whitespace-nowrap text-zinc-300 text-sm hover:text-cyan-400 hover:border-cyan-400/30 transition-colors duration-300"
          >
            {lab[0]}
          </a>
        ))}
      </div>
    </div>
  );
}