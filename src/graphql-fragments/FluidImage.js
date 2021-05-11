import { graphql } from "gatsby"

export const FluidImage = graphql`
  fragment FluidImage on File {
    childImageSharp {
      fluid(
        maxWidth: 1440
        quality: 100
        traceSVG: {
          color: "rgb(106,98,250)"
        }
        srcSetBreakpoints: [360, 720, 1080, 1440]
      ) {
        aspectRatio
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`