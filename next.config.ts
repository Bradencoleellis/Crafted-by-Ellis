import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Aliases React to the experimental channel so `<ViewTransition>` exists,
    // and makes route navigations drive the browser's View Transitions API.
    // Without this the device stage still renders — it just cuts instead of
    // morphing (see components/devices/ViewTransition.tsx).
    viewTransition: true,
  },
};

export default nextConfig;
