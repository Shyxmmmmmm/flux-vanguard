import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { PageTransition } from "../components/PageTransition";

export const Route = createFileRoute("/projects")({
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
  component: Projects,
});

type Project = {
  id: string;

  title: string;

  badge: string;

  desc: string;

  long: string;

  tech: string[];

  features: string[];

  challenges: string;

  demo: string;

  repo: string;

  gradient: string;
}

const projects: Project[] = [

  {
    id: "pizza-palace",

    title: "Pizza Palace",

    badge: "MERN",

    desc: "Full-stack pizza ordering web application built using the MERN stack.",

    long: "A responsive pizza ordering platform featuring authentication, menu management, cart functionality and order management.",

    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Firebase"],

    features: [

      "User authentication",

      "Dynamic pizza menu",

      "Shopping cart",

      "Order management"

    ],

    challenges: "Managing frontend-backend integration and deployment using Vercel and Render.",

    demo: "https://pizza-palace-eight.vercel.app/",

    repo: "https://github.com/Shyxmmmmmm/Pizza_Palace.git",

    gradient: "from-primary to-secondary",

  },

  {
    id: "student-web-interface",

    title: "Student Web Interface",

    badge: "MERN",

    desc: "Student management portal for organizing student information.",

    long: "A web application to manage student records with CRUD functionality and a clean responsive interface.",

    tech: ["React", "Node.js", "Express.js", "MongoDB"],

    features: [

      "Add students",

      "Update records",

      "Delete records",

      "Responsive UI"

    ],

    challenges: "Designing reusable components and integrating APIs.",

    demo: "https://student-web-interface.vercel.app/",

    repo: "https://github.com/Shyxmmmmmm/Student-web-Interface.git",

    gradient: "from-secondary to-accent",

  },

  {
    id: "plant-leaf",

    title: "Plant Leaf Disease Classification",

    badge: "DL",

    desc: "Deep learning project for identifying plant leaf diseases.",

    long: "A CNN-based model trained to classify plant diseases from leaf images.",

    tech: ["Python", "TensorFlow", "Deep Learning"],

    features: [

      "Image classification",

      "Disease prediction",

      "Model training",

      "Performance evaluation"

    ],

    challenges: "Improving model accuracy and preprocessing image datasets.",

    demo: "",

    repo: "",

    gradient: "from-accent to-primary",

  },

  {
    id: "object-detection",

    title: "Object Detection System",

    badge: "DL",

    desc: "Deep learning model for detecting objects from images and videos.",

    long: "Implemented an object detection system capable of identifying multiple objects in real time.",

    tech: ["Python", "OpenCV", "Deep Learning"],

    features: [

      "Object detection",

      "Bounding boxes",

      "Real-time prediction",

      "Image processing"

    ],

    challenges: "Handling detection accuracy and optimizing model performance.",

    demo: "",

    repo: "",

    gradient: "from-primary to-accent",

  },

  {
    id: "weather-app",

    title: "Weather App",

    badge: "React",

    desc: "Weather forecasting application using external APIs.",

    long: "Displays current weather information for searched locations.",

    tech: ["React", "API"],

    features: [

      "Search city",

      "Live weather",

      "Responsive UI"

    ],

    challenges: "Handling API integration.",

    demo: "https://weather-app-eight-mu-14.vercel.app/",

    repo: "https://github.com/Shyxmmmmmm/weather-app.git",

    gradient: "from-secondary to-primary",

  },

  {
    id: "stream-app",

    title: "Netflix Stream App",

    badge: "React",

    desc: "Netflix-inspired movie streaming interface.",

    long: "A responsive UI clone inspired by Netflix.",

    tech: ["React", "CSS"],

    features: [

      "Movie cards",

      "Responsive design"

    ],

    challenges: "Creating reusable UI components.",

    demo: "https://stream-app-ruby.vercel.app/",

    repo: "https://github.com/Shyxmmmmmm/StreamApp.git",

    gradient: "from-accent to-secondary",

  },

  {
    id: "greenden",

    title: "Greenden",

    badge: "Tailwind",

    desc: "Plant e-commerce landing page.",

    long: "Responsive website built using Tailwind CSS.",

    tech: ["HTML", "Tailwind CSS"],

    features: [

      "Responsive UI",

      "Product showcase"

    ],

    challenges: "Building responsive layouts.",

    demo: "https://shyxmmmmmm.github.io/Greenden-tailwind/",

    repo: "https://github.com/Shyxmmmmmm/Greenden-tailwind.git",

    gradient: "from-primary to-secondary",

  },

  {
    id: "student-favourite",

    title: "Student Favourite List",

    badge: "React",

    desc: "Student favourite items management app.",

    long: "Simple CRUD application to manage favourite lists.",

    tech: ["React"],

    features: [

      "Add",

      "Delete",

      "Manage"

    ],

    challenges: "State management.",

    demo: "https://student-favourite-list-three.vercel.app/",

    repo: "https://github.com/Shyxmmmmmm/student-favourite-list.git",

    gradient: "from-accent to-primary",

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
      <motion.div
        layoutId={`image-${p.id}`}
        className={`relative aspect-[16/10] bg-gradient-to-br ${p.gradient}`}
      >

        <div className="absolute inset-0 flex flex-col items-center justify-center">

          <span className="text-xs font-bold tracking-[0.3em] text-foreground/60 mb-3">

            PROJECT

          </span>

          <h2 className="text-3xl font-bold text-center px-6">

            {p.title}

          </h2>

        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      </motion.div>
      <div className="p-6 space-y-3">
        <motion.h3 layoutId={`title-${p.id}`} className="text-xl font-bold">{p.title}</motion.h3>
        <p className="text-sm text-subtext line-clamp-2">{p.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {p.tech.slice(0, 4).map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-md bg-muted/70 text-[10px] font-mono text-subtext">{t}</span>
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
              className="fixed inset-0 z-100 grid place-items-center p-4 bg-foreground/65 backdrop-blur-md"
            >
              <motion.div
                layoutId={`card-${active.id}`}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-strong gradient-border rounded-3xl"
              >
                <motion.div
                  layoutId={`image-${active.id}`}
                  className={`relative aspect-[16/9] bg-gradient-to-br ${active.gradient}`}
                >

                  <div className="absolute inset-0 flex flex-col items-center justify-center">

                    <span className="text-sm tracking-[0.3em] text-foreground/60 mb-4">

                      PROJECT

                    </span>

                    <h1 className="text-5xl font-bold text-center px-10">

                      {active.title}

                    </h1>

                  </div>

                  <button
                    onClick={() => setActive(null)}
                    className="absolute top-4 right-4 grid place-items-center w-10 h-10 rounded-xl glass-strong hover:bg-muted/80"
                  >

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
