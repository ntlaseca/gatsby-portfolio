import React from "react"
import PropTypes from "prop-types"
import { Wrapper } from "./main.css"

const Main = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
)

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main
