import { MapPin, Clock, Sparkles } from "lucide-react";
import { agent } from "@/data/agent";

export function Contact() {
  return (
    <section id="contacto" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Contacto
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink-950 sm:text-4xl">
            ¿Listo para dar el siguiente paso?
          </h2>
          <p className="mt-4 text-ink-600">
            Esta es una propuesta inicial del portal. Próximamente se habilitarán
            los canales de contacto directo.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-2xl border border-brand-200 bg-brand-50/50 p-5">
              <div className="rounded-xl bg-brand-100 p-3 text-brand-700">
                <Sparkles size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                  Propuesta inicial
                </p>
                <p className="mt-1 font-medium text-ink-900">
                  Portal en desarrollo para presentar el perfil profesional de{" "}
                  {agent.shortName} en el mercado inmobiliario de Bogotá.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-ink-50/50 p-5">
              <div className="rounded-xl bg-brand-100 p-3 text-brand-700">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Ubicación
                </p>
                <p className="mt-1 font-medium text-ink-900">{agent.city}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-ink-50/50 p-5">
              <div className="rounded-xl bg-brand-100 p-3 text-brand-700">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Disponibilidad
                </p>
                <p className="mt-1 font-medium text-ink-900">
                  Canales de contacto próximamente
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-ink-100 bg-ink-50/50 p-6 shadow-soft">
            <h3 className="font-display text-xl font-semibold text-ink-950">
              Formulario de contacto
            </h3>
            <p className="mt-2 text-sm text-ink-500">
              Se activará cuando estén listos los datos de contacto de Hannia.
            </p>

            <div className="mt-6 space-y-4 opacity-60">
              <input
                type="text"
                placeholder="Tu nombre"
                disabled
                className="w-full cursor-not-allowed rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm"
              />
              <input
                type="email"
                placeholder="tu@email.com"
                disabled
                className="w-full cursor-not-allowed rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm"
              />
              <textarea
                rows={4}
                placeholder="Cuéntame qué tipo de propiedad buscas..."
                disabled
                className="w-full cursor-not-allowed rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm"
              />
              <button
                type="button"
                disabled
                className="w-full cursor-not-allowed rounded-xl bg-ink-300 px-6 py-3 text-sm font-semibold text-white"
              >
                Próximamente
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}