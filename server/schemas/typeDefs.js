const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Player {
        _id: ID!
        username: String
        password: String
        playerSave: [Int] 
        inventory: [String]
    }

    type Stage {
        chapterNumber: Int
        numberOfStages: Int
    }

    type Story {
        _id: ID!
        discoveringGreateness: Stage
        giantTrials: Stage
        royalTrifle: Stage
        NarrowEscape: Stage
        RegalResolve: Stage
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
        items: Item
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