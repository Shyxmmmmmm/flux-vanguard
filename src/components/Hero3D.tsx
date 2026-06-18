import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Torus, TorusKnot, Octahedron, MeshDistortMaterial } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function SpinningKnot() {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.15;
    ref.current.rotation.y += delta * 0.2;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <TorusKnot ref={ref} args={[1, 0.32, 180, 32]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#6366F1"
          emissive="#8B5CF6"
          emissiveIntensity={0.4}
          roughness={0.15}
          metalness={0.85}
          distort={0.3}
          speed={1.6}
        />
      </TorusKnot>
    </Float>
  );
}

function FloatingShapes() {
  return (
    <>
      <Float speed={1.8} rotationIntensity={1} floatIntensity={2}>
        <Icosahedron args={[0.45, 0]} position={[-2.4, 1.5, -1]}>
          <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={0.5} roughness={0.2} metalness={0.9} />
        </Icosahedron>
      </Float>
      <Float speed={1.2} rotationIntensity={1.2} floatIntensity={1.8}>
        <Octahedron args={[0.4, 0]} position={[2.6, 1.7, -0.5]}>
          <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.4} roughness={0.2} metalness={0.9} />
        </Octahedron>
      </Float>
      <Float speed={1.6} rotationIntensity={0.8} floatIntensity={1.5}>
        <Torus args={[0.42, 0.12, 16, 64]} position={[-2.2, -1.5, 0.5]}>
          <meshStandardMaterial color="#6366F1" emissive="#6366F1" emissiveIntensity={0.5} roughness={0.15} metalness={0.9} />
        </Torus>
      </Float>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Icosahedron args={[0.3, 0]} position={[2.4, -1.7, 0]}>
          <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={0.6} roughness={0.2} metalness={1} wireframe />
        </Icosahedron>
      </Float>
      <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.4}>
        <Torus args={[0.3, 0.08, 16, 64]} position={[0, 2.2, 0.5]}>
          <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.5} roughness={0.2} metalness={0.9} wireframe />
        </Torus>
      </Float>
    </>
  );
}

export function Hero3D() {
  return (
    <div className="w-full h-[420px] sm:h-[520px] lg:h-[560px] relative">
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <Canvas
          camera={{ position: [0, 0, 5.5], fov: 50 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <pointLight position={[5, 5, 5]} intensity={1.2} color="#6366F1" />
            <pointLight position={[-5, -5, -5]} intensity={1} color="#06B6D4" />
            <pointLight position={[0, 5, -5]} intensity={0.8} color="#8B5CF6" />
            <SpinningKnot />
            <FloatingShapes />
          </Suspense>
        </Canvas>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/10 via-transparent to-accent/10" />
    </div>
  );
}
