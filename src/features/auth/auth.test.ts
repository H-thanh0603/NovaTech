import { describe, expect, it } from "vitest";

import {
  getUserFromSession,
  login,
  register,
  verifySessionToken,
} from "@/features/auth/auth.service";

describe("auth service", () => {
  it("registers a new user", () => {
    const result = register({
      email: "test-new@example.com",
      password: "password123",
      name: "Test User",
    });

    expect(result.success).toBe(true);
    expect(result.sessionToken).toBeTruthy();
    expect(result.user?.email).toBe("test-new@example.com");
  });

  it("rejects duplicate email", () => {
    register({ email: "dup@example.com", password: "password123", name: "Dup" });
    const result = register({ email: "dup@example.com", password: "password123", name: "Dup 2" });

    expect(result.success).toBe(false);
    expect(result.error).toContain("đã được đăng ký");
  });

  it("rejects invalid email", () => {
    const result = register({ email: "not-an-email", password: "password123", name: "Test" });
    expect(result.success).toBe(false);
  });

  it("rejects short password", () => {
    const result = register({ email: "short@example.com", password: "123", name: "Test" });
    expect(result.success).toBe(false);
    expect(result.error).toContain("6 ký tự");
  });

  it("rejects empty name", () => {
    const result = register({ email: "noname@example.com", password: "password123", name: "  " });
    expect(result.success).toBe(false);
  });

  it("logs in with correct credentials", () => {
    register({ email: "login@example.com", password: "mypassword", name: "Login User" });
    const result = login({ email: "login@example.com", password: "mypassword" });

    expect(result.success).toBe(true);
    expect(result.sessionToken).toBeTruthy();
    expect(result.user?.name).toBe("Login User");
  });

  it("rejects wrong password", () => {
    register({ email: "wrongpw@example.com", password: "correct", name: "User" });
    const result = login({ email: "wrongpw@example.com", password: "incorrect" });

    expect(result.success).toBe(false);
    expect(result.error).toContain("không đúng");
  });

  it("rejects unknown email", () => {
    const result = login({ email: "nobody@example.com", password: "whatever" });

    expect(result.success).toBe(false);
  });

  it("logs in with demo account", () => {
    const result = login({ email: "demo@nexora.vn", password: "nexora123" });
    expect(result.success).toBe(true);
    expect(result.user?.email).toBe("demo@nexora.vn");
  });
});

describe("session tokens", () => {
  it("verifies a valid session token", () => {
    const result = register({ email: "session@example.com", password: "password123", name: "Session" });
    const token = result.sessionToken!;

    const session = verifySessionToken(token);
    expect(session).not.toBeNull();
    expect(session?.email).toBe("session@example.com");
  });

  it("rejects a tampered token", () => {
    const result = register({ email: "tamper@example.com", password: "password123", name: "Tamper" });
    const token = result.sessionToken!;

    const tampered = token.slice(0, -4) + "AAAA";
    const session = verifySessionToken(tampered);
    expect(session).toBeNull();
  });

  it("rejects undefined token", () => {
    expect(verifySessionToken(undefined)).toBeNull();
  });

  it("gets user from session", () => {
    const result = register({ email: "getuser@example.com", password: "password123", name: "Get User" });
    const token = result.sessionToken!;

    const user = getUserFromSession(token);
    expect(user).not.toBeNull();
    expect(user?.email).toBe("getuser@example.com");
  });

  it("returns null for invalid session", () => {
    const user = getUserFromSession("invalid-token");
    expect(user).toBeNull();
  });
});
