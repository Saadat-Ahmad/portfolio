import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site to ./out for Cloudflare Pages (no Node runtime).
  output: "export",
  // The default next/image loader needs a server; static export serves the
  // images as-is instead.
  images: { unoptimized: true },
};

export default nextConfig;
