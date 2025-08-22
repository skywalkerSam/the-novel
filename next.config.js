/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unsplash.com',
        port: '',
        pathname: '',
        search: '',
      },
    ],
  },

  // Skipping type safety until Sanity integration
  // typescript: { ignoreBuildErrors: true },
  // eslint: { ignoreDuringBuilds: true },
};

export default config;
