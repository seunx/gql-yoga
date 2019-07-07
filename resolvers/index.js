const path = require('path');
const { fileLoader } = require('merge-graphql-schemas');

//Combines all files in directory to make one resolver file
const resolvers = fileLoader(path.join(__dirname, './'));

module.exports = resolvers;
