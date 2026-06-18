import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Heart, Award, Rocket, BookOpen, Calendar } from "lucide-react";
import { PageTransition } from "../components/PageTransition";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Dev.Folio" },
      { name: "description", content: "My journey, education, interests and milestones." },
      { property: "og:title", content: "About — Dev.Folio" },
    ],
  }),
  component: About,
});

const stats = [
  { v: "50+", l: "Projects Completed", Icon: Rocket },
  { v: "20+", l: "Technologies Learned", Icon: BookOpen },
  { v: "12", l: "Certificates Earned", Icon: Award },
  { v: "3+", l: "Years of Learning", Icon: Calendar },
];

const timeline = [
  { year: "2024", title: "Senior Frontend Engineer", place: "Acme Labs", desc: "Leading design-system & 3D UI initiatives.", type: "work" },
  { year: "2023", title: "Full-Stack Developer", place: "Pixel Forge", desc: "Built scalable MERN platforms serving 100k+ users.", type: "work" },
  { year: "2022", title: "B.Tech — Computer Science", place: "Tech University", desc: "Graduated with honors. Specialized in distributed systems.", type: "edu" },
  { year: "2020", title: "Started Coding Journey", place: "Self-taught", desc: "Fell in love with the craft. Never looked back.", type: "edu" },
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
              <div className="absolute inset-0 grid place-items-center text-7xl font-bold text-white/90 font-display">
                AC
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
              I'm a passionate developer obsessed with creating digital experiences that feel
              alive. With deep expertise across the modern web — from React frontends to
              Node.js backends — I bridge the gap between brilliant ideas and pixel-perfect
              implementation.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-subtext text-base sm:text-lg leading-relaxed"
            >
              When I'm not shipping code, you'll find me exploring generative art,
              tinkering with hardware, or hiking somewhere with poor wifi.
            </motion.p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["Curious", "Detail-obsessed", "Team player", "Lifelong learner"].map((t, i) => (
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
                      <Icon className="w-4 h-4 text-white" />
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
              { t: "Generative Art", d: "Creating visuals with code and math.", e: "🎨" },
              { t: "Mountain Hiking", d: "Reaching new perspectives, literally.", e: "🏔️" },
              { t: "Open Source", d: "Contributing to projects that empower devs.", e: "💜" },
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
