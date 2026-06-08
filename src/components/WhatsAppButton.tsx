import { MessageCircle } from "lucide-react";
import { agent } from "@/data/agent";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    `Hola ${agent.shortName}, me interesa conocer más sobre tus propiedades disponibles.`
  );

  return (
    <a
      href={`https://wa.me/${agent.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:scale-105 hover:bg-[#1fb855]"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}