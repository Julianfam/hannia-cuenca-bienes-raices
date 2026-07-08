"use client";

import { useState } from "react";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { agent } from "@/data/agent";
import {
  buildContactMessage,
  buildWhatsAppUrl,
  openWhatsApp,
  WHATSAPP_DISPLAY,
} from "@/lib/whatsapp";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Completa nombre, correo y mensaje.");
      return;
    }

    openWhatsApp(
      buildContactMessage({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        message: message.trim(),
      }),
    );
  }

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
            Escríbeme por WhatsApp y te ayudo a encontrar tu próxima propiedad o
            a reservar en San Isidro.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <a
              href={buildWhatsAppUrl(
                "Hola Hannia, me interesa conocer más sobre tus propiedades.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 transition hover:border-emerald-300 hover:bg-emerald-50"
            >
              <div className="rounded-xl bg-emerald-100 p-3 text-emerald-700">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                  WhatsApp
                </p>
                <p className="mt-1 font-medium text-ink-900">
                  {WHATSAPP_DISPLAY}
                </p>
                <p className="mt-1 text-sm text-ink-500">
                  Respuesta rápida · Lunes a sábado
                </p>
              </div>
            </a>

            <a
              href={`tel:${agent.phoneE164}`}
              className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-ink-50/50 p-5 transition hover:border-brand-200"
            >
              <div className="rounded-xl bg-brand-100 p-3 text-brand-700">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Llamar
                </p>
                <p className="mt-1 font-medium text-ink-900">{agent.phone}</p>
              </div>
            </a>

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
                  Atención personalizada por WhatsApp
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-ink-100 bg-ink-50/50 p-6 shadow-soft">
            <h3 className="font-display text-xl font-semibold text-ink-950">
              Enviar mensaje por WhatsApp
            </h3>
            <p className="mt-2 text-sm text-ink-500">
              Completa el formulario y se abrirá WhatsApp con tu mensaje listo.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
              />
              <input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
              />
              <input
                type="tel"
                placeholder="Tu WhatsApp / celular"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
              />
              <textarea
                rows={4}
                placeholder="Cuéntame qué tipo de propiedad buscas..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full resize-none rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
              />
              {error && (
                <p className="text-sm text-red-600" role="alert">
                  {error}
                </p>
              )}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
              >
                <MessageCircle size={18} />
                Abrir WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
