import { useMemo, useState } from "react";
import type { PlaylistTrack } from "../lib/data";
import GlassCard from "./GlassCard";
import { cx } from "../lib/utils";

function formatNowPlaying(track: PlaylistTrack) {
  return `${track.artist} — ${track.title}`;
}

export default function PlaylistCard({ tracks }: { tracks: PlaylistTrack[] }) {
  const [idx, setIdx] = useState(0);
  const current = tracks[idx] ?? tracks[0];

  const progress = useMemo(() => {
    // Fake progress for prototype
    const base = 0.38 + (idx % 3) * 0.12;
    return Math.min(0.92, Math.max(0.08, base));
  }, [idx]);

  return (
    <GlassCard className="p-5">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs font-semibold tracking-[0.25em] text-white/60">CHILL PLAYLIST</div>
          <div className="mt-2 text-sm font-semibold">{current ? current.title : "—"}</div>
          <div className="text-sm text-white/65">{current ? current.artist : ""}</div>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            className="grid size-10 place-items-center rounded-2xl bg-white/10 text-white/80 transition hover:bg-white/15 hover:text-white"
            onClick={() => setIdx((v) => (v - 1 + tracks.length) % tracks.length)}
            aria-label="Previous track"
          >
            ‹
          </button>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-2xl bg-white text-ink-950 transition hover:bg-white/90"
            onClick={() => setIdx((v) => (v + 1) % tracks.length)}
            aria-label="Next track"
          >
            ▷
          </button>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-white/55">
          <span className="truncate">{current ? formatNowPlaying(current) : ""}</span>
          <span className="tabular-nums">{current ? current.duration : ""}</span>
        </div>
        <div className="mt-2 h-2 rounded-full bg-white/10">
          <div className="h-2 rounded-full bg-white/70" style={{ width: `${progress * 100}%` }} />
        </div>
      </div>

      <div className="mt-4 grid gap-2">
        {tracks.slice(0, 4).map((t, i) => {
          const active = t === current;
          return (
            <button
              key={`${t.artist}-${t.title}`}
              type="button"
              className={cx(
                "flex items-center justify-between rounded-2xl px-3 py-2 text-left transition",
                active ? "bg-white/10" : "hover:bg-white/5",
              )}
              onClick={() => setIdx(i)}
            >
              <div className="min-w-0">
                <div className={cx("truncate text-sm", active ? "text-white" : "text-white/80")}>
                  {t.title}
                </div>
                <div className="truncate text-xs text-white/55">{t.artist}</div>
              </div>
              <div className="ml-3 text-xs tabular-nums text-white/55">{t.duration}</div>
            </button>
          );
        })}
      </div>
    </GlassCard>
  );
}

