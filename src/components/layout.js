import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../data/images/logo.svg"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Layout = ({ children }) => {
  return (
    <div id="wrapper">
      <div id="logo">
        <Link to="/">
          <img src={logo} alt="Nate Tlaseca's logo"/>
        </Link>
      </div>
      <main className="d-grid">
        {children}
      </main>
      <footer>
        <div className="d-flex justify-content-between">
          <div>
            © {new Date().getFullYear()}
          </div>
          <div className="text-right">
            <a href="mailto:nate.tlaseca@gmail.com?subject=Hey,%20Nate!" target="_blank" rel="noopener noreferrer">Email me!</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
