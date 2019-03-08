// import ApolloClient from 'apollo-boost';
import AWSAppSyncClient from 'aws-appsync';
import fetch from 'isomorphic-fetch';

export const client = new AWSAppSyncClient({
    url: `https://lgbsgy4pmngrrnuayjndrroo74.appsync-api.us-east-2.amazonaws.com/graphql`,
    region: `us-east-2`,
    auth: {
        type: "API_KEY",
        apiKey: "da2-x64k7nu6abfidbf65ppvbljimm"
    },
    offlineConfig: {
        callback: (err, succ) => {
            if (err) {
                const { mutation, variables } = err;
                console.warn(`Error for ${mutation}`, err, variables);
            } else {
                const { mutation, variables } = succ;
                console.info(`SUCCESS for ${mutation}`, succ, variables);
            }
        }
    },
    fetch
});