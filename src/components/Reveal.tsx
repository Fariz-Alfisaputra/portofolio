import { useEffect, useRef, useState } from "react";
import { cx } from "../lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
  y?: number; // px
};

export default function Reveal({ children, className, delay = 0, y = 14 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cx("reveal", inView && "reveal--in", className)}
      style={{
        ["--reveal-delay" as never]: `${delay}ms`,
        ["--reveal-y" as never]: `${y}px`,
      }}
    >
      {children}
    </div>
  );
}

