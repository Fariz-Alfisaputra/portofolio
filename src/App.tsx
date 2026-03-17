import { useMemo, useState } from "react";
import Accent from "./components/Accent";
import Container from "./components/Container";
import GlassCard from "./components/GlassCard";
import Galaxy from "./components/Galaxy";
import Navbar from "./components/Navbar";
import PhotoStack from "./components/PhotoStack";
import Reveal from "./components/Reveal";
import SectionHeader from "./components/SectionHeader";
import TargetCursor from "./components/TargetCursor";
import YouTubePlaylistCard from "./components/YouTubePlaylistCard";
import { funFacts, nav, seedComments, technologies, thingsIDo, workExperience } from "./lib/data";
import { cx } from "./lib/utils";
import profileSrc from "./assets/profile-placeholder.svg";

function Avatar() {
  return (
    <div className="avatar-shell mx-auto w-64 sm:w-72">
      <div className="avatar-card aspect-square rounded-[2.5rem]">
        <img
          src={profileSrc}
          alt="Muhammad Fariz Alfisaputra"
          className="avatar-media"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function App() {
  const [comments, setComments] = useState(seedComments);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const totalExperience = useMemo(() => workExperience.filter((e) => e.title !== "—").length, []);

  return (
    <div id="top" className="min-h-screen">
      {/* Galaxy background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <Galaxy
          className="absolute inset-0"
          transparent
          density={1}
          hueShift={210}
          glowIntensity={0.35}
          twinkleIntensity={0.35}
          rotationSpeed={0.05}
          starSpeed={0.6}
          mouseInteraction
          mouseRepulsion
          repulsionStrength={1.6}
        />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_10%,rgba(99,102,241,0.22),transparent_55%),radial-gradient(900px_500px_at_80%_20%,rgba(236,72,153,0.16),transparent_55%),linear-gradient(to_bottom,rgba(5,7,12,0.55),rgba(5,7,12,0.92))]" />
      </div>

      <div className="relative z-10 bg-hero">
        <TargetCursor
          targetSelector=".nav-target"
          hideDefaultCursor={false}
          // make rotation effectively unnoticeable
          spinDuration={999999}
          parallaxOn={false}
          hoverDuration={0.18}
        />
        <Navbar />

      {/* Hero */}
      <div className="border-b border-white/10">
        <Container className="py-12 sm:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                  <span className="inline-flex size-2 rounded-full bg-emerald-400" />
                  Available for freelance
                </div>
              </Reveal>

              <Reveal delay={80} y={18}>
                <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                  Hi, I'm <span className="text-white">Muhammad Fariz Alfisaputra.</span>
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-4 max-w-2xl text-white/70">
                  Greetings! I'm a passionate and detail-oriented Software Engineer based in Indonesia.
                </p>
              </Reveal>

              <Reveal delay={210}>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    disabled
                    className="cursor-not-allowed rounded-full bg-white/60 px-5 py-2.5 text-sm font-semibold text-ink-950/80"
                    title="CV belum tersedia"
                  >
                    CV (soon)
                  </button>
                  <a
                    href="#contact"
                    className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Contact
                  </a>
                  <div className="text-xs text-white/55">Scroll untuk lihat section lainnya.</div>
                </div>
              </Reveal>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <Reveal delay={260}>
                  <GlassCard className="relative overflow-hidden">
                    <Accent tone="violet" />
                    <div className="relative">
                      <div className="text-xs font-semibold tracking-[0.25em] text-white/60">PROFILE</div>
                      <div className="mt-2 text-lg font-semibold">Software Engineer</div>
                      <div className="mt-1 text-white/70">Syiah Kuala University</div>
                    </div>
                  </GlassCard>
                </Reveal>

                <Reveal delay={320}>
                  <GlassCard className="relative overflow-hidden">
                    <Accent tone="pink" />
                    <div className="relative">
                      <div className="text-xs font-semibold tracking-[0.25em] text-white/60">HIGHLIGHT</div>
                      <div className="mt-2 text-lg font-semibold">Fast, clean UI</div>
                      <div className="mt-1 text-white/70">Tailwind + responsive grid.</div>
                    </div>
                  </GlassCard>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid gap-6">
                <Reveal delay={120} y={22}>
                  <PhotoStack
                    photos={[
                      { src: "/photos/fariz-1.jpg", zoom: 1.08, objectPosition: "62% 45%" },
                      "/photos/fariz-2.JPG",
                      "/photos/fariz-3.JPG",
                    ]}
                    altPrefix="Muhammad Fariz Alfisaputra"
                  />
                </Reveal>
                <Reveal delay={220}>
                  <YouTubePlaylistCard
                    title="Late Night Coding"
                    playlistId="PLDOukSJ4bvWmV5Y5P5MA01zYoCiTlJ4K9"
                    openUrl="https://music.youtube.com/playlist?list=PLDOukSJ4bvWmV5Y5P5MA01zYoCiTlJ4K9"
                  />
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* About */}
      <section id="about" className="scroll-mt-24">
        <Container className="py-14">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Reveal>
                <SectionHeader eyebrow="ABOUT" title="About Me" subtitle="Ringkas, jelas, dan mudah dibaca." />
              </Reveal>
              <GlassCard>
                <p className="text-white/70">
                  Ini prototype portofolio dengan vibe gelap, card glass, dan section yang mirip seperti
                  layout referensi. Kontennya bisa kamu ganti sesuai data asli (nama, kampus, CV link,
                  foto, project, dll).
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    ["Location", "Indonesia"],
                    ["Role", "Software Engineer"],
                      ["Focus", "Web + Video + RAG"],
                      ["Email", "mfarizalfisaputra@gmail.com"],
                    ].map(([k, v], i) => (
                      <Reveal key={k} delay={180 + i * 60} className="contents">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                          <div className="text-xs text-white/55">{k}</div>
                          <div className="mt-1 text-sm font-semibold">{v}</div>
                        </div>
                      </Reveal>
                    ))}
                </div>
              </GlassCard>
            </div>

            <div className="lg:col-span-6">
              <SectionHeader
                eyebrow="THINGS I DO"
                title="Things I do"
                subtitle="Card sederhana, accent gradient, dan copy pendek."
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {thingsIDo.map((item) => (
                  <GlassCard key={item.title} className="relative overflow-hidden">
                    <Accent tone={item.accent} />
                    <div className="relative">
                      <div className="text-lg font-semibold">{item.title}</div>
                      <div className="mt-2 text-sm text-white/70">{item.description}</div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Resume / Projects / Tech */}
      <section id="resume" className="scroll-mt-24 border-t border-white/10">
        <Container className="py-14">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeader eyebrow="WORK" title="Work Experience" subtitle="Organisasi & kontribusi." />
              <div className="grid gap-4">
                {workExperience.map((e, i) => (
                  <GlassCard key={`${e.title}-${i}`} className="relative overflow-hidden">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="text-xl font-semibold">{e.title}</div>
                        <div className="mt-1 text-sm text-white/65">
                          {e.org}
                          {e.year ? <span className="text-white/45"> · {e.year}</span> : null}
                        </div>
                        {e.description ? <div className="mt-2 text-sm text-white/70">{e.description}</div> : null}
                      </div>
                      {e.tags.length ? (
                        <div className="flex flex-wrap gap-2 sm:justify-end">
                          {e.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                          >
                            {t}
                          </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <SectionHeader eyebrow="STACK" title="Technologies" subtitle="Tools yang sering dipakai." />
              <GlassCard>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((t) => (
                    <span
                      key={t.name}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/75"
                    >
                      {t.name}
                    </span>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs font-semibold tracking-[0.25em] text-white/60">SUMMARY</div>
                  <div className="mt-2 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-xl bg-white/5 p-3">
                      <div className="text-white/55">Experience</div>
                      <div className="mt-1 text-lg font-semibold tabular-nums">{totalExperience}</div>
                    </div>
                    <div className="rounded-xl bg-white/5 p-3">
                      <div className="text-white/55">Sections</div>
                      <div className="mt-1 text-lg font-semibold tabular-nums">{nav.length}</div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </Container>
      </section>

      {/* Fun Fact */}
      <section className="border-t border-white/10">
        <Container className="py-14">
          <SectionHeader eyebrow="FUN FACT" title="Fun Fact" subtitle="Angka-angka ringkas seperti referensi." />
          <div className="grid gap-4 sm:grid-cols-3">
            {funFacts.map((f, i) => (
              <GlassCard key={f.label} className="relative overflow-hidden">
                <Accent tone={i % 3 === 0 ? "violet" : i % 3 === 1 ? "pink" : "emerald"} />
                <div className="relative">
                  <div className="text-4xl font-semibold tabular-nums">{f.value}</div>
                  <div className="mt-2 text-sm text-white/65">{f.label}</div>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Comments */}
      <section id="comments" className="scroll-mt-24 border-t border-white/10">
        <Container className="py-14">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <SectionHeader
                eyebrow="GUESTBOOK"
                title="Guestbook"
                subtitle="Tinggalkan pesan singkat—akan langsung muncul di list (prototype, tanpa backend)."
              />
              <div className="grid gap-3">
                {comments.map((c, idx) => (
                  <GlassCard key={`${c.name}-${idx}`} className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="truncate text-sm font-semibold">{c.name}</div>
                        <div className="mt-2 text-sm text-white/70">{c.message}</div>
                      </div>
                      <div className="text-xs tabular-nums text-white/50">{c.date}</div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <SectionHeader
                eyebrow="SIGN"
                title="Write something"
                subtitle="Isi form ini, lalu pesannya otomatis masuk ke guestbook."
              />
              <GlassCard>
                <form
                  className="grid gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const trimmedName = name.trim();
                    const trimmedMsg = message.trim();
                    if (!trimmedName || !trimmedMsg) return;
                    setComments((prev) => [
                      { name: trimmedName, message: trimmedMsg, date: new Date().toISOString().slice(0, 10) },
                      ...prev
                    ]);
                    setName("");
                    setMessage("");
                  }}
                >
                  <div className="grid gap-1.5">
                    <label className="text-sm text-white/70" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      className="w-full rounded-2xl border-white/10 bg-white/5 text-white placeholder:text-white/40"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <label className="text-sm text-white/70" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="min-h-32 w-full resize-none rounded-2xl border-white/10 bg-white/5 text-white placeholder:text-white/40"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write a message..."
                    />
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="text-xs text-white/50">
                      Prototype only. Kalau mau real, nanti sambung ke API + DB.
                    </div>
                    <button
                      type="submit"
                      className={cx(
                        "rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-white/90",
                        (!name.trim() || !message.trim()) && "opacity-60",
                      )}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </GlassCard>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 border-t border-white/10">
        <Container className="py-14">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <SectionHeader
                eyebrow="CONTACT"
                title="Contact"
                subtitle="CTA sederhana mirip referensi. Kamu bisa ganti dengan email/WA/LinkedIn."
              />
              <GlassCard>
                <div className="grid gap-3">
                  {(() => {
                    const email = "mfarizalfisaputra@gmail.com";
                    const waNumberIntl = "6283194565515";
                    const waText = encodeURIComponent("Keren porto nya, boleh tanya?");
                    const items = [
                      {
                        key: "Email",
                        display: email,
                        href: `mailto:${email}?subject=${encodeURIComponent("Halo Fariz")}&body=${encodeURIComponent(
                          "Keren porto nya, boleh tanya?",
                        )}`,
                      },
                      {
                        key: "WhatsApp",
                        display: "+62 831-9456-5515",
                        href: `https://wa.me/${waNumberIntl}?text=${waText}`,
                      },
                      {
                        key: "LinkedIn",
                        display: "linkedin.com/in/username",
                        href: "https://linkedin.com/in/username",
                      },
                      {
                        key: "GitHub",
                        display: "github.com/Fariz-Alfisaputra",
                        href: "https://github.com/Fariz-Alfisaputra",
                      },
                    ] as const;

                    return items.map((it) => (
                      <a
                        key={it.key}
                        href={it.href}
                        target={it.href.startsWith("http") ? "_blank" : undefined}
                        rel={it.href.startsWith("http") ? "noreferrer" : undefined}
                        className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                      >
                        <div className="text-sm text-white/65">{it.key}</div>
                        <div className="truncate text-sm font-semibold">{it.display}</div>
                      </a>
                    ));
                  })()}
                </div>
              </GlassCard>
            </div>

            <div className="lg:col-span-6">
              <SectionHeader eyebrow="NAV" title="Quick links" subtitle="Biar gampang loncat section." />
              <GlassCard>
                <div className="grid gap-2">
                  {nav.map((n) => (
                    <a
                      key={n.id}
                      href={n.href}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                    >
                      <span>{n.label}</span>
                      <span className="text-white/45">↗</span>
                    </a>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8 text-sm text-white/55">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>© {new Date().getFullYear()} Porto Proto.</div>
              <div className="text-white/45">Made with React + Tailwind (prototype).</div>
            </div>
          </div>
        </Container>
      </section>
      </div>
    </div>
  );
}

