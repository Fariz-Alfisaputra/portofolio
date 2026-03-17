import ElectricBorder from "./ElectricBorder";
import GlassCard from "./GlassCard";

export default function YouTubePlaylistCard({
  title = "Playlist",
  playlistId,
  openUrl,
}: {
  title?: string;
  playlistId: string;
  openUrl: string;
}) {
  const src = `https://www.youtube.com/embed/videoseries?list=${encodeURIComponent(playlistId)}`;

  return (
    <ElectricBorder
      color="rgba(255,255,255,0.65)"
      speed={0.9}
      chaos={0.09}
      borderRadius={24}
      className="rounded-3xl"
    >
      <GlassCard className="border-transparent p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold tracking-[0.25em] text-white/60">MUSIC</div>
            <div className="mt-2 text-sm font-semibold">{title}</div>
            <a
              href={openUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-block text-sm text-white/65 underline decoration-white/20 underline-offset-4 hover:text-white"
            >
              Open playlist
            </a>
          </div>
        </div>

        <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-black">
          <div className="relative aspect-video w-full">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={src}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </GlassCard>
    </ElectricBorder>
  );
}

