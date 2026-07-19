"use client";

import { useActionState } from "react";
import Link from "next/link";

import { registerAction } from "@/features/auth/auth.actions";

export function RegisterForm() {
  const [state, formAction] = useActionState(registerAction, null);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      {state?.error ? (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">{state.error}</p>
      ) : null}
      {state?.success ? (
        <p className="rounded-xl bg-teal-50 px-4 py-3 text-sm font-semibold text-teal-tech">Đăng ký thành công!</p>
      ) : null}

      <div>
        <label htmlFor="name" className="text-sm font-semibold text-slate-600">Họ tên</label>
        <input id="name" name="name" type="text" required className="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 focus:border-electric focus:outline-none" placeholder="Nguyễn Văn A" />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-semibold text-slate-600">Email</label>
        <input id="email" name="email" type="email" required className="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 focus:border-electric focus:outline-none" placeholder="email@example.com" />
      </div>
      <div>
        <label htmlFor="password" className="text-sm font-semibold text-slate-600">Mật khẩu</label>
        <input id="password" name="password" type="password" required minLength={6} className="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 focus:border-electric focus:outline-none" placeholder="Ít nhất 6 ký tự" />
      </div>

      <button type="submit" className="mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-electric px-6 text-sm font-bold text-white hover:bg-blue-700">
        Đăng ký
      </button>

      <p className="text-center text-sm text-slate-500">
        Đã có tài khoản? <Link href="/dang-nhap" className="font-semibold text-electric hover:underline">Đăng nhập</Link>
      </p>
    </form>
  );
}
