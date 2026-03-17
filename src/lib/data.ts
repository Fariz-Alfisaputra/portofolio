export type NavItem = { id: string; label: string; href: string };
export type PlaylistTrack = { title: string; artist: string; duration: string };
export type SkillCard = { title: string; description: string; accent: "violet" | "pink" | "emerald" };
export type Project = { title: string; description: string; tags: string[] };
export type Tech = { name: string; level?: string };
export type FunFact = { label: string; value: string };
export type Comment = { name: string; message: string; date: string };

export const nav: NavItem[] = [
  { id: "about", label: "About Me", href: "#about" },
  { id: "resume", label: "Resume", href: "#resume" },
  { id: "comments", label: "All Comment", href: "#comments" },
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
    title: "Internet of Things",
    description:
      "Membangun solusi IoT yang menghubungkan device + dashboard untuk operasi yang lebih cerdas.",
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
  { label: "Happy Client", value: "16" },
  { label: "Working Hour", value: "1500+" },
  { label: "Professional Experience", value: "1+ years" }
];

export const seedComments: Comment[] = [
  { name: "Nadya", message: "Portonya clean dan modern. Sukses terus!", date: "2026-02-12" },
  { name: "Raka", message: "Section projectnya rapi banget, gampang dibaca.", date: "2026-01-28" },
  { name: "Dina", message: "Hero section + playlist detail kecil tapi keren.", date: "2025-12-09" }
];

