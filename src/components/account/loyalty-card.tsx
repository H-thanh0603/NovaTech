import { Crown, Sparkles, TrendingUp } from "lucide-react";

import { formatVnd } from "@/features/catalog/catalog.service";
import {
  demoLoyaltyAccount,
  getNextTier,
  loyaltyTiers,
} from "@/features/loyalty/loyalty.data";

export function LoyaltyCard() {
  const account = demoLoyaltyAccount;
  const nextTier = getNextTier(account.tier);
  const currentTierInfo = loyaltyTiers.find((t) => t.id === account.tier);
  const progress = nextTier
    ? Math.min(100, Math.round((account.totalSpent / nextTier.minSpent) * 100))
    : 100;
  const remaining = nextTier ? nextTier.minSpent - account.totalSpent : 0;

  return (
    <div className="rounded-panel border border-slate-200 bg-white p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg font-bold text-midnight">Điểm thưởng</h2>
        <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
          account.tier === "platinum" ? "bg-purple-50 text-purple-600" :
          account.tier === "gold" ? "bg-amber-50 text-amber-600" :
          "bg-slate-100 text-slate-500"
        }`}>
          <Crown className="size-3.5" aria-hidden="true" />
          {currentTierInfo?.label ?? account.tier}
        </span>
      </div>

      <div className="mt-4 flex items-end gap-2">
        <span className="font-display text-3xl font-bold tracking-[-0.03em] text-midnight">
          {account.points.toLocaleString("vi-VN")}
        </span>
        <span className="pb-1 text-sm font-semibold text-slate-400">điểm</span>
      </div>
      <p className="mt-1 text-xs text-slate-500">
        Tương đương {formatVnd(account.points)} giảm giá
      </p>

      {nextTier ? (
        <div className="mt-5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-600">Tiến tới {nextTier.label}</span>
            <span className="text-slate-400">{formatVnd(remaining)} nữa</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-electric transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>
      ) : (
        <p className="mt-5 rounded-lg bg-purple-50 px-3 py-2 text-xs font-semibold text-purple-600">
          Bạn đã ở hạng cao nhất — Platinum!
        </p>
      )}

      <div className="mt-5 border-t border-slate-100 pt-4">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Quyền lợi hạng {currentTierInfo?.label}</p>
        <div className="mt-2 flex items-start gap-2">
          <Sparkles className="mt-0.5 size-4 shrink-0 text-electric" aria-hidden="true" />
          <p className="text-sm text-slate-600">{currentTierInfo?.perk}</p>
        </div>
        <div className="mt-2 flex items-start gap-2">
          <TrendingUp className="mt-0.5 size-4 shrink-0 text-teal-tech" aria-hidden="true" />
          <p className="text-sm text-slate-600">Tổng chi tiêu: {formatVnd(account.totalSpent)}</p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2">
        {loyaltyTiers.map((t) => (
          <div key={t.id} className={`rounded-lg border p-3 text-center ${account.tier === t.id ? "border-electric bg-electric/5" : "border-slate-200"}`}>
            <p className={`text-xs font-bold ${account.tier === t.id ? "text-electric" : "text-slate-400"}`}>{t.label}</p>
            <p className="mt-1 text-[10px] text-slate-400">{formatVnd(t.minSpent)}+</p>
          </div>
        ))}
      </div>
    </div>
  );
}
