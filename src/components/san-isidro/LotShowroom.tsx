"use client";

import { useMemo, useState } from "react";
import {
  CheckCircle2,
  MapPin,
  Mountain,
  Ruler,
  Send,
  Sparkles,
} from "lucide-react";
import {
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
  { pin: string; card: string; badge: string }
> = {
  available: {
    pin: "bg-emerald-500 ring-emerald-200 hover:scale-110 cursor-pointer",
    card: "border-emerald-200 bg-white hover:border-emerald-400 hover:shadow-soft",
    badge: "bg-emerald-50 text-emerald-800",
  },
  reserved: {
    pin: "bg-amber-400 ring-amber-100 cursor-not-allowed opacity-80",
    card: "border-amber-100 bg-amber-50/40 opacity-80",
    badge: "bg-amber-50 text-amber-800",
  },
  sold: {
    pin: "bg-ink-300 ring-ink-100 cursor-not-allowed opacity-60",
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

const emptyForm: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function LotShowroom() {
  const [selectedId, setSelectedId] = useState<string | null>(
    () => lots.find((l) => l.status === "available")?.id ?? null,
  );
  const [stageFilter, setStageFilter] = useState<0 | 1 | 2>(0);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (stageFilter === 0) return lots;
    return lots.filter((l) => l.stage === stageFilter);
  }, [stageFilter]);

  const selected = useMemo(
    () => lots.find((l) => l.id === selectedId) ?? null,
    [selectedId],
  );

  const availableCount = lots.filter((l) => l.status === "available").length;

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
            Showroom digital
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink-950 sm:text-4xl lg:text-5xl">
            Elige y reserva tu lote
          </h2>
          <p className="mt-4 text-ink-600">
            {availableCount} lotes disponibles · Separación desde{" "}
            <span className="font-semibold text-ink-900">
              {formatCop(sanIsidro.reservationFee)}
            </span>
          </p>
        </div>

        {/* Legend + filters */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4 text-xs font-medium text-ink-600">
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              Disponible
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              Reservado
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-ink-300" />
              Vendido
            </span>
          </div>
          <div className="flex rounded-full border border-ink-200 bg-white p-1 text-sm">
            {(
              [
                [0, "Todos"],
                [1, "Etapa 1"],
                [2, "Etapa 2"],
              ] as const
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => setStageFilter(value)}
                className={`rounded-full px-4 py-1.5 font-medium transition ${
                  stageFilter === value
                    ? "bg-ink-950 text-white"
                    : "text-ink-600 hover:text-ink-950"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          {/* Abstract master plan */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-ink-100 bg-gradient-to-br from-brand-50 via-white to-emerald-50/40 shadow-soft">
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, #1a1a1a 1px, transparent 0)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div className="relative aspect-[4/3] p-4 sm:p-6">
                <div className="absolute left-5 top-5 z-10 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink-500 shadow-sm backdrop-blur">
                  Plano conceptual
                </div>
                <div className="absolute bottom-5 left-5 z-10 max-w-[200px] rounded-2xl bg-white/90 p-3 text-xs text-ink-600 shadow-sm backdrop-blur">
                  <p className="font-semibold text-ink-900">San Isidro</p>
                  <p className="mt-0.5">{sanIsidro.location}</p>
                </div>

                {/* Soft terrain shapes */}
                <div className="absolute left-[8%] top-[12%] h-[35%] w-[40%] rounded-[40%] bg-emerald-200/30 blur-2xl" />
                <div className="absolute bottom-[10%] right-[10%] h-[40%] w-[45%] rounded-[45%] bg-brand-200/25 blur-2xl" />
                <div className="absolute left-[35%] top-[40%] h-1 w-[30%] rounded-full bg-sky-300/50" />
                <div className="absolute left-[30%] top-[42%] h-1 w-[20%] rotate-12 rounded-full bg-sky-300/40" />

                {filtered.map((lot) => {
                  const isSelected = lot.id === selectedId;
                  return (
                    <button
                      key={lot.id}
                      type="button"
                      title={`${lot.code} · ${lotStatusLabel[lot.status]}`}
                      onClick={() => selectLot(lot)}
                      disabled={lot.status !== "available"}
                      style={{ left: `${lot.x}%`, top: `${lot.y}%` }}
                      className={`absolute z-20 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-[10px] font-bold text-white shadow-md ring-4 transition ${statusStyles[lot.status].pin} ${
                        isSelected
                          ? "scale-125 ring-ink-950/20"
                          : "ring-white/80"
                      }`}
                    >
                      {lot.code.split("-")[1]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Lot cards grid */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {filtered.map((lot) => {
                const isSelected = lot.id === selectedId;
                return (
                  <button
                    key={lot.id}
                    type="button"
                    onClick={() => selectLot(lot)}
                    disabled={lot.status !== "available"}
                    className={`rounded-2xl border p-4 text-left transition ${statusStyles[lot.status].card} ${
                      isSelected
                        ? "border-ink-950 ring-2 ring-ink-950/10"
                        : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-display text-lg font-semibold text-ink-950">
                          Lote {lot.code}
                        </p>
                        <p className="mt-0.5 text-xs text-ink-500">
                          Etapa {lot.stage}
                        </p>
                      </div>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${statusStyles[lot.status].badge}`}
                      >
                        {lotStatusLabel[lot.status]}
                      </span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-3 text-sm text-ink-700">
                      <span className="inline-flex items-center gap-1">
                        <Ruler size={14} className="text-brand-600" />
                        {lot.area.toLocaleString("es-CO")} m²
                      </span>
                      <span className="font-semibold text-ink-950">
                        {formatCop(lot.price)}
                      </span>
                    </div>
                    {lot.features.length > 0 && (
                      <p className="mt-2 text-xs text-ink-500">
                        {lot.features.join(" · ")}
                      </p>
                    )}
                  </button>
                );
              })}
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
                    tu solicitud del lote <strong>{selected.code}</strong>. Si no
                    se abrió, escribe a{" "}
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
                    {selected
                      ? `Lote ${selected.code}`
                      : "Selecciona un lote"}
                  </h3>

                  {selected ? (
                    <div className="mt-4 space-y-2 rounded-2xl bg-ink-50/80 p-4 text-sm text-ink-700">
                      <p className="flex items-center gap-2">
                        <MapPin size={15} className="text-brand-600" />
                        Etapa {selected.stage} · {sanIsidro.shortName}
                      </p>
                      <p className="flex items-center gap-2">
                        <Ruler size={15} className="text-brand-600" />
                        {selected.area.toLocaleString("es-CO")} m²
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
                      Toca un lote verde en el plano o en la lista para
                      continuar.
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
                      lote. Inventario de demostración · sin compromiso.
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
