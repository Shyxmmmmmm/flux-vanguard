import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { PageTransition } from "../components/PageTransition";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Dev.Folio" },
      { name: "description", content: "Selected works — interactive, performant, and beautiful." },
      { property: "og:title", content: "Projects — Dev.Folio" },
    ],
  }),
  component: Projects,
});

type Project = {
  id: string;
  title: string;
  desc: string;
  long: string;
  tech: string[];
  features: string[];
  challenges: string;
  demo: string;
  repo: string;
  gradient: string;
  emoji: string;
};

const projects: Project[] = [
  {
    id: "nebula",
    title: "Nebula Analytics",
    desc: "Real-time SaaS analytics dashboard with custom 3D data visualizations.",
    long: "An enterprise-grade analytics platform handling 1M+ events/day with live dashboards.",
    tech: ["React", "Three.js", "Node.js", "MongoDB", "WebSocket"],
    features: ["Real-time WebSocket pipeline", "Custom 3D charts", "Multi-tenant auth", "Export to CSV/PDF"],
    challenges: "Optimizing 60fps charts while streaming thousands of events per second.",
    demo: "https://example.com",
    repo: "https://github.com",
    gradient: "from-primary to-secondary",
    emoji: "📊",
  },
  {
    id: "echo",
    title: "Echo Social",
    desc: "A minimalist social network with end-to-end encrypted messaging.",
    long: "A privacy-first social app with stories, DMs, and zero ads — ever.",
    tech: ["Next.js", "TypeScript", "Postgres", "WebRTC", "Tailwind"],
    features: ["E2E encryption", "Stories", "WebRTC calls", "PWA support"],
    challenges: "Implementing reliable E2E messaging with offline-first sync.",
    demo: "https://example.com",
    repo: "https://github.com",
    gradient: "from-secondary to-accent",
    emoji: "💬",
  },
  {
    id: "forge",
    title: "Forge AI Studio",
    desc: "AI-powered creative studio for generating, editing and remixing images.",
    long: "A multi-model creative platform integrating diffusion and LLM APIs.",
    tech: ["React", "Python", "FastAPI", "Redis", "AWS"],
    features: ["Diffusion + ControlNet", "Prompt history", "Team workspaces", "API access"],
    challenges: "Building a queue that scales from zero to hundreds of GPU workers.",
    demo: "https://example.com",
    repo: "https://github.com",
    gradient: "from-accent to-primary",
    emoji: "🎨",
  },
  {
    id: "atlas",
    title: "Atlas Travel Planner",
    desc: "Collaborative trip-planning app with maps, budgets and itineraries.",
    long: "Plan trips with friends in real time. Drag-and-drop itineraries, shared budgets.",
    tech: ["React", "Mapbox", "Express", "MongoDB", "Socket.io"],
    features: ["Live collaboration", "Mapbox routing", "Budget splits", "Offline mode"],
    challenges: "Conflict-free multi-user editing with last-write-wins per field.",
    demo: "https://example.com",
    repo: "https://github.com",
    gradient: "from-primary to-accent",
    emoji: "🗺️",
  },
  {
    id: "pulse",
    title: "Pulse Health",
    desc: "Wearable-integrated wellness tracker with personalized insights.",
    long: "Syncs with Apple Health & Google Fit. Generates weekly AI-driven reports.",
    tech: ["React Native", "Node.js", "GraphQL", "Postgres"],
    features: ["Wearable sync", "AI insights", "Goal tracking", "Push reminders"],
    challenges: "Designing offline-first sync across iOS/Android wearable APIs.",
    demo: "https://example.com",
    repo: "https://github.com",
    gradient: "from-secondary to-primary",
    emoji: "💗",
  },
  {
    id: "quantum",
    title: "Quantum Code Editor",
    desc: "A browser-based collaborative IDE with live preview & AI pair-programmer.",
    long: "Code, preview, and ship — all from the browser. With an AI co-pilot.",
    tech: ["Monaco", "WebContainers", "React", "Express"],
    features: ["Live preview", "AI completion", "Multi-cursor sync", "GitHub deploy"],
    challenges: "Running real Node containers safely inside the browser sandbox.",
    demo: "https://example.com",
    repo: "https://github.com",
    gradient: "from-accent to-secondary",
    emoji: "💻",
  },
];

function Card({ p, onOpen }: { p: Project; onOpen: () => void }) {
  return (
    <motion.div
      layoutId={`card-${p.id}`}
      whileHover={{ y: -10, rotateX: 4, rotateY: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      style={{ transformStyle: "preserve-3d" }}
      onClick={onOpen}
      className="group relative cursor-pointer gradient-border rounded-3xl overflow-hidden glass-strong hover:shadow-[0_30px_80px_-20px_rgba(99,102,241,0.7)] transition-shadow"
    >
      <motion.div layoutId={`image-${p.id}`} className={`relative aspect-[16/10] bg-gradient-to-br ${p.gradient} overflow-hidden`}>
        <div className="absolute inset-0 grid place-items-center text-7xl transition-transform duration-700 group-hover:scale-110">
          {p.emoji}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </motion.div>
      <div className="p-6 space-y-3">
        <motion.h3 layoutId={`title-${p.id}`} className="text-xl font-bold">{p.title}</motion.h3>
        <p className="text-sm text-subtext line-clamp-2">{p.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {p.tech.slice(0, 4).map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-mono text-subtext">{t}</span>
          ))}
        </div>
        <div className="flex items-center gap-3 pt-2">
          <a href={p.demo} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-gradient-to-r from-primary to-secondary">
            <ExternalLink className="w-3 h-3" /> Demo
          </a>
          <a href={p.repo} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg glass hover:border-primary/40">
            <Github className="w-3 h-3" /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <PageTransition mode="rotate3d">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h1>
          <p className="mt-4 text-subtext max-w-xl mx-auto">
            A selection of work I'm genuinely proud of — click any card for the full story.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: 1200 }}>
          {projects.map((p) => (
            <Card key={p.id} p={p} onOpen={() => setActive(p)} />
          ))}
        </div>

        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
              className="fixed inset-0 z-[100] grid place-items-center p-4 bg-black/70 backdrop-blur-md"
            >
              <motion.div
                layoutId={`card-${active.id}`}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-strong gradient-border rounded-3xl"
              >
                <motion.div layoutId={`image-${active.id}`} className={`relative aspect-[16/9] bg-gradient-to-br ${active.gradient}`}>
                  <div className="absolute inset-0 grid place-items-center text-9xl">{active.emoji}</div>
                  <button onClick={() => setActive(null)} className="absolute top-4 right-4 grid place-items-center w-10 h-10 rounded-xl glass-strong hover:bg-white/10">
                    <X className="w-5 h-5" />
                  </button>
                </motion.div>
                <div className="p-8 space-y-6">
                  <motion.h2 layoutId={`title-${active.id}`} className="text-3xl font-bold">{active.title}</motion.h2>
                  <p className="text-subtext">{active.long}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-accent mb-2">Key Features</h4>
                    <ul className="grid sm:grid-cols-2 gap-2 text-sm text-subtext">
                      {active.features.map((f) => (
                        <li key={f} className="flex gap-2"><span className="text-accent">▸</span>{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-accent mb-2">Challenges</h4>
                    <p className="text-sm text-subtext">{active.challenges}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-accent mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {active.tech.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-lg glass text-xs font-mono">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a href={active.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary font-semibold text-sm">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                    <a href={active.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-strong font-semibold text-sm">
                      <Github className="w-4 h-4" /> View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
