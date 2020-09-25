import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProjectPreview from "./project-preview"

const ProjectList = () => {
  const data = useStaticQuery(graphql`
    query ProjectListQuery {
      allPreviewsJson {
        edges {
          node {
            alt
            slug
            image {
              childImageSharp {
                fluid(
                  maxWidth: 960
                  quality: 100
                  traceSVG: {
                    color: "rgb(106,98,250)"
                  }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  `)

  const previews = data.allPreviewsJson.edges

  return (
    <div className="slide-in animate-third d-grid">
      {previews.map(({ node: preview }) => {
        const alt = preview.alt
        const slug = preview.slug
        const imageData = preview.image.childImageSharp.fluid

        return (
          <ProjectPreview
            alt={alt}
            slug={slug}
            imageData={imageData}
          />
        )
      })}
    </div>
  )
}

export default ProjectList
