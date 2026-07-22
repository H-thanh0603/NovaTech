"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import {
  login,
  register,
  SESSION_COOKIE_NAME,
  SESSION_MAX_AGE,
} from "@/features/auth/auth.service";
import { sanitizeEmail, sanitizeText } from "@/lib/sanitize";

export async function loginAction(
  _prevState: { success: boolean; error?: string } | null,
  formData: FormData,
): Promise<{ success: boolean; error?: string }> {
  const email = sanitizeEmail(String(formData.get("email") ?? ""));
  const password = String(formData.get("password") ?? "").slice(0, 200);

  const result = login({ email, password });

  if (!result.success || !result.sessionToken) {
    return { success: false, error: result.error };
  }

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, result.sessionToken, {
    httpOnly: true,
    sameSite: "lax",
    maxAge: SESSION_MAX_AGE,
    path: "/",
  });

  redirect("/tai-khoan");
}

export async function registerAction(
  _prevState: { success: boolean; error?: string } | null,
  formData: FormData,
): Promise<{ success: boolean; error?: string }> {
  const email = sanitizeEmail(String(formData.get("email") ?? ""));
  const password = String(formData.get("password") ?? "").slice(0, 200);
  const name = sanitizeText(String(formData.get("name") ?? ""), 100);

  const result = register({ email, password, name });

  if (!result.success || !result.sessionToken) {
    return { success: false, error: result.error };
  }

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, result.sessionToken, {
    httpOnly: true,
    sameSite: "lax",
    maxAge: SESSION_MAX_AGE,
    path: "/",
  });

  redirect("/tai-khoan");
}

export async function logoutAction(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
  redirect("/");
}
