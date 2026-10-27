/**
 * Links externos centralizados. Deixe "" enquanto não houver o link oficial:
 * o botão abrirá um modal elegante em vez de um link quebrado.
 * Ex.: whatsapp: "https://wa.me/55DDDNUMERO"
 */
export const LINKS = {
  delivery: "",
  whatsapp: "",
  maps: "",
  instagram: "",
  club: "",
  coupon: "",
} as const;
export type LinkKey = keyof typeof LINKS;

export const BRAND = {
  name: "Royalle Pizzaria",
  hours: "Todos os dias, das 17h às 23h",
  rodizio: "Todos os dias, das 19h às 22h",
  disclaimer: "Demonstração conceitual independente. Não é o site oficial da Royalle Pizzaria.",
};
