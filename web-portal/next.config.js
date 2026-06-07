/** @type {import('next').NextConfig} */

// URL cua api-gateway (Express). Mac dinh cong 4000.
// Doi qua bien moi truong neu gateway chay cong khac.
const GATEWAY_URL = process.env.GATEWAY_URL || 'http://localhost:4000';

const nextConfig = {
  async rewrites() {
    return [
      {
        // Moi request /api/* tu trinh duyet se duoc Next.js
        // chuyen tiep sang Express. Nguoi dung chi thay cong 3000.
        source: '/api/:path*',
        destination: `${GATEWAY_URL}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;