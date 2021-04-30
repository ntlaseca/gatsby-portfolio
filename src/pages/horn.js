import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "components/layout"
import Sidebar from "components/sidebar/sidebar"
import Main from "components/main"
import Section from "components/section"
import Navigation from "components/sidebar/navigation"

export const query = graphql`
  query ImageQuery {
    projectsJson(slug: { eq: "horn" }) {
      header
      meta
      description
    }
    image1: file(relativePath: { eq: "images/projects/horn/01 Horn flyers and covers.jpg" }) {
      ...FluidImage
    }
    image2: file(relativePath: { eq: "images/projects/horn/03 Tech Innovation Showcase poster.jpg" }) {
      ...FluidImage
    }
  }
`

const Horn = ({ data }) => {
  const project = data.projectsJson
  const header = project.header
  const description = project.description
  
  return (
    <Layout>
      <Sidebar
        header={header}
        description={description}
        prev="diamond"
        next="tenantu"
      />
      <Main>
        <Section span={12}>
          <GatsbyImage
            image={data.image1.childImageSharp.gatsbyImageData}
            alt="A flyer, poster, and handbook cover for Horn Entrepreneurship"
          />
        </Section>
        <Navigation prev="diamond" next="tenantu" />
      </Main>
    </Layout>
  )
}

export default Horn