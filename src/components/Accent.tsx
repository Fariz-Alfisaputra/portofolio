import { cx } from "../lib/utils";

const map = {
  violet: "from-violet-500/20 via-violet-500/10 to-transparent",
  pink: "from-pink-500/20 via-pink-500/10 to-transparent",
  emerald: "from-emerald-500/20 via-emerald-500/10 to-transparent"
} as const;

export default function Accent({ tone, className }: { tone: keyof typeof map; className?: string }) {
  return (
    <div
      className={cx(
        "pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br opacity-100",
        map[tone],
        className,
      )}
    />
  );
}

