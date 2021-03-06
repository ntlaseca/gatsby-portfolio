import React from "react"
import { Link } from "gatsby"
import { Wrapper, MobileWrapper } from "./navigation.css"

export const Navigation = ({ next, prev }) => (
  <Wrapper>
    <span className="mr-auto">
      {prev && prev.slug ? (
        <Link to={`/${prev.slug}/`}>Prev</Link>
      ) : (
        <Link to={`/${prev}/`}>Prev</Link>
      )}
    </span>
    <span className="text-right">
      {next && next.slug ? (
        <Link to={`/${next.slug}/`}>Next</Link>
      ) : (
        <Link to={`/${next}/`}>Next</Link>
      )}
    </span>
  </Wrapper>
)

export const MobileNavigation = ({ next, prev }) => (
  <MobileWrapper>
    <span className="mr-auto">
      {prev && prev.slug ? (
        <Link to={`/${prev.slug}/`}>Prev</Link>
      ) : (
        <Link to={`/${prev}/`}>Prev</Link>
      )}
    </span>
    <span className="text-right">
      {next && next.slug ? (
        <Link to={`/${next.slug}/`}>Next</Link>
      ) : (
        <Link to={`/${next}/`}>Next</Link>
      )}
    </span>
  </MobileWrapper>
)