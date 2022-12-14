const { Player, Story, Item } = require('../models');
const { AuthenticationError }  = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      getStoryInfo: async(parent, args, context) => {
        const storyData = await Story.findOne({});
        const itemData = await Item.find({})
        const storyInfo = {story: storyData, items: itemData};
        return storyInfo;
      } 
    },

    Mutation: {
        newPlayer: async (parent, args) => {
            const playerData = await Player.findOne({username:args.username})
            if (!playerData) {
                const player = await Player.create(args);
                const token = signToken(player);
                return {token, player};
            }
            return new AuthenticationError('That username is taken!')
        },

        login: async (parent, {username, password}) => {
            const player = await Player.findOne({username});
            if(!player) {
                throw new AuthenticationError('No user found with the username! Want to signup?');
            }
            const correctPass = await player.isCorrectPassword(password);
            if(!correctPass) {
                throw new AuthenticationError('Incorrect Password');
            }
            const token = signToken(player);
            return {token, player};
        },

        savePlayer: async (parent, {username, storySave, inventory}, context) => {
            // if (context.user) {
                const player = await Player.findOne({ username });
                player.storySave = storySave;
                player.inventory = inventory;
                await player.save();
                return player
            // }
            // throw new AuthenticationError('Please log in to save your game');
        },

        loadSave: async (parent, {username}, context) => {
            // if (context.user) {
                const player = await Player.findOne({ username });
                return player
            // }
            // throw new AuthenticationError('Please log in to load your save.');
        }
    }
};

module.exports= resolvers;