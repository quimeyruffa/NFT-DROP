/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "cdn.sanity.io"],
  },
  env: {
    SANITY_STUDIO_DATASET: "production",
    SANITY_STUDIO_PROJECT_ID: "as7hx4b3",
  },
};
