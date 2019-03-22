import Amplify, { Auth } from 'aws-amplify';
import awsConfig from './src/aws-exports';

Amplify.configure(awsConfig);

export { wrapRootElement } from './src/apollo/wrap-root-element';