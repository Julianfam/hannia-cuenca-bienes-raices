/** Colombian mobile: +57 319 349 0747 */
export const WHATSAPP_E164 = "573193490747";
export const WHATSAPP_DISPLAY = "+57 319 349 0747";

export function buildWhatsAppUrl(message: string): string {
  const text = encodeURIComponent(message.trim());
  return `https://wa.me/${WHATSAPP_E164}?text=${text}`;
}

export function openWhatsApp(message: string): void {
  if (typeof window === "undefined") return;
  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}

export function buildReservationMessage(params: {
  name: string;
  email: string;
  phone: string;
  lotCode: string;
  lotArea: number;
  lotPrice: string;
  reservationFee: string;
  projectName: string;
  message?: string;
}): string {
  const lines = [
    `Hola Hannia, quiero *reservar un lote* en ${params.projectName}.`,
    "",
    `*Lote:* ${params.lotCode}`,
    `*Área:* ${params.lotArea.toLocaleString("es-CO", { maximumFractionDigits: 2 })} m²`,
    `*Precio:* ${params.lotPrice}`,
    `*Separación:* ${params.reservationFee}`,
    "",
    `*Nombre:* ${params.name}`,
    `*Correo:* ${params.email}`,
    `*Teléfono:* ${params.phone}`,
  ];

  if (params.message?.trim()) {
    lines.push("", `*Mensaje:* ${params.message.trim()}`);
  }

  lines.push("", "Quedo atento/a para coordinar la separación. ¡Gracias!");
  return lines.join("\n");
}

export function buildContactMessage(params: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}): string {
  const lines = [
    `Hola Hannia, te contacto desde tu página web.`,
    "",
    `*Nombre:* ${params.name}`,
    `*Correo:* ${params.email}`,
  ];
  if (params.phone?.trim()) {
    lines.push(`*Teléfono:* ${params.phone.trim()}`);
  }
  lines.push("", `*Mensaje:*`, params.message.trim());
  return lines.join("\n");
}
