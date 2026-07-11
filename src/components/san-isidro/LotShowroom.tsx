"use client";

import { useMemo, useState } from "react";
import {
  CheckCircle2,
  MapPin,
  Mountain,
  Ruler,
  Search,
  Send,
  Sparkles,
} from "lucide-react";
import {
  formatArea,
  formatCop,
  lots,
  lotStatusLabel,
  sanIsidro,
  type Lot,
  type LotStatus,
} from "@/data/san-isidro";
import { agent } from "@/data/agent";
import {
  buildReservationMessage,
  openWhatsApp,
  WHATSAPP_DISPLAY,
} from "@/lib/whatsapp";

const statusStyles: Record<
  LotStatus,
  { card: string; badge: string }
> = {
  available: {
    card: "border-emerald-200 bg-white hover:border-emerald-400 hover:shadow-soft",
    badge: "bg-emerald-50 text-emerald-800",
  },
  reserved: {
    card: "border-amber-100 bg-amber-50/40 opacity-80",
    badge: "bg-amber-50 text-amber-800",
  },
  sold: {
    card: "border-ink-100 bg-ink-50/60 opacity-60",
    badge: "bg-ink-100 text-ink-600",
  },
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type PhaseFilter = 0 | 1 | 2;
type SortKey = "parcel" | "price-asc" | "price-desc" | "area-desc";

const emptyForm: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function LotShowroom() {
  const cheapest = useMemo(
    () => [...lots].sort((a, b) => a.price - b.price)[0],
    [],
  );

  const [selectedId, setSelectedId] = useState<string | null>(
    () => cheapest?.id ?? null,
  );
  const [phaseFilter, setPhaseFilter] = useState<PhaseFilter>(0);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("price-asc");
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let list = [...lots];

    if (phaseFilter !== 0) {
      list = list.filter((l) => l.phase === phaseFilter);
    }

    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (l) =>
          l.code.toLowerCase().includes(q) ||
          String(l.parcel).includes(q) ||
          formatCop(l.price).toLowerCase().includes(q),
      );
    }

    list.sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "area-desc":
          return b.area - a.area;
        default:
          return a.parcel - b.parcel;
      }
    });

    return list;
  }, [phaseFilter, query, sort]);

  const selected = useMemo(
    () => lots.find((l) => l.id === selectedId) ?? null,
    [selectedId],
  );

  const availableCount = lots.filter((l) => l.status === "available").length;
  const phase1Count = lots.filter((l) => l.phase === 1).length;
  const phase2Count = lots.filter((l) => l.phase === 2).length;

  function selectLot(lot: Lot) {
    if (lot.status !== "available") return;
    setSelectedId(lot.id);
    setSubmitted(false);
    setError(null);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!selected || selected.status !== "available") {
      setError("Selecciona un lote disponible para continuar.");
      return;
    }
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim()) {
      setError("Completa nombre, correo y teléfono.");
      return;
    }

    const waMessage = buildReservationMessage({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      lotCode: selected.code,
      lotArea: selected.area,
      lotPrice: formatCop(selected.price),
      reservationFee: formatCop(sanIsidro.reservationFee),
      projectName: sanIsidro.name,
      message: form.message,
    });

    if (typeof window !== "undefined") {
      const payload = {
        project: sanIsidro.name,
        lot: selected.code,
        ...form,
        at: new Date().toISOString(),
      };
      try {
        const prev = JSON.parse(
          localStorage.getItem("san-isidro-reservations") || "[]",
        ) as unknown[];
        localStorage.setItem(
          "san-isidro-reservations",
          JSON.stringify([payload, ...prev].slice(0, 20)),
        );
      } catch {
        /* ignore storage errors */
      }
    }

    openWhatsApp(waMessage);
    setSubmitted(true);
  }

  return (
    <section id="showroom" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-600">
            Inventario real · {sanIsidro.inventoryLabel}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink-950 sm:text-4xl lg:text-5xl">
            Elige y reserva tu lote
          </h2>
          <p className="mt-4 text-ink-600">
            {availableCount} lotes disponibles · Desde{" "}
            <span className="font-semibold text-ink-900">
              {formatCop(sanIsidro.priceFrom)}
            </span>{" "}
            · Separación{" "}
            <span className="font-semibold text-ink-900">
              {formatCop(sanIsidro.reservationFee)}
            </span>
          </p>
        </div>

        {/* Stats */}
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-ink-100 bg-white p-4 text-center shadow-soft">
            <p className="font-display text-2xl font-semibold text-ink-950">
              {lots.length}
            </p>
            <p className="text-xs text-ink-500">Lotes en inventario</p>
          </div>
          <div className="rounded-2xl border border-ink-100 bg-white p-4 text-center shadow-soft">
            <p className="font-display text-2xl font-semibold text-ink-950">
              {phase1Count}
            </p>
            <p className="text-xs text-ink-500">Fase 1</p>
          </div>
          <div className="rounded-2xl border border-ink-100 bg-white p-4 text-center shadow-soft">
            <p className="font-display text-2xl font-semibold text-ink-950">
              {phase2Count}
            </p>
            <p className="text-xs text-ink-500">Fase 2</p>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex rounded-full border border-ink-200 bg-white p-1 text-sm">
            {(
              [
                [0, "Todas las fases"],
                [1, "Fase 1"],
                [2, "Fase 2"],
              ] as const
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => setPhaseFilter(value)}
                className={`rounded-full px-4 py-1.5 font-medium transition ${
                  phaseFilter === value
                    ? "bg-ink-950 text-white"
                    : "text-ink-600 hover:text-ink-950"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex flex-1 flex-col gap-3 sm:flex-row lg:max-w-xl">
            <label className="relative flex-1">
              <Search
                size={16}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-400"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar lote (ej. 111, 256…)"
                className="w-full rounded-full border border-ink-200 bg-white py-2.5 pl-9 pr-4 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
              />
            </label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="rounded-full border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-700 outline-none focus:border-brand-400"
            >
              <option value="price-asc">Menor precio</option>
              <option value="price-desc">Mayor precio</option>
              <option value="area-desc">Mayor área</option>
              <option value="parcel">Nº de parcela</option>
            </select>
          </div>
        </div>

        <p className="mt-4 text-sm text-ink-500">
          Mostrando {filtered.length} de {lots.length} lotes
        </p>

        <div className="mt-6 grid gap-8 lg:grid-cols-12">
          {/* Inventory grid */}
          <div className="lg:col-span-7">
            <div className="max-h-[70vh] space-y-2 overflow-y-auto rounded-3xl border border-ink-100 bg-ink-50/40 p-3 sm:p-4">
              {filtered.length === 0 ? (
                <p className="p-8 text-center text-sm text-ink-500">
                  No hay lotes con ese filtro. Prueba otra búsqueda.
                </p>
              ) : (
                filtered.map((lot) => {
                  const isSelected = lot.id === selectedId;
                  return (
                    <button
                      key={lot.id}
                      type="button"
                      onClick={() => selectLot(lot)}
                      disabled={lot.status !== "available"}
                      className={`flex w-full items-center justify-between gap-3 rounded-2xl border p-3.5 text-left transition sm:p-4 ${statusStyles[lot.status].card} ${
                        isSelected
                          ? "border-ink-950 ring-2 ring-ink-950/10"
                          : ""
                      }`}
                    >
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="font-display text-lg font-semibold text-ink-950">
                            {lot.code}
                          </p>
                          <span
                            className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${statusStyles[lot.status].badge}`}
                          >
                            {lotStatusLabel[lot.status]}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-ink-500">
                          Etapa 2 · Fase {lot.phase} ·{" "}
                          {formatArea(lot.area)} m²
                        </p>
                      </div>
                      <p className="shrink-0 text-right font-semibold text-ink-950">
                        {formatCop(lot.price)}
                      </p>
                    </button>
                  );
                })
              )}
            </div>
          </div>

          {/* Reservation panel */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 rounded-3xl border border-ink-100 bg-white p-6 shadow-card sm:p-8">
              {submitted && selected ? (
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-ink-950">
                    Solicitud enviada
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">
                    Gracias, <strong>{form.name}</strong>. Se abrió WhatsApp con
                    tu solicitud del lote <strong>{selected.code}</strong>. Si
                    no se abrió, escribe a{" "}
                    <a
                      href={`https://wa.me/${agent.phoneE164}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-emerald-700 underline"
                    >
                      {WHATSAPP_DISPLAY}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      if (!selected) return;
                      openWhatsApp(
                        buildReservationMessage({
                          name: form.name.trim(),
                          email: form.email.trim(),
                          phone: form.phone.trim(),
                          lotCode: selected.code,
                          lotArea: selected.area,
                          lotPrice: formatCop(selected.price),
                          reservationFee: formatCop(sanIsidro.reservationFee),
                          projectName: sanIsidro.name,
                          message: form.message,
                        }),
                      );
                    }}
                    className="mt-6 w-full rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
                  >
                    Abrir WhatsApp de nuevo
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm(emptyForm);
                    }}
                    className="mt-3 w-full rounded-full border border-ink-200 px-5 py-3 text-sm font-semibold text-ink-800 transition hover:bg-ink-50"
                  >
                    Hacer otra reserva
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
                    <Sparkles size={14} />
                    Reserva
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-ink-950">
                    {selected ? `Lote ${selected.code}` : "Selecciona un lote"}
                  </h3>

                  {selected ? (
                    <div className="mt-4 space-y-2 rounded-2xl bg-ink-50/80 p-4 text-sm text-ink-700">
                      <p className="flex items-center gap-2">
                        <MapPin size={15} className="text-brand-600" />
                        Etapa 2 · Fase {selected.phase} · {sanIsidro.shortName}
                      </p>
                      <p className="flex items-center gap-2">
                        <Ruler size={15} className="text-brand-600" />
                        {formatArea(selected.area)} m²
                      </p>
                      <p className="flex items-center gap-2">
                        <Mountain size={15} className="text-brand-600" />
                        {selected.features.join(" · ") || "Construcción libre"}
                      </p>
                      <div className="border-t border-ink-200/80 pt-3">
                        <p className="text-xs uppercase tracking-wider text-ink-500">
                          Precio
                        </p>
                        <p className="font-display text-2xl font-semibold text-ink-950">
                          {formatCop(selected.price)}
                        </p>
                        <p className="mt-1 text-xs text-ink-500">
                          Separación {formatCop(sanIsidro.reservationFee)} ·
                          Inicial desde {formatCop(sanIsidro.downPayment)}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <p className="mt-3 text-sm text-ink-500">
                      Selecciona un lote de la lista para continuar.
                    </p>
                  )}

                  <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                    <input
                      type="text"
                      placeholder="Nombre completo"
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Correo electrónico"
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="WhatsApp / celular"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, phone: e.target.value }))
                      }
                      className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                      required
                    />
                    <textarea
                      rows={3}
                      placeholder="Mensaje opcional (visita, plazos, dudas…)"
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                      className="w-full resize-none rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                    />

                    {error && (
                      <p className="text-sm text-red-600" role="alert">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={!selected || selected.status !== "available"}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:bg-ink-300"
                    >
                      Reservar por WhatsApp
                      <Send size={16} />
                    </button>
                    <p className="text-center text-[11px] leading-relaxed text-ink-400">
                      Se abrirá WhatsApp ({WHATSAPP_DISPLAY}) con los datos del
                      lote · sin compromiso.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
