import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({data}) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <div>
      <h1>Get data from gatsby-source-graphql</h1>
      <pre>{JSON.stringify(data.emails, 0, 2)}</pre>
    </div>
  </Layout>
)

export default SecondPage

export const query = graphql`
    query Emails {
        emails {
            listEmails {
                items {
                    id
                    email
                    firstName
                    lastName
                }
            }
        }
    }
`
