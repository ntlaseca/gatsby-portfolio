import React from "react"
import PropTypes from "prop-types"
import { Wrapper } from "./section.css"

const Section = ({ span, children }) => (
  <Wrapper span={span}>
    {children}
  </Wrapper>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Section
