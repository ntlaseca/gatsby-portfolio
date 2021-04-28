import { graphql } from "gatsby"

export const FluidImage = graphql`
  fragment FluidImage on File {
    childImageSharp {
      gatsbyImageData(
        width: 1440
        quality: 100
        placeholder: TRACED_SVG
        tracedSVGOptions: { color: "rgb(106,98,250)" }
        formats: [AUTO, WEBP, AVIF]
      )
    }
    publicURL
  }
`