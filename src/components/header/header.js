import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { Wrapper, Logo } from "./header.css"
import logo from "data/images/logo.svg"

const Header = () => (
  <Wrapper>
    <Logo
      as={motion.div}
      whileHover={{
        opacity: 0.75,
      }}
    >
      <Link to="/">
        <img src={logo} alt="Nate Tlaseca's logo" />
      </Link>
    </Logo>
  </Wrapper>
)

export default Header
