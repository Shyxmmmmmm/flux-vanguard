import Particles, { ParticlesProvider, useParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import { useEffect, useMemo, useState } from "react";

const init = async (engine: Engine) => {
  await loadSlim(engine);
};

function Inner({ isDark }: { isDark: boolean }) {
  const { loaded } = useParticlesProvider();

  const options = useMemo<ISourceOptions>(() => {
    const palette = isDark
      ? ["#6366F1", "#8B5CF6", "#06B6D4"]
      : ["#818cf8", "#a78bfa", "#67e8f9"];

    return {
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      detectRetina: true,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          grab: { distance: 180, links: { opacity: isDark ? 0.6 : 0.35 } },
          push: { quantity: 3 },
        },
      },
      particles: {
        color: { value: palette },
        links: {
          color: isDark ? "#6366F1" : "#c4b5fd",
          distance: 140,
          enable: true,
          opacity: isDark ? 0.18 : 0.12,
          width: 1,
        },
        move: {
          enable: true,
          speed: isDark ? 0.7 : 0.45,
          outModes: { default: "out" },
        },
        number: { value: isDark ? 60 : 42, density: { enable: true } },
        opacity: { value: { min: 0.1, max: isDark ? 0.55 : 0.28 } },
        shape: { type: "circle" },
        size: { value: { min: 1, max: isDark ? 2.5 : 1.8 } },
      },
    };
  }, [isDark]);

  if (!loaded) return null;
  return (
    <div className="absolute inset-0 pointer-events-auto">
      <Particles id="tsparticles" options={options} />
    </div>
  );
}

export function ParticlesBackground() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const update = () => setIsDark(document.documentElement.classList.contains("dark"));
    update();

    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <ParticlesProvider init={init}>
        <Inner isDark={isDark} />
      </ParticlesProvider>
    </div>
  );
}
