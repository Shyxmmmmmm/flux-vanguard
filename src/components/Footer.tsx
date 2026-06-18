import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Twitter, Mail } from "lucide-react";

const socials = [
  { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin },
  { href: "https://github.com", label: "GitHub", Icon: Github },
  { href: "https://instagram.com", label: "Instagram", Icon: Instagram },
  { href: "https://twitter.com", label: "Twitter", Icon: Twitter },
  { href: "mailto:hello@example.com", label: "Email", Icon: Mail },
];

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {socials.map(({ href, label, Icon }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                whileHover={{ y: -6, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 12 }}
                className="grid place-items-center w-12 h-12 rounded-xl glass hover:border-primary/40 hover:shadow-[0_0_24px_rgba(99,102,241,0.4)] transition-all"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <Icon className="w-5 h-5 text-subtext group-hover:text-white" />
              </motion.a>
            ))}
          </div>

          <p className="text-sm text-subtext max-w-xl">
            Designed & Developed with{" "}
            <span className="text-red-400 animate-pulse">❤</span> using{" "}
            <span className="text-gradient font-semibold">React, Framer Motion, Three.js</span>{" "}
            and <span className="text-gradient font-semibold">Particles.js</span>
          </p>

          <p className="text-xs text-subtext/60">
            © {new Date().getFullYear()} Dev.Folio — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
