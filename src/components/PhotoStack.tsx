import { useEffect, useMemo, useRef, useState } from "react";
import { cx } from "../lib/utils";

export type PhotoStackItem = {
  src: string;
  objectPosition?: string; // e.g. "62% 45%"
  zoom?: number; // e.g. 1.08
};

type PhotoStackProps = {
  photos: Array<string | PhotoStackItem>;
  className?: string;
  altPrefix?: string;
};

function rotateIndex<T>(arr: T[], direction: "next" | "prev") {
  if (arr.length <= 1) return arr;
  if (direction === "next") return [...arr.slice(1), arr[0]!];
  return [arr[arr.length - 1]!, ...arr.slice(0, -1)];
}

export default function PhotoStack({ photos, className, altPrefix = "Photo" }: PhotoStackProps) {
  const initial = useMemo(
    () =>
      photos
        .filter(Boolean)
        .slice(0, 8)
        .map((p) => (typeof p === "string" ? ({ src: p } satisfies PhotoStackItem) : p)),
    [photos],
  );
  const [order, setOrder] = useState(() => initial.map((_, i) => i));
  const [liftId, setLiftId] = useState<number | null>(null);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    return () => {
      timers.current.forEach((t) => window.clearTimeout(t));
      timers.current = [];
    };
  }, []);

  const animateSwap = (direction: "next" | "prev") => {
    if (order.length <= 1) return;
    const topIdx = order[0] ?? null;
    if (topIdx == null) return;

    setLiftId(topIdx);
    timers.current.push(
      window.setTimeout(() => {
        setOrder((prev) => rotateIndex(prev, direction));
        timers.current.push(window.setTimeout(() => setLiftId(null), 420));
      }, 90),
    );
  };

  const safe = (i: number) => initial[i];

  return (
    <div className={cx("photo-stack", className)}>
      <div className="photo-stack__stage">
        {order
          .slice(0, 3)
          .map((idx, stackPos) => {
            const item = safe(idx);
            const src = item?.src ?? "";
            const isTop = stackPos === 0;
            const isLift = liftId === idx && isTop;
            return (
              <button
                key={`${idx}-${src}`}
                type="button"
                className={cx("photo-stack__card", isTop && "photo-stack__card--top")}
                style={{
                  ["--i" as never]: `${stackPos}`,
                  ["--lift" as never]: isLift ? "-14px" : "0px",
                  ["--rot" as never]: isLift ? "2deg" : "0deg",
                  ["--stack-scale" as never]: isLift ? "1.03" : "1",
                }}
                onClick={() => animateSwap("next")}
                aria-label={isTop ? "Next photo" : undefined}
              >
                <img
                  src={src}
                  alt={`${altPrefix} ${idx + 1}`}
                  className="photo-stack__img"
                  loading={stackPos === 0 ? "eager" : "lazy"}
                  style={{
                    objectPosition: item?.objectPosition,
                    transform: `scale(${item?.zoom ?? 1})`,
                  }}
                />
              </button>
            );
          })
          .reverse()}
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="text-xs text-white/55">Click photo to send it to back.</div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
            onClick={() => animateSwap("prev")}
          >
            Prev
          </button>
          <button
            type="button"
            className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-ink-950 transition hover:bg-white/90"
            onClick={() => animateSwap("next")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

