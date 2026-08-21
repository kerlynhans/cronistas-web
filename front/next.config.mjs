/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.periodicocronistas.com",
      },
      {
        protocol: "http",
        hostname: "local.cronistas.com",
      },
      {
        protocol: "https",
        hostname: "local.cronistas.com",
      },
    ],
  },
};

export default nextConfig;
