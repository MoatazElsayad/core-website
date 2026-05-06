import Icon from "./Icon";

export default function FeatureCard({ feature }) {
  return (
    <aside className="rounded-lg border border-gold/28 bg-gold/10 p-5 shadow-soft dark:border-gold/20 dark:bg-gold/8">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-lg bg-charcoal text-gold dark:bg-gold dark:text-charcoal">
          <Icon name={feature.icon} className="h-5 w-5" />
        </span>
        <h3 className="text-xl font-black text-charcoal dark:text-linen">{feature.title}</h3>
      </div>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {feature.items.map((item) => (
          <li key={item} className="flex gap-3 text-sm font-semibold leading-7 text-ink/72 dark:text-cream/72">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emeraldDeep dark:bg-gold" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
