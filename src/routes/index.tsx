import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { PageTransition } from "../components/PageTransition";
import { Hero3D } from "../components/Hero3D";

export const Route = createFileRoute("/")({
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

  component: Home,
});

const ROLES = [
  "MERN Stack Developer",
  "Associate Software Engineer @ Accenture",
  "Full Stack Enthusiast",
  "Problem Solver",
];

function Typewriter() {
  const [idx, setIdx] = useState(0);

  const [text, setText] = useState("");

  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = ROLES[idx];

    const speed = deleting ? 40 : 80;

    const t = setTimeout(() => {
      if (!deleting && text === full) {
        setTimeout(() => setDeleting(true), 1400);

        return;
      }

      if (deleting && text === "") {
        setDeleting(false);

        setIdx((i) => (i + 1) % ROLES.length);

        return;
      }

      setText(
        full.slice(
          0,

          deleting ? text.length - 1 : text.length + 1
        )
      );
    }, speed);

    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return (
    <span className="text-gradient font-display">
      {text}

      <span className="inline-block w-[3px] h-[1em] align-middle bg-accent ml-1 animate-pulse" />
    </span>
  );
}

function Home() {
  return (
    <PageTransition mode="zoom">
      <section className="mx-auto max-w-7xl min-h-[calc(100vh-7rem)] grid lg:grid-cols-2 gap-10 items-center">

        <div className="space-y-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ delay: 0.2 }}

            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-medium text-subtext"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent" />

             Associate Software Engineer @ Accenture
          </motion.div>

          <div className="space-y-4">

            <motion.h1
              initial={{ opacity: 0, y: 30 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{ delay: 0.3, duration: 0.8 }}

              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]"
            >
              Hi, I'm{" "}

              <span className="text-gradient-shine">
                Shyam Kumar A S
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{ delay: 0.45 }}

              className="text-2xl sm:text-3xl font-semibold text-foreground/90 min-h-[2.5rem]"
            >
              I am a <Typewriter />
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}

              animate={{ opacity: 1 }}

              transition={{ delay: 0.6 }}

              className="text-base sm:text-lg text-subtext max-w-xl leading-relaxed"
            >
              I'm a B.Tech Information and Communication Technology graduate from SASTRA University and will be joining Accenture as an Associate Software Engineer. My primary area of interest is MERN Stack development, and I also have a strong interest in Python and SQL. I enjoy building scalable, interactive and user-centric applications while continuously exploring new technologies and creating modern digital experiences.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ delay: 0.75 }}

            className="flex flex-wrap gap-4"
          >

            <Link
              to="/projects"

              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary font-semibold text-white shadow-[0_10px_40px_-10px_rgba(99,102,241,0.7)] hover:shadow-[0_15px_50px_-10px_rgba(99,102,241,0.9)] transition-all hover:-translate-y-0.5"
            >
              View My Projects

              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="/resume.pdf"

              download="Shyam-Kumar-AS-Resume.pdf"

              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-strong font-semibold hover:border-accent/40 hover:shadow-[0_0_24px_rgba(6,182,212,0.3)] transition-all hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />

              Download Resume
            </a>

          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            transition={{ delay: 0.95 }}

            className="flex items-center gap-8 pt-4"
          >
            {[
              {
                v: "10+",

                l: "Projects Built",
              },

              {
                v: "100+",

                l: "Problems Solved",
              },

              {
                v: "10+",

                l: "Technologies Learned",
              },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-bold text-gradient">
                  {s.v}
                </div>

                <div className="text-xs text-subtext mt-0.5">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}

          animate={{ opacity: 1, scale: 1 }}

          transition={{ delay: 0.4, duration: 1 }}

          className="relative"
        >
          <Hero3D />
        </motion.div>

      </section>
    </PageTransition>
  );
}