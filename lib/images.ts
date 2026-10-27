/** Slots de imagem. Coloque o arquivo em public/images/ com o nome indicado (WebP/AVIF/JPG; o Next converte). */
export const IMAGES = {
  hero: { src: "/images/hero.webp", alt: "Pizza napolitana com queijo derretido e manjericão (imagem ilustrativa)", fallback: 1 },
  calabresa: { src: "/images/calabresa.webp", alt: "Pizza de calabresa (imagem ilustrativa)", fallback: 1 },
  especial: { src: "/images/especial.webp", alt: "Pizza artesanal com queijo puxando (imagem ilustrativa)", fallback: 2 },
  doce: { src: "/images/doce.webp", alt: "Pizza doce de chocolate e morango (imagem ilustrativa)", fallback: 3 },
  rodizio: { src: "/images/rodizio.webp", alt: "Mesa com várias pizzas em pizzaria italiana contemporânea (imagem ilustrativa)", fallback: 0 },
} as const;
export type ImageSlot = keyof typeof IMAGES;
