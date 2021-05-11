import React from "react"
import Section from "components/section"
import { GatsbyImage } from "gatsby-plugin-image"
import { Image } from "./images.css"

const Images = ({ key, isSharp, imageRatio, imageKey, imageData, imageAlt }) => {
  return (
    <Section
      span={
        imageRatio === 1 ? "6"
        : imageRatio < .6 ? "4"
        : "12"
      }
      key={key}
    >
      {!!isSharp 
        ? <GatsbyImage
            image={imageData}
            alt={imageAlt}
            key={imageKey}
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
