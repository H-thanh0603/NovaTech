import { describe, expect, it } from "vitest";

import { sanitizeEmail, sanitizeNote, sanitizePhone, sanitizeText } from "@/lib/sanitize";

describe("sanitize", () => {
  it("strips HTML tags from text", () => {
    expect(sanitizeText("<script>alert(1)</script>hello")).toBe("alert(1)hello");
    expect(sanitizeText("<b>bold</b>text")).toBe("boldtext");
  });

  it("truncates long input", () => {
    const long = "a".repeat(600);
    expect(sanitizeText(long).length).toBe(500);
  });

  it("trims whitespace", () => {
    expect(sanitizeText("  hello  ")).toBe("hello");
  });

  it("sanitizes email — lowercases and trims", () => {
    expect(sanitizeEmail("  TEST@Example.COM  ")).toBe("test@example.com");
  });

  it("limits email length", () => {
    const long = "a".repeat(300) + "@test.com";
    expect(sanitizeEmail(long).length).toBe(254);
  });

  it("sanitizes phone — removes non-numeric chars except +, -, space", () => {
    expect(sanitizePhone("09<script>x</script>23-456 789")).toBe("0923-456 789");
  });

  it("limits phone length", () => {
    expect(sanitizePhone("1".repeat(30)).length).toBe(20);
  });

  it("sanitizes note with larger max length", () => {
    const long = "a".repeat(3000);
    expect(sanitizeNote(long).length).toBe(2000);
  });
});
