import { Outlet, createRootRouteWithContext, HeadContent, Scripts, useRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ParticlesBackground } from "../components/ParticlesBackground";
import { BackgroundBlobs } from "../components/BackgroundBlobs";

function NotFoundComponent() {
  return (
    <div className="min-h-screen grid place-items-center px-4">
      <div className="text-center glass-strong rounded-3xl p-12 max-w-md">
        <h1 className="text-7xl font-bold text-gradient">404</h1>
        <p className="mt-4 text-subtext">This page drifted into the void.</p>
        <a href="/" className="inline-block mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary font-semibold">
          Return Home
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="min-h-screen grid place-items-center px-4">
      <div className="text-center glass-strong rounded-3xl p-10 max-w-md">
        <h1 className="text-2xl font-bold">Something broke</h1>
        <p className="mt-2 text-subtext text-sm">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary font-semibold"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dev.Folio — Ultra Premium Developer Portfolio" },
      { name: "description", content: "Futuristic, interactive developer portfolio built with React, Three.js, Framer Motion and Particles." },
      { name: "theme-color", content: "#f8fafc" },
      { name: "color-scheme", content: "light dark" },
      { property: "og:title", content: "Dev.Folio — Ultra Premium Developer Portfolio" },
      { property: "og:description", content: "Futuristic, interactive developer portfolio built with React, Three.js, Framer Motion and Particles." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dev.Folio — Ultra Premium Developer Portfolio" },
      { name: "twitter:description", content: "Futuristic, interactive developer portfolio built with React, Three.js, Framer Motion and Particles." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const saved = localStorage.getItem('theme');
                  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const theme = saved || (systemDark ? 'dark' : 'light');
                  const isDark = theme === 'dark';
                  document.documentElement.classList.toggle('dark', isDark);
                  document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
                } catch (e) {}
              })();
            `,
          }}
        />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <BackgroundBlobs />
      <ParticlesBackground />
      <Navbar />
      <AnimatePresence mode="wait">
        <Outlet />
      </AnimatePresence>
      <Footer />
    </QueryClientProvider>
  );
}
