import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

type Mode = "zoom" | "slide" | "stagger" | "rotate3d" | "blur" | "curtain" | "fade";

const variants: Record<Mode, Variants> = {
  zoom: {
    initial: { opacity: 0, scale: 1.06 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, scale: 0.98, transition: { duration: 0.4 } },
  },
  slide: {
    initial: { opacity: 0, x: 80 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, x: -40, transition: { duration: 0.4 } },
  },
  stagger: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.08 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  },
  rotate3d: {
    initial: { opacity: 0, rotateX: -12, y: 40 },
    animate: { opacity: 1, rotateX: 0, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, rotateX: 8, transition: { duration: 0.4 } },
  },
  blur: {
    initial: { opacity: 0, filter: "blur(20px)" },
    animate: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.8 } },
    exit: { opacity: 0, filter: "blur(12px)", transition: { duration: 0.4 } },
  },
  curtain: {
    initial: { opacity: 0, clipPath: "inset(0 50% 0 50%)" },
    animate: { opacity: 1, clipPath: "inset(0 0% 0 0%)", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } },
    exit: { opacity: 0, clipPath: "inset(0 50% 0 50%)", transition: { duration: 0.4 } },
  },
  fade: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  },
};

export function PageTransition({
  children,
  mode = "fade",
  className = "",
}: {
  children: ReactNode;
  mode?: Mode;
  className?: string;
}) {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      variants={variants[mode]}
      style={{ perspective: 1200 }}
      className={`relative z-10 pt-28 pb-16 px-4 sm:px-6 ${className}`}
    >
      {children}
    </motion.main>
  );
}
