// next.config.js
const webpack = require('webpack');

const isGithubActions = process.env.GITHUB_ACTIONS || false
const repo = 'bxl-map'

let assetPrefix = ''
let basePath = '/'


if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

const nextConfig = {
  assetPrefix: '/bxl-map/',
  basePath: '/bxl-map/',
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
  },
  assetPrefix: assetPrefix,
  basePath: basePath,
  
};
