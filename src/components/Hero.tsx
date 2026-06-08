import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Heart, Sparkles } from "lucide-react";
import { agent } from "@/data/agent";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-ink-950 via-ink-900 to-brand-950 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-brand-500 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-brand-700 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
            <Sparkles size={14} />
            Asesoría inmobiliaria personalizada
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Encuentra tu próximo hogar con{" "}
            <span className="text-brand-300">{agent.shortName}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-200">
            {agent.tagline}. Te acompaño en la compra, venta o arriendo de
            propiedades con un servicio cercano, profesional y transparente.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/propiedades"
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-400"
            >
              Ver propiedades
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Consulta gratuita
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {agent.stats.slice(0, 3).map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-bold text-brand-300">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-ink-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/10 shadow-card">
            <Image
              src={agent.photo}
              alt={agent.name}
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 1024px) 90vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-display text-2xl font-semibold">{agent.name}</p>
              <p className="text-sm text-brand-200">{agent.title} · {agent.city}</p>
            </div>
          </div>

          <div className="absolute -bottom-4 -left-4 hidden rounded-2xl bg-white p-4 text-ink-900 shadow-card sm:block">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-brand-100 p-2 text-brand-700">
                <Shield size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold">Confianza y respaldo</p>
                <p className="text-xs text-ink-500">Proceso seguro y transparente</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 -top-4 hidden rounded-2xl bg-white p-4 text-ink-900 shadow-card sm:block">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-brand-100 p-2 text-brand-700">
                <Heart size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold">Atención personalizada</p>
                <p className="text-xs text-ink-500">Cada cliente es único</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}