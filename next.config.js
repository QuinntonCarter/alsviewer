// /** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    APEX_API_ACCESS: process.env.APEX_API_ACCESS,
    APEX_API_URL: process.env.APEX_API_URL,
  },
};

module.exports = nextConfig;
