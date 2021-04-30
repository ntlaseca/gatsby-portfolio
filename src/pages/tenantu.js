import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "components/layout"
import Sidebar from "components/sidebar/sidebar"
import Main from "components/main"
import Section from "components/section"
import Navigation from "components/sidebar/navigation"

import LiveEasy from "components/live-easy/live-easy"

export const dataQuery = graphql`
  query {
    projectsJson(slug: { eq: "tenantu" }) {
      header
      meta
      description
    }
    image1: file(relativePath: { eq: "images/projects/tenantu/01 TenantU landing page.jpg" }) {
      ...FluidImage
    }
    image2: file(relativePath: { eq: "images/projects/tenantu/02 TenantU house illustrations.png" }) {
      ...FluidImage
    }
    image3: file(relativePath: { eq: "images/projects/tenantu/03 TenantU house illustrations.gif" }) {
      publicURL
    }
    image4: file(relativePath: { eq: "images/projects/tenantu/04 TenantU application icons.png" }) {
      ...FluidImage
    }
    image5: file(relativePath: { eq: "images/projects/tenantu/05 TenantU login screen.jpg" }) {
      ...FluidImage
    }
  }
`

const TenantU = ({ data }) => {
  const project = data.projectsJson
  const header = project.header
  const description = project.description
  
  return (
    <Layout>
      <Sidebar
        header={header}
        description={description}
        prev="horn"
        next="hub"
      />
      <Main>
        <Section span={12}>
          <GatsbyImage
            image={data.image1.childImageSharp.gatsbyImageData}
            alt="Landing page mockup for the TenantU website"
          />
        </Section>
        <Section span={12}>
          <GatsbyImage
            image={data.image2.childImageSharp.gatsbyImageData}
            alt="TenantU house illustrations"
          />
        </Section>
        <Section span={12}>
          <img
            src={data.image3.publicURL}
            alt="Details of the TenantU house illustrations"
          />
        </Section>
        <Section span={12}>
          <GatsbyImage
            image={data.image4.childImageSharp.gatsbyImageData}
            alt="Icons for the TenantU UI"
          />
        </Section>
        <Section span={12}>
          <GatsbyImage
            image={data.image5.childImageSharp.gatsbyImageData}
            alt="Mockup of the TenantU login screen, scaled to a mobile size"
          />
        </Section>
        <Section span={12}>
          <LiveEasy />
        </Section>
        <Navigation prev="horn" next="hub" />
      </Main>
    </Layout>
  )
}

export default TenantU