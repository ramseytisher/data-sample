import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Let's get some data ... </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/get-aws/">get-aws</Link>{" | "}
    <Link to="/get-aws-apollo/">get-aws-apollo</Link>{" | "}
    <Link to="/add-aws-apollo/">add-aws-apollo</Link>{" | "}
    <Link to="/add-aws-auth/">add-aws-auth</Link>{" | "}
    <Link to="/add-aws-auth-comp/">add-aws-auth-comp</Link>{" | "}
  </Layout>
)

export default IndexPage

// try this out: https://github.com/dabit3/gatsby-auth-starter-aws-amplify

