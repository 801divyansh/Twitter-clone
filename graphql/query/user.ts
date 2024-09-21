import { graphql } from "../../gql";

export const verifyUserGoogleTokenQuery = graphql(`
    #graphql
    query VerifyGoogleToken($token: String!) {
        verifyGoogleToken(token: $token)
    }
`);

export const getCurrentUserQuery = graphql(`
    query GetCurrentUser {
        getCurrentUser {
            id
            firstName
            lastName
            email
            profileImageURL
        } 
    }    
`);