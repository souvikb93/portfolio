import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: { root: path.resolve(__dirname) },
  // All imagery is served from /public — the site has no runtime dependency on
  // Framer's CDN, so no remote patterns are allowed.
};

export default nextConfig;
