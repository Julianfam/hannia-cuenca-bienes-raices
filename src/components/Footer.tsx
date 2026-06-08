import Link from "next/link";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { agent } from "@/data/agent";

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
            con confianza.
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
          <div className="flex flex-col gap-3 text-sm">
            <a href={`tel:${agent.phone}`} className="flex items-center gap-2 hover:text-brand-300">
              <Phone size={16} />
              {agent.phone}
            </a>
            <a href={`mailto:${agent.email}`} className="flex items-center gap-2 hover:text-brand-300">
              <Mail size={16} />
              {agent.email}
            </a>
            <p className="flex items-center gap-2">
              <MapPin size={16} />
              {agent.city}
            </p>
            <div className="mt-2 flex gap-3">
              <a href={agent.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full bg-ink-800 p-2 hover:bg-brand-700">
                <Instagram size={18} />
              </a>
              <a href={agent.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full bg-ink-800 p-2 hover:bg-brand-700">
                <Facebook size={18} />
              </a>
              <a href={agent.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full bg-ink-800 p-2 hover:bg-brand-700">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-ink-800 py-6 text-center text-xs text-ink-400">
        © {new Date().getFullYear()} {agent.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}