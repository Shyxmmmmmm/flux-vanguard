import Particles, { ParticlesProvider, useParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

const options: ISourceOptions = {
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
      grab: { distance: 180, links: { opacity: 0.6 } },
      push: { quantity: 3 },
    },
  },
  particles: {
    color: { value: ["#6366F1", "#8B5CF6", "#06B6D4"] },
    links: {
      color: "#6366F1",
      distance: 140,
      enable: true,
      opacity: 0.18,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.7,
      outModes: { default: "out" },
    },
    number: { value: 60, density: { enable: true } },
    opacity: { value: { min: 0.15, max: 0.55 } },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 2.5 } },
  },
};

const init = async (engine: Engine) => {
  await loadSlim(engine);
};

function Inner() {
  const { loaded } = useParticlesProvider();
  if (!loaded) return null;
  return (
    <div className="absolute inset-0 pointer-events-auto">
      <Particles id="tsparticles" options={options} />
    </div>
  );
}

export function ParticlesBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <ParticlesProvider init={init}>
        <Inner />
      </ParticlesProvider>
    </div>
  );
}
