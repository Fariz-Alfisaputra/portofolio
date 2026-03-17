export type NavItem = { id: string; label: string; href: string };
export type PlaylistTrack = { title: string; artist: string; duration: string };
export type SkillCard = { title: string; description: string; accent: "violet" | "pink" | "emerald" };
export type Project = { title: string; description: string; tags: string[] };
export type Experience = { title: string; org: string; year: string; description: string; tags: string[] };
export type Tech = { name: string; level?: string };
export type FunFact = { label: string; value: string };
export type Comment = { name: string; message: string; date: string };

export const nav: NavItem[] = [
  { id: "about", label: "About Me", href: "#about" },
  { id: "resume", label: "Resume", href: "#resume" },
  { id: "comments", label: "Guestbook", href: "#comments" },
  { id: "contact", label: "Contact", href: "#contact" }
];

export const playlist: PlaylistTrack[] = [
  { artist: "Aziz Hendra", title: "Somebody's Pleasure", duration: "03:44" },
  { artist: "Yungkai", title: "Blue", duration: "02:58" },
  { artist: "d4vd", title: "Romantic Homicide", duration: "02:28" },
  { artist: "Djo", title: "End Of Beginning", duration: "02:39" },
  { artist: "Mitski", title: "My Love Mine All Mine", duration: "02:17" }
];

export const thingsIDo: SkillCard[] = [
  {
    title: "Website Building",
    description:
      "Siap bantu bikin website yang menarik, cepat, dan reliable — fokus ke UX dan performa.",
    accent: "violet"
  },
  {
    title: "Problem Solving",
    description:
      "Suka ngulik akar masalah dan deliver solusi yang efektif, rapi, dan mudah dipelihara.",
    accent: "pink"
  },
  {
    title: "Video Editing",
    description:
      "Mengedit video untuk konten yang clean dan engaging, pakai After Effects, Adobe Premiere, dan CapCut.",
    accent: "emerald"
  }
];

export const projects: Project[] = [
  {
    title: "Aqualink",
    description:
      "Platform trading water credit berbasis smart contract + integrasi IoT monitoring usage dan payment gateway.",
    tags: ["Smart Contract", "IoT", "Payments"]
  },
  {
    title: "LexBotID",
    description:
      "Chatbot hukum Indonesia dengan RAG architecture, UI modern, dan API backend yang scalable.",
    tags: ["Next.js", "RAG", "TypeScript"]
  },
  {
    title: "Gutech",
    description:
      "Landing page software house dengan animasi halus dan elemen 3D untuk presentasi portofolio.",
    tags: ["React", "Tailwind", "GSAP/Three.js"]
  }
];

export const workExperience: Experience[] = [
  {
    title: "Wakil Ketua Departemen PPM",
    org: "Himpunan Mahasiswa Informatika (HMIF)",
    year: "2026",
    description:
      "Berkontribusi dalam pengembangan & penelitian mahasiswa, termasuk membantu peningkatan skill coding anggota melalui sharing/pendampingan dan kolaborasi program kerja.",
    tags: ["Leadership", "Mentoring", "Student Development"]
  },
  {
    title: "Anggota Kreatif Video",
    org: "INFEST 2025 (HMIF)",
    year: "2025",
    description: "Membuat dan mengedit konten video untuk kebutuhan event, termasuk highlight dan materi publikasi.",
    tags: ["Video Editing", "Event"]
  },
  {
    title: "—",
    org: "—",
    year: "",
    description: "",
    tags: []
  }
];

export const technologies: Tech[] = [
  { name: "TypeScript" },
  { name: "React / Next.js" },
  { name: "Node.js" },
  { name: "Tailwind CSS" },
  { name: "PostgreSQL" },
  { name: "Solidity" },
  { name: "Docker" }
];

export const funFacts: FunFact[] = [
  { label: "Projects Built", value: "5" },
  { label: "Hours (Event/Activity)", value: "1500+" },
  { label: "Years Learning", value: "1+" }
];

export const seedComments: Comment[] = [
  { name: "Nadya", message: "Portonya clean dan modern. Semangat terus, Fariz!", date: "2026-02-12" },
  { name: "Raka", message: "UI-nya enak dilihat, foto stack-nya keren.", date: "2026-01-28" },
  { name: "Dina", message: "Good luck buat HMIF & event-event berikutnya.", date: "2025-12-09" }
];

