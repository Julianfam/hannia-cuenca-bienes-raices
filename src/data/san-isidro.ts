export type LotStatus = "available" | "reserved" | "sold";

export interface Lot {
  id: string;
  code: string;
  stage: 1 | 2;
  area: number;
  price: number;
  status: LotStatus;
  features: string[];
  /** Relative position on the abstract master plan (0–100) */
  x: number;
  y: number;
}

export const sanIsidro = {
  slug: "san-isidro",
  name: "Fincas de San Isidro",
  shortName: "San Isidro",
  tagline: "Lotes campestres con vista a las montañas",
  location: "Carmen de Apicalá, Tolima",
  distance: "2 h 30 min de Bogotá · 20 min del centro de Carmen de Apicalá",
  description:
    "Un proyecto de lotes de construcción libre desde 2.000 m², rodeado de naturaleza, quebradas con aguas cristalinas y cascadas. Ideal para tu finca de descanso o inversión.",
  longDescription:
    "Vive rodeado de la naturaleza con vista a las montañas. Terrenos amplios para construir lo que quieras, con servicios de energía y acueducto frente a cada lote, vías compactadas y placa huella en zonas con pendiente. Cada lote cuenta con matrícula inmobiliaria independiente, cédula catastral y escritura individual.",
  priceFrom: 77_000_000,
  downPayment: 5_000_000,
  reservationFee: 1_000_000,
  financingMonths: 36,
  financingNote: "Financiación a 36 meses sin intereses ni estudio de crédito",
  minArea: 2000,
  virtualTour: "https://bit.ly/recorrido360fincas-san-isidro",
  sourceUrl: "https://www.greenhomebienesraices.com/sanisidro",
  heroImage:
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=85",
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=85",
      alt: "Bosque y naturaleza en San Isidro",
    },
    {
      src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85",
      alt: "Vista a las montañas",
    },
    {
      src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200&q=85",
      alt: "Quebrada y aguas cristalinas",
    },
    {
      src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&q=85",
      alt: "Paisaje campestre",
    },
    {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=85",
      alt: "Atardecer en la finca",
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=85",
      alt: "Naturaleza y horizontes",
    },
  ],
  amenities: [
    { name: "Piscina unifamiliar", icon: "waves" as const },
    { name: "Mirador", icon: "mountain" as const },
    { name: "Kiosco", icon: "home" as const },
    { name: "Zona BBQ", icon: "flame" as const },
    { name: "Zonas verdes", icon: "trees" as const },
    { name: "Quebrada", icon: "droplets" as const },
    { name: "Cascada", icon: "sparkles" as const },
    { name: "Cancha de tejo", icon: "circle" as const },
  ],
  highlights: [
    "Construcción libre en cada lote",
    "Energía y acueducto frente al predio",
    "Vías compactadas y placa huella",
    "Matrícula y cédula catastral independientes",
    "Segunda etapa con lotes más planos",
    "Escritura individual lista",
  ],
  steps: [
    {
      title: "Elige tu lote",
      description: "Explora el showroom y selecciona el lote ideal según etapa, área y ubicación.",
    },
    {
      title: "Separa con $1.000.000",
      description: "Reserva tu unidad con una separación simbólica y asegura tu opción de compra.",
    },
    {
      title: "Cuota inicial",
      description: "Cuota inicial desde $5.000.000 y financiación flexible a 36 meses sin intereses.",
    },
    {
      title: "Escritura",
      description: "Documentación legal al día: matrícula independiente y escritura individual.",
    },
  ],
} as const;

/** Demo inventory for the interactive showroom. Update statuses as lots sell. */
export const lots: Lot[] = [
  {
    id: "a1",
    code: "A-01",
    stage: 1,
    area: 2100,
    price: 77_000_000,
    status: "available",
    features: ["Vista montaña", "Frente a vía"],
    x: 12,
    y: 22,
  },
  {
    id: "a2",
    code: "A-02",
    stage: 1,
    area: 2200,
    price: 82_000_000,
    status: "available",
    features: ["Cerca a quebrada"],
    x: 28,
    y: 18,
  },
  {
    id: "a3",
    code: "A-03",
    stage: 1,
    area: 2000,
    price: 77_000_000,
    status: "reserved",
    features: ["Esquinero"],
    x: 44,
    y: 25,
  },
  {
    id: "a4",
    code: "A-04",
    stage: 1,
    area: 2500,
    price: 95_000_000,
    status: "available",
    features: ["Más plano", "Amplio frente"],
    x: 60,
    y: 20,
  },
  {
    id: "a5",
    code: "A-05",
    stage: 1,
    area: 2300,
    price: 88_000_000,
    status: "sold",
    features: ["Vista panorámica"],
    x: 76,
    y: 28,
  },
  {
    id: "a6",
    code: "A-06",
    stage: 1,
    area: 2150,
    price: 80_000_000,
    status: "available",
    features: ["Zona tranquila"],
    x: 18,
    y: 48,
  },
  {
    id: "b1",
    code: "B-01",
    stage: 2,
    area: 2400,
    price: 90_000_000,
    status: "available",
    features: ["Etapa 2 · más plano"],
    x: 38,
    y: 52,
  },
  {
    id: "b2",
    code: "B-02",
    stage: 2,
    area: 2600,
    price: 98_000_000,
    status: "available",
    features: ["Etapa 2 · premium"],
    x: 55,
    y: 55,
  },
  {
    id: "b3",
    code: "B-03",
    stage: 2,
    area: 2000,
    price: 77_000_000,
    status: "available",
    features: ["Etapa 2 · entrada"],
    x: 72,
    y: 48,
  },
  {
    id: "b4",
    code: "B-04",
    stage: 2,
    area: 2800,
    price: 110_000_000,
    status: "reserved",
    features: ["Etapa 2 · mayor área"],
    x: 48,
    y: 72,
  },
  {
    id: "b5",
    code: "B-05",
    stage: 2,
    area: 2200,
    price: 85_000_000,
    status: "available",
    features: ["Etapa 2 · cerca mirador"],
    x: 68,
    y: 75,
  },
  {
    id: "b6",
    code: "B-06",
    stage: 2,
    area: 2050,
    price: 79_000_000,
    status: "available",
    features: ["Etapa 2 · inversión"],
    x: 30,
    y: 78,
  },
];

export function formatCop(value: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}

export function getAvailableLots(): Lot[] {
  return lots.filter((lot) => lot.status === "available");
}

export function getLotById(id: string): Lot | undefined {
  return lots.find((lot) => lot.id === id);
}

export const lotStatusLabel: Record<LotStatus, string> = {
  available: "Disponible",
  reserved: "Reservado",
  sold: "Vendido",
};
