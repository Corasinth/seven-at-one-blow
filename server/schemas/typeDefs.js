const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Player {
        _id: ID!
        username: String
        password: String
        playerSave: [Number] 
        inventory: [String]
    }

    type Stage {
        chapterNumber: Number
        numberOfStages: Number
    }

    type Story {
        _id: ID!
        discoveringGreateness: newWord
        giantTrials: newWord
        royalTrifle: newWord
        NarrowEscape: newWord
        RegalResolve: newWord
        textMatrix: [Array]
    }

    type Item {
        _id: ID!
        name: String!
        relevantStages: [Array]
        scriptCoordinates: [Array]
        requiredInInventoryStages: [Array]
        inventoryScriptCoordinates: [Array]
    }

    type Auth {
        token: ID! 
        player: Player
    }

    type StoryData {
        story: Story
        items: Item
    }

    type Query {
        getStoryData: StoryData
    }

    type Mutation {
        login(username:String!, password:String!): Auth
        savePlayer(username:String!, storySave: [Number]!, inventory:[String]!)
        newPlayer(username:String!, password:String!): Auth
    }
`
module.exports = typeDefs;