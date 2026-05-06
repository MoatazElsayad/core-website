import Icon from "./Icon";

export default function InfoCard({ item }) {
  return (
    <article className="group relative h-full overflow-hidden rounded-lg border border-charcoal/10 bg-white/84 p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-consultant focus-within:ring-4 focus-within:ring-gold/20 dark:border-white/10 dark:bg-white/8">
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emeraldDeep via-gold to-redwood" />
      <div className="mb-5 flex items-start justify-between gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-olive/10 text-emeraldDeep transition duration-300 group-hover:bg-emeraldDeep group-hover:text-linen dark:bg-gold/12 dark:text-gold">
          <Icon name={item.icon} className="h-5 w-5" />
        </span>
        <span className="rounded-full bg-gold/16 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-ink dark:text-cream">
          {item.tag}
        </span>
      </div>
      <h3 className="text-lg font-black text-charcoal dark:text-linen">{item.title}</h3>
      <p className="mt-3 text-sm leading-7 text-ink/66 dark:text-cream/68">{item.description}</p>
    </article>
  );
}
