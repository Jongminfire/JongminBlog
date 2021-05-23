require(`dotenv`).config({
	path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
	siteMetadata: {
		siteTitle: `JONGMINFIRE 🔥`,
		siteTitleAlt: `Jongminfire`,
		siteHeadline: `Jongminfire`,
		siteUrl: `https://jongminfire.dev`,
		siteDescription: `프론트엔드 개발자 이종민 블로그`,
		siteLanguage: `KR`,
		siteImage: `/profile.png`,
		author: `@jongminfire`,
	},
	plugins: [
		{
			resolve: "gatsby-plugin-robots-txt",
			options: {
				host: "https://jongminfire.dev",
				sitemap: "https://jongminfire.dev/sitemap.xml",
				policy: [{ userAgent: "*", allow: "/" }],
			},
		},
		{
			resolve: `gatsby-plugin-gtag`,
			options: {
				trackingId: `UA-194374114-1`,
				head: false,
				anonymize: true,
			},
		},
		{
			resolve: `@lekoarts/gatsby-theme-minimal-blog`,
			options: {
				navigation: [
					{
						title: `Blog`,
						slug: `/blog`,
					},
					{
						title: `About`,
						slug: `/about`,
					},
				],
				externalLinks: [
					{
						name: `Gmail`,
						url: `mailto:jongminfire@gmail.com`,
					},
					{
						name: `Github`,
						url: `https://www.github.com/jongminfire`,
					},
				],
			},
		},
		{
			resolve: "gatsby-plugin-react-helmet-canonical-urls",
			options: {
				siteUrl: `https://jongminfire.dev`,
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Anton`,
					`Oswald\:500`,
					`Noto Sans KR`,
					`source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
				],
				display: "block",
			},
		},
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `JONGMINFIRE 🔥`,
				short_name: `jongminfire`,
				description: `프론트엔드 개발자 이종민 블로그`,
				start_url: `https://jongminfire.dev`,
				background_color: `#fff`,
				theme_color: `#6B46C1`,
				display: `standalone`,
				icons: [
					{
						src: `/profile.png`,
						sizes: `192x192`,
						type: `image/png`,
					},
				],
			},
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-gatsby-cloud`,
		`gatsby-plugin-netlify`,
		shouldAnalyseBundle && {
			resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
			options: {
				analyzerMode: `static`,
				reportFilename: `_bundle.html`,
				openAnalyzer: false,
			},
		},
	].filter(Boolean),
};
