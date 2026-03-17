import type { ReactNode } from "react";
import { cx } from "../lib/utils";

export default function Container({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("mx-auto w-full max-w-6xl px-4 sm:px-6", className)}>{children}</div>
  );
}

