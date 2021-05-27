import { graphql } from "gatsby"

export const GatsbyFluidImage = graphql`
  fragment GatsbyFluidImage on File {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
        quality: 100
        placeholder: TRACED_SVG
        tracedSVGOptions: { color: "rgb(106,98,250)" }
        formats: [AUTO, WEBP, AVIF]
      )
      original {
        width
        height
      }
    }
  }
`