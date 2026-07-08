import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { formatCop, getAvailableLots, sanIsidro } from "@/data/san-isidro";

export function SanIsidroFeature() {
  const available = getAvailableLots().length;

  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-ink-100 bg-white shadow-soft">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[280px] lg:min-h-full">
              <Image
                src={sanIsidro.heroImage}
                alt={sanIsidro.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 to-transparent lg:bg-gradient-to-r" />
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8">
                <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                  Proyecto destacado
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
                Showroom · Reserva online
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink-950 sm:text-4xl">
                {sanIsidro.name}
              </h2>
              <p className="mt-2 flex items-center gap-2 text-sm text-ink-500">
                <MapPin size={14} />
                {sanIsidro.location}
              </p>
              <p className="mt-4 leading-relaxed text-ink-600">
                {sanIsidro.tagline}. Lotes desde{" "}
                <strong className="font-semibold text-ink-900">
                  {sanIsidro.minArea.toLocaleString("es-CO")} m²
                </strong>
                , precio desde{" "}
                <strong className="font-semibold text-ink-900">
                  {formatCop(sanIsidro.priceFrom)}
                </strong>
                . Separa con {formatCop(sanIsidro.reservationFee)}.
              </p>

              <div className="mt-6 flex flex-wrap gap-6 border-t border-ink-100 pt-6 text-sm">
                <div>
                  <p className="font-display text-2xl font-semibold text-ink-950">
                    {available}
                  </p>
                  <p className="text-xs text-ink-500">Lotes disponibles</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-semibold text-ink-950">
                    {sanIsidro.financingMonths}
                  </p>
                  <p className="text-xs text-ink-500">Meses sin interés</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-semibold text-ink-950">
                    2.5 h
                  </p>
                  <p className="text-xs text-ink-500">Desde Bogotá</p>
                </div>
              </div>

              <Link
                href="/proyectos/san-isidro"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
              >
                Explorar showroom
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
