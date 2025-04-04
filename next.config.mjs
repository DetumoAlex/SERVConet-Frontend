// /** @type {import('next').NextConfig} */
// const nextConfig = {
  
//   reactStrictMode: true,
//   watch:true,
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  images: {
    domains: ['eu-west-2.graphassets.com'],
  },
  webpack(config, { dev }) {
    if (dev) {
      config.watchOptions = {
        poll: 1000, // Check for changes every second
        aggregateTimeout: 300, // Reduce build frequency
      };
    }
    return config;
  },
};

export default nextConfig;
