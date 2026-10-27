"use client";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ExtLink } from "./ExtLink";
import { Tricolor } from "./Tricolor";

const LINES = ["UMA EXPERIÊNCIA", "DIGNA DA", "REALEZA."];

export function Hero({ media }: { media: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 160]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, reduce ? 1.08 : 1.28]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -90]);
  const ease = [0.16, 1, 0.3, 1] as const;
  return (
    <section id="topo" ref={ref} className="relative min-h-[100svh] overflow-hidden bg-wine">
      <motion.div style={{ y, scale, willChange: "transform" }} className="absolute inset-0 [&_img]:object-[62%_50%] md:[&_img]:object-center">{media}</motion.div>
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_top,#240E13_8%,rgba(36,14,19,.55)_45%,rgba(36,14,19,.35)_100%)] md:bg-[linear-gradient(to_right,rgba(36,14,19,.92)_5%,rgba(36,14,19,.25)_65%)]" />
      <motion.div style={{ y: textY }} className="relative z-10 flex min-h-[100svh] flex-col justify-end px-5 pb-14 pt-28 md:justify-center md:px-10 md:pb-20">
        <motion.div initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }} className="flex items-center gap-4">
          <Tricolor /><span className="text-[11px] uppercase tracking-[.4em] text-gold">Royalle Pizzaria</span>
        </motion.div>
        <h1 className="mt-6 font-serif text-[13.4vw] font-medium uppercase leading-[.88] tracking-[-.02em] md:text-[9.5vw]">
          {LINES.map((l, i) => (
            <span key={l} className="block overflow-hidden pb-[.06em]">
              <motion.span className={`block ${i === 2 ? "italic text-gold md:ml-[12vw]" : i === 1 ? "md:ml-[5vw]" : ""}`}
                initial={reduce ? false : { y: "108%" }} animate={{ y: 0 }} transition={{ duration: 1.2, delay: 0.3 + i * 0.14, ease }}>{l}</motion.span>
            </span>
          ))}
        </h1>
        <motion.p initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 1, ease }} className="mt-7 max-w-sm text-base text-cream/85 md:text-lg">
          “Sabores que conquistam, momentos que ficam na memória.”
        </motion.p>
        <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15, duration: 1, ease }} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ExtLink to="delivery" label="Delivery">Peça seu delivery</ExtLink>
          <a href="#rodizio" className="inline-flex min-h-12 items-center justify-center border border-cream/50 bg-wine/30 px-7 py-3 text-sm font-medium uppercase tracking-[.18em] backdrop-blur-sm transition hover:border-gold hover:text-gold active:scale-[.97]">Conheça nosso rodízio</a>
        </motion.div>
      </motion.div>
    </section>
  );
}
