import React from "react"

import Layout from "components/layout"
import Head from "components/head"

const NotFoundPage = () => (
  <Layout>
    <div className="col-12 text-center">
      <Head title="404: Not found" />
      <span role="img" aria-label="frog" style={{fontSize: "5rem", marginBottom: ".25rem", display: "block"}}>🐸</span>
      <h1 style={{marginBottom: ".5em"}}>Uh-oh!</h1>
      <p>I regret to inform you that you have hit a route that doesn&#39;t exist.</p>
    </div>
  </Layout>
)

export default NotFoundPage
