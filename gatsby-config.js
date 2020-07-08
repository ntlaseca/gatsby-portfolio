module.exports = {
  siteMetadata: {
    title: `Nate Tlaseca`,
    description: `Nate Tlaseca is a human and multidisciplinary designer from Delaware.`,
    author: `Nate Tlaseca`
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
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nate Tlaseca - Portfolio`,
        short_name: `Nate Tlaseca`,
        start_url: `/`,
        icon: `src/data/images/logo512.png`,
      },
    },
  ],
}
