import React from "react"
import { Link } from "gatsby"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export const Navigation = ({ next, prev }) => {
  return (
    <Col xs={12} className="navigation slide-in animate-second">
      <Row>
        <Col xs={6}>
          {prev &&
            <Link to={prev.slug}>
              Previous
            </Link>
          }
        </Col>
        <Col xs={6} className="text-right">
          {next &&
            <Link to={next.slug}>
              Next
            </Link>
          }
        </Col>
      </Row>
    </Col>
  )
}

export default Navigation