import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GetAws = ({data}) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Getting data from AWS App Sync with gatsby-source-graphql</h1>
    <Link to="/">Go back to the homepage</Link>
    <div>
      <pre>{JSON.stringify(data.emails, 0, 2)}</pre>
    </div>
  </Layout>
)

export default GetAws

export const AWS_EMAIL_QUERY = graphql`
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
