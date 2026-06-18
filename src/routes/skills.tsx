import { createFileRoute } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";
import { PageTransition } from "../components/PageTransition";

export const Route = createFileRoute("/skills")({
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
  component: Skills,
});

type Skill = { name: string; level: number; emoji: string };

const categories = [

  {
name:"Tools",
color:"from-secondary to-primary",

skills:[

{name:"Git",level:70,emoji:"🌿"},

{name:"GitHub",level:90,emoji:"🐙"},

{name:"VS Code",level:90,emoji:"💻"},

{name:"Postman",level:80,emoji:"📮"},

{name:"Eclipse",level:70,emoji:"🌘"},

{name:"IntelliJ IDEA",level:70,emoji:"🧠"},

{name:"Kaggle",level:65,emoji:"📊"}

]

},

{
name:"Frontend",
color:"from-primary to-secondary",

skills:[

{name:"HTML5",level:90,emoji:"🌐"},

{name:"CSS3",level:85,emoji:"🎨"},

{name:"Tailwind CSS",level:90,emoji:"💨"},

{name:"JavaScript",level:85,emoji:"💛"},

{name:"React.js",level:85,emoji:"⚛️"},

{name:"TypeScript",level:65,emoji:"🔷"},

]

},

{
name:"Backend",
color:"from-secondary to-accent",

skills:[

{name:"Node.js",level:85,emoji:"🟢"},

{name:"Express.js",level:85,emoji:"🚀"},

{name:"REST API",level:80,emoji:"🔌"},

]

},

{
name:"Database",
color:"from-accent to-primary",

skills:[

{name:"MongoDB",level:85,emoji:"🍃"},

{name:"SQL",level:75,emoji:"🗄️"},

]

},

{
name:"Programming Languages",
color:"from-primary to-accent",

skills:[

{name:"JavaScript",level:85,emoji:"💛"},

{name:"Python",level:80,emoji:"🐍"},

{name:"Java (Basic)",level:60,emoji:"☕"},

]

},

{
name:"Cloud & Deployment",
color:"from-accent to-secondary",

skills:[

{name:"Render",level:80,emoji:"🎯"},

{name:"Vercel",level:80,emoji:"▲"},

{name:"MongoDB Atlas",level:85,emoji:"🍃"},

{name:"AWS (Basic)",level:60,emoji:"☁️"},

{name:"Firebase",level:70,emoji:"🔥"},

]

},



]

function TiltCard({ children, color }: { children: React.ReactNode; color: string }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-50, 50], [10, -10]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [-50, 50], [-10, 10]), { stiffness: 200, damping: 20 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left - r.width / 2);
    my.set(e.clientY - r.top - r.height / 2);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className="relative gradient-border rounded-2xl p-6 glass-strong hover:shadow-[0_30px_80px_-20px_rgba(99,102,241,0.5)] transition-shadow"
    >
      <div className={`absolute -top-px left-6 right-6 h-px bg-gradient-to-r ${color} opacity-70`} />
      {children}
    </motion.div>
  );
}

function SkillBar({ skill, delay }: { skill: Skill; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="space-y-1.5"
    >
      <div className="flex items-center justify-between text-sm">
        <span className="flex items-center gap-2 font-medium">
          <motion.span animate={{ y: [0, -3, 0] }} transition={{ duration: 3, repeat: Infinity, delay: delay * 2 }} className="inline-block">
            {skill.emoji}
          </motion.span>
          {skill.name}
        </span>
        <span className="text-subtext font-mono text-xs">{skill.level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: delay + 0.1 }}
          className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent shadow-[0_0_12px_rgba(99,102,241,0.7)]"
        />
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <PageTransition mode="stagger">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            My <span className="text-gradient">Tech Stack</span>
          </h1>
          <p className="mt-4 text-subtext max-w-xl mx-auto">
            A curated toolkit honed through years of building, breaking, and shipping.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6" style={{ perspective: 1000 }}>
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08 }}
            >
              <TiltCard color={cat.color}>
                <h3 className={`text-xl font-bold mb-5 bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
                  {cat.name}
                </h3>
                <div className="space-y-4">
                  {cat.skills.map((s, j) => (
                    <SkillBar key={s.name} skill={s} delay={j * 0.08} />
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
