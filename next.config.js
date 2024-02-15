const withVideos = require('next-videos');

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/app/(default)/page.tsx',
                destination: '/home',
                permanent: true,
            },
            // ... more redirects if needed
        ];
    },
};

module.exports = withVideos(nextConfig);
