// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   basePath: "/bxl-map",
//   assetPrefix: "/bxl-map/",
//   reactStrictMode: true,
// };

// module.exports = nextConfig;


const webpack = require('webpack');

const nextConfig = {
  basePath: "/bxl-map",
  output: "export", 
  reactStrictMode: true,
};

module.exports = {
  webpack: (config) => {
    // Replace 'YOUR_MAPBOX_ACCESS_TOKEN' with your actual Mapbox access token
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN': JSON.stringify('pk.eyJ1IjoiZXZld29sZnMiLCJhIjoiY2t3ZTBjMW4wMDAzODJxcDJ2ZHNzaGN6dSJ9.TMIw2kv_p_oW2oosW1LY2w')
      })
    );
    return config;
  }
};