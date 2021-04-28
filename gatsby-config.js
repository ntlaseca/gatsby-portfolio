const siteConfig = require('./site-config');

module.exports = {
  siteMetadata: {
    ...siteConfig
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nate Tlaseca - Portfolio`,
        short_name: `Nate Tlaseca`,
        lang: `en`,
        display: `standalone`,
        icon: `src/data/images/logo.svg`,
        cache_busting_mode: `none`,
        start_url: `/`,
        background_color: `#e6e6e6`,
        theme_color: `#6a62fa`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images\/.*\.svg$/,
        }
      }
    },
  ],
}
