import React from "react"
import PropTypes from "prop-types"
import Col from "react-bootstrap/Col"

const Main = ({ children }) => {
  return (
    <div className="content">
      {children}
    </div>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
}
  
export default Main

