/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

const withVideos = require('next-videos');
module.exports = withVideos();

module.exports = {
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
}