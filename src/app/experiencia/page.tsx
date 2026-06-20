import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Handshake, KeyRound, TrendingUp } from "lucide-react";
import { agent } from "@/data/agent";
import {
  experienceHighlights,
  experienceProcess,
  experienceStats,
} from "@/data/experience";

export const metadata: Metadata = {
  title: "Experiencia",
  description: `Conoce la trayectoria de ${agent.name}: más de 30 ventas y más de 40 arriendos concretados en Bogotá con asesoría personalizada.`,
};

const statIcons = {
  sales: TrendingUp,
  rentals: KeyRound,
  total: Handshake,
  market: Building2,
} as const;

export default function ExperienciaPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-ink-950 via-ink-900 to-brand-950 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-brand-500 blur-3xl" />
          <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-brand-700 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
            Trayectoria comprobada
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Experiencia que se nota en cada cierre
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-200">
            {agent.name} ha concretado más de 30 ventas y más de 40 arriendos en Bogotá,
            acompañando a familias, propietarios e inversionistas con un proceso cercano,
            profesional y orientado a resultados.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(experienceStats).map(([key, stat]) => {
              const Icon = statIcons[key as keyof typeof statIcons];

              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-brand-500/20 p-3 text-brand-200">
                    <Icon size={22} />
                  </div>
                  <p className="font-display text-4xl font-bold text-brand-300">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-ink-300">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
              Resultados reales
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink-950 sm:text-4xl">
              Más de 30 ventas y 40 arriendos concretados
            </h2>
            <p className="mt-6 leading-relaxed text-ink-600">
              Detrás de cada número hay una operación bien llevada: familias que encontraron
              su hogar, propietarios que vendieron con tranquilidad e inquilinos que
              arrendaron con claridad desde el primer día.
            </p>
            <p className="mt-4 leading-relaxed text-ink-600">
              Esa experiencia acumulada permite anticipar escenarios, negociar mejor y
              cerrar con menos fricción, siempre con comunicación honesta y seguimiento
              constante.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/propiedades"
                className="inline-flex items-center gap-2 rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
              >
                Ver propiedades
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/#contacto"
                className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-6 py-3 text-sm font-semibold text-ink-800 transition hover:border-brand-300 hover:text-brand-800"
              >
                Agendar consulta
              </Link>
            </div>
          </div>

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
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-brand-600 px-6 py-5 text-white shadow-card">
              <p className="font-display text-3xl font-bold">{experienceStats.total.value}</p>
              <p className="text-sm text-brand-100">Operaciones cerradas</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
              Por qué importa
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink-950 sm:text-4xl">
              Lo que respalda cada operación
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {experienceHighlights.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-ink-100 bg-ink-50/50 p-8 transition hover:border-brand-200 hover:shadow-soft"
              >
                <h3 className="font-display text-2xl font-semibold text-ink-950">
                  {item.title}
                </h3>
                <p className="mt-4 leading-relaxed text-ink-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
              Cómo trabajo
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink-950 sm:text-4xl">
              Un proceso pensado para concretar
            </h2>
            <p className="mt-4 text-ink-600">
              La experiencia no es solo cantidad de cierres, también es la forma de
              acompañarte en cada etapa.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {experienceProcess.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl bg-white p-6 shadow-soft"
              >
                <p className="font-display text-4xl font-bold text-brand-200">
                  {item.step}
                </p>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-950 py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <h2 className="max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
            ¿Listo para trabajar con alguien que ya ha cerrado más de 70 operaciones?
          </h2>
          <p className="max-w-xl text-ink-300">
            Cuéntame si quieres vender, comprar o arrendar. Te acompaño con la misma
            dedicación que ha convertido cada proceso en un cierre concreto.
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-brand-400"
          >
            Hablemos de tu próximo paso
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}