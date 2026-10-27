"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

const NAV = [["Experiência", "#experiencia"], ["Pizzas", "#pizzas"], ["Rodízio", "#rodizio"], ["Clube", "#clube"], ["Contato", "#contato"]];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-500 ${scrolled || open ? "bg-wine/90 backdrop-blur-md border-b border-gold/20" : ""}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-10">
        <a href="#topo" className="font-serif text-2xl italic text-cream" onClick={() => setOpen(false)}>Royalle</a>
        <nav aria-label="Principal" className="hidden gap-10 md:flex">
          {NAV.map(([l, h]) => <a key={h} href={h} className="text-xs uppercase tracking-[.25em] text-cream/80 transition hover:text-gold">{l}</a>)}
        </nav>
        <button className="p-2 md:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav aria-label="Menu mobile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex h-[calc(100dvh-4rem)] flex-col justify-center gap-2 bg-wine px-8 md:hidden">
            {NAV.map(([l, h], i) => (
              <motion.a key={h} href={h} onClick={() => setOpen(false)} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.08 * i }}
                className="border-b border-gold/20 py-4 font-serif text-4xl text-cream">{l}</motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
