export default function VisualGallery({ gallery }) {
  if (!gallery?.items?.length) return null;

  return (
    <section className="py-14">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-emeraldDeep dark:text-gold">
            {gallery.label || "Visual references"}
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold text-charcoal dark:text-linen">
            {gallery.title}
          </h2>
          {gallery.intro && (
            <p className="mt-4 text-base leading-8 text-ink/68 dark:text-cream/70">
              {gallery.intro}
            </p>
          )}
        </div>
        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {gallery.items.map((image) => (
            <figure
              key={`${image.label}-${image.src}`}
              className="group overflow-hidden rounded-lg border border-charcoal/10 bg-white/84 p-3 shadow-soft transition hover:-translate-y-1 hover:shadow-consultant dark:border-white/10 dark:bg-white/8"
            >
              <div className="relative overflow-hidden rounded-lg bg-charcoal">
                <img
                  src={image.src}
                  alt={image.alt || image.label || ""}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/82 via-charcoal/12 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-gold">
                    {image.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-7 text-linen/84">
                    {image.caption}
                  </p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
