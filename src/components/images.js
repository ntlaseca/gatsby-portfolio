import React from "react"
import Col from "react-bootstrap/Col"
import Img from "gatsby-image"

const Images = ({ imageRatio, imageKey, imageData, imageAlt }) => {
  return (
    <Col
      xs={
        imageRatio === 1 ? 6
        : imageRatio <= .6 ? 12
        : 12
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
    </Col>
  )
}

export default Images
