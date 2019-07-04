const people = [{ id: 1, name: 'Mace' }, { id: 2, name: 'Jamie' }];

const typeDefs = `
  type Person {
    id: ID!
    name: String!
  }

  type Query {
    getPerson(id: ID!): Person!
    getPeople: Person!
    

  }
`;

const resolvers = {
	Query: {
		getPerson: (_, args) => people.find(p => p.id == args.id),
		getPeople: () => people
	}
};

module.exports = {
	typeDefs,
	resolvers
};
