import { PropertyCard } from "@/components/PropertyCard";
import { PropertySearch } from "@/components/PropertySearch";
import { properties, Property } from "@/data/properties";

interface PageProps {
  searchParams: Promise<{
    operacion?: string;
    tipo?: string;
    ciudad?: string;
  }>;
}

function filterProperties(
  items: Property[],
  operacion?: string,
  tipo?: string,
  ciudad?: string
): Property[] {
  return items.filter((p) => {
    if (operacion && p.operation !== operacion) return false;
    if (tipo && p.type !== tipo) return false;
    if (ciudad && !p.city.toLowerCase().includes(ciudad.toLowerCase())) return false;
    return true;
  });
}

export const metadata = {
  title: "Propiedades",
  description: "Explora casas, apartamentos, terrenos y locales disponibles.",
};

export default async function PropertiesPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const filtered = filterProperties(
    properties,
    params.operacion,
    params.tipo,
    params.ciudad
  );

  return (
    <>
      <section className="bg-gradient-to-br from-ink-950 to-brand-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">
            Propiedades disponibles
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-ink-200">
            Encuentra la opción perfecta para vivir, invertir o emprender.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PropertySearch />
      </div>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-8 text-sm text-ink-500">
            {filtered.length} {filtered.length === 1 ? "propiedad encontrada" : "propiedades encontradas"}
          </p>

          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-ink-200 bg-white p-12 text-center">
              <p className="font-display text-xl font-semibold text-ink-900">
                No hay propiedades con esos filtros
              </p>
              <p className="mt-2 text-ink-500">
                Prueba con otros criterios o contáctanos para una búsqueda personalizada.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}