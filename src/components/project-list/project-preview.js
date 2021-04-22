import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Preview } from "./project-preview.css.js"

const ProjectPreview = ({ slug, alt, imageData }) => (
  <Preview>
    <Link to={`/${slug}/`}>
      <div className="view overlay">
        <GatsbyImage image={imageData} className="img-fluid" alt={alt} />
      </div>
    </Link>
  </Preview>
)

export default ProjectPreview
