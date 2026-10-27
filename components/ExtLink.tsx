"use client";
import { LINKS, type LinkKey } from "@/lib/config";
import { useUnset } from "./LinksProvider";

type Props = { to: LinkKey; label: string; variant?: "solid" | "ghost" | "gold"; children: React.ReactNode; className?: string };
const base = "group inline-flex min-h-12 items-center justify-center gap-2 px-7 py-3 text-sm font-medium uppercase tracking-[.18em] transition duration-300 active:scale-[.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold";
const styles = {
  solid: "bg-ruby text-cream hover:bg-[#d02c36]",
  gold: "bg-gold text-ink hover:bg-[#dcb77f]",
  ghost: "border border-cream/40 text-cream hover:border-gold hover:text-gold",
};

export function ExtLink({ to, label, variant = "solid", children, className = "" }: Props) {
  const unset = useUnset();
  const href = LINKS[to];
  const cls = `${base} ${styles[variant]} ${className}`;
  if (!href) return <button type="button" onClick={() => unset(label)} className={cls}>{children}</button>;
  return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
}
