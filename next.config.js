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
			source: "/(.*)",
			headers: [
			  {
				key: "Content-Security-Policy",
				value: "frame-ancestors 'self' https://oauth.telegram.org https://hackhunter.vercel.app https://web.telegram.org https://t.me",
			  },
			],
		  },
		];
	  },
};
