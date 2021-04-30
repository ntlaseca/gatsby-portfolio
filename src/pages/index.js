import React from "react"
import { graphql } from "gatsby"
import Head from "components/head"
import Layout from "components/layout"
import About from "components/about/about"
import SelfPortrait from "components/self-portrait/self-portrait"
import sketch from "components/self-portrait/sketch"
import Main from "components/main"
import ProjectList from "components/project-list/project-list"

export const HomepageQuery = graphql`
  query {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`

const IndexPage = ({ data }) => {
  const title = data.site.title
  const description = data.site.description
  const keywords = data.site.keywords

  return (
    <Layout>
      <Head 
        title={title} 
        description={description} 
        keywords={keywords} 
      />
      <SelfPortrait sketch={sketch} />
      <Main>
        <About />
        <ProjectList />
      </Main>
    </Layout>
  )
}

export default IndexPage
