export type LotStatus = "available" | "reserved" | "sold";
export type LotPhase = 1 | 2;

export interface Lot {
  id: string;
  code: string;
  parcel: number;
  stage: 2;
  phase: LotPhase;
  area: number;
  price: number;
  status: LotStatus;
  features: string[];
  /** Relative position on the abstract master plan (0–100) */
  x: number;
  y: number;
}

type RawLot = {
  parcel: number;
  phase: LotPhase;
  area: number;
  price: number;
};

/** Inventory from "E2 FINCAS DE SAN ISIDRO 06072026.pdf" — Etapa 2 */
const RAW_LOTS: RawLot[] = [
  // ETAPA 2 FASE 1
  { parcel: 9, phase: 1, area: 3007.04, price: 180_000_000 },
  { parcel: 27, phase: 1, area: 3100.39, price: 110_000_000 },
  { parcel: 34, phase: 1, area: 2119.14, price: 107_000_000 },
  { parcel: 59, phase: 1, area: 2906.99, price: 105_000_000 },
  { parcel: 64, phase: 1, area: 2025.0, price: 96_000_000 },
  { parcel: 80, phase: 1, area: 2000.0, price: 98_000_000 },
  { parcel: 86, phase: 1, area: 2000.0, price: 96_000_000 },
  { parcel: 106, phase: 1, area: 2760.0, price: 106_000_000 },
  { parcel: 107, phase: 1, area: 2971.06, price: 108_000_000 },
  { parcel: 111, phase: 1, area: 2120.45, price: 78_000_000 },
  { parcel: 112, phase: 1, area: 2114.55, price: 94_000_000 },
  // ETAPA 2 FASE 2
  { parcel: 114, phase: 2, area: 2138.74, price: 96_000_000 },
  { parcel: 130, phase: 2, area: 2500.0, price: 111_000_000 },
  { parcel: 135, phase: 2, area: 2690.29, price: 120_000_000 },
  { parcel: 137, phase: 2, area: 3125.2, price: 141_000_000 },
  { parcel: 138, phase: 2, area: 2453.82, price: 109_000_000 },
  { parcel: 139, phase: 2, area: 2374.36, price: 106_000_000 },
  { parcel: 143, phase: 2, area: 2222.09, price: 99_000_000 },
  { parcel: 144, phase: 2, area: 2259.33, price: 103_000_000 },
  { parcel: 145, phase: 2, area: 2450.36, price: 111_000_000 },
  { parcel: 146, phase: 2, area: 3104.91, price: 140_000_000 },
  { parcel: 147, phase: 2, area: 2150.0, price: 101_000_000 },
  { parcel: 148, phase: 2, area: 2305.42, price: 108_000_000 },
  { parcel: 149, phase: 2, area: 2260.43, price: 106_000_000 },
  { parcel: 150, phase: 2, area: 2100.0, price: 93_000_000 },
  { parcel: 151, phase: 2, area: 2100.0, price: 98_000_000 },
  { parcel: 152, phase: 2, area: 2000.0, price: 94_000_000 },
  { parcel: 153, phase: 2, area: 2000.0, price: 94_000_000 },
  { parcel: 155, phase: 2, area: 2122.24, price: 94_000_000 },
  { parcel: 161, phase: 2, area: 2099.61, price: 95_000_000 },
  { parcel: 162, phase: 2, area: 2116.84, price: 96_000_000 },
  { parcel: 163, phase: 2, area: 2047.59, price: 93_000_000 },
  { parcel: 165, phase: 2, area: 2157.93, price: 98_000_000 },
  { parcel: 166, phase: 2, area: 2301.01, price: 102_000_000 },
  { parcel: 167, phase: 2, area: 2116.14, price: 94_000_000 },
  { parcel: 168, phase: 2, area: 2100.88, price: 98_000_000 },
  { parcel: 169, phase: 2, area: 4235.76, price: 188_000_000 },
  { parcel: 170, phase: 2, area: 2866.69, price: 128_000_000 },
  { parcel: 171, phase: 2, area: 2113.74, price: 96_000_000 },
  { parcel: 172, phase: 2, area: 3503.11, price: 156_000_000 },
  { parcel: 173, phase: 2, area: 2558.38, price: 114_000_000 },
  { parcel: 190, phase: 2, area: 2100.0, price: 96_000_000 },
  { parcel: 197, phase: 2, area: 2000.0, price: 96_000_000 },
  { parcel: 198, phase: 2, area: 2212.86, price: 99_000_000 },
  { parcel: 199, phase: 2, area: 2489.9, price: 111_000_000 },
  { parcel: 200, phase: 2, area: 2013.93, price: 96_000_000 },
  { parcel: 201, phase: 2, area: 2028.25, price: 92_000_000 },
  { parcel: 202, phase: 2, area: 2033.38, price: 92_000_000 },
  { parcel: 203, phase: 2, area: 2654.61, price: 118_000_000 },
  { parcel: 204, phase: 2, area: 2384.53, price: 111_000_000 },
  { parcel: 205, phase: 2, area: 2447.71, price: 112_000_000 },
  { parcel: 215, phase: 2, area: 2114.64, price: 94_000_000 },
  { parcel: 216, phase: 2, area: 2123.65, price: 95_000_000 },
  { parcel: 217, phase: 2, area: 2345.47, price: 104_000_000 },
  { parcel: 218, phase: 2, area: 2103.81, price: 94_000_000 },
  { parcel: 219, phase: 2, area: 2235.89, price: 104_000_000 },
  { parcel: 222, phase: 2, area: 2540.93, price: 113_000_000 },
  { parcel: 223, phase: 2, area: 2170.94, price: 97_000_000 },
  { parcel: 224, phase: 2, area: 2127.35, price: 95_000_000 },
  { parcel: 225, phase: 2, area: 2152.55, price: 101_000_000 },
  { parcel: 226, phase: 2, area: 2053.5, price: 96_000_000 },
  { parcel: 227, phase: 2, area: 2068.75, price: 92_000_000 },
  { parcel: 228, phase: 2, area: 2205.46, price: 98_000_000 },
  { parcel: 233, phase: 2, area: 2028.03, price: 96_000_000 },
  { parcel: 235, phase: 2, area: 2421.81, price: 108_000_000 },
  { parcel: 237, phase: 2, area: 2599.96, price: 116_000_000 },
  { parcel: 238, phase: 2, area: 2380.61, price: 106_000_000 },
  { parcel: 239, phase: 2, area: 2312.63, price: 103_000_000 },
  { parcel: 240, phase: 2, area: 2271.68, price: 101_000_000 },
  { parcel: 241, phase: 2, area: 2482.75, price: 110_000_000 },
  { parcel: 242, phase: 2, area: 3003.88, price: 134_000_000 },
  { parcel: 243, phase: 2, area: 2711.49, price: 121_000_000 },
  { parcel: 247, phase: 2, area: 3760.45, price: 167_000_000 },
  { parcel: 248, phase: 2, area: 4048.4, price: 180_000_000 },
  { parcel: 252, phase: 2, area: 2100.0, price: 93_000_000 },
  { parcel: 253, phase: 2, area: 2027.42, price: 95_000_000 },
  { parcel: 254, phase: 2, area: 2242.02, price: 100_000_000 },
  { parcel: 255, phase: 2, area: 2544.15, price: 113_000_000 },
  { parcel: 256, phase: 2, area: 4581.04, price: 204_000_000 },
  { parcel: 267, phase: 2, area: 2013.51, price: 92_000_000 },
];

