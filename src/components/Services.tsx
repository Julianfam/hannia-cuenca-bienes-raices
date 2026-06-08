import { Home, Key, TrendingUp, FileSearch } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Venta de propiedades",
    description:
      "Valoración profesional, marketing estratégico y negociación para vender tu propiedad al mejor precio y en el menor tiempo.",
  },
  {
    icon: Key,
    title: "Arriendo residencial",
    description:
      "Selección de inquilinos confiables, contratos claros y gestión integral para propietarios y arrendatarios.",
  },
  {
    icon: TrendingUp,
    title: "Inversión inmobiliaria",
    description:
      "Asesoría para identificar oportunidades con alto potencial de rentabilidad y plusvalía en el mercado.",
  },
  {
    icon: FileSearch,
    title: "Avalúos y consultoría",
    description:
      "Análisis de mercado, documentación y acompañamiento legal para decisiones seguras y bien informadas.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Servicios
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink-950 sm:text-4xl">
            Todo lo que necesitas en un solo lugar
          </h2>
          <p className="mt-4 text-ink-600">
            Soluciones integrales para cada etapa de tu proyecto inmobiliario.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-ink-100 bg-ink-50/50 p-6 transition hover:border-brand-200 hover:shadow-soft"
            >
              <div className="mb-4 inline-flex rounded-xl bg-brand-100 p-3 text-brand-700">
                <service.icon size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold text-ink-950">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}