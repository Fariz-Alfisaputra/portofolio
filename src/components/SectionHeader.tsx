import { cx } from "../lib/utils";

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cx("mb-6", className)}>
      {eyebrow ? (
        <div className="text-xs font-semibold tracking-[0.25em] text-white/60">{eyebrow}</div>
      ) : null}
      <div className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</div>
      {subtitle ? <div className="mt-2 max-w-2xl text-white/70">{subtitle}</div> : null}
    </div>
  );
}

