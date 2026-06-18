import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PageTransition } from "../components/PageTransition";

export const Route = createFileRoute("/profiles")({
  head: () => ({
    meta: [
      {
        title: "Shyam Kumar A S | Portfolio",
      },

      {
        name: "description",

        content:
          "MERN Stack Developer, B.Tech ICT Graduate from SASTRA University and Incoming Associate Software Engineer at Accenture.",
      },

      {
        property: "og:title",

        content: "Shyam Kumar A S | Portfolio",
      },
    ],
  }),
  component: Profiles,
});

const platforms = [

  {
    name: "GitHub",

    user: "@Shyxmmmmmm",

    url: "https://github.com/Shyxmmmmmm",

    logo: "🐙",

    stat1: { l: "Repos", v: "28" },

    stat2: { l: "Contributions", v: "426+" },

    color: "from-primary to-secondary",

  },

  {
    name: "LeetCode",

    user: "shyaammmmmm",

    url: "https://leetcode.com/u/shyaammmmmm/",

    logo: "🟧",

    stat1: { l: "Solved", v: "50+" },

    stat2: { l: "Level", v: "Beginner" },

    color: "from-secondary to-accent",

  },

  {
    name: "GeeksforGeeks",

    user: "shyxmmmmmm",

    url: "https://www.geeksforgeeks.org/profile/shyxmmmmmm",

    logo: "🟩",

    stat1: { l: "Solved", v: "70+" },

    stat2: { l: "Focus", v: "DSA" },

    color: "from-accent to-primary",

  },

  {
    name: "LinkedIn",

    user: "Shyam Kumar A S",

    url: "https://www.linkedin.com/in/shyam-a-s-6460a3301/",

    logo: "💼",

    stat1: { l: "Role", v: "ASE" },

    stat2: { l: "Company", v: "Accenture" },

    color: "from-primary to-accent",

  },

];

function Profiles() {
  return (
    <PageTransition mode="stagger">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Coding <span className="text-gradient">Profiles</span>
          </h1>
          <p className="mt-4 text-subtext max-w-xl mx-auto">

            Platforms where I practice coding, solve problems, and showcase my development journey.

          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 100 }}
              whileHover={{ y: -10, rotateY: 5, scale: 1.03 }}
              style={{ transformStyle: "preserve-3d" }}
              className="group relative gradient-border rounded-3xl p-6 glass-strong hover:shadow-[0_30px_80px_-20px_rgba(99,102,241,0.6)] transition-shadow"
            >
              <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-20 transition-opacity -z-10 blur-xl`} />

              <div className="flex items-start justify-between">
                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
                  className={`grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} text-3xl shadow-[0_10px_30px_-10px_rgba(99,102,241,0.5)]`}
                >
                  {p.logo}
                </motion.div>
                <ExternalLink className="w-4 h-4 text-subtext opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <h3 className="mt-5 text-xl font-bold">{p.name}</h3>
              <p className="text-sm text-subtext font-mono">{p.user}</p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="glass rounded-xl px-3 py-2.5">
                  <div className="text-[10px] uppercase tracking-wider text-subtext">{p.stat1.l}</div>
                  <div className="text-lg font-bold text-gradient">{p.stat1.v}</div>
                </div>
                <div className="glass rounded-xl px-3 py-2.5">
                  <div className="text-[10px] uppercase tracking-wider text-subtext">{p.stat2.l}</div>
                  <div className="text-lg font-bold text-gradient">{p.stat2.v}</div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
