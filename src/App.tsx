import { useMemo, useState } from "react";
import Accent from "./components/Accent";
import Container from "./components/Container";
import GlassCard from "./components/GlassCard";
import Navbar from "./components/Navbar";
import PlaylistCard from "./components/PlaylistCard";
import SectionHeader from "./components/SectionHeader";
import { funFacts, nav, playlist, projects, seedComments, technologies, thingsIDo } from "./lib/data";
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

  const totalProjects = useMemo(() => projects.length, []);

  return (
    <div id="top" className="min-h-screen bg-hero">
      <Navbar />

      {/* Hero */}
      <div className="border-b border-white/10">
        <Container className="py-12 sm:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                <span className="inline-flex size-2 rounded-full bg-emerald-400" />
                Available for freelance
              </div>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Hi, I'm <span className="text-white">Muhammad Fariz Alfisaputra.</span>
              </h1>
              <p className="mt-4 max-w-2xl text-white/70">
                Greetings! I'm a passionate and detail-oriented Software Engineer based in Indonesia.
                Prototype ini meniru layout website referensi: hero, playlist, skill, project, fun fact,
                komentar, dan contact.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#resume"
                  className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-white/90"
                >
                  Download CV
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact
                </a>
                <div className="text-xs text-white/55">Scroll untuk lihat section lainnya.</div>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <GlassCard className="relative overflow-hidden">
                  <Accent tone="violet" />
                  <div className="relative">
                    <div className="text-xs font-semibold tracking-[0.25em] text-white/60">PROFILE</div>
                    <div className="mt-2 text-lg font-semibold">Software Engineer</div>
                    <div className="mt-1 text-white/70">Syiah Kuala University (prototype)</div>
                  </div>
                </GlassCard>

                <GlassCard className="relative overflow-hidden">
                  <Accent tone="pink" />
                  <div className="relative">
                    <div className="text-xs font-semibold tracking-[0.25em] text-white/60">HIGHLIGHT</div>
                    <div className="mt-2 text-lg font-semibold">Fast, clean UI</div>
                    <div className="mt-1 text-white/70">Tailwind + responsive grid.</div>
                  </div>
                </GlassCard>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid gap-6">
                <Avatar />
                <PlaylistCard tracks={playlist} />
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
              <SectionHeader eyebrow="ABOUT" title="About Me" subtitle="Ringkas, jelas, dan mudah dibaca." />
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
                    ["Focus", "Web + IoT + RAG"],
                    ["Email", "hello@example.com"]
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs text-white/55">{k}</div>
                      <div className="mt-1 text-sm font-semibold">{v}</div>
                    </div>
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
              <SectionHeader eyebrow="WORK" title="Things I've done" subtitle="Projects & highlights." />
              <div className="grid gap-4">
                {projects.map((p) => (
                  <GlassCard key={p.title} className="relative overflow-hidden">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="text-xl font-semibold">{p.title}</div>
                        <div className="mt-2 text-sm text-white/70">{p.description}</div>
                      </div>
                      <div className="flex flex-wrap gap-2 sm:justify-end">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
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
                      <div className="text-white/55">Projects</div>
                      <div className="mt-1 text-lg font-semibold tabular-nums">{totalProjects}</div>
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
                eyebrow="ALL COMMENT"
                title="All Comment"
                subtitle="Prototype list + form sederhana (tanpa backend)."
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
              <SectionHeader eyebrow="LEAVE A COMMENT" title="Write something" subtitle="Disimpan ke state lokal." />
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
                      placeholder="Write a comment..."
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
                  {[
                    ["Email", "hello@example.com"],
                    ["WhatsApp", "+62 812-0000-0000"],
                    ["LinkedIn", "linkedin.com/in/username"],
                    ["GitHub", "github.com/username"]
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="text-sm text-white/65">{k}</div>
                      <div className="truncate text-sm font-semibold">{v}</div>
                    </div>
                  ))}
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
  );
}

