import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Maximize, MapPin, Car } from "lucide-react";
import { Property, formatPrice } from "@/data/properties";

const typeLabels: Record<Property["type"], string> = {
  casa: "Casa",
  apartamento: "Apartamento",
  terreno: "Terreno",
  local: "Local comercial",
};

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card">
      <Link href={`/propiedades/${property.slug}`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute left-3 top-3 flex gap-2">
            <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink-800">
              {property.operation}
            </span>
            {property.featured && (
              <span className="rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                Destacada
              </span>
            )}
          </div>
        </div>

        <div className="p-5">
          <div className="mb-2 flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-brand-700">
            <MapPin size={12} />
            {property.location}, {property.city}
          </div>
          <h3 className="font-display text-xl font-semibold text-ink-950">
            {property.title}
          </h3>
          <p className="mt-1 text-sm text-ink-500">{typeLabels[property.type]}</p>
          <p className="mt-3 font-display text-2xl font-bold text-brand-800">
            {formatPrice(property.price, property.currency)}
            {property.operation === "arriendo" && (
              <span className="text-sm font-normal text-ink-500"> /mes</span>
            )}
          </p>

          <div className="mt-4 flex flex-wrap gap-4 border-t border-ink-100 pt-4 text-sm text-ink-600">
            {property.bedrooms > 0 && (
              <span className="flex items-center gap-1">
                <Bed size={16} />
                {property.bedrooms}
              </span>
            )}
            {property.bathrooms > 0 && (
              <span className="flex items-center gap-1">
                <Bath size={16} />
                {property.bathrooms}
              </span>
            )}
            <span className="flex items-center gap-1">
              <Maximize size={16} />
              {property.area} m²
            </span>
            {property.parking > 0 && (
              <span className="flex items-center gap-1">
                <Car size={16} />
                {property.parking}
              </span>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}