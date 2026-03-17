import type { ReactNode } from "react";
import { cx } from "../lib/utils";

export default function GlassCard({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur",
        className,
      )}
    >
      {children}
    </div>
  );
}

