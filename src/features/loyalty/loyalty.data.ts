export type LoyaltyTier = "silver" | "gold" | "platinum";

export type LoyaltyAccount = Readonly<{
  points: number;
  tier: LoyaltyTier;
  totalSpent: number;
  joinedAt: string;
}>;

export const loyaltyTiers: readonly { id: LoyaltyTier; label: string; minSpent: number; perk: string }[] = [
  { id: "silver", label: "Silver", minSpent: 0, perk: "Tích điểm 1%" },
  { id: "gold", label: "Gold", minSpent: 20_000_000, perk: "Tích điểm 2% + freeship" },
  { id: "platinum", label: "Platinum", minSpent: 50_000_000, perk: "Tích điểm 3% + ưu tiên hỗ trợ" },
];

export function getTierFromSpent(totalSpent: number): LoyaltyTier {
  if (totalSpent >= 50_000_000) return "platinum";
  if (totalSpent >= 20_000_000) return "gold";
  return "silver";
}

export function getNextTier(tier: LoyaltyTier): { label: string; minSpent: number } | null {
  const idx = loyaltyTiers.findIndex((t) => t.id === tier);
  if (idx < 0 || idx >= loyaltyTiers.length - 1) return null;
  return { label: loyaltyTiers[idx + 1].label, minSpent: loyaltyTiers[idx + 1].minSpent };
}

export const demoLoyaltyAccount: LoyaltyAccount = {
  points: 245_000,
  tier: "gold",
  totalSpent: 28_500_000,
  joinedAt: "2025-11-15",
};
