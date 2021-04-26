import React from "react"
import Layout from "components/layout"
import About from "components/about/about"
import SelfPortrait from "components/self-portrait/self-portrait"
import sketch from "components/self-portrait/sketch"
import Main from "components/main"
import ProjectList from "components/project-list/project-list"

const IndexPage = props => {
  return (
    <Layout>
      <SelfPortrait sketch={sketch} />
      <Main>
        <About />
        <ProjectList />
      </Main>
    </Layout>
  )
}

export default IndexPage
