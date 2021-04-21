import React from "react"
import Img from "gatsby-image"

const Images = ({ imageRatio, imageKey, imageData, imageAlt }) => {
  return (
    <div
      className={
        imageRatio === 1 ? "col-6"
        : imageRatio <= .6 ? "col-12"
        : "col-12"
      }
      sm={
        imageRatio === 1 ? 6
        : imageRatio <= .6 ? 4
        : 12
      }
    >
      {!!imageKey 
        ? <Img
            key={imageKey}
            fluid={imageData}
            alt={imageAlt}
          />
        : <img
            src={imageData}
            alt={imageAlt}
            className="img-fluid"
          />
      }
    </div>
  )
}

export default Images
