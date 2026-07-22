"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

type WishlistContextValue = Readonly<{
  items: string[];
  toggle: (slug: string) => void;
  has: (slug: string) => boolean;
  count: number;
}>;

const WishlistContext = createContext<WishlistContextValue | null>(null);

const STORAGE_KEY = "nexora-wishlist";

export function WishlistProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // ignore
    }
  }, []);

  const persist = useCallback((next: string[]) => {
    setItems(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
  }, []);

  const toggle = useCallback((slug: string) => {
    setItems((prev) => {
      const next = prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const has = useCallback((slug: string) => items.includes(slug), [items]);

  return (
    <WishlistContext.Provider value={{ items, toggle, has, count: items.length }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}
