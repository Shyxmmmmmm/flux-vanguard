export function BackgroundBlobs() {
  return (
    <div aria-hidden className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      <div
        className="bg-blob animate-blob"
        style={{
          background: "radial-gradient(circle, #6366F1, transparent 70%)",
          width: 500, height: 500, top: "-10%", left: "-10%",
        }}
      />
      <div
        className="bg-blob animate-blob"
        style={{
          background: "radial-gradient(circle, #8B5CF6, transparent 70%)",
          width: 600, height: 600, bottom: "-15%", right: "-10%",
          animationDelay: "-6s",
        }}
      />
      <div
        className="bg-blob animate-blob"
        style={{
          background: "radial-gradient(circle, #06B6D4, transparent 70%)",
          width: 450, height: 450, top: "40%", left: "50%",
          animationDelay: "-12s",
        }}
      />
    </div>
  );
}
