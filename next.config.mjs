/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            source: "/api/:path*",
            headers: [
              {
                key: "Access-Control-Allow-Origin",
                value: process.env.ORIGIN_URL, // setear la URL del frontend
              },
              {
                key: "Access-Control-Allow-Methods",
                value: "GET, POST, PUT, PATCH, DELETE, OPTIONS",
              },
              {
                key: "Access-Control-Allow-Headers",
                value: "Content-Type, Authorization",
              },
              {
                key: "Access-Control-Allow-Credentials",
                value: "true",
              },
            ],
          },
        ];
      },
};

export default nextConfig;
