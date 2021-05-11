import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProjectPreview from "./project-preview"
import { getImage } from "gatsby-plugin-image"
import { PreviewGrid } from "./project-list.css"

const ProjectList = () => {
  const data = useStaticQuery(graphql`
    query ProjectListQuery {
      allPreviewsJson {
        edges {
          node {
            title
            roles
            slug
            image {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  quality: 100
                  placeholder: TRACED_SVG
                  tracedSVGOptions: { color: "rgb(106,98,250)" }
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  `)

  const previews = data.allPreviewsJson.edges

  return (
    <PreviewGrid>
      {previews.map(({ node: preview }, i) => {
        const title = preview.title
        const roles = preview.roles
        const slug = preview.slug
        const imageData = getImage(
          preview.image.childImageSharp.gatsbyImageData
        )

        return <ProjectPreview number={`0${i + 1}`} title={title} slug={slug} roles={roles} key={i} />
      })}
    </PreviewGrid>
  )
}

export default ProjectList
