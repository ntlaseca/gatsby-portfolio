import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
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
      ...GatsbyFluidImage
    }
    image2: file(relativePath: { eq: "images/projects/horn/02 Horn certificate flyers animated.gif" }) {
      publicURL
    }
    image3: file(relativePath: { eq: "images/projects/horn/03 Tech Innovation Showcase poster.jpg" }) {
      ...GatsbyFluidImage
    }
    image4: file(relativePath: { eq: "images/projects/horn/04 Tech Innovation Showcase brochure cover.jpg" }) {
      ...GatsbyFluidImage
    }
    image5: file(relativePath: { eq: "images/projects/horn/05 Tech Innovation Showcase brochure spread.jpg" }) {
      ...GatsbyFluidImage
    }
    image6: file(relativePath: { eq: "images/projects/horn/06 Success Stories inside cover.jpg" }) {
      ...GatsbyFluidImage
    }
    image7: file(relativePath: { eq: "images/projects/horn/07 Success Stories spread 01.jpg" }) {
      ...GatsbyFluidImage
    }
    image8: file(relativePath: { eq: "images/projects/horn/08 Success Stories spread 02.jpg" }) {
      ...GatsbyFluidImage
    }
    image9: file(relativePath: { eq: "images/projects/horn/09 Success Stories detail.jpg" }) {
      ...GatsbyFluidImage
    }
    image10: file(relativePath: { eq: "images/projects/horn/10 Horn yearbook covers.jpg" }) {
      ...GatsbyFluidImage
    }
    image11: file(relativePath: { eq: "images/projects/horn/12 VDC Game Night II flyer.jpg" }) {
      ...GatsbyFluidImage
    }
    image12: file(relativePath: { eq: "images/projects/horn/13 Horn pitch party flyers.gif" }) {
      publicURL
    }
    image13: file(relativePath: { eq: "images/projects/horn/16 E-Club flyers.jpg" }) {
      ...GatsbyFluidImage
    }
    image14: file(relativePath: { eq: "images/projects/horn/17 E-Club flyers display.jpg" }) {
      ...GatsbyFluidImage
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
          <GatsbyImage
            image={data.image1.childImageSharp.gatsbyImageData}
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
          <GatsbyImage
            image={data.image3.childImageSharp.gatsbyImageData}
            alt="Poster for the Tech Innovation Showcase"
          />
        </Section>
        <Section span={3}>
          <GatsbyImage
            image={data.image4.childImageSharp.gatsbyImageData}
            alt="Brochure for the Tech Innovation Showcase"
          />
        </Section>
        <Section span={3}>
          <GatsbyImage
            image={data.image5.childImageSharp.gatsbyImageData}
            alt="Brochure interior for the Tech Innovation Showcase"
          />
        </Section>
        <Section span={6}>
          <GatsbyImage
            image={data.image6.childImageSharp.gatsbyImageData}
            alt="Inside page of the Success Stories book"
          />
        </Section>
        <Section span={6}>
          <GatsbyImage
            image={data.image7.childImageSharp.gatsbyImageData}
            alt="Success Stories spread 1"
          />
        </Section>
        <Section span={6}>
          <GatsbyImage
            image={data.image8.childImageSharp.gatsbyImageData}
            alt="Success Stories spread 2"
          />
        </Section>
        <Section span={6}>
          <GatsbyImage
            image={data.image9.childImageSharp.gatsbyImageData}
            alt="Success Stories spread 3"
          />
        </Section>
        <Section span={6}>
          <RotatingCard />
        </Section>
        <Section span={6}>
          <GatsbyImage
            image={data.image10.childImageSharp.gatsbyImageData}
            alt="Horn yearbook covers"
          />
        </Section>
        <Section span={6}>
          <GatsbyImage
            image={data.image11.childImageSharp.gatsbyImageData}
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
          <GatsbyImage
            image={data.image13.childImageSharp.gatsbyImageData}
            alt="E-Club flyers"
          />
        </Section>
        <Section span={6}>
          <GatsbyImage
            image={data.image14.childImageSharp.gatsbyImageData}
            alt="E-Club flyer arrangement"
          />
        </Section>
        <MobileNavigation prev="diamond" next="tenantu" />
      </Main>
    </Layout>
  )
}

export default Horn