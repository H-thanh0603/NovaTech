import Link from "next/link";

type BrandMarkProps = Readonly<{
  inverse?: boolean;
}>;

export function BrandMark({ inverse = false }: BrandMarkProps) {
  return (
    <Link
      href="/"
      aria-label="Nexora Tech — về trang chủ"
      className={`inline-flex min-h-11 items-center gap-2.5 font-display text-lg font-bold tracking-[-0.03em] ${
        inverse ? "text-white" : "text-midnight"
      }`}
    >
      <span className="relative grid size-8 place-items-center overflow-hidden rounded-[10px] bg-electric" aria-hidden="true">
        <span className="absolute h-5 w-2 rotate-45 rounded-full bg-white" />
        <span className="absolute h-5 w-2 -rotate-45 rounded-full bg-mint mix-blend-screen" />
      </span>
      <span>Nexora <span className={inverse ? "text-mint" : "text-electric"}>Tech</span></span>
    </Link>
  );
}
