const { Player, } = require('../models');
const { AuthenticationError }  = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {

    },

    Mutation: {

    }
};

module.exports= resolvers;