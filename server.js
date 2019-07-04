const { GraphQLServer } = require('graphql-yoga');
const { typeDefs, resolvers } = require('./modules/person');

const server = new GraphQLServer({ typeDefs, resolvers });

module.exports = server;
