const newsletterFeed = require(`./src/utils/newsletterFeed`)

module.exports = (options) => {
  const { feed = true, feedTitle = `Jongminfire` } = options

  return {
    siteMetadata: {
      siteTitle: `JONGMINFIRE`,
      siteTitleAlt: `Jongminfire`,
      siteHeadline: `Jongminfire`,
      siteUrl: `https://minimal-blog.lekoarts.de`,
      siteDescription: `Jongminfire`,
      siteLanguage: `en`,
      siteImage: `/firewood.png`,
      author: `@jongminfire`,
    },
    plugins: [
      {
        resolve: `@lekoarts/gatsby-theme-minimal-blog-core`,
        options,
      },
      feed && {
        resolve: `gatsby-plugin-feed`,
        options: newsletterFeed(feedTitle),
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-typescript`,
      `gatsby-plugin-catch-links`,
      `gatsby-plugin-theme-ui`,
    ].filter(Boolean),
  }
}
