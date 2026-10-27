/** Fio tricolor italiano (verde, branco, vermelho) usado como detalhe de marca. */
export function Tricolor({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`flex h-[3px] w-24 ${className}`}><i className="flex-1 bg-[#3E7A45]" /><i className="flex-1 bg-cream" /><i className="flex-1 bg-ruby" /></div>;
}
