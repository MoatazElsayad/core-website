export default function SectionHeader({ eyebrow, label, title, intro, align = "left", dark = false }) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {(eyebrow || label) && (
        <div
          className={`mb-4 flex flex-wrap items-center gap-3 ${
            centered ? "justify-center" : ""
          }`}
        >
          {label && (
            <span
              className={`rounded-full border px-3 py-1 text-xs font-black uppercase tracking-[0.16em] ${
                dark
                  ? "border-gold/30 bg-gold/10 text-gold"
                  : "border-emeraldDeep/20 bg-emeraldDeep/8 text-emeraldDeep"
              }`}
            >
              {label}
            </span>
          )}
          {eyebrow && (
            <span
              className={`text-sm font-extrabold uppercase tracking-[0.22em] ${
                dark ? "text-gold" : "text-emeraldDeep"
              }`}
            >
              {eyebrow}
            </span>
          )}
        </div>
      )}
      <h2 className={`font-display text-3xl font-bold sm:text-4xl ${dark ? "text-linen" : "text-charcoal dark:text-linen"}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-base leading-8 ${dark ? "text-cream/72" : "text-ink/68 dark:text-cream/68"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
