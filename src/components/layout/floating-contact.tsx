"use client";

import { MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open ? (
        <div className="flex flex-col gap-2">
          <a
            href="https://zalo.me/18002097"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-midnight shadow-lg ring-1 ring-slate-200 transition-transform hover:scale-105"
          >
            <span className="grid size-8 place-items-center rounded-full bg-blue-500 text-white text-xs font-bold">Z</span>
            Chat Zalo
          </a>
          <a
            href="https://m.me/nexora.vn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-midnight shadow-lg ring-1 ring-slate-200 transition-transform hover:scale-105"
          >
            <span className="grid size-8 place-items-center rounded-full bg-blue-600 text-white">
              <MessageCircle className="size-4" aria-hidden="true" />
            </span>
            Messenger
          </a>
          <a
            href="tel:18002097"
            className="flex items-center gap-2.5 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-midnight shadow-lg ring-1 ring-slate-200 transition-transform hover:scale-105"
          >
            <span className="grid size-8 place-items-center rounded-full bg-teal-500 text-white">
              <Phone className="size-4" aria-hidden="true" />
            </span>
            Gọi hotline
          </a>
        </div>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Đóng liên hệ" : "Mở liên hệ"}
        aria-expanded={open}
        className="grid size-14 place-items-center rounded-full bg-electric text-white shadow-xl transition-transform hover:scale-110"
      >
        {open ? <X className="size-6" aria-hidden="true" /> : <MessageCircle className="size-6" aria-hidden="true" />}
      </button>
    </div>
  );
}
