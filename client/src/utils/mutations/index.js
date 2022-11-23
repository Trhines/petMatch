import { gql } from '@apollo/client';

export const CREATE_ACCOUNT = gql`
    mutation createAccount($email: String!, $password: String!, $name: String!){
        createAccount(email: $email, password: $password, name: $name){
            email
            password
            name
        }
    }
`