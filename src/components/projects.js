import React from "react"
import PropTypes from "prop-types"
import Col from "react-bootstrap/col"

const Projects = ({ children }) => {
  return (
    <Col xs={12} className="slide-in animate-third" id="projects">
        {children}
    </Col>
  )
}

Projects.propTypes = {
  children: PropTypes.node.isRequired,
}
  
export default Projects

