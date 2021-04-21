import React from "react"
import PropTypes from "prop-types"

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

