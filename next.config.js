/* eslint no-underscore-dangle: 0 */
/** @type {import('next').NextConfig} */
import path from "path";

const __dirname = path.resolve();
const debug = process.env.NODE_ENV !== "production";
const repository = "https://kkahub.github.io/kkaporfol";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  productionBrowserSourceMaps: true,
  webpack: (config, options) => {
    let sourceMap = "source-map";
    if (options.dev) {
      Object.defineProperty(config, "devtool", {
        get() {
          return sourceMap;
        },
        set() {
          sourceMap = "source-map";
        },
      });
    }
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
  images: { 
    unoptimized: true,
    domains: ["https://kkahub.github.io/kkaporfol"],
    minimumCacheTTL: 31536000 
  },
  env: {
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },
  basePath: !debug ? "/kkaporfol" : "", // 빌드 시 경로 : 데브 시 경로
  assetPrefix: !debug ? `${repository}/` : "", // production 일때 prefix 경로
  // trailingSlash: true, //  빌드 시 폴더 구조 동일
  output: "export"
};

export default nextConfig;
