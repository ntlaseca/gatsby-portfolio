import React from "react"
import PropTypes from "prop-types"
import Col from "react-bootstrap/Col"

const Sidebar = ({ children }) => {
  return (
    <Col md={4} className="sidebar">
      {children}
    </Col>
  )
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Sidebar
