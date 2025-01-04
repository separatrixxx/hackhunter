module.exports = {
	i18n: {
		locales: ['en', 'ru'],
		defaultLocale: 'en',
	},
	images: {
		domains: ['hackhunter.vercel.app'],
	},
	webpack(config) {
		config.module.rules.push({
			loader: '@svgr/webpack',
			issuer: /\.[jt]sx?$/,
			options: {
				prettier: false,
				svgo: true,
				svgoConfig: {
					plugins: [
						{
							name: 'preset-default',
							params: {
								override: {
									removeViewBox: false,
								},
							},
						},
					],
				},
				titleProp: true,
			},
			test: /\.svg$/,
		});

		return config;
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'Content-Security-Policy',
						value:
							"default-src 'self'; " +
							"script-src 'self' https://telegram.org https://oauth.telegram.org; " +
							"frame-src 'self' https://oauth.telegram.org; " +
							"connect-src 'self' https://oauth.telegram.org; " +
							"img-src 'self' data: https://hackhunter.vercel.app;",
					},
				],
			},
		];
	},
};
