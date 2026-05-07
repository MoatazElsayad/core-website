import Icon from "./Icon";

export default function PlaceholderImage({ icon = "MapPinned", label, caption, image }) {
  if (image?.src) {
    return (
      <figure className="relative overflow-hidden rounded-lg border border-charcoal/10 bg-white/82 p-3 shadow-consultant backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-consultant dark:border-white/10 dark:bg-white/8">
        <div className="relative min-h-72 overflow-hidden rounded-lg bg-charcoal">
          <img
            src={image.src}
            alt={image.alt || label || ""}
            className="h-full min-h-72 w-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/72 via-charcoal/12 to-transparent" />
          <figcaption className="absolute inset-x-0 bottom-0 p-5">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">
              {image.label || label}
            </p>
            {(image.caption || caption) && (
              <p className="mt-2 max-w-lg text-sm font-semibold leading-7 text-linen/84">
                {image.caption || caption}
              </p>
            )}
          </figcaption>
        </div>
      </figure>
    );
  }

  return (
    <div className="relative rounded-lg border border-charcoal/10 bg-white/82 p-5 shadow-consultant backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-consultant dark:border-white/10 dark:bg-white/8">
      <div className="absolute -left-4 top-8 hidden h-40 w-28 -rotate-12 border border-gold/25 bg-gold/10 sm:block" />
      <div className="absolute -right-3 bottom-7 hidden h-32 w-24 rotate-12 border border-emeraldDeep/20 bg-emeraldDeep/8 sm:block" />
      <div className="relative overflow-hidden rounded-lg bg-charcoal p-6 text-linen dark:bg-[#10100f]">
        <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emeraldDeep via-gold to-redwood" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(45deg,currentColor_1px,transparent_1px),linear-gradient(-45deg,currentColor_1px,transparent_1px)] [background-size:24px_24px] text-gold" />
        <div className="relative grid min-h-64 place-items-center text-center">
          <div className="w-full max-w-md">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-lg bg-gold text-charcoal">
              <Icon name={icon} className="h-8 w-8" />
            </span>
            <div className="mx-auto mt-6 flex max-w-xs items-center justify-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emeraldDeep" />
              <span className="h-px flex-1 bg-gradient-to-r from-emeraldDeep via-gold to-redwood" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold" />
              <span className="h-px flex-1 bg-gradient-to-r from-gold to-redwood" />
              <span className="h-2.5 w-2.5 rounded-full bg-redwood" />
            </div>
            <p className="mt-5 text-sm font-black uppercase tracking-[0.2em] text-gold">
              {label}
            </p>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-cream/74">{caption}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
