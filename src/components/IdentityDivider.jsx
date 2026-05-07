const patterns = {
  bridge: [
    "bg-emeraldDeep",
    "bg-linen",
    "bg-charcoal",
    "bg-redwood",
    "bg-charcoal",
    "bg-redwood",
    "bg-gold",
  ],
  syria: ["bg-redwood", "bg-linen", "bg-charcoal", "bg-emeraldDeep"],
  germany: ["bg-charcoal", "bg-redwood", "bg-gold"],
};

export default function IdentityDivider({ variant = "bridge", subtle = false }) {
  const colors = patterns[variant] || patterns.bridge;

  return (
    <div
      className={`relative z-10 flex h-2 w-full overflow-hidden ${subtle ? "opacity-70" : ""}`}
      aria-hidden="true"
    >
      {colors.map((color, index) => (
        <span key={`${color}-${index}`} className={`${color} flex-1`} />
      ))}
    </div>
  );
}
