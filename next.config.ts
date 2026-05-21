import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // /projects superseded by the richer /clients page (2026-05-21).
      // 301 so old social posts / search results route forward cleanly.
      {
        source: "/projects",
        destination: "/clients",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
