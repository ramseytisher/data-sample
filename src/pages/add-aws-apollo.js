/*------------ Links for this stuff ---------
https://github.com/gatsbyjs/gatsby/issues/9406
https://tylermcginnis.com/building-serverless-react-graphql-apps-with-aws-appsync/
https://aws-amplify.github.io/docs/js/api#run-a-mutation

-------------------------------------------*/


import React from "react"
import { Link } from "gatsby"
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { graphqlMutation } from 'aws-appsync-react';

import Layout from "../components/layout"
import SEO from "../components/seo"

const ListEmails = gql`
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

const CreateEmail = gql`
    mutation createEmail(
        $email: AWSEmail!, 
        $firstName: String!, 
        $lastName: String!, 
        $consentDate: AWSDate!
    ) {
    createEmail(input: {
        email: $email,
        firstName: $firstName,
        lastName: $lastName,
        consentDate: $consentDate
    }
    ) {
        id
        firstName
        lastName
    }
  }
`;

class AddAwsApollo extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        consentDate: "2019-03-08"
    }

    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createEmail({ 
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            consentDate: "2019-03-07"
        });
    }

    render() {
        return (
        <Layout>
            <SEO title="Page two" />
            <Link to="/">Go back to the homepage</Link>
            <h1>Adding data through AWS App Sync + Apollo ... AWESOME!!!!</h1>
            <form>
                <label>Email: <input name="email" type="email" value={this.state.email} onChange={this.handleInputChange} /> </label><br/>
                <label>First Name <input name="firstName" type="string" value={this.state.firstName} onChange={this.handleInputChange} /> </label><br/>
                <label>Last Name <input name="lastName" type="string" value={this.state.lastName} onChange={this.handleInputChange}  /> </label><br/>
                <input type="submit" value="Submit" onClick={this.handleSubmit} />
            </form>
            <div>
                <h2>Going to Send</h2>
                <pre>{JSON.stringify(this.state, 0, 2)}</pre>
            </div>
            <div>
                <h2>Current List</h2>
                <pre>{JSON.stringify(this.props.emails, 0, 2)}</pre>
            </div>
        </Layout>
        )
    }
}

export default compose(
    graphql(ListEmails, {
        options: {
            fetchPolicy: 'cache-and-network'
        },
        props: props => ({
            emails: props.data.listEmails ? props.data.listEmails.items : []
        })
    }),
    graphqlMutation(CreateEmail, ListEmails, 'Email')
)(AddAwsApollo)

