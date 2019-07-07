const { GraphQLServer } = require('graphql-yoga');
const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');

const server = new GraphQLServer({ typeDefs, resolvers });

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
