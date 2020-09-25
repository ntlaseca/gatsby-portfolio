import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const ProjectPreview = ({ slug, alt, imageData }) => {
  return (
    <div className="project-preview">
      <Link to={`/${slug}/`}>
        <div className="view overlay">
          <Img fluid={imageData} className="img-fluid" alt={alt} />
        </div>
      </Link>
    </div>
  )
}

export default ProjectPreview
