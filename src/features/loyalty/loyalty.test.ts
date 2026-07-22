import { describe, expect, it } from "vitest";

import { getTierFromSpent, getNextTier, loyaltyTiers } from "@/features/loyalty/loyalty.data";

describe("loyalty", () => {
  it("returns silver for spending under 20M", () => {
    expect(getTierFromSpent(0)).toBe("silver");
    expect(getTierFromSpent(19_999_999)).toBe("silver");
  });

  it("returns gold for spending 20M-50M", () => {
    expect(getTierFromSpent(20_000_000)).toBe("gold");
    expect(getTierFromSpent(49_999_999)).toBe("gold");
  });

  it("returns platinum for spending 50M+", () => {
    expect(getTierFromSpent(50_000_000)).toBe("platinum");
    expect(getTierFromSpent(100_000_000)).toBe("platinum");
  });

  it("returns next tier for silver and gold", () => {
    expect(getNextTier("silver")?.label).toBe("Gold");
    expect(getNextTier("gold")?.label).toBe("Platinum");
  });

  it("returns null for platinum (highest tier)", () => {
    expect(getNextTier("platinum")).toBeNull();
  });

  it("has 3 tiers with increasing minSpent", () => {
    expect(loyaltyTiers).toHaveLength(3);
    expect(loyaltyTiers[0].minSpent).toBeLessThan(loyaltyTiers[1].minSpent);
    expect(loyaltyTiers[1].minSpent).toBeLessThan(loyaltyTiers[2].minSpent);
  });
});
