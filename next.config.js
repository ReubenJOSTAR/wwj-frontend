/** @type {import('next').NextConfig} */
const nextConfig = {
  // WHY: Allows the frontend to call the FastAPI backend in dev without CORS issues.
  // In production, replace localhost:8000 with your deployed backend URL.
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000"}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
