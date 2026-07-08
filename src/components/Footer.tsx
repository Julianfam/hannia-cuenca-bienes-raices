import Link from "next/link";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { agent } from "@/data/agent";
import { buildWhatsAppUrl, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-ink-200 bg-ink-950 text-ink-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-2xl font-semibold text-white">
            {agent.shortName}
          </p>
          <p className="mt-1 text-sm text-brand-300">Bienes Raíces</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-300">
            {agent.tagline}. Asesoría personalizada para comprar, vender o arrendar
            en Bogotá.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Enlaces
          </p>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/propiedades" className="hover:text-brand-300">
              Propiedades
            </Link>
            <Link href="/proyectos/san-isidro" className="hover:text-brand-300">
              Fincas de San Isidro
            </Link>
            <Link href="/experiencia" className="hover:text-brand-300">
              Experiencia
            </Link>
            <Link href="/#servicios" className="hover:text-brand-300">
              Servicios
            </Link>
            <Link href="/#sobre-mi" className="hover:text-brand-300">
              Sobre mí
            </Link>
            <Link href="/#contacto" className="hover:text-brand-300">
              Contacto
            </Link>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Contacto
          </p>
          <p className="flex items-center gap-2 text-sm">
            <MapPin size={16} />
            {agent.city}
          </p>
          <a
            href={buildWhatsAppUrl(
              "Hola Hannia, me interesa conocer más información.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300"
          >
            <MessageCircle size={16} />
            WhatsApp {WHATSAPP_DISPLAY}
          </a>
          <a
            href={`tel:${agent.phoneE164}`}
            className="mt-2 flex items-center gap-2 text-sm hover:text-brand-300"
          >
            <Phone size={16} />
            {agent.phone}
          </a>
        </div>
      </div>

      <div className="border-t border-ink-800 py-6 text-center text-xs text-ink-400">
        © {new Date().getFullYear()} {agent.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
