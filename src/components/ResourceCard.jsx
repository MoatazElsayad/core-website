import { ExternalLink } from "lucide-react";

export default function ResourceCard({ resource }) {
  const href = resource.url || resource.href;

  return (
    <article className="relative overflow-hidden rounded-lg border border-charcoal/10 bg-white/84 p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-consultant dark:border-white/10 dark:bg-white/8">
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emeraldDeep via-gold to-redwood" />
      <div className="flex items-start justify-between gap-4">
        <span className="rounded-full bg-gold/16 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-ink dark:text-cream">
          {resource.category}
        </span>
        {resource.tag && (
          <span className="rounded-full bg-redwood/10 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-redwood dark:text-[#e58d82]">
            {resource.tag}
          </span>
        )}
      </div>
      <h3 className="mt-5 text-lg font-black text-charcoal dark:text-linen">{resource.title}</h3>
      <p className="mt-3 text-sm leading-7 text-ink/66 dark:text-cream/68">{resource.description}</p>
      <a
        href={href || "#"}
        onClick={!href ? (event) => event.preventDefault() : undefined}
        target={href ? "_blank" : undefined}
        rel={href ? "noreferrer" : undefined}
        className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-emeraldDeep transition hover:text-redwood dark:text-gold"
        aria-label={`${resource.linkLabel} for ${resource.title}`}
      >
        {resource.linkLabel}
        <ExternalLink className="h-4 w-4" />
      </a>
    </article>
  );
}
