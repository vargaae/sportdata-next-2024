/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "crests.football-data.org",
        port: "",
        pathname: "/*",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/*/**",
      },
      {
        protocol: "https",
        hostname: "media.wired.com",
        port: "",
        pathname: "/*/**",
      },
      {
        protocol: "https",
        hostname: "s.yimg.com",
        port: "",
        pathname: "/*/**",
      },
      {
        protocol: "https",
        hostname: "readwrite.com",
        port: "",
        pathname: "/*/**",
      },
      {
        protocol: "https",
        hostname: "venturebeat.com",
        port: "",
        pathname: "/*/**",
      },
      {
        protocol: "https",
        hostname: "cnet.com",
        port: "",
        pathname: "/*/**",
      },
    ],
  },
};

export default nextConfig;
