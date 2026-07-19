import { cookies } from "next/headers";

import {
  getUserFromSession,
  SESSION_COOKIE_NAME,
  SESSION_MAX_AGE,
  verifySessionToken,
} from "@/features/auth/auth.service";
import type { AuthUser } from "@/features/auth/auth.types";

export async function getCurrentUser(): Promise<AuthUser | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  return getUserFromSession(token);
}

export async function getSessionToken(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get(SESSION_COOKIE_NAME)?.value ?? null;
}

export async function isAuthenticated(): Promise<boolean> {
  const token = await getSessionToken();
  return verifySessionToken(token ?? undefined) !== null;
}

export async function clearSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}

export async function setSession(token: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    maxAge: SESSION_MAX_AGE,
    path: "/",
  });
}

export { SESSION_COOKIE_NAME, SESSION_MAX_AGE } from "@/features/auth/auth-edge";
