import React from "react"
import PropTypes from "prop-types"
import { Wrapper } from "./sidebar.css"

const Sidebar = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Sidebar
