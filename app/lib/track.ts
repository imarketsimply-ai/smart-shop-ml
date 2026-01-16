declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function trackClick(data: {
  tipo: "oferta";
  titulo: string;
  categoria?: string;
}) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "click_oferta", {
      event_category: data.tipo,
      event_label: data.titulo,
      categoria: data.categoria,
    });
  }
}
