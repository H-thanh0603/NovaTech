import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";

import type {
  AuthResult,
  AuthSession,
  AuthUser,
  LoginInput,
  RegisterInput,
} from "./auth.types";
import { SESSION_MAX_AGE } from "./auth-edge";

export { SESSION_COOKIE_NAME, SESSION_MAX_AGE } from "./auth-edge";

function getAuthSecret(): string {
  return process.env.AUTH_SECRET ?? "nexora-dev-secret-not-for-production";
}

function hashPassword(password: string): string {
  const secret = getAuthSecret();
  const salt = randomBytes(16).toString("hex");
  const hash = createHmac("sha256", secret).update(`${salt}:${password}`).digest("hex");
  return `${salt}:${hash}`;
}

function verifyPassword(password: string, stored: string): boolean {
  const [salt, expectedHash] = stored.split(":");
  if (!salt || !expectedHash) return false;
  const secret = getAuthSecret();
  const actualHash = createHmac("sha256", secret).update(`${salt}:${password}`).digest("hex");
  try {
    return timingSafeEqual(Buffer.from(actualHash, "hex"), Buffer.from(expectedHash, "hex"));
  } catch {
    return false;
  }
}

type StoredUser = {
  id: string;
  email: string;
  name: string;
  passwordHash: string;
  role: "CUSTOMER" | "ADMIN";
};

const users = new Map<string, StoredUser>();
let initialized = false;

function ensureDemoUser(): void {
  if (initialized) return;
  initialized = true;
  const demoUser: StoredUser = {
    id: "demo-user",
    email: "demo@nexora.vn",
    name: "Người dùng demo",
    passwordHash: hashPassword("nexora123"),
    role: "CUSTOMER",
  };
  users.set(demoUser.email, demoUser);
}

function toAuthUser(user: StoredUser): AuthUser {
  return Object.freeze({
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  });
}

function createSessionToken(user: StoredUser): string {
  const expiresAt = Date.now() + SESSION_MAX_AGE * 1000;
  const payload: AuthSession = {
    userId: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    expiresAt,
  };
  const data = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = createHmac("sha256", getAuthSecret()).update(data).digest("base64url");
  return `${data}.${signature}`;
}

export function verifySessionToken(token: string | undefined): AuthSession | null {
  if (!token) return null;
  const [data, signature] = token.split(".");
  if (!data || !signature) return null;

  const expectedSignature = createHmac("sha256", getAuthSecret()).update(data).digest("base64url");
  try {
    if (!timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))) {
      return null;
    }
  } catch {
    return null;
  }

  try {
    const payload = JSON.parse(Buffer.from(data, "base64url").toString()) as AuthSession;
    if (payload.expiresAt < Date.now()) return null;
    return Object.freeze(payload);
  } catch {
    return null;
  }
}

export function register(input: RegisterInput): AuthResult {
  ensureDemoUser();

  if (!input.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
    return { success: false, error: "Email không hợp lệ." };
  }

  if (!input.password || input.password.length < 6) {
    return { success: false, error: "Mật khẩu phải có ít nhất 6 ký tự." };
  }

  if (!input.name.trim()) {
    return { success: false, error: "Vui lòng nhập họ tên." };
  }

  if (users.has(input.email.toLowerCase())) {
    return { success: false, error: "Email đã được đăng ký." };
  }

  const user: StoredUser = {
    id: `user-${randomBytes(8).toString("hex")}`,
    email: input.email.toLowerCase(),
    name: input.name,
    passwordHash: hashPassword(input.password),
    role: "CUSTOMER",
  };
  users.set(user.email, user);

  return {
    success: true,
    sessionToken: createSessionToken(user),
    user: toAuthUser(user),
  };
}

export function login(input: LoginInput): AuthResult {
  ensureDemoUser();

  if (!input.email || !input.password) {
    return { success: false, error: "Vui lòng nhập email và mật khẩu." };
  }

  const user = users.get(input.email.toLowerCase());
  if (!user) {
    return { success: false, error: "Email hoặc mật khẩu không đúng." };
  }

  if (!verifyPassword(input.password, user.passwordHash)) {
    return { success: false, error: "Email hoặc mật khẩu không đúng." };
  }

  return {
    success: true,
    sessionToken: createSessionToken(user),
    user: toAuthUser(user),
  };
}

export function getUserFromSession(token: string | undefined): AuthUser | null {
  const session = verifySessionToken(token);
  if (!session) return null;
  return Object.freeze({
    id: session.userId,
    email: session.email,
    name: session.name,
    role: session.role,
  });
}
