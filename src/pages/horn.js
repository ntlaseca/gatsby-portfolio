import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "components/layout"
import Sidebar from "components/sidebar/sidebar"
import Main from "components/main"
import Section from "components/section"
import { MobileNavigation } from "components/sidebar/navigation"
import RotatingCard from "components/rotating-card"

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
    image2: file(relativePath: { eq: "images/projects/horn/02 Horn certificate flyers animated.gif" }) {
      publicURL
    }
    image3: file(relativePath: { eq: "images/projects/horn/03 Tech Innovation Showcase poster.jpg" }) {
      ...FluidImage
    }
    image4: file(relativePath: { eq: "images/projects/horn/04 Tech Innovation Showcase brochure cover.jpg" }) {
      ...FluidImage
    }
    image5: file(relativePath: { eq: "images/projects/horn/05 Tech Innovation Showcase brochure spread.jpg" }) {
      ...FluidImage
    }
    image6: file(relativePath: { eq: "images/projects/horn/06 Success Stories inside cover.jpg" }) {
      ...FluidImage
    }
    image7: file(relativePath: { eq: "images/projects/horn/07 Success Stories spread 01.jpg" }) {
      ...FluidImage
    }
    image8: file(relativePath: { eq: "images/projects/horn/08 Success Stories spread 02.jpg" }) {
      ...FluidImage
    }
    image9: file(relativePath: { eq: "images/projects/horn/09 Success Stories detail.jpg" }) {
      ...FluidImage
    }
    image10: file(relativePath: { eq: "images/projects/horn/10 Horn yearbook covers.jpg" }) {
      ...FluidImage
    }
    image11: file(relativePath: { eq: "images/projects/horn/12 VDC Game Night II flyer.jpg" }) {
      ...FluidImage
    }
    image12: file(relativePath: { eq: "images/projects/horn/13 Horn pitch party flyers.gif" }) {
      publicURL
    }
    image13: file(relativePath: { eq: "images/projects/horn/16 E-Club flyers.jpg" }) {
      ...FluidImage
    }
    image14: file(relativePath: { eq: "images/projects/horn/17 E-Club flyers display.jpg" }) {
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
        <Section span={6}>
          <Img
            fluid={data.image1.childImageSharp.fluid}
            alt="A flyer, poster, and handbook cover for Horn Entrepreneurship"
          />
        </Section>
        <Section span={6}>
          <img
            src={data.image2.publicURL}
            alt="A series of Horn certificate program flyers"
          />
        </Section>
        <Section span={6}>
          <Img
            fluid={data.image3.childImageSharp.fluid}
            alt="Poster for the Tech Innovation Showcase"
          />
        </Section>
        <Section span={3}>
          <Img
            fluid={data.image4.childImageSharp.fluid}
            alt="Brochure for the Tech Innovation Showcase"
          />
        </Section>
        <Section span={3}>
          <Img
            fluid={data.image5.childImageSharp.fluid}
            alt="Brochure interior for the Tech Innovation Showcase"
          />
        </Section>
        <Section span={6}>
          <Img
            fluid={data.image6.childImageSharp.fluid}
            alt="Inside page of the Success Stories book"
          />
        </Section>
        <Section span={6}>
          <Img
            fluid={data.image7.childImageSharp.fluid}
            alt="Success Stories spread 1"
          />
        </Section>
        <Section span={6}>
          <Img
            fluid={data.image8.childImageSharp.fluid}
            alt="Success Stories spread 2"
          />
        </Section>
        <Section span={6}>
          <Img
            fluid={data.image9.childImageSharp.fluid}
            alt="Success Stories spread 3"
          />
        </Section>
        <Section span={6}>
          <RotatingCard />
        </Section>
        <Section span={6}>
          <Img
            fluid={data.image10.childImageSharp.fluid}
            alt="Horn yearbook covers"
          />
        </Section>
        <Section span={6}>
          <Img
            fluid={data.image11.childImageSharp.fluid}
            alt="VDC Game Night II flyer"
          />
        </Section>
        <Section span={6}>
          <img
            src={data.image12.publicURL}
            alt="Horn Pitch party flyers"
          />
        </Section>
        <Section span={6}>
          <Img
            fluid={data.image13.childImageSharp.fluid}
            alt="E-Club flyers"
          />
        </Section>
        <Section span={6}>
          <Img
            fluid={data.image14.childImageSharp.fluid}
            alt="E-Club flyer arrangement"
          />
        </Section>
        <MobileNavigation prev="diamond" next="tenantu" />
      </Main>
    </Layout>
  )
}

export default Horn