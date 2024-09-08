/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enabling static export
  output: 'export',
  // Optionally, add basePath if you're deploying under a subpath
  basePath: '',
  assetPrefix: '',
};

export default nextConfig;
