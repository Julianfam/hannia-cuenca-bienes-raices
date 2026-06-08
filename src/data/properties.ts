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
    slug: "casa-moderna-el-batan",
    title: "Casa moderna en El Batán",
    description:
      "Hermosa casa de dos pisos con acabados de lujo, jardín privado y vista panorámica. Ideal para familias que buscan comodidad y exclusividad en una de las mejores zonas de la ciudad.",
    type: "casa",
    operation: "venta",
    price: 285000,
    currency: "USD",
    location: "El Batán",
    city: "Cuenca",
    bedrooms: 4,
    bathrooms: 3,
    area: 220,
    parking: 2,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    amenities: ["Jardín", "Cocina integral", "Seguridad 24h", "Terraza"],
  },
  {
    id: "2",
    slug: "apartamento-centro-historico",
    title: "Apartamento en Centro Histórico",
    description:
      "Elegante apartamento renovado en el corazón del centro histórico. Perfecto para quienes valoran la ubicación, la cultura y la vida urbana a pasos de todo.",
    type: "apartamento",
    operation: "venta",
    price: 145000,
    currency: "USD",
    location: "Centro Histórico",
    city: "Cuenca",
    bedrooms: 2,
    bathrooms: 2,
    area: 95,
    parking: 1,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    amenities: ["Balcón", "Ascensor", "Cocina equipada", "Vista a la ciudad"],
  },
  {
    id: "3",
    slug: "casa-arriendo-totoracocha",
    title: "Casa en arriendo - Totoracocha",
    description:
      "Amplia casa familiar en zona residencial tranquila. Cerca de colegios, supermercados y vías principales. Lista para habitar.",
    type: "casa",
    operation: "arriendo",
    price: 650,
    currency: "USD",
    location: "Totoracocha",
    city: "Cuenca",
    bedrooms: 3,
    bathrooms: 2,
    area: 160,
    parking: 1,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    amenities: ["Patio", "Bodega", "Cocina amplia", "Zona residencial"],
  },
  {
    id: "4",
    slug: "apartamento-estudio-yanuncay",
    title: "Estudio amoblado en Yanuncay",
    description:
      "Acogedor estudio completamente amoblado, ideal para profesionales o estudiantes. Incluye servicios y excelente conectividad.",
    type: "apartamento",
    operation: "arriendo",
    price: 380,
    currency: "USD",
    location: "Yanuncay",
    city: "Cuenca",
    bedrooms: 1,
    bathrooms: 1,
    area: 45,
    parking: 0,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    amenities: ["Amoblado", "Internet", "Lavandería", "Seguridad"],
  },
  {
    id: "5",
    slug: "terreno-inversion-monay",
    title: "Terreno para inversión en Monay",
    description:
      "Terreno plano con excelente potencial de desarrollo. Ubicación estratégica con proyección de plusvalía. Documentación al día.",
    type: "terreno",
    operation: "venta",
    price: 78000,
    currency: "USD",
    location: "Monay",
    city: "Cuenca",
    bedrooms: 0,
    bathrooms: 0,
    area: 500,
    parking: 0,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    amenities: ["Acceso vehicular", "Servicios básicos", "Documentación legal"],
  },
  {
    id: "6",
    slug: "local-comercial-gran-colombia",
    title: "Local comercial en Av. Gran Colombia",
    description:
      "Local comercial en zona de alto tráfico peatonal. Ideal para retail, oficina o franquicia. Excelente visibilidad.",
    type: "local",
    operation: "arriendo",
    price: 1200,
    currency: "USD",
    location: "Av. Gran Colombia",
    city: "Cuenca",
    bedrooms: 0,
    bathrooms: 1,
    area: 85,
    parking: 0,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    amenities: ["Vitrina", "Baño", "Almacén", "Alto tráfico"],
  },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function formatPrice(price: number, currency: string): string {
  return new Intl.NumberFormat("es-EC", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}