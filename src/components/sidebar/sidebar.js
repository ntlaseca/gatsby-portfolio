import React from "react"
import PropTypes from "prop-types"
import { Navigation } from "./navigation"
import { Wrapper } from "./sidebar.css"

const Sidebar = ({ header, description, prev, next }) => {
  return (
    <Wrapper>
      <div>
        <h2>{header}</h2>
        <p>{description}</p>
      </div>
      <Navigation prev={prev} next={next} />
    </Wrapper>
  )
}

Sidebar.propTypes = {
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Sidebar
