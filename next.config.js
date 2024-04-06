/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/bxl-map",
  reactStrictMode: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_MAPBOX_API_KEY:
      "pk.eyJ1IjoiZXZld29sZnMiLCJhIjoiY2t3ZTBjMW4wMDAzODJxcDJ2ZHNzaGN6dSJ9.TMIw2kv_p_oW2oosW1LY2w",
  },
};

module.exports = nextConfig;
