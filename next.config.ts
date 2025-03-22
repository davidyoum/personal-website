import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '7cmg2xsea6.ufs.sh',
        pathname: '/f/**',
      },
    ],
  },
};

export default nextConfig;
