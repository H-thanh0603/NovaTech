"use client";

import { LogOut } from "lucide-react";

import { logoutAction } from "@/features/auth/auth.actions";
import type { AuthUser } from "@/features/auth/auth.types";

type AccountNavProps = Readonly<{
  user: AuthUser;
}>;

export function AccountNav({ user }: AccountNavProps) {
  return (
    <div className="rounded-panel border border-slate-200 bg-white p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-display text-lg font-bold text-midnight">{user.name}</p>
          <p className="mt-1 text-sm text-slate-500">{user.email}</p>
        </div>
        <form action={logoutAction}>
          <button type="submit" className="inline-flex min-h-10 items-center gap-2 rounded-full border border-slate-200 px-4 text-sm font-semibold text-slate-600 hover:border-red-300 hover:text-red-500">
            <LogOut className="size-4" aria-hidden="true" /> Đăng xuất
          </button>
        </form>
      </div>
    </div>
  );
}