function layoutPosition(index: number, total: number): { x: number; y: number } {
  const cols = 10;
  const col = index % cols;
  const row = Math.floor(index / cols);
  const rows = Math.ceil(total / cols);
  return {
    x: 8 + (col / (cols - 1)) * 84,
    y: 12 + (row / Math.max(rows - 1, 1)) * 76,
  };
}

export const lots: Lot[] = RAW_LOTS.map((raw, index) => {
  const pos = layoutPosition(index, RAW_LOTS.length);
  return {
    id: `et2-${raw.parcel}`,
    code: `${raw.parcel}-ET2`,
    parcel: raw.parcel,
    stage: 2 as const,
    phase: raw.phase,
    area: raw.area,
    price: raw.price,
    status: "available" as const,
    features: [
      raw.phase === 1 ? "Etapa 2 · Fase 1" : "Etapa 2 · Fase 2",
      raw.area >= 3000 ? "Área amplia" : "Construcción libre",
    ],
    x: pos.x,
    y: pos.y,
  };
});

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
    "Vive rodeado de la naturaleza con vista a las montañas. Terrenos amplios para construir lo que quieras, con servicios de energía y acueducto frente a cada lote, vías compactadas y placa huella en zonas con pendiente. Cada lote cuenta con matrícula inmobiliaria independiente, cédula catastral y escritura individual. Inventario actualizado Etapa 2 (junio 2026).",
  priceFrom: 78_000_000,
  downPayment: 5_000_000,
  reservationFee: 1_000_000,
  financingMonths: 36,
  financingNote: "Financiación a 36 meses sin intereses ni estudio de crédito",
  minArea: 2000,
  inventoryLabel: "Etapa 2 · Actualizado 06/07/2026",
  virtualTour: "https://bit.ly/recorrido360fincas-san-isidro",
  sourceUrl: "https://www.greenhomebienesraices.com/sanisidro",
  heroImage:
    "https://arinmobiliario.com.co/wp-content/uploads/2024/01/4-min.png",
  gallery: [
    {
      src: "https://arinmobiliario.com.co/wp-content/uploads/2024/01/4-min.png",
      alt: "Paisaje de Fincas de San Isidro, Carmen de Apicalá",
    },
    {
      src: "https://arinmobiliario.com.co/wp-content/uploads/2024/01/5-min.png",
      alt: "Naturaleza y montañas en San Isidro",
    },
    {
      src: "https://arinmobiliario.com.co/wp-content/uploads/2024/01/8-min.png",
      alt: "Entorno campestre del proyecto",
    },
    {
      src: "https://arinmobiliario.com.co/wp-content/uploads/2024/01/7-min.png",
      alt: "Zonas verdes Fincas de San Isidro",
    },
    {
      src: "https://arinmobiliario.com.co/wp-content/uploads/2024/01/6-min.png",
      alt: "Vistas del proyecto San Isidro",
    },
    {
      src: "https://arinmobiliario.com.co/wp-content/uploads/2024/01/9-min.png",
      alt: "Terrenos campestres San Isidro",
    },
    {
      src: "https://arinmobiliario.com.co/wp-content/uploads/2026/02/1722960516117.jpg",
      alt: "Vista del terreno en Fincas de San Isidro",
    },
    {
      src: "https://static.wixstatic.com/media/c835e2_9d69284e08114501891f73269a4cd010~mv2.jpeg",
      alt: "Fincas de San Isidro en Carmen de Apicalá",
    },
    {
      src: "https://arinmobiliario.com.co/wp-content/uploads/2026/02/IMG-PLANO-COMPLETO-1024x716.jpeg",
      alt: "Plano general Fincas de San Isidro",
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
    "Etapa 2 con lotes más planos",
    "Escritura individual lista",
  ],
  steps: [
    {
      title: "Elige tu lote",
      description:
        "Explora el inventario real de Etapa 2 y selecciona el lote ideal según fase, área y precio.",
    },
    {
      title: "Separa con $1.000.000",
      description:
        "Reserva tu unidad con una separación simbólica y asegura tu opción de compra.",
    },
    {
      title: "Cuota inicial",
      description:
        "Cuota inicial desde $5.000.000 y financiación flexible a 36 meses sin intereses.",
    },
    {
      title: "Escritura",
      description:
        "Documentación legal al día: matrícula independiente y escritura individual.",
    },
  ],
} as const;

export function formatCop(value: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatArea(area: number): string {
  return new Intl.NumberFormat("es-CO", {
    minimumFractionDigits: area % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(area);
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
