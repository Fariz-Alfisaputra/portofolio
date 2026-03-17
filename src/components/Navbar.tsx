import { useEffect, useMemo, useState } from "react";
import { nav } from "../lib/data";
import Container from "./Container";
import { cx } from "../lib/utils";

function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0.1, 0.2, 0.35, 0.5, 0.75] },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sectionIds]);

  return active;
}

export default function Navbar() {
  const sectionIds = useMemo(() => nav.map((n) => n.id), []);
  const active = useActiveSection(sectionIds);

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/70 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="relative size-9 overflow-hidden rounded-xl border border-white/10 bg-white/10">
            <img
              src="/photos/pp-fariz.jpg"
              alt="Muhammad Fariz Alfisaputra"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </span>
          <div className="leading-tight">
            <div className="text-sm font-semibold">Muhammad Fariz</div>
            <div className="text-xs text-white/60">Software Engineer</div>
          </div>
        </a>

        <nav className="nav-cursor-zone hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={cx(
                  "nav-target rounded-full px-3 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white",
                  isActive && "bg-white/10 text-white",
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:block" />
      </Container>
    </div>
  );
}

