import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { agent } from "@/data/agent";

export function About() {
  return (
    <section id="sobre-mi" className="py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-card">
            <Image
              src={agent.photo}
              alt={agent.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 rounded-2xl bg-brand-600 px-6 py-4 text-white shadow-card">
            <p className="font-display text-3xl font-bold">Bogotá</p>
            <p className="text-sm text-brand-100">Mercado local</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Sobre mí
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink-950 sm:text-4xl">
            {agent.name}
          </h2>
          <p className="mt-2 text-lg font-medium text-brand-700">{agent.title}</p>
          <p className="mt-6 leading-relaxed text-ink-600">{agent.bio}</p>

          <ul className="mt-8 space-y-3">
            {agent.specialties.map((item) => (
              <li key={item} className="flex items-center gap-3 text-ink-700">
                <CheckCircle2 size={18} className="shrink-0 text-brand-600" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {agent.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-white p-4 text-center shadow-soft"
              >
                <p className="font-display text-2xl font-bold text-brand-800">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-ink-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}