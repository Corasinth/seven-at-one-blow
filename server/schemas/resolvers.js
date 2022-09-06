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
            console.log('ARGS', args);
            console.log('USERNAME', args.username);
            const userData = await Player.findOne({username:args.username})
            console.log('USERDATA', userData)
            if (!userData) {
                const player = await Player.create(args);
                const token = signToken(player);
                console.log('STORY SAVE', player.storySave);
                return {token, player};
            }
            return new AuthenticationError('That username is taken!')
        },

        login: async (parent, {username, password}) => {
            const userData = await Player.findOne({username});
            if(!userData) {
                throw new AuthenticationError('Incorrect Username');
            }

            const correctPass = await user.isCorrectPassword(password);

            if(!correctPass) {
                throw new AuthenticationError('Incorrect Password');
            }
            
            const token = signToken(user);
            return {token, user};
        }
    }
};

module.exports= resolvers;