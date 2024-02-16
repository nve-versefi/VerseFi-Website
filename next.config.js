const withVideos = require('next-videos');

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            },
            // ... more redirects if needed
        ];
    },
};

module.exports = withVideos(nextConfig);
