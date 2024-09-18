// lib/aws-exports.ts
interface AwsConfig {
    aws_project_region: string;
    aws_cognito_identity_pool_id: string;
    aws_cognito_region: string;
    aws_user_pools_id: string;
    aws_user_pools_web_client_id: string;
    oauth: {
      domain: string;
      scope: string[];
      redirectSignIn: string;
      redirectSignOut: string;
      responseType: string;
      socialProviders: string[];
    };
    aws_cognito_username_attributes: string[];
    aws_cognito_social_providers: string[];
    aws_cognito_signup_attributes: string[];
    aws_cognito_mfa_configuration: string;
    aws_cognito_mfa_types: string[];
    aws_cognito_password_protection_settings: {
      passwordPolicyMinLength: number;
      passwordPolicyCharacters: string[];
    };
    aws_cognito_verification_mechanisms: string[];
  }
const awsconfig = {
    aws_project_region: "us-east-2",
    aws_cognito_identity_pool_id: "us-east-2:a8411a50-fcbc-4d8f-99cf-0140c5ae8cdd",
    aws_cognito_region: "us-east-2",
    aws_user_pools_id: "us-east-2_g1UKruuZV",
    aws_user_pools_web_client_id: "7gqqr8uu7h900qcrv3ts048bc6",
    oauth: {
      domain: "myapp.auth.us-east-2.amazoncognito.com",
      scope: ["email", "profile", "openid"],
      redirectSignIn: "http://localhost:3000/",
      redirectSignOut: "http://localhost:3000/",
      responseType: "code",
      socialProviders: ["facebook", "google"]
    },
    aws_cognito_username_attributes: ["EMAIL"],
    aws_cognito_social_providers: ["facebook", "google"],
    aws_cognito_signup_attributes: ["EMAIL"],
    aws_cognito_mfa_configuration: "OFF",
    aws_cognito_mfa_types: ["SMS"],
    aws_cognito_password_protection_settings: {
      passwordPolicyMinLength: 8,
      passwordPolicyCharacters: []
    },
    aws_cognito_verification_mechanisms: ["EMAIL"]
  };
  
  export default awsconfig;
  