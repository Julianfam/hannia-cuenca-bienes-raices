import { Mail, Phone, MapPin, Clock } from "lucide-react";
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
            Escríbeme y con gusto te ayudo a encontrar la propiedad ideal o a
            vender la tuya.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            {[
              { icon: Phone, label: "Teléfono", value: agent.phone, href: `tel:${agent.phone}` },
              { icon: Mail, label: "Email", value: agent.email, href: `mailto:${agent.email}` },
              { icon: MapPin, label: "Ubicación", value: agent.city },
              { icon: Clock, label: "Horario", value: "Lun - Sáb: 9:00 AM - 6:00 PM" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-ink-50/50 p-5"
              >
                <div className="rounded-xl bg-brand-100 p-3 text-brand-700">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} className="mt-1 block font-medium text-ink-900 hover:text-brand-700">
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 font-medium text-ink-900">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <a
              href={`https://wa.me/${agent.whatsapp}?text=${encodeURIComponent("Hola, me gustaría agendar una consulta.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-[#25D366] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#1fb855]"
            >
              Escríbeme por WhatsApp
            </a>
          </div>

          <form className="rounded-2xl border border-ink-100 bg-ink-50/50 p-6 shadow-soft">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-500"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Teléfono
                </label>
                <input
                  type="tel"
                  placeholder="+57 300 000 0000"
                  className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-500"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-500">
                Email
              </label>
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-500"
              />
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-500">
                Mensaje
              </label>
              <textarea
                rows={4}
                placeholder="Cuéntame qué tipo de propiedad buscas..."
                className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-500"
              />
            </div>
            <button
              type="button"
              className="mt-6 w-full rounded-xl bg-ink-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
            >
              Enviar mensaje
            </button>
            <p className="mt-3 text-center text-xs text-ink-400">
              También puedes contactarme directamente por WhatsApp
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}