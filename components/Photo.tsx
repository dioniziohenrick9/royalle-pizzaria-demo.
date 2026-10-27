import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { IMAGES, type ImageSlot } from "@/lib/images";
import { PizzaArt } from "./PizzaArt";

/** Server component: usa a foto se o arquivo existir em /public; senão mostra um placeholder discreto. Preenche o pai (relative). */
export function Photo({ slot, sizes = "100vw", priority = false, className = "object-cover" }: { slot: ImageSlot; sizes?: string; priority?: boolean; className?: string }) {
  const img = IMAGES[slot];
  const exists = fs.existsSync(path.join(process.cwd(), "public", img.src));
  if (exists) return <Image src={img.src} alt={img.alt} fill sizes={sizes} priority={priority} quality={82} className={className} />;
  return (
    <div className="absolute inset-0 grid place-items-center bg-[#2e1218]" role="img" aria-label={img.alt}>
      <PizzaArt variant={img.fallback} className="w-[70%] max-w-[520px] opacity-80" />
    </div>
  );
}
