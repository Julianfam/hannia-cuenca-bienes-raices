"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { agent } from "@/data/agent";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/propiedades", label: "Propiedades" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#sobre-mi", label: "Sobre mí" },
  { href: "/#contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group">
          <p className="font-display text-xl font-semibold tracking-tight text-ink-950 sm:text-2xl">
            {agent.shortName}
          </p>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-600">
            Bienes Raíces
          </p>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-600 transition-colors hover:text-brand-700"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contacto"
            className="rounded-full bg-ink-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-800"
          >
            Agendar cita
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-ink-700 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-ink-100 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink-700 hover:bg-ink-50"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}