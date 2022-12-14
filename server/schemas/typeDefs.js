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

    type Query {
        me: User
        login(email: String!, password: String!): Auth
    }

    type Mutation {
        createAccount(email: String, password: String, name: String): User
    }
`

module.exports = typeDefs