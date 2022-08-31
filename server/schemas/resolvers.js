const { Player, } = require('../models');
const { AuthenticationError }  = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if(context.player) {
                const playerData = await Player.findOne({})
                .select('-__v -password')
                // .populate('')?
                return playerData;
            }

            throw new AuthenticationError('Not logged in')

        }
    },

    Mutation: {

    }
};

module.exports= resolvers;