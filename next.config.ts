import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // /clients + /projects condensed into the homepage #work section (2026-06-24).
      // 301 so old links / search results route forward cleanly.
      {
        source: "/clients",
        destination: "/#work",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/#work",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
