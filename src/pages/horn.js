import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "components/layout"
import Sidebar from "components/sidebar/sidebar"
import Main from "components/main"

import RotatingCard from "../components/rotating-card/rotating-card"

export const dataQuery = graphql`
  query {
    projectsJson(slug: { eq: "horn" }) {
      header
      meta
      description
    }
    image1: file(relativePath: { eq: "images/projects/horn/01 Horn flyers and covers.jpg" }) {
      ...fluidImage
    }
    image2: file(relativePath: { eq: "images/projects/horn/02 Horn certificate flyers animated.gif" }) {
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

const Horn = ({ data }) => {
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
            <Link to="/diamond/">
              Prev
            </Link>
          </span>
          <span className="text-right">
            <Link to="/tenantu/">
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
              alt="A flyer, poster, and handbook cover for Horn Entrepreneurship"
            />
          </div>
          <div className="col-12">
            <img
              className="img-fluid"
              src={data.image2.publicURL}
              alt="A flyer, poster, and handbook cover for Horn Entrepreneurship"
            />
          </div>
          <div className="col-12">
            <RotatingCard />
          </div>
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

export default Horn