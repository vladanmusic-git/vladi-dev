import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old design variants and the pulled CV (S0, 2026-11-12).
      { source: "/v/:path*", destination: "/", permanent: false },
      { source: "/Vladi-Mijatovic-CV.pdf", destination: "/", permanent: false },
    ];
  },
  async headers() {
    return [
      {
        // Only vladii.com is indexed. vladi-dev.vercel.app, staged and old
        // deployment addresses all tell search engines to stay away.
        source: "/:path*",
        missing: [{ type: "host", value: "vladii\\.com" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
