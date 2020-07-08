import React from "react"
import Col from "react-bootstrap/Col"
import { Link } from "gatsby"
import Img from "gatsby-image"

const ProjectPreview = ({ slug, alt, imageData }) => {
  return (
    <Col xl={4} md={6} xs={12} className="project-preview">
      <Link to={`/${slug}/`}>
        <div className="view overlay">
          <Img fluid={imageData} className="img-fluid" alt={alt} />
        </div>
      </Link>
    </Col>
  )
}

export default ProjectPreview
