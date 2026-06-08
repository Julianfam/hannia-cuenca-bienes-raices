import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-ink-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
            Testimonios
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Lo que dicen mis clientes
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <Quote size={28} className="text-brand-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-200">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="mt-4 flex gap-1">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-brand-400 text-brand-400" />
                ))}
              </div>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-semibold">{item.name}</p>
                <p className="text-xs text-ink-400">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}