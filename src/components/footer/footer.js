import React from "react";
import { Wrapper, Row } from "./footer.css"

const Footer = () => (
  <Wrapper>
    <Row>
      <div>
        © {new Date().getFullYear()}
      </div>
      <div>
        <a href="mailto:nate.tlaseca@gmail.com?subject=Hey,%20Nate!" target="_blank" rel="noopener noreferrer">Email me!</a>
      </div>
    </Row>
  </Wrapper>
)

export default Footer;