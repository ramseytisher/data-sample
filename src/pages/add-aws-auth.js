import React from 'react'
import { withAuthenticator } from 'aws-amplify-react'
import Layout from '../components/layout'

const Auth = props => (
  <Layout isDashboard>
    <h1>Should only see this when logged in</h1>
    {props.authState === 'signedIn' && (
      <div>show me</div>
    )}
    <pre>{JSON.stringify(props, 0, 2)}</pre>

  </Layout>
)

export default withAuthenticator(Auth, true)