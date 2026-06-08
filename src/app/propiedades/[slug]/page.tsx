import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Bed,
  Bath,
  Maximize,
  Car,
  MapPin,
  Check,
  Sparkles,
} from "lucide-react";
import { getPropertyBySlug, formatPrice, properties } from "@/data/properties";
import { agent } from "@/data/agent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return { title: "Propiedad no encontrada" };
  return {
    title: property.title,
    description: property.description,
  };
}

const typeLabels = {
  casa: "Casa",
  apartamento: "Apartamento",
  terreno: "Terreno",
  local: "Local comercial",
};

export default async function PropertyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  return (
    <article>
      <div className="relative h-[40vh] min-h-[320px] w-full sm:h-[50vh]">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/propiedades"
              className="mb-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
            >
              <ArrowLeft size={16} />
              Volver a propiedades
            </Link>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase text-ink-800">
                {property.operation}
              </span>
              <span className="rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white">
                {typeLabels[property.type]}
              </span>
            </div>
            <h1 className="mt-3 font-display text-3xl font-semibold text-white sm:text-5xl">
              {property.title}
            </h1>
            <p className="mt-2 flex items-center gap-1 text-brand-200">
              <MapPin size={16} />
              {property.location}, {property.city}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="font-display text-4xl font-bold text-brand-800">
              {formatPrice(property.price, property.currency)}
              {property.operation === "arriendo" && (
                <span className="text-lg font-normal text-ink-500"> /mes</span>
              )}
            </p>

            <div className="mt-6 flex flex-wrap gap-6 rounded-2xl border border-ink-100 bg-white p-6 shadow-soft">
              {property.bedrooms > 0 && (
                <div className="flex items-center gap-2 text-ink-700">
                  <Bed size={20} className="text-brand-600" />
                  <span>{property.bedrooms} habitaciones</span>
                </div>
              )}
              {property.bathrooms > 0 && (
                <div className="flex items-center gap-2 text-ink-700">
                  <Bath size={20} className="text-brand-600" />
                  <span>{property.bathrooms} baños</span>
                </div>
              )}
              <div className="flex items-center gap-2 text-ink-700">
                <Maximize size={20} className="text-brand-600" />
                <span>{property.area} m²</span>
              </div>
              {property.parking > 0 && (
                <div className="flex items-center gap-2 text-ink-700">
                  <Car size={20} className="text-brand-600" />
                  <span>{property.parking} parqueadero(s)</span>
                </div>
              )}
            </div>

            <div className="mt-8">
              <h2 className="font-display text-2xl font-semibold text-ink-950">
                Descripción
              </h2>
              <p className="mt-4 leading-relaxed text-ink-600">
                {property.description}
              </p>
            </div>

            <div className="mt-8">
              <h2 className="font-display text-2xl font-semibold text-ink-950">
                Amenidades
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {property.amenities.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-ink-700">
                    <Check size={16} className="text-brand-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="h-fit rounded-2xl border border-ink-100 bg-white p-6 shadow-card lg:sticky lg:top-24">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src={agent.photo}
                  alt={agent.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="font-semibold text-ink-950">{agent.name}</p>
                <p className="text-sm text-ink-500">{agent.title}</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-ink-600">
              ¿Te interesa esta propiedad? Esta es una propuesta inicial del
              portal. Los canales de contacto se habilitarán próximamente.
            </p>

            <div className="mt-6 flex items-center gap-3 rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-800">
              <Sparkles size={18} className="shrink-0" />
              Propiedad de demostración
            </div>

            <Link
              href="/#contacto"
              className="mt-3 flex w-full items-center justify-center rounded-xl border border-ink-200 px-4 py-3 text-sm font-semibold text-ink-800 transition hover:bg-ink-50"
            >
              Ver sección de contacto
            </Link>
          </aside>
        </div>
      </div>
    </article>
  );
}