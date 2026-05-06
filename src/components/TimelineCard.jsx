import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function TimelineCard({ stage, index }) {
  return (
    <article className="relative rounded-lg border border-charcoal/10 bg-white/84 p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-consultant dark:border-white/10 dark:bg-white/8">
      <span className="absolute -left-3 top-6 hidden h-6 w-6 rounded-full border-4 border-linen bg-gold dark:border-charcoal md:block" />
      <p className="text-xs font-black uppercase tracking-[0.16em] text-redwood dark:text-[#e58d82]">
        Stage {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="mt-2 text-xl font-black text-charcoal dark:text-linen">{stage.title}</h3>
      <p className="mt-3 text-sm font-bold text-emeraldDeep dark:text-gold">Main goal</p>
      <p className="mt-1 text-sm leading-7 text-ink/68 dark:text-cream/68">{stage.goal}</p>
      <p className="mt-4 text-sm font-bold text-emeraldDeep dark:text-gold">Key tasks</p>
      <ul className="mt-2 space-y-2 text-sm leading-7 text-ink/68 dark:text-cream/68">
        {stage.tasks.map((task) => (
          <li key={task} className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-gold" />
            <span>{task}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 rounded-lg bg-linen p-4 text-sm font-semibold leading-7 text-ink/70 dark:bg-white/8 dark:text-cream/72">
        {stage.reminder}
      </div>
      <Link to={stage.page} className="mt-5 inline-flex items-center gap-2 text-sm font-black text-emeraldDeep dark:text-gold">
        Related page
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
