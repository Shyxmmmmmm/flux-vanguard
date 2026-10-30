// src/components/MobileBottomNav.tsx
// Install once:  npm i lucide-react framer-motion
import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Home, User, Wrench, FolderKanban, Code2, Mail } from "lucide-react";

const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: User },
  { to: "/skills", label: "Skills", icon: Wrench },
  { to: "/projects", label: "Projects", icon: FolderKanban },
  { to: "/profiles", label: "Coding", icon: Code2 },
  { to: "/contact", label: "Contact", icon: Mail },
] as const;

export default function MobileBottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    // md:hidden -> only on phones, your desktop navbar stays untouched
    <nav
      aria-label="Quick navigation"
      className="fixed bottom-3 left-1/2 z-50 w-[94%] max-w-md -translate-x-1/2 lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/80 px-1.5 py-1.5 shadow-xl backdrop-blur-xl">
        {links.map(({ to, label, icon: Icon }) => {
          const isActive =
            to === "/" ? pathname === "/" : pathname.startsWith(to);

          return (
            <li key={to} className="flex-1">
              <Link to={to} className="block">
                <div className="relative flex flex-col items-center gap-0.5 py-2">
                  {isActive && (
                    <motion.span
                      layoutId="bottom-nav-pill"
                      className="absolute inset-0 rounded-xl bg-indigo-500/20 ring-1 ring-indigo-400/40"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon
                    size={20}
                    className={`relative z-10 transition-colors ${
                      isActive ? "text-indigo-300" : "text-slate-400"
                    }`}
                  />
                  <span
                    className={`relative z-10 text-[10px] font-medium transition-colors ${
                      isActive ? "text-indigo-200" : "text-slate-500"
                    }`}
                  >
                    {label}
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
