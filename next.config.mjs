const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? "/Brand/" : "",
  basePath: isProd ? "/Brand" : "",
  output: "export",
};

export default nextConfig;
