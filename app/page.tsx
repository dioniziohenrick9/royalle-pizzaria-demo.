import { Clock, Instagram, MapPin, MessageCircle, Bike } from "lucide-react";
import { BRAND } from "@/lib/config";
import { ExtLink } from "@/components/ExtLink";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Parallax } from "@/components/Parallax";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { Tricolor } from "@/components/Tricolor";

const eyebrow = "flex items-center gap-4 text-[11px] uppercase tracking-[.4em] text-gold";
const wrap = "mx-auto max-w-[1500px] px-5 md:px-10";
const CONTACTS = [["delivery", "Delivery", Bike], ["whatsapp", "WhatsApp", MessageCircle], ["maps", "Google Maps", MapPin], ["instagram", "Instagram", Instagram]] as const;
const FOOT = [["Experiência", "#experiencia"], ["Pizzas", "#pizzas"], ["Rodízio", "#rodizio"], ["Clube", "#clube"], ["Contato", "#contato"]];
const Ilus = () => <p className="mt-2 text-[10px] uppercase tracking-[.3em] text-cream/45">Imagem ilustrativa</p>;

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero media={<Photo slot="hero" priority sizes="100vw" />} />

        {/* Experiência — tipografia gigante + foto que invade a margem */}
        <section id="experiencia" className="relative overflow-hidden py-28 md:py-44">
          <div className={`${wrap} relative`}>
            <Reveal><p className={eyebrow}><Tricolor />A experiência Royalle</p></Reveal>
            <Reveal className="relative z-10 mt-8"><h2 className="font-serif text-[16vw] leading-[.85] md:text-[11vw]">Mesa <em className="text-gold">posta</em>,<br className="md:hidden" /> noite <span className="outline-text">feita.</span></h2></Reveal>
            <div className="mt-10 grid gap-10 md:-mt-6 md:grid-cols-12">
              <Parallax amount={50} className="relative -mr-5 aspect-[4/5] md:col-span-6 md:col-start-6 md:-mr-24">
                <Photo slot="especial" sizes="(min-width:768px) 50vw, 100vw" /><span className="sr-only">Imagem ilustrativa</span>
              </Parallax>
              <Reveal className="md:col-span-4 md:col-start-1 md:row-start-1 md:self-end">
                <p className="max-w-sm text-lg leading-relaxed text-cream/75">Pizza para dividir, mesa para celebrar. Um jantar pensado para virar memória.</p><Ilus />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Pizzas — composição assimétrica, sem cartões */}
        <section id="pizzas" className="bg-cream py-28 text-ink md:py-44">
          <div className={wrap}>
            <Reveal><p className="flex items-center gap-4 text-[11px] uppercase tracking-[.4em] text-ruby"><Tricolor />Nossas pizzas</p>
              <h2 className="mt-6 max-w-5xl font-serif text-[14vw] leading-[.88] md:text-[9vw]">Três <em className="text-ruby">inspirações</em> para o seu apetite.</h2></Reveal>
            <div className="mt-16 grid gap-14 md:grid-cols-12 md:gap-6">
              <Parallax amount={30} className="md:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden"><Photo slot="calabresa" sizes="(min-width:768px) 40vw, 100vw" /></div>
                <p className="mt-4 font-serif text-4xl"><span className="text-ruby">01</span> Calabresa</p>
              </Parallax>
              <Parallax amount={70} className="md:col-span-4 md:col-start-7 md:mt-40">
                <div className="relative aspect-square overflow-hidden"><Photo slot="especial" sizes="(min-width:768px) 33vw, 100vw" /></div>
                <p className="mt-4 font-serif text-4xl"><span className="text-ruby">02</span> Especial</p>
              </Parallax>
              <Parallax amount={40} className="md:col-span-4 md:col-start-9 md:-mt-24">
                <div className="relative aspect-[3/4] overflow-hidden"><Photo slot="doce" sizes="(min-width:768px) 33vw, 100vw" /></div>
                <p className="mt-4 font-serif text-4xl"><span className="text-ruby">03</span> Doce</p>
              </Parallax>
            </div>
            <p className="mt-12 max-w-xl text-sm text-ink/60">Imagens ilustrativas. Não representam necessariamente produtos oficiais da Royalle. Sabores e valores: consulte a pizzaria.</p>
          </div>
        </section>

        {/* Rodízio — full-bleed, marquee e tipografia vazada */}
        <section id="rodizio" className="relative overflow-hidden bg-ink py-28 md:py-0 md:min-h-[110vh]">
          <div className="absolute inset-0 opacity-60"><Photo slot="rodizio" sizes="100vw" /></div>
          <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-ink via-wine/50 to-ink" />
          <div className="relative flex min-h-[90vh] flex-col justify-center gap-10 md:min-h-[110vh]">
            <div aria-hidden className="overflow-hidden border-y border-gold/30 py-3">
              <div className="marquee flex w-max whitespace-nowrap font-serif text-3xl italic text-gold">
                {Array.from({ length: 8 }).map((_, i) => <span key={i} className="px-6">Rodízio Royalle · 19h — 22h ·</span>)}
              </div>
            </div>
            <div className={`${wrap} w-full`}>
              <Reveal>
                <p className={eyebrow}><Tricolor />Rodízio Royalle</p>
                <h2 className="mt-6 font-serif text-[18vw] uppercase leading-[.82] md:text-[13vw]"><span className="outline-text">Todos</span><br />os dias<br /><em className="text-gold">19h–22h</em></h2>
                <div className="mt-10"><ExtLink to="whatsapp" label="Detalhes do rodízio" variant="gold">Consultar detalhes</ExtLink></div>
                <Ilus />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Cupom */}
        <section id="cupom" className={`${wrap} relative py-28 md:py-44`}>
          <Reveal className="relative">
            <p className={eyebrow}><Tricolor />Primeira compra</p>
            <p aria-label="12% OFF" className="mt-4 font-serif text-[30vw] leading-[.8] text-gold md:text-[22vw]">12<span className="text-[.5em] align-top">%</span> <span className="outline-text">OFF</span></p>
            <p className="mt-6 max-w-md text-cream/70">Cupom para a primeira compra. As condições precisam ser confirmadas com a pizzaria.</p>
            <div className="mt-8"><ExtLink to="coupon" label="Cupom de primeira compra">Quero meu cupom</ExtLink></div>
          </Reveal>
        </section>

        {/* Clube */}
        <section id="clube" className="border-y border-gold/20 bg-ink py-28 md:py-44">
          <div className={`${wrap} grid gap-10 md:grid-cols-12 md:items-end`}>
            <Reveal className="md:col-span-8">
              <p className={eyebrow}><Tricolor />Fidelidade</p>
              <h2 className="mt-6 font-serif text-[18vw] leading-[.85] md:text-[11vw]">Clube <em className="text-gold">Royalle</em></h2>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-4">
              <p className="mb-8 max-w-sm text-lg text-cream/70">Um programa de fidelidade para quem faz da Royalle parte da rotina. Regras e benefícios são informados pela pizzaria.</p>
              <ExtLink to="club" label="Clube Royalle" variant="ghost">Conhecer o clube</ExtLink>
            </Reveal>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className={`${wrap} py-28 md:py-44`}>
          <Reveal>
            <p className={eyebrow}><Tricolor />Localização e contato</p>
            <h2 className="mt-6 font-serif text-[18vw] leading-[.85] md:text-[11vw]">Venha. <em className="text-gold">Ou peça.</em></h2>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACTS.map(([k, l, Icon]) => <ExtLink key={k} to={k} label={l} variant="ghost" className="!justify-start"><Icon size={18} aria-hidden /> {l}</ExtLink>)}
          </div>
          <p className="mt-10 flex flex-wrap items-center gap-3 text-cream/80"><Clock size={18} className="text-gold" aria-hidden /> {BRAND.hours} · Rodízio das 19h às 22h</p>
        </section>
      </main>

      <footer className="border-t border-gold/20 bg-ink px-5 py-14 md:px-10">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-8 md:flex-row md:justify-between">
          <div><p className="font-serif text-4xl italic">Royalle</p><p className="mt-1 text-xs uppercase tracking-[.3em] text-gold">Pizzaria</p><Tricolor className="mt-4" /></div>
          <nav aria-label="Rodapé" className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-cream/70">{FOOT.map(([l, h]) => <a key={h} href={h} className="hover:text-gold">{l}</a>)}</nav>
        </div>
        <p className="mx-auto mt-10 max-w-[1500px] text-xs text-cream/50">{BRAND.disclaimer}</p>
      </footer>
    </>
  );
}
