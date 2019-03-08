import React from "react"
import { Link } from "gatsby"
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import Layout from "../components/layout"
import SEO from "../components/seo"

const listEmails = gql`
  query listEmails {
    listEmails {
      items {
        id
        firstName
        lastName
        email
      }
    }
  }
`

class GetAWSApollo extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Page two" />
        <h1>Getting data from AWS App Sync with react-apollo dynamically</h1>
        <Link to="/">Go back to the homepage</Link>
        <div>
          <pre>{JSON.stringify(this.props.emails, 0, 2)}</pre>
        </div>
      </Layout>
    )
  }
}

export default graphql(listEmails, {
  options: {
    fetchPolicy: 'cache-and-network'
  },
  props: props => ({
    emails: props.data.listEmails ? props.data.listEmails.items : []
  })
}
)(GetAWSApollo)

