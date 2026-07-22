"use client";

import { Heart } from "lucide-react";

import { useWishlist } from "@/features/wishlist/wishlist-context";

type WishlistButtonProps = Readonly<{
  slug: string;
}>;

export function WishlistButton({ slug }: WishlistButtonProps) {
  const { has, toggle } = useWishlist();
  const active = has(slug);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(slug);
      }}
      className={`grid size-9 place-items-center rounded-full border backdrop-blur-sm transition-colors ${
        active
          ? "border-red-300 bg-red-50 text-red-500"
          : "border-slate-200 bg-white/90 text-slate-400 hover:border-red-300 hover:text-red-500"
      }`}
      aria-label={active ? "Bỏ yêu thích" : "Thêm yêu thích"}
      aria-pressed={active}
    >
      <Heart className={`size-4 ${active ? "fill-current" : ""}`} aria-hidden="true" />
    </button>
  );
}
