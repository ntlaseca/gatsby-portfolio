import React from "react"
import PropTypes from "prop-types"
import Col from "react-bootstrap/col"

const Main = ({ children }) => {
  return (
    <Col md={8} className="content">
      {children}
    </Col>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
}
  
export default Main

