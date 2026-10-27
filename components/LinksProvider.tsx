"use client";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

const Ctx = createContext<(label: string) => void>(() => {});
export const useUnset = () => useContext(Ctx);

export function LinksProvider({ children }: { children: React.ReactNode }) {
  const [label, setLabel] = useState<string | null>(null);
  const open = useCallback((l: string) => setLabel(l), []);
  useEffect(() => {
    if (!label) return;
    const h = (e: KeyboardEvent) => e.key === "Escape" && setLabel(null);
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [label]);
  return (
    <Ctx.Provider value={open}>
      {children}
      <AnimatePresence>
        {label && (
          <motion.div className="fixed inset-0 z-[100] grid place-items-center bg-ink/80 p-5 backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLabel(null)}>
            <motion.div role="dialog" aria-modal="true" aria-labelledby="m-title" onClick={(e) => e.stopPropagation()}
              initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 12, opacity: 0 }}
              className="relative w-full max-w-md border border-gold/40 bg-wine p-8 text-center">
              <button autoFocus aria-label="Fechar" onClick={() => setLabel(null)} className="absolute right-3 top-3 p-2 text-gold"><X size={20} /></button>
              <p className="text-xs uppercase tracking-[.3em] text-gold">Em breve</p>
              <h3 id="m-title" className="mt-3 font-serif text-3xl">{label}</h3>
              <p className="mt-4 text-cream/75">Este link ainda não foi configurado. Na versão oficial, ele levará ao canal real da Royalle Pizzaria.</p>
              <button onClick={() => setLabel(null)} className="mt-7 bg-gold px-7 py-3 text-sm font-medium uppercase tracking-widest text-ink">Entendi</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Ctx.Provider>
  );
}
