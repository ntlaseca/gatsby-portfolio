import React from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import { Navigation } from "./navigation"
import { Wrapper } from "./sidebar.css"

const variants = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1,
  },
}

const Sidebar = ({ header, description, prev, next }) => {
  return (
    <Wrapper as={motion.aside} initial="hidden" animate="visible" variants={variants}>
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
