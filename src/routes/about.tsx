import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Heart, Award, Rocket, BookOpen, Calendar } from "lucide-react";
import { PageTransition } from "../components/PageTransition";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Shyam Kumar A S" },

      {
        name: "description",

        content:
          "Education, journey, achievements and interests of Shyam Kumar A S.",
      },

      {
        property: "og:title",

        content: "About — Shyam Kumar A S",
      },
    ],
  }),
  component: About,
});

const stats = [
  { v: "10+", l: "Projects Completed", Icon: Rocket },

  { v: "10+", l: "Technologies Learned", Icon: BookOpen },

  { v: "11", l: "Certificates Earned", Icon: Award },

  { v: "100+", l: "Problems Solved", Icon: Calendar },
];

const timeline = [
  {
    year: "2020",

    title: "Completed SSLC",

    place: "Higher Secondary School",

    desc: "Completed 10th standard with 92%.",

    type: "edu",
  },

  {
    year: "2022",

    title: "Completed HSC",

    place: "Higher Secondary School",

    desc: "Completed 12th standard with 91.8%.",

    type: "edu",
  },

  {
    year: "2026",

    title: "B.Tech ICT Graduate",

    place: "SASTRA University",

    desc: "Completed B.Tech Information and Communication Technology with a CGPA of 7.5 CGPA.",

    type: "edu",
  },

  {
    year: "2026",

    title: "Placed at Accenture",

    place: "Associate Software Engineer",

    desc: "Joined Accenture as an Associate Software Engineer in July 2026.",

    type: "work",
  },
];

function About() {
  return (
    <PageTransition mode="slide">
      <div className="mx-auto max-w-7xl space-y-24">
        {/* Hero */}
        <section className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden gradient-border glass-strong"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/40" />
              <div className="absolute inset-0 grid place-items-center text-7xl font-bold text-primary-foreground/90 font-display">
                SK
              </div>
            </motion.div>
            <div className="absolute -inset-6 -z-10 bg-gradient-to-br from-primary to-accent opacity-30 blur-3xl rounded-full" />
          </motion.div>

          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold"
            >
              About <span className="text-gradient">Me</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-subtext text-base sm:text-lg leading-relaxed"
            >
              I'm Shyam Kumar A S, a B.Tech Information and Communication Technology graduate from SASTRA University. My primary area of interest is MERN Stack development, and I also enjoy working with Python, SQL and Deep Learning. I have built projects in Object Detection and Plant Species Classification in Deep Learning, and I enjoy continuously exploring new technologies and building impactful solutions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-subtext text-base sm:text-lg leading-relaxed"
            >
              When I'm not shipping code, you'll find me exploring generative art, tinkering with hardware, or hiking somewhere with poor wifi.
            </motion.p>
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                "MERN Developer",

                "Python Enthusiast",

                "Problem Solver",

                "Lifelong Learner",

                "Deep Learning"
              ].map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  className="px-3 py-1.5 rounded-full glass text-xs font-medium"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="relative gradient-border rounded-2xl p-6 glass-strong hover:shadow-[0_20px_60px_-20px_rgba(99,102,241,0.6)] transition-shadow"
            >
              <s.Icon className="w-6 h-6 text-accent mb-3" />
              <div className="text-3xl font-bold text-gradient">{s.v}</div>
              <div className="text-sm text-subtext mt-1">{s.l}</div>
            </motion.div>
          ))}
        </section>

        {/* Timeline */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-12 text-center"
          >
            My <span className="text-gradient">Journey</span>
          </motion.h2>
          <div className="relative max-w-3xl mx-auto">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
              className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent"
            />
            <div className="space-y-12">
              {timeline.map((t, i) => {
                const Icon = t.type === "work" ? Briefcase : GraduationCap;
                const left = i % 2 === 0;
                return (
                  <motion.div
                    key={t.year + t.title}
                    initial={{ opacity: 0, x: left ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className={`relative grid sm:grid-cols-2 gap-6 items-center ${left ? "" : "sm:[&>*:first-child]:order-2"}`}
                  >
                    <div className={`pl-12 sm:pl-0 ${left ? "sm:text-right sm:pr-12" : "sm:pl-12"}`}>
                      <div className="glass-strong rounded-2xl p-5 hover:border-primary/30 transition-colors">
                        <div className="text-xs font-mono text-accent mb-1">{t.year}</div>
                        <h3 className="text-lg font-semibold">{t.title}</h3>
                        <div className="text-sm text-primary/90 mt-0.5">{t.place}</div>
                        <p className="text-sm text-subtext mt-2">{t.desc}</p>
                      </div>
                    </div>
                    <div className="hidden sm:block" />
                    <span className="absolute left-4 sm:left-1/2 -translate-x-1/2 grid place-items-center w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary shadow-[0_0_20px_rgba(99,102,241,0.6)]">
                      <Icon className="w-4 h-4 text-primary-foreground" />
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Interests */}
        <section>
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
            Beyond the <span className="text-gradient">Code</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                t: "Gym",

                d: "Staying consistent and maintaining a healthy lifestyle.",

                e: "💪",
              },

              {
                t: "Music",

                d: "Listening to music helps me relax and stay focused.",

                e: "🎵",
              },

              {
                t: "Learning Technologies",

                d: "Exploring new tools, frameworks and software trends.",

                e: "🚀",
              },
            ].map((i, idx) => (
              <motion.div
                key={i.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-strong gradient-border rounded-2xl p-6"
              >
                <div className="text-4xl mb-3">{i.e}</div>
                <h3 className="font-semibold">{i.t}</h3>
                <p className="text-sm text-subtext mt-1">{i.d}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Heart className="w-5 h-5 text-secondary animate-pulse" />
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
