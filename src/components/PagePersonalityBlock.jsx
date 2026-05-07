import Icon from "./Icon";
import SectionHeader from "./SectionHeader";

const accents = {
  red: {
    line: "from-redwood via-gold to-emeraldDeep",
    badge: "bg-redwood/10 text-redwood dark:text-[#e58d82]",
    icon: "bg-redwood/10 text-redwood dark:text-[#e58d82]",
  },
  gold: {
    line: "from-gold via-redwood to-emeraldDeep",
    badge: "bg-gold/16 text-ink dark:text-cream",
    icon: "bg-gold/16 text-charcoal dark:text-gold",
  },
  green: {
    line: "from-emeraldDeep via-gold to-redwood",
    badge: "bg-emeraldDeep/10 text-emeraldDeep dark:text-gold",
    icon: "bg-emeraldDeep/10 text-emeraldDeep dark:text-gold",
  },
};

export default function PagePersonalityBlock({ block, icon, image }) {
  const theme = accents[block.accent] || accents.green;

  return (
    <section className="py-16">
      <div className="section-shell">
        <SectionHeader label={block.label} title={block.title} intro={block.intro} />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative overflow-hidden rounded-lg border border-charcoal/10 bg-white/86 p-5 shadow-consultant dark:border-white/10 dark:bg-white/8">
            <span className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${theme.line}`} />
            <div className="flex items-center gap-3">
              <span className={`grid h-11 w-11 place-items-center rounded-lg ${theme.icon}`}>
                <Icon name={icon} className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-ink/54 dark:text-cream/54">
                  Placeholder table
                </p>
                <h3 className="text-xl font-black text-charcoal dark:text-linen">
                  Future real data workspace
                </h3>
              </div>
            </div>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[560px] border-separate border-spacing-0 text-left text-sm">
                <thead>
                  <tr>
                    {block.columns.map((column) => (
                      <th
                        key={column}
                        className="border-b border-charcoal/10 bg-linen px-4 py-3 font-black text-charcoal first:rounded-tl-lg last:rounded-tr-lg dark:border-white/10 dark:bg-white/8 dark:text-linen"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row) => (
                    <tr key={row.join("-")} className="transition hover:bg-linen/70 dark:hover:bg-white/6">
                      {row.map((cell) => (
                        <td
                          key={cell}
                          className="border-b border-charcoal/8 px-4 py-3 font-semibold text-ink/68 dark:border-white/8 dark:text-cream/68"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="relative overflow-hidden rounded-lg border border-charcoal/10 bg-linen/80 p-5 shadow-soft dark:border-white/10 dark:bg-white/8">
              {image?.src ? (
                <figure className="relative overflow-hidden rounded-lg bg-charcoal">
                  <img
                    src={image.src}
                    alt={image.alt || block.mapLabel}
                    className="h-72 w-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/78 via-charcoal/14 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-sm font-black uppercase tracking-[0.16em] text-gold">
                      {image.label || block.mapLabel}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-linen/78">
                      {image.caption || "A visual reference for this guide section."}
                    </p>
                  </figcaption>
                </figure>
              ) : (
                <>
                  <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(45deg,currentColor_1px,transparent_1px),linear-gradient(-45deg,currentColor_1px,transparent_1px)] [background-size:22px_22px] text-emeraldDeep dark:text-gold" />
                  <div className="relative grid min-h-52 place-items-center rounded-lg border border-dashed border-charcoal/18 bg-white/72 p-6 text-center dark:border-white/12 dark:bg-charcoal/60">
                    <div>
                      <span className="mx-auto grid h-12 w-12 place-items-center rounded-lg bg-charcoal text-gold dark:bg-gold dark:text-charcoal">
                        <Icon name="MapPinned" className="h-5 w-5" />
                      </span>
                      <p className="mt-4 text-sm font-black uppercase tracking-[0.16em] text-charcoal dark:text-linen">
                        {block.mapLabel}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-ink/62 dark:text-cream/62">
                        Replace this box with a real image, map, or diagram later.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="rounded-lg border border-charcoal/10 bg-white/84 p-5 shadow-soft dark:border-white/10 dark:bg-white/8">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-emeraldDeep dark:text-gold">
                Future links
              </p>
              <div className="mt-4 grid gap-3">
                {block.quickLinks.map((link) => (
                  <div
                    key={link}
                    className={`rounded-lg px-4 py-3 text-sm font-black ${theme.badge}`}
                  >
                    {link}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
