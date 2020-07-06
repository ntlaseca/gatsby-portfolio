import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../data/images/logo.svg"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Layout = ({ children }) => {
  return (
    <div id="wrapper">
      <Container fluid>
        <Row>
          <Col xs={12} id="logo">
            <Link to="/">
              <img src={logo} alt="Nate Tlaseca's logo"/>
            </Link>
          </Col>
        </Row>
        <main>
          <Row>
            {children}
          </Row>
        </main>
        <footer>
          <Row className="justify-content-between">
            <Col xs={3}>
              © {new Date().getFullYear()}
            </Col>
            <Col xs={9} className="text-right">
              <a href="mailto:nate.tlaseca@gmail.com?subject=Hey,%20Nate!" target="_blank" rel="noopener noreferrer">Email me!</a>
            </Col>
          </Row>
        </footer>
      </Container>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
