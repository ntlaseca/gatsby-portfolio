const {
  api: { projectId, dataset },
} = requireConfig("./studio/sanity.json")

module.exports = {
  flags: {
    FAST_DEV: true,
    PRESERVE_WEBPACK_CACHE: true
  },
  siteMetadata: {
    title: `Nate Tlaseca – Portfolio`,
    siteUrl: `https://natetlaseca.com`,
    description: `Nate Tlaseca is a human and creative web developer from Delaware.`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId,
        dataset,
      },
    },
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
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /data\/.*\.svg$/,
          omitKeys: ['xmlnsDc', 'xmlnsCc', 'xmlnsRdf', 'xmlnsSvg', 'xmlnsSodipodi', 'xmlnsInkscape']
        },
      },
    },
  ],
}

function requireConfig(path) {
  try {
    return require(path)
  } catch (e) {
    console.error(
      "Failed to require sanity.json. Fill in projectId and dataset name manually in gatsby-config.js"
    )
    return {
      api: {
        projectId: process.env.SANITY_PROJECT_ID || "",
        dataset: process.env.SANITY_DATASET || "",
      },
    }
  }
}
