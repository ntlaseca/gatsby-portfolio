import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const detailsQuery = graphql`
  query {
    site {
      siteMetadata {
        siteAuthor
        siteDescription
        siteTitle
      }
    }
  }
`

function Head({ siteDescription, lang, meta, siteTitle }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        if (!data.site) {
          return
        }
        const metaDescription =
          siteDescription || data.site.siteMetadata.siteDescription
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={siteTitle}
            titleTemplate={
              siteTitle === data.site.siteMetadata.siteTitle
                ? "%s"
                : `%s | ${data.site.siteMetadata.siteTitle}`
            }
            meta={[
              {
                name: "description",
                content: metaDescription,
              },
              {
                property: "og:title",
                content: siteTitle,
              },
              {
                property: "og:description",
                content: metaDescription,
              },
              {
                property: "og:type",
                content: "website",
              },
              {
                name: "twitter:card",
                content: "summary",
              },
              {
                name: "twitter:creator",
                content: data.site.siteMetadata.siteAuthor,
              },
              {
                name: "twitter:title",
                content: siteTitle,
              },
              {
                name: "twitter:description",
                content: metaDescription,
              },
            ]
            .concat(meta)}
          />
        )
      }}
    />
  )
}

Head.defaultProps = {
  lang: "en",
  meta: [],
  keywords: [],
}

Head.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  siteDescription: PropTypes.string.isRequired,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
}

export default Head
