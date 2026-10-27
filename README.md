# Royalle Pizzaria — Landing page (demonstração conceitual independente)

## Rodar localmente
```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # TypeScript
npm run build      # build de produção
```

## Deploy na Vercel
Envie a pasta para um repositório Git e importe na Vercel (preset Next.js detectado automaticamente), ou rode `npx vercel`.

## Substituir links
Edite `lib/config.ts`. Campo vazio ("") = botão abre um modal "Em breve". Exemplo: `whatsapp: "https://wa.me/55DDDNUMERO"`.

## Substituir imagens e logotipo
- Coloque fotos oficiais em `public/` (ex.: `public/pizza-1.jpg`).
- Em `components/PizzaArt.tsx`, troque o SVG por `next/image`:
  `<Image src="/pizza-1.jpg" alt="Descrição" width={800} height={800} className={className} priority />`
- Logotipo: em `components/Header.tsx` e no rodapé de `app/page.tsx`, substitua o texto "Royalle" por `<Image src="/logo.svg" ... />`.

## Observações
- Sem checkout, pagamento ou backend.
- Todo o texto comercial limita-se ao que foi confirmado (horários, rodízio, cupom 12%, Clube).

## Imagens
Veja `IMAGENS.md` (prompts, nomes de arquivo e tamanhos). Slots definidos em `lib/images.ts`; `components/Photo.tsx` usa a foto se existir em `public/images/`.
