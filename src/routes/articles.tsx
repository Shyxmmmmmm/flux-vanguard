import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Clock, Calendar, ArrowUpRight } from "lucide-react";
import { PageTransition } from "../components/PageTransition";

export const Route = createFileRoute("/articles")({
  head: () => ({
    meta: [
      { title: "Articles — Dev.Folio" },
      { name: "description", content: "Long-form writing on engineering, design, and craft." },
      { property: "og:title", content: "Articles — Dev.Folio" },
    ],
  }),
  component: Articles,
});

const articles = [
  { title: "Building 60fps 3D Interfaces in the Browser", desc: "Lessons from shipping Three.js in production at scale.", date: "Nov 12, 2025", read: "8 min", gradient: "from-primary to-secondary", emoji: "🎮" },
  { title: "The Hidden Cost of useEffect", desc: "Why most useEffect calls are bugs waiting to happen — and what to use instead.", date: "Oct 3, 2025", read: "6 min", gradient: "from-secondary to-accent", emoji: "⚛️" },
  { title: "Designing APIs Developers Actually Love", desc: "Principles for crafting APIs that feel inevitable.", date: "Sep 18, 2025", read: "10 min", gradient: "from-accent to-primary", emoji: "🔌" },
  { title: "Mastering Framer Motion's Layout Animations", desc: "Shared element transitions that make your app feel native.", date: "Aug 22, 2025", read: "7 min", gradient: "from-primary to-accent", emoji: "✨" },
  { title: "Why I Stopped Reaching for Redux", desc: "The modern state management toolkit that replaced it for me.", date: "Jul 9, 2025", read: "5 min", gradient: "from-secondary to-primary", emoji: "📦" },
  { title: "From Side Project to 50k Users in 6 Months", desc: "What worked, what failed, and what I'd do differently.", date: "Jun 15, 2025", read: "12 min", gradient: "from-accent to-secondary", emoji: "🚀" },
];

function Articles() {
  return (
    <PageTransition mode="blur">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Featured <span className="text-gradient">Articles</span>
          </h1>
          <p className="mt-4 text-subtext max-w-xl mx-auto">
            Thoughts on building software that doesn't suck.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <motion.a
              key={a.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8, rotateX: 3, rotateY: -3, scale: 1.02 }}
              style={{ transformStyle: "preserve-3d" }}
              className="group relative gradient-border rounded-3xl overflow-hidden glass-strong hover:shadow-[0_30px_80px_-20px_rgba(99,102,241,0.6)] transition-shadow"
            >
              <div className={`relative aspect-[16/9] bg-gradient-to-br ${a.gradient} overflow-hidden`}>
                <div className="absolute inset-0 grid place-items-center text-7xl transition-transform duration-500 group-hover:scale-110">
                  {a.emoji}
                </div>
                <div className="absolute top-3 right-3 grid place-items-center w-9 h-9 rounded-xl glass-strong opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3 text-[11px] text-subtext font-mono">
                  <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" />{a.date}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />{a.read}</span>
                </div>
                <h3 className="text-lg font-bold leading-tight group-hover:text-gradient transition-colors">
                  {a.title}
                </h3>
                <p className="text-sm text-subtext line-clamp-2">{a.desc}</p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent">
                    Read More <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
