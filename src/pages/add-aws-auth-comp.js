import React, { useState } from 'react'
import { Auth } from 'aws-amplify';

import Layout from '../components/layout'
// Auth.confirmSignIn().then( response => console.log('signed in', response), error => console.log('non signed in', error))

const AuthComp = props => {
    const [signedIn, setSignedIn] = useState(false)

    Auth.confirmSignIn().then(response => console.log('res: ', response), error => console.log('error', error));

    return (
        <Layout>
            <h1>Should always see this</h1>
            <pre>{JSON.stringify(props, 0, 2)}</pre>
        </Layout>
    )
}

export default AuthComp

// class MyCustom extends React.Component {


//     render() {
//         return (
//             <Layout>
//                 <h1>something everyone can see</h1>
//                 <pre>{JSON.stringify(this.props, 0, 2)}</pre>
//             </Layout>
//         )
//     }
// }

// export default MyCustom