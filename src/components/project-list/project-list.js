import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Row from "react-bootstrap/Row"
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
                  maxWidth: 1440
                  quality: 100
                  traceSVG: {
                    color: "rgb(106,98,250)"
                  }
                ) {
                  ...GatsbyImageSharpFluid_tracedSVG
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
    <Row className="slide-in animate-third">
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
    </Row>
  )
}

export default ProjectList
