import React from "react"
import { graphql } from "gatsby"
import Images from "../components/images"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Layout from "../components/layout"
import Sidebar from "../components/sidebar/sidebar"
import Navigation from "../components/sidebar/navigation"
import Main from "../components/main"
import SEO from "../components/seo"

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
          name
          base
          childImageSharp {
            fluid(
              maxWidth: 1440
              quality: 100
              traceSVG: {
                color: "rgb(106,98,250)"
              }
              srcSetBreakpoints: [360, 720, 1080, 1440]
            ) {
              aspectRatio
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
          publicURL
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
      <SEO
        title={header}
        description={meta}
      />
      <Sidebar>
        <Row>
          <Col xs={12}>
            <h2 className="slide-in animate-first">{header}</h2>
            <p className="slide-in animate-second">{description}</p>
          </Col>
          <Navigation
            next={next}
            prev={prev}
          />
        </Row> 
      </Sidebar>
      <Main>
        <Row className="slide-in animate-third">
          {images.map(image => {
            const isFluid = !!image.node.childImageSharp

            const imageData = isFluid ? image.node.childImageSharp.fluid : image.node.publicURL
            const imageKey = isFluid ? image.node.childImageSharp.fluid.src : null
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
        </Row>
      </Main>
    </Layout>
  )
}

export default ProjectTemplate
