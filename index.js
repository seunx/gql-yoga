const server = require('./server.js');

const serverOptions = {
	port: 4000,
	endpoint: '/gql',
	playground: '/docs',
	tracing: true,
	debug: true
};

server.start(
	(serverOptions, ({ port }) => console.log(`Server is up on ${port}`))
);
