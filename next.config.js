import withSerwistInit from '@serwist/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
	trailingSlash: true,
	output: 'export',
	images: {
		unoptimized: true
	},
	basePath: '/dictionary-webapp'
};

export default withSerwistInit({
	cacheOnNavigation: true,
	swSrc: 'src/app/sw.ts',
	swDest: 'public/sw.js',
	include: [/\.(css|js|ts|jsx|tsx|html|png|json)/],
	scope: '/dictionary-webapp/'
})(nextConfig);
