const { Player } = require('../models');
const { AuthenticationError }  = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // loadSave: async (parent, args, context) => {
        //     if(context.user) {
        //         const playerData = await Player.findOne({})
        //         // .select('-__v -password')
        //         // .populate('')?
        //         return playerData;
        //     }

        //     throw new AuthenticationError('Not logged in')

        // }
    },

    Mutation: {
        // addUser: async (parent, args) => {
        //     const user = await Player.create(args);
        //     const token = signToken(user)

        //     return {token, user};
        // },

        // login: async (parent, {username, password}) => {
        //     const userData = await Player.findOne({username});
        //     if(!userData) {
        //         throw new AuthenticationError('Incorrect Username');
        //     }

        //     const correctPass = await user.isCorrectPassword(password);

        //     if(!correctPass) {
        //         throw new AuthenticationError('Incorrect Password');
        //     }
            
        //     const token = signToken(user);
        //     return {token, user};
        // }
    }
};

module.exports= resolvers;