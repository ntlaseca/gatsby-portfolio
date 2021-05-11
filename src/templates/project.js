import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Head from "components/head"
import Section from "components/section"
import { Image } from "components/images/images.css"
import Layout from "components/layout"
import Sidebar from "components/sidebar/sidebar"
import { MobileNavigation } from "components/sidebar/navigation"
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
          ...FluidImage
        }
      }
    }
  }
`

const ProjectTemplate = ({ data, pageContext }) => {
  const project = data.projectsJson
  const header = project.header
  const meta = project.meta
  const description = project.description
  
  const images = data.allFile.edges
  const {next, prev} = pageContext

  return (
    <Layout>
      <Head 
        title={header}
        description={meta}
      />
      <Sidebar
        header={header}
        description={description}
        next={next}
        prev={prev}
      />
      <Main>
        {images.map((image, i) => {
          const isFluid = !!image.node.childImageSharp

          const imageData = isFluid ? image.node.childImageSharp.fluid : image.node.publicURL
          const imageAlt = image.node.base.split(".")[0]
          const imageRatio = isFluid ? image.node.childImageSharp.fluid.aspectRatio : .75
          const imageKey = image.node.id

          return (
            <Section
              span={
                imageRatio === 1 ? "3"
                : imageRatio < .6 ? "2"
                : "6"
              }
              key={i}
            >
              {image.extension === "gif" 
                ? <Image
                    src={imageData}
                    alt={imageAlt}
                    key={imageKey}
                  />
                : <Img
                    fluid={imageData}
                    alt={imageAlt}
                    key={imageKey}
                  />
              }
            </Section>
          )
        })}
        <MobileNavigation 
          next={next}
          prev={prev}
        />
      </Main>
    </Layout>
  )
}

export default ProjectTemplate
