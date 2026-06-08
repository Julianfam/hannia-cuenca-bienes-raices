export type PropertyType = "casa" | "apartamento" | "terreno" | "local";
export type OperationType = "venta" | "arriendo";

export interface Property {
  id: string;
  slug: string;
  title: string;
  description: string;
  type: PropertyType;
  operation: OperationType;
  price: number;
  currency: string;
  location: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  parking: number;
  featured: boolean;
  image: string;
  amenities: string[];
}

export const properties: Property[] = [
  {
    id: "1",
    slug: "apartamento-chapinero-alto",
    title: "Apartamento en Chapinero Alto",
    description:
      "Moderno apartamento con excelente ubicación cerca de la Zona G. Acabados de primera, cocina abierta y balcón con vista. Ideal para profesionales o parejas.",
    type: "apartamento",
    operation: "venta",
    price: 680000000,
    currency: "COP",
    location: "Chapinero Alto",
    city: "Bogotá",
    bedrooms: 2,
    bathrooms: 2,
    area: 78,
    parking: 1,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    amenities: ["Balcón", "Ascensor", "Cocina integral", "Vigilancia"],
  },
  {
    id: "2",
    slug: "casa-usaquen-centro",
    title: "Casa en Usaquén",
    description:
      "Encantadora casa de dos pisos en sector residencial de Usaquén. Patio privado, zona tranquila y cerca de restaurantes, comercio y vías principales.",
    type: "casa",
    operation: "venta",
    price: 1450000000,
    currency: "COP",
    location: "Usaquén",
    city: "Bogotá",
    bedrooms: 4,
    bathrooms: 3,
    area: 210,
    parking: 2,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    amenities: ["Patio", "Estudio", "Cocina amplia", "Zona residencial"],
  },
  {
    id: "3",
    slug: "apartamento-arriendo-chico",
    title: "Apartamento en arriendo - Chicó",
    description:
      "Elegante apartamento amoblado en el corazón de Chicó. Perfecto para ejecutivos o familias pequeñas que buscan exclusividad y conectividad.",
    type: "apartamento",
    operation: "arriendo",
    price: 4500000,
    currency: "COP",
    location: "Chicó",
    city: "Bogotá",
    bedrooms: 2,
    bathrooms: 2,
    area: 85,
    parking: 1,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    amenities: ["Amoblado", "Ascensor", "Vigilancia 24h", "Cerca a parques"],
  },
  {
    id: "4",
    slug: "apartamento-cedritos",
    title: "Apartamento en Cedritos",
    description:
      "Amplio apartamento familiar en Cedritos, cerca de centros comerciales, colegios y transporte. Excelente relación precio-ubicación.",
    type: "apartamento",
    operation: "venta",
    price: 420000000,
    currency: "COP",
    location: "Cedritos",
    city: "Bogotá",
    bedrooms: 3,
    bathrooms: 2,
    area: 92,
    parking: 1,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    amenities: ["Balcón", "Zona de ropas", "Cocina integral", "Portería"],
  },
  {
    id: "5",
    slug: "casa-arriendo-suba",
    title: "Casa en arriendo - Suba",
    description:
      "Casa familiar en conjunto cerrado con zonas comunes. Ambiente seguro y tranquilo, ideal para familias con niños.",
    type: "casa",
    operation: "arriendo",
    price: 3200000,
    currency: "COP",
    location: "Suba",
    city: "Bogotá",
    bedrooms: 3,
    bathrooms: 2,
    area: 140,
    parking: 1,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    amenities: ["Conjunto cerrado", "Zonas verdes", "Parqueadero", "Portería"],
  },
  {
    id: "6",
    slug: "local-comercial-santa-fe",
    title: "Local comercial en Santa Fe",
    description:
      "Local comercial en zona de alto flujo comercial. Ideal para retail, oficina o franquicia. Excelente visibilidad y acceso.",
    type: "local",
    operation: "arriendo",
    price: 8500000,
    currency: "COP",
    location: "Santa Fe",
    city: "Bogotá",
    bedrooms: 0,
    bathrooms: 1,
    area: 65,
    parking: 0,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    amenities: ["Vitrina", "Baño", "Bodega", "Alto tráfico"],
  },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function formatPrice(price: number, currency: string): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}