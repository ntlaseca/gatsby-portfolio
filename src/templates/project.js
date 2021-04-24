import React from "react"
import { graphql } from "gatsby"
import Images from "components/images"
import Layout from "components/layout"
import Sidebar from "components/sidebar/sidebar"
import Navigation from "components/sidebar/navigation"
import Main from "components/main"

export const query = graphql`
  query($slug: String!, $relativeDirectory: String!) {
    projectsJson(slug: { eq: $slug }) {
      header
      slug
      meta
      description
    }
    allFile(
      filter: {
        relativeDirectory: { eq: $relativeDirectory }
      }
      sort: {
        fields: name
        order: ASC
      }
    ) {
      edges {
        node {
          id
          name
          base
          publicURL
          childImageSharp {
            fluid {
              aspectRatio
            }
            gatsbyImageData(
              width: 1440
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
`

const ProjectTemplate = ({ data, pageContext }) => {
  const project = data.projectsJson
  const header = project.header
  const description = project.description
  
  const images = data.allFile.edges
  const {next, prev} = pageContext

  return (
    <Layout>
      <Sidebar>
        <div>
          <h2 className="slide-in animate-first">{header}</h2>
          <p className="slide-in animate-second">{description}</p>
        </div>
        <Navigation
          next={next}
          prev={prev}
        />
      </Sidebar>
      <Main>
        {images.map(image => {
          const isFluid = !!image.node.childImageSharp

          const imageData = isFluid ? image.node.childImageSharp.gatsbyImageData : image.node.publicURL
          const imageKey = isFluid ? image.node.id : null
          const imageRatio = isFluid ? image.node.childImageSharp.fluid.aspectRatio : .75
          const imageAlt = image.node.base.split(".")[0]

          return (
            <Images
              imageRatio={imageRatio}
              imageData={imageData}
              imageKey={imageKey}
              imageAlt={imageAlt}
            />
          )
        })}
        <Navigation 
          next={next}
          prev={prev}
        />
      </Main>
    </Layout>
  )
}

export default ProjectTemplate
