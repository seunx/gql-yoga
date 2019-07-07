const path = require('path');
const { fileLoader, mergeTypes } = require('merge-graphql-schemas');

/**
 * Loads files in the current directory and merges them into an array
 * Creates the list of types for GraphQL server to use
 */
const typesArray = fileLoader(path.join(__dirname, './'));
const typesMerged = mergeTypes(typesArray);

module.exports = typeDefs = typesMerged;
