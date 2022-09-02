const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Player {
        _id: ID!
        username: String
        name: String
        password: String
        playerSave: ID 
    }

    type Auth {
        token: ID! 
        user: Player
    }

    type Query {
        loadSave: Player
    }

    type Mutation {
        login(username:String!, password:String!): Auth
    }
`
module.exports = typeDefs;