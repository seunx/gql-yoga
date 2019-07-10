const { GraphQLServer } = require('graphql-yoga');
// Query resolvers
const resolvers = require('./resolvers');
// Type definitions
const typeDefs = require('./typeDefs');

// Generated Prisma Client
const { prisma } = require('./src/generated/prisma-client');

const server = new GraphQLServer({ typeDefs, resolvers, context: { prisma } });

// GraphQL Server configuration options
const options = {
	port: 4000,
	endpoint: '/gql',
	playground: '/docs',
	tracing: true,
	debug: true
};

server.start(options, ({ port }) =>
	console.log(`Server started, listening on port ${port}.`)
);
