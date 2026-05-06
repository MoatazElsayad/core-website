import { ShieldCheck } from "lucide-react";

export default function TrustNotice({ notice }) {
  return (
    <section className="py-6" aria-label="Educational source notice">
      <div className="section-shell">
        <div className="flex flex-col gap-4 rounded-lg border border-gold/28 bg-gold/10 p-5 text-charcoal shadow-soft dark:border-gold/20 dark:bg-gold/8 dark:text-linen sm:flex-row sm:items-start">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-charcoal text-gold dark:bg-gold dark:text-charcoal">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-redwood dark:text-[#e58d82]">
              {notice.label}
            </p>
            <p className="mt-2 text-sm font-semibold leading-7 text-ink/72 dark:text-cream/72">{notice.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
