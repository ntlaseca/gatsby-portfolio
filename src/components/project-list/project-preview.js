import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Preview, Number, Container, Row } from "./project-preview.css.js"

const ProjectPreview = ({ number, slug, title, roles }) => (
  <Preview>
    <Number>{number}</Number>
    <Container>
      <Link to={`/${slug}/`}>
        <Row>
          <h2>{title}</h2>
          <span>→</span>
        </Row>       
      </Link>
      <span>{roles.join(", ")}</span>
    </Container>
  </Preview>
)

export default ProjectPreview
