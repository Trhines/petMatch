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

export const SAVE_PREFERENCES = gql`
    mutation savePreference($animalType: String!, $breed: String,){
        savePreference(animalType: $animalType, breed: $breed){
            animalType
            breed
        }
    }
`