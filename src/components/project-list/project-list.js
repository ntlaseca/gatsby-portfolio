import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProjectPreview from "./project-preview"
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

        return <ProjectPreview number={`0${i + 1}`} title={title} slug={slug} roles={roles} key={i} />
      })}
    </PreviewGrid>
  )
}

export default ProjectList
