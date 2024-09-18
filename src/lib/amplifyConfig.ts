// lib/amplifyConfig.js
import { Amplify } from 'aws-amplify';
import awsExports from '../../src/aws-exports'; // Path to aws-exports.js

Amplify.configure(awsExports);