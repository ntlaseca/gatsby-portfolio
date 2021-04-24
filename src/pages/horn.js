import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "components/layout"
import Sidebar from "components/sidebar/sidebar"
import Main from "components/main"
import Section from "components/section"
import Navigation from "components/sidebar/navigation"

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
  const description = project.description
  
  return (
    <Layout>
      <Sidebar>
        <div>
          <h2 className="slide-in animate-first">{header}</h2>
          <p className="slide-in animate-second">{description}</p>
        </div>
        <Navigation prev="diamond" next="tenantu" />
      </Sidebar>
      <Main>
        <Section span={12}>
          <Img
            fluid={data.image1.childImageSharp.fluid}
            alt="A flyer, poster, and handbook cover for Horn Entrepreneurship"
          />
        </Section>
        <Navigation prev="diamond" next="tenantu" />
      </Main>
    </Layout>
  )
}

export default Horn