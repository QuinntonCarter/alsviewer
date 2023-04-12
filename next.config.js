// /** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    APEXAPIACCESS: process.env.APEXAPIACCESS,
    APEXAPIURL: process.env.APEXAPIURL,
  },
};

module.exports = nextConfig;
