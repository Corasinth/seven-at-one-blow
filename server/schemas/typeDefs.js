const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Player {
        _id: ID
        username: String
        password: String
        storySave: [Int] 
        inventory: [String]
    }

    type Story {
      _id: ID
      chapters: [Chapter]
      textMatrix: [[String]]
    }

    type Chapter {
        chapterName: String
        chapterNumber: Int
        numberOfStages: Int
    }

    type Item {
        _id: ID!
        name: String!
        relevantStages: [[String]]
        scriptCoordinates: [[String]]
        requiredInInventoryStages: [[String]]
        inventoryScriptCoordinates: [[String]]
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
        newPlayer(username:String!, password:String!): Auth
        login(username:String!, password:String!): Auth
        savePlayer(username:String!, storySave: [Int]!, inventory:[String]!): Player
        loadSave(username:String!): Player 
    }
`
module.exports = typeDefs;