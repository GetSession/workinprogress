/** @type {import('next').NextConfig} */
const nextConfig = {
	redirects: async () => [
		{
			source: '/:path*',
			has: [{ type: 'host', value: 'workinprogress.fm' }],
			destination: 'https://www.workinprogress.fm/:path*',
			permanent: true,
		}
	]
};

export default nextConfig;
