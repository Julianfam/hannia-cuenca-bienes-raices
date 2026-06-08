"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react";

export function PropertySearch() {
  const router = useRouter();
  const [operation, setOperation] = useState("");
  const [type, setType] = useState("");
  const [city, setCity] = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (operation) params.set("operacion", operation);
    if (type) params.set("tipo", type);
    if (city) params.set("ciudad", city);
    router.push(`/propiedades?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSearch}
      className="-mt-8 relative z-10 mx-auto max-w-5xl rounded-2xl bg-white p-4 shadow-card sm:p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-500">
            Operación
          </label>
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            className="w-full rounded-xl border border-ink-200 bg-ink-50 px-4 py-3 text-sm outline-none focus:border-brand-500"
          >
            <option value="">Todas</option>
            <option value="venta">Venta</option>
            <option value="arriendo">Arriendo</option>
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-500">
            Tipo
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full rounded-xl border border-ink-200 bg-ink-50 px-4 py-3 text-sm outline-none focus:border-brand-500"
          >
            <option value="">Todos</option>
            <option value="casa">Casa</option>
            <option value="apartamento">Apartamento</option>
            <option value="terreno">Terreno</option>
            <option value="local">Local comercial</option>
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-500">
            Ciudad
          </label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Ej: Bogotá"
            className="w-full rounded-xl border border-ink-200 bg-ink-50 px-4 py-3 text-sm outline-none focus:border-brand-500"
          />
        </div>
        <div className="flex items-end">
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-ink-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
          >
            <Search size={16} />
            Buscar
          </button>
        </div>
      </div>
    </form>
  );
}