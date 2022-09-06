const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Post {
        id: ID!
        body: String!
        createdAt: String!
        username: String!
    }

    type User {
        id: ID!
        token: String!
        username: String!
        password: string!
    }

    input RegisterInput{
        username: String!
        password: String!
        confirmPassword: String!
    }

    type Player {
        _id: ID!
        username: String
        password: String
        playerSave: [Int] 
        inventory: [String]
    }

    type Chapter {
        chapterName: String
        chapterNumber: Int
        numberOfStages: Int
    }

    type Story {
      _id: ID
      chapters: [Chapter]
      textMatrix: [[String]]
    }

    type Item {
        _id: ID!
        name: String!
        relevantStages: [[Int]]
        scriptCoordinates: [[Int]]
        requiredInInventoryStages: [[Int]]
        inventoryScriptCoordinates: [[Int]]
    }

    type Auth {
        token: ID! 
        player: Player
    }

    type StoryInfo {
        story: Story
        items: [Item]
    }

    type Query {
        getStoryInfo: StoryInfo
    }

    type Mutation {
        login(username:String!, password:String!): Auth
        savePlayer(username:String!, storySave: [Int]!, inventory:[String]!): Auth
        newPlayer(username:String!, password:String!): Auth
    }
`
module.exports = typeDefs;