import React from "react"
import { Link } from "gatsby"
import { Preview, Number, Container, Row } from "./project-preview.css.js"

const ProjectPreview = ({ number, slug, link, title, roles }) => (
  <Preview>
    <Number>{number}</Number>
    <Container>
      {slug ? (
        <Link to={`/${slug}/`}>
          <Row>
            <h2>{title}</h2>
            <span>→</span>
          </Row>
        </Link>
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Row>
            <h2>{title}</h2>
            <span>→</span>
          </Row>
        </a>
      )}
      <span>{roles.join(", ")}</span>
    </Container>
  </Preview>
)

export default ProjectPreview
