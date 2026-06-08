export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "María Fernanda L.",
    role: "Compradora de casa",
    text: "Hannia nos guió en todo el proceso de compra con paciencia y profesionalismo. Encontramos nuestra casa soñada gracias a su dedicación.",
    rating: 5,
  },
  {
    id: "2",
    name: "Carlos Andrés R.",
    role: "Inversionista",
    text: "Excelente asesoría para mi primera inversión inmobiliaria. Transparente, honesta y siempre disponible para resolver dudas.",
    rating: 5,
  },
  {
    id: "3",
    name: "Patricia V.",
    role: "Arrendataria",
    text: "Encontré el apartamento perfecto en tiempo récord. Hannia entiende exactamente lo que necesitas y lo hace realidad.",
    rating: 5,
  },
];