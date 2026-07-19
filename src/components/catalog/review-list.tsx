import { Star } from "lucide-react";

import type { CatalogReview } from "@/features/catalog/catalog.types";
import { formatReviewDate } from "@/features/catalog/catalog.service";

type ReviewListProps = Readonly<{
  reviews: readonly CatalogReview[];
}>;

export function ReviewList({ reviews }: ReviewListProps) {
  if (reviews.length === 0) {
    return (
      <p className="text-sm text-slate-500">
        Chưa có đánh giá. Hãy là người đầu tiên chia sẻ trải nghiệm của bạn.
      </p>
    );
  }

  const sorted = [...reviews].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  return (
    <ul className="flex flex-col gap-6">
      {sorted.map((review) => (
        <li key={review.id} className="rounded-card border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex" aria-label={`Đánh giá ${review.rating} trên 5 sao`}>
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`size-4 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-slate-300"}`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-sm font-bold text-midnight">{review.authorName}</p>
              {review.verified ? (
                <span className="rounded-full bg-teal-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-teal-tech">
                  Đã mua
                </span>
              ) : null}
            </div>
            <time className="text-xs text-slate-400" dateTime={review.createdAt}>
              {formatReviewDate(review.createdAt)}
            </time>
          </div>
          {review.title ? <h4 className="mt-3 font-display text-base font-bold text-midnight">{review.title}</h4> : null}
          <p className="mt-2 text-sm leading-6 text-slate-600">{review.content}</p>
        </li>
      ))}
    </ul>
  );
}
