import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/articles", label: "Articles" },
  { to: "/profiles", label: "Coding" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`glass-strong rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between transition-shadow ${
            scrolled ? "shadow-[0_10px_40px_-10px_rgba(99,102,241,0.3)]" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <span className="relative grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-[0_0_20px_rgba(99,102,241,0.5)]">
              <Code2 className="w-5 h-5 text-white" />
            </span>
            <span className="font-display font-bold text-lg tracking-tight">
              <span className="text-gradient">Dev</span>.Folio
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className="relative px-4 py-2 text-sm font-medium text-subtext hover:text-foreground transition-colors"
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </Link>
              );
            })}
          </nav>

          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-primary to-secondary text-white shadow-[0_8px_24px_-8px_rgba(99,102,241,0.6)] hover:shadow-[0_8px_30px_-4px_rgba(99,102,241,0.8)] transition-shadow"
          >
            Hire Me
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid place-items-center w-10 h-10 rounded-xl glass"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-2 glass-strong rounded-2xl p-3"
            >
              <ul className="grid gap-1">
                {links.map((l) => {
                  const active = pathname === l.to;
                  return (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        className={`block px-4 py-3 rounded-xl text-sm font-medium ${
                          active
                            ? "bg-gradient-to-r from-primary/25 to-secondary/25 text-white"
                            : "text-subtext hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {l.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
