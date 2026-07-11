import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CircleDot,
  Droplets,
  ExternalLink,
  Flame,
  Home,
  MapPin,
  Mountain,
  Sparkles,
  Trees,
  Waves,
} from "lucide-react";
import { agent } from "@/data/agent";
import { formatCop, sanIsidro } from "@/data/san-isidro";
import { LotShowroom } from "@/components/san-isidro/LotShowroom";

export const metadata: Metadata = {
  title: `${sanIsidro.name} · Lotes campestres`,
  description: `${sanIsidro.description} Precio desde ${formatCop(sanIsidro.priceFrom)}. Reserva con ${agent.shortName}.`,
  openGraph: {
    title: `${sanIsidro.name} | ${agent.shortName}`,
    description: sanIsidro.tagline,
    images: [sanIsidro.heroImage],
  },
};

const amenityIcons = {
  waves: Waves,
  mountain: Mountain,
  home: Home,
  flame: Flame,
  trees: Trees,
  droplets: Droplets,
  sparkles: Sparkles,
  circle: CircleDot,
} as const;

export default function SanIsidroPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[88vh] overflow-hidden bg-ink-950 text-white">
        <Image
          src={sanIsidro.heroImage}
          alt={sanIsidro.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-ink-950/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/70 via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-100 backdrop-blur">
                <MapPin size={13} />
                Proyecto exclusivo
              </span>
              <span className="text-xs font-medium text-white/70">
                Asesorado por {agent.shortName}
              </span>
            </div>

            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-7xl">
              {sanIsidro.name}
            </h1>
            <p className="mt-4 max-w-xl font-display text-xl text-brand-200 sm:text-2xl">
              {sanIsidro.tagline}
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-200 sm:text-lg">
              {sanIsidro.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#showroom"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-brand-100"
              >
                Ver lotes y reservar
                <ArrowRight size={16} />
              </a>
              <a
                href={sanIsidro.virtualTour}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Tour virtual 360°
                <ExternalLink size={15} />
              </a>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-2 gap-4 border-t border-white/15 pt-8 sm:grid-cols-4">
              <div>
                <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
                  {formatCop(sanIsidro.priceFrom).replace(/\s/g, "\u00a0")}
                </p>
                <p className="mt-1 text-xs text-ink-300">Desde</p>
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
                  {sanIsidro.minArea.toLocaleString("es-CO")}
                </p>
                <p className="mt-1 text-xs text-ink-300">m² mínimo</p>
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
                  {formatCop(sanIsidro.reservationFee).replace("COP", "").trim()}
                </p>
                <p className="mt-1 text-xs text-ink-300">Separación</p>
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
                  {sanIsidro.financingMonths}
                </p>
                <p className="mt-1 text-xs text-ink-300">Meses sin interés</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location strip */}
      <section className="border-b border-ink-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-6 sm:px-6 lg:px-8">
          <p className="flex items-center gap-2 text-sm text-ink-700">
            <MapPin size={16} className="shrink-0 text-brand-600" />
            <span>
              <strong className="font-semibold text-ink-950">
                {sanIsidro.location}
              </strong>
              <span className="text-ink-400"> · </span>
              {sanIsidro.distance}
            </span>
          </p>
          <Link
            href="/#contacto"
            className="text-sm font-semibold text-brand-700 hover:text-brand-900"
          >
            Hablar con {agent.shortName} →
          </Link>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-600">
              El proyecto
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink-950 sm:text-4xl lg:text-5xl">
              Naturaleza, espacio y libertad de construir
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-600 sm:text-lg">
              {sanIsidro.longDescription}
            </p>
            <ul className="mt-8 space-y-3">
              {sanIsidro.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-800">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {sanIsidro.gallery.slice(0, 4).map((img, i) => (
              <div
                key={img.src}
                className={`relative overflow-hidden rounded-2xl ${
                  i % 3 === 0 ? "aspect-[4/5]" : "aspect-square"
                } ${i === 1 ? "mt-8" : ""} ${i === 2 ? "-mt-4" : ""}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 45vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-ink-950 py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-300">
              Amenidades
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Todo lo que el proyecto ofrecerá
            </h2>
            <p className="mt-4 text-ink-300">
              Espacios pensados para disfrutar la vida campestre en familia.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sanIsidro.amenities.map((amenity) => {
              const Icon = amenityIcons[amenity.icon];
              return (
                <div
                  key={amenity.name}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-brand-400/40 hover:bg-white/[0.06]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                    <Icon size={22} />
                  </div>
                  <p className="mt-4 font-medium text-white">{amenity.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="border-b border-ink-100 bg-brand-50/40 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            <div className="lg:col-span-1">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-600">
                Inversión
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink-950 sm:text-4xl">
                Condiciones iniciales de inversión
              </h2>
              <p className="mt-4 text-ink-600">{sanIsidro.financingNote}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:col-span-2">
              {[
                {
                  label: "Precio desde",
                  value: formatCop(sanIsidro.priceFrom),
                },
                {
                  label: "Cuota inicial",
                  value: formatCop(sanIsidro.downPayment),
                },
                {
                  label: "Separa con",
                  value: formatCop(sanIsidro.reservationFee),
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-brand-100 bg-white p-6 shadow-soft"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                    {item.label}
                  </p>
                  <p className="mt-3 font-display text-2xl font-semibold text-ink-950 sm:text-3xl">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Steps */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sanIsidro.steps.map((step, index) => (
              <div key={step.title} className="relative">
                <p className="font-display text-4xl font-semibold text-brand-200">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-semibold text-ink-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive showroom + reservation */}
      <LotShowroom />

      {/* Gallery band */}
      <section className="bg-ink-50 pb-8 pt-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-600">
                Galería
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-ink-950">
                El entorno
              </h2>
            </div>
            <a
              href={sanIsidro.virtualTour}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-sm font-semibold text-brand-700 hover:text-brand-900 sm:inline-flex sm:items-center sm:gap-1"
            >
              Recorrido 360°
              <ExternalLink size={14} />
            </a>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sanIsidro.gallery.map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisor CTA */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-ink-950 px-6 py-12 text-white sm:px-12 lg:px-16 lg:py-16">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-emerald-600/10 blur-3xl" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src={agent.photo}
                    alt={agent.name}
                    fill
                    className="object-cover object-top"
                    sizes="96px"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
                    Tu asesora
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
                    {agent.name}
                  </h2>
                  <p className="mt-2 max-w-lg text-ink-300">
                    Te acompaño a elegir el lote ideal en San Isidro: visita,
                    separación y todo el proceso con transparencia.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href="#showroom"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-brand-100"
                >
                  Reservar lote
                  <ArrowRight size={16} />
                </a>
                <Link
                  href="/experiencia"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Ver experiencia
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
