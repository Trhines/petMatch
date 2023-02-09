const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        _id: ID
        email: String
        password: String
        name: String
    }

    type Auth {
        token: ID!
        user: User!
    }

    type Preference {
        animalType: String!
        breed: String
    }

    type Query {
        me: User
        login(email: String!, password: String!): Auth
        getPreferences: Preference
    }

    type Mutation {
        createAccount(email: String, password: String, name: String): User
        savePreference(animalType: String!, breed: String): Preference
    }
`

module.exports = typeDefs