import { ArrowRight, BadgeCheck, RotateCcw, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const proofPoints = [
  { icon: BadgeCheck, label: "Tuyển chọn có lý do" },
  { icon: Truck, label: "Giao nhanh toàn quốc" },
  { icon: RotateCcw, label: "Đổi mới 30 ngày" },
] as const;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-midnight text-white">
      <div className="hero-grid absolute inset-0 -z-20" aria-hidden="true" />
      <div className="absolute -right-20 top-12 -z-10 size-[34rem] rounded-full bg-electric/25 blur-3xl" aria-hidden="true" />
      <div className="absolute -left-32 bottom-0 -z-10 size-96 rounded-full bg-teal-tech/25 blur-3xl" aria-hidden="true" />
      <div className="mx-auto grid min-h-[680px] max-w-page items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-24">
        <div className="reveal-up max-w-2xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-mint/25 bg-mint/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-mint">
            Technology, decoded.
          </p>
          <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Công nghệ tốt <span className="text-electric-light">không cần khó chọn.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            Nexora giải thích điều đáng tiền, điểm cần cân nhắc và lựa chọn phù hợp nhất — để bạn mua đúng ngay từ đầu.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/san-pham" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-midnight transition-transform hover:-translate-y-0.5">
              Khám phá sản phẩm <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link href="#setup" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-bold text-white transition-colors hover:bg-white/10">
              Dựng setup theo ngân sách
            </Link>
          </div>
          <ul className="mt-10 grid gap-4 border-t border-white/10 pt-6 text-sm text-slate-300 sm:grid-cols-3">
            {proofPoints.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5">
                <Icon className="size-4 text-mint" aria-hidden="true" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal-up-delay relative mx-auto w-full max-w-xl" aria-label="MacBook Air được Nexora tuyển chọn">
          <div className="hero-orb relative aspect-[1.08]">
            <div className="absolute inset-[6%] rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/15 to-white/5 shadow-2xl shadow-blue-950/70 backdrop-blur-sm" />
            <div className="absolute inset-x-[12%] bottom-[11%] top-[8%] overflow-hidden rounded-[1.7rem] border border-white/15 bg-slate-100 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=90"
                alt="Laptop nhôm màu bạc mở trên bàn làm việc tối giản"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/65 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-[4%] left-[4%] max-w-52 rounded-2xl border border-white/15 bg-midnight/85 p-4 shadow-xl backdrop-blur-xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-mint">Nexora Verdict</p>
              <p className="mt-2 text-sm font-semibold leading-5 text-white">Chiếc máy “mua là yên tâm” cho phần lớn ngày làm việc.</p>
            </div>
            <div className="absolute right-[3%] top-[13%] rounded-2xl border border-white/15 bg-white/90 px-4 py-3 text-midnight shadow-xl backdrop-blur">
              <p className="text-xs font-bold">Điểm Nexora</p>
              <p className="mt-0.5 font-display text-2xl font-bold text-electric">9.1<span className="text-xs text-slate-500">/10</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
