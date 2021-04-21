import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "components/layout"
import Sidebar from "components/sidebar/sidebar"
import Main from "components/main"

import LiveEasy from "components/live-easy/live-easy"

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
        srcSetBreakpoints: [360, 720, 1080, 1440]
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
      <Sidebar>
        <div>
          <h2 className="slide-in animate-first">{header}</h2>
          <p className="slide-in animate-second">{description}</p>
        </div>
        <div className="navigation slide-in animate-second d-flex justify-content-between">
          <span>
            <Link to="/horn/">
              Prev
            </Link>
          </span>
          <span className="text-right">
            <Link to="/hub/">
              Next
            </Link>
          </span>
        </div>
      </Sidebar>
      <Main>
        <div className="slide-in animate-third d-grid col-12">
          <div className="col-12">
            <Img
              fluid={data.image1.childImageSharp.fluid}
              alt="Landing page mockup for the TenantU website"
            />
          </div>
          <div className="col-12">
            <Img
              fluid={data.image2.childImageSharp.fluid}
              alt="TenantU house illustrations"
            />
          </div>
          <div className="col-12">
            <img
              className="img-fluid"
              src={data.image3.publicURL}
              alt="Details of the TenantU house illustrations"
            />
          </div>
          <div className="col-12">
            <Img
              fluid={data.image4.childImageSharp.fluid}
              alt="Icons for the TenantU UI"
            />
          </div>
          <div className="col-12">
            <Img
              fluid={data.image5.childImageSharp.fluid}
              alt="Mockup of the TenantU login screen, scaled to a mobile size"
            />
          </div>
          <LiveEasy />
          <div className="navigation slide-in animate-third d-flex justify-content-between">
            <span>
              <Link to="/horn/">
                Prev
              </Link>
            </span>
            <span className="text-right">
              <Link to="/hub/">
                Next
              </Link>
            </span>
          </div>
        </div>
      </Main>
    </Layout>
  )
}

export default TenantU