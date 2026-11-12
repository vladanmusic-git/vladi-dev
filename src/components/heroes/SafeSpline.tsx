"use client";

import { Component, Suspense, lazy, useEffect, useState, type ReactNode } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

// A phone or browser without WebGL used to get Next's "Application error"
// screen instead of the page, because the Spline scene threw while mounting.
// Now the scene only mounts when WebGL is available, and any error it still
// throws is caught here, leaving the plain dark hero behind the text.

class SplineBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

export default function SafeSpline({ scene }: { scene: string }) {
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    setCanRender(hasWebGL());
  }, []);

  if (!canRender) return null;

  return (
    <SplineBoundary>
      <Suspense fallback={null}>
        <Spline scene={scene} style={{ width: "100%", height: "100%" }} />
      </Suspense>
    </SplineBoundary>
  );
}
