import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Wrapper, Content } from "./layout.css"
import Head from "components/head"
import Header from "components/header"
import Footer from "components/footer"
import GlobalStyle from "styles/global.css"

const Layout = ({ children }) => (
  <Wrapper>
    <GlobalStyle />
    <Head />
    <Header />
    <Content>{children}</Content>
    <Footer />
  </Wrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutWithQuery
