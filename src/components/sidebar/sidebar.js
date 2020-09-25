import React from "react"
import PropTypes from "prop-types"

const Sidebar = ({ children }) => {
  return (
    <div className="sidebar">
      {children}
    </div>
  )
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Sidebar
