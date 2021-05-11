import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const HeadQuery = graphql`
  query {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
      author
    }
  }
`

function Head({ description, lang, meta, keywords = [], title, bodyAttr }) {
  return (
    <StaticQuery
      query={HeadQuery}
      render={data => {
        if (!data.site) {
          return
        }
        const metaDescription =
          description || (data.site && data.site.description) || ""
        const siteTitle = (data.site && data.site.title) || ""
        const siteAuthor =
          (data.site && data.site.author && data.site.author.name) || ""
        const pageTitle = title || siteTitle
        return (
          <Helmet
            bodyAttributes={bodyAttr}
            htmlAttributes={{ lang }}
            title={pageTitle}
            titleTemplate={
              pageTitle === siteTitle ? `${siteTitle} — Design & Development` : `${siteTitle} — %s`
            }
            meta={[
              {
                name: "description",
                content: metaDescription,
              },
              {
                property: "og:title",
                content: title,
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
                content: siteAuthor,
              },
              {
                name: "twitter:title",
                content: title,
              },
              {
                name: "twitter:description",
                content: metaDescription,
              },
            ]
              .concat(
                keywords && keywords.length > 0
                  ? {
                      name: "keywords",
                      content: keywords.join(", "),
                    }
                  : []
              )
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
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default Head
