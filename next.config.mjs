/** @type {import('next').NextConfig} */
const nextConfig = {};


import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
    swSrc: "./src/app/sw.ts",
    swDest: "public/sw.js"
})
export default withSerwist(nextConfig)