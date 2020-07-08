import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Layout from "../components/layout"
import Sidebar from "../components/sidebar/sidebar"
import Main from "../components/main"
import SEO from "../components/seo"

import LiveEasy from "../components/live-easy/live-easy"

export const dataQuery = graphql`
  query {
    projectsJson(slug: { eq: "tenantu" }) {
      header
      meta
      description
    }
    image1: file(relativePath: { eq: "images/projects/tenantu/01 TenantU landing page.jpg" }) {
      ...fluidImage
    }
    image2: file(relativePath: { eq: "images/projects/tenantu/02 TenantU house illustrations.png" }) {
      ...fluidImage
    }
    image3: file(relativePath: { eq: "images/projects/tenantu/03 TenantU house illustrations.gif" }) {
      ...fluidImage
    }
    image4: file(relativePath: { eq: "images/projects/tenantu/04 TenantU application icons.png" }) {
      ...fluidImage
    }
    image5: file(relativePath: { eq: "images/projects/tenantu/05 TenantU login screen.jpg" }) {
      ...fluidImage
    }
  }
`

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(
        maxWidth: 1440
        quality: 100
        traceSVG: {
          color: "rgb(106,98,250)"
        }
      ) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
    publicURL
  }
`

const TenantU = ({ data }) => {
  const project = data.projectsJson
  const header = project.header
  const meta = project.meta
  const description = project.description
  
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
          <Col xs={12} className="navigation slide-in animate-second">
            <Row>
              <Col xs={6}>
                <Link to="/horn/">
                  Prev
                </Link>
              </Col>
              <Col xs={6} className="text-right">
                <Link to="/hub/">
                  Next
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Sidebar>
      <Main>
        <Row>
          <Col xs={12}>
            <Img
              fluid={data.image1.childImageSharp.fluid}
              alt="Landing page mockup for the TenantU website"
            />
          </Col>
          <Col xs={12}>
            <Img
              fluid={data.image2.childImageSharp.fluid}
              alt="TenantU house illustrations"
            />
          </Col>
          <Col xs={12}>
            <img
              className="img-fluid"
              src={data.image3.publicURL}
              alt="Details of the TenantU house illustrations"
            />
          </Col>
          <Col xs={12}>
            <Img
              fluid={data.image4.childImageSharp.fluid}
              alt="Icons for the TenantU UI"
            />
          </Col>
          <Col xs={12}>
            <Img
              fluid={data.image5.childImageSharp.fluid}
              alt="Mockup of the TenantU login screen, scaled to a mobile size"
            />
          </Col>
          <LiveEasy />
          <Col xs={12} className="navigation slide-in animate-second">
            <Row>
              <Col xs={6}>
                <Link to="/horn/">
                  Prev
                </Link>
              </Col>
              <Col xs={6} className="text-right">
                <Link to="/hub/">
                  Next
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Main>
    </Layout>
  )
}

export default TenantU