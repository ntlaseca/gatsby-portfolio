import React from "react";
import { Wrapper, Row } from "./footer.css"

const Footer = () => (
  <Wrapper>
    <Row>
      <span>© {new Date().getFullYear()}</span>
      <a href="mailto:nate.tlaseca@gmail.com?subject=Hey,%20Nate!" target="_blank" rel="noopener noreferrer">Email me!</a>
    </Row>
  </Wrapper>
)

export default Footer;