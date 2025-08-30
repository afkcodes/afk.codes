import { lazy, Suspense, type ReactNode } from "react";

// Lazy load ReactLenis to reduce main bundle size
const ReactLenis = lazy(() => 
  import("lenis/react").then(module => ({ default: module.ReactLenis }))
);

interface LazyLenisProps {
  children: ReactNode;
}

export function LazyLenis({ children }: LazyLenisProps) {
  return (
    <Suspense fallback={children}>
      <ReactLenis
        root
        options={{
          duration: 1.2,
          autoRaf: true,
          anchors: true,
          smoothWheel: true,
          syncTouch: true,
          touchMultiplier: 2,
        }}
      >
        {children}
      </ReactLenis>
    </Suspense>
  );
}
