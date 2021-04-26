import React from "react"
import Section from "components/section"
import { GatsbyImage } from "gatsby-plugin-image"
import { Image } from "./images.css"

const Images = ({ imageRatio, imageKey, imageData, imageAlt }) => {
  return (
    <Section
      span={
        imageRatio === 1 ? "6"
        : imageRatio < .6 ? "4"
        : "12"
      }
    >
      {!!imageKey 
        ? <GatsbyImage
            key={imageKey}
            image={imageData}
            alt={imageAlt}
          />
        : <Image
            src={imageData}
            alt={imageAlt}
          />
      }
    </Section>
  )
}

export default Images
