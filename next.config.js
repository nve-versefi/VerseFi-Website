const withVideos = require('next-videos');

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/page',
                destination: '/home',
                permanent: true,
            },
            // ... more redirects if needed
        ];
    },
};

module.exports = withVideos(nextConfig);
