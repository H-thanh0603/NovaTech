import { NextResponse } from "next/server";

import { SESSION_COOKIE_NAME } from "@/features/auth/auth-edge";

const protectedPaths = ["/tai-khoan"];
const adminPaths = ["/admin"];

export function middleware(request: Request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  const isProtected = protectedPaths.some((path) => pathname.startsWith(path));
  const isAdminPath = adminPaths.some((path) => pathname.startsWith(path));
  if (!isProtected && !isAdminPath) {
    return NextResponse.next();
  }

  const cookieHeader = request.headers.get("cookie") ?? "";
  const cookies = Object.fromEntries(
    cookieHeader.split("; ").map((c) => {
      const [key, ...rest] = c.split("=");
      return [key, rest.join("=")];
    }),
  );

  const token = cookies[SESSION_COOKIE_NAME];
  if (!token) {
    const loginUrl = new URL("/dang-nhap", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAdminPath) {
    try {
      const [data] = token.split(".");
      const payload = JSON.parse(Buffer.from(data, "base64url").toString()) as { role?: string };
      if (payload.role !== "ADMIN") {
        return NextResponse.redirect(new URL("/", request.url));
      }
    } catch {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/tai-khoan/:path*", "/admin/:path*"]
};
