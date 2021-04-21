import React from "react";
import { Link } from "gatsby";
import { Wrapper, Logo } from "./header.css"
import logo from "data/images/logo.svg";

const Header = () => (
  <Wrapper>
    <Logo>
      <Link to="/">
        <img src={logo} alt="Nate Tlaseca's logo"/>
      </Link>
    </Logo>
  </Wrapper>
);

export default Header;