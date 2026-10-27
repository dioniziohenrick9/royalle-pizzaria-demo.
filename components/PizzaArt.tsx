/** Ilustração vetorial demonstrativa. Substitua por fotos oficiais (veja README). */
const pts = (n: number, r: number, off = 0) =>
  Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2 + off;
    return { x: 200 + Math.cos(a) * r, y: 200 + Math.sin(a) * r };
  });

export function PizzaArt({ variant = 0, className = "" }: { variant?: number; className?: string }) {
  const outer = pts(9, 105, 0.3), inner = pts(5, 50, 1);
  const cheese = variant === 2;
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label="Ilustração demonstrativa de pizza" className={className}>
      <defs>
        <radialGradient id={`c${variant}`} cx="50%" cy="45%"><stop offset="0" stopColor="#E7B565" /><stop offset="1" stopColor="#B97A35" /></radialGradient>
      </defs>
      <circle cx="200" cy="208" r="178" fill="#000" opacity=".35" />
      <circle cx="200" cy="200" r="178" fill={`url(#c${variant})`} />
      <circle cx="200" cy="200" r="150" fill="#BB242D" />
      <circle cx="200" cy="200" r="145" fill={cheese ? "#F1D28A" : "#F0C56E"} opacity=".92" />
      {[...outer, ...inner].map((p, i) => {
        if (variant === 1) return <circle key={i} cx={p.x} cy={p.y} r="20" fill="#9A1E25" stroke="#7B141B" strokeWidth="3" />;
        if (variant === 2) return <ellipse key={i} cx={p.x} cy={p.y} rx="24" ry="15" fill={i % 2 ? "#FBEFC9" : "#F7DE9E"} transform={`rotate(${i * 40} ${p.x} ${p.y})`} />;
        if (variant === 3) return <circle key={i} cx={p.x} cy={p.y} r="9" fill="#3E7A45" />;
        return <ellipse key={i} cx={p.x} cy={p.y} rx="14" ry="22" fill="#4C8B4F" transform={`rotate(${i * 50} ${p.x} ${p.y})`} />;
      })}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <line key={i} x1="200" y1="200" x2={200 + Math.cos((i * Math.PI) / 4 + 0.39) * 176} y2={200 + Math.sin((i * Math.PI) / 4 + 0.39) * 176} stroke="#240E13" strokeWidth="2" opacity=".35" />
      ))}
    </svg>
  );
}
