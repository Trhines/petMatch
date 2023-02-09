import { gql } from '@apollo/client'
import { graphQLResultHasError } from 'apollo-utilities'

export const QUERY_USER = gql`
    query me {
        me{
            email
            name
        }
    }
`

export const LOGIN = gql`
    query login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
            email
            }
        }
    }
`

export const QUERY_ALL_USERS = gql`
    query users {
        users{
            email
            password
            name
        }
    }
`

export const GET_PREFERENCES = gql`
    query getPreferences {
        getPreferences{
            animalType
            breed
        }
    }
`