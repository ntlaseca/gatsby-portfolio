import React from "react"
import Layout from "../components/layout"
import About from "../components/about/about"
import Sketch from "../components/about/sketch"
import sketch from "../components/about/self-portrait"
import Main from "../components/main"
import ProjectList from "../components/project-list/project-list"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Sketch sketch={sketch} />
      <Main>
        <About />
        <ProjectList />
      </Main>
    </Layout>
  )
}

export default IndexPage
