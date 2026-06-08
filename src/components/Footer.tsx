import Link from "next/link";
import { MapPin } from "lucide-react";
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
            en Bogotá.
          </p>
          {agent.isProposal && (
            <p className="mt-3 inline-block rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-300">
              Propuesta inicial
            </p>
          )}
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
            Ubicación
          </p>
          <p className="flex items-center gap-2 text-sm">
            <MapPin size={16} />
            {agent.city}
          </p>
          <p className="mt-4 text-sm text-ink-400">
            Contacto directo disponible próximamente.
          </p>
        </div>
      </div>

      <div className="border-t border-ink-800 py-6 text-center text-xs text-ink-400">
        © {new Date().getFullYear()} {agent.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}